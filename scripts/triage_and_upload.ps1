$ErrorActionPreference = "Stop"
$zip = Get-ChildItem diagnostics\* -Filter pipeline-diagnostics-*.tgz -Recurse | Sort-Object LastWriteTime -Descending | Select-Object -First 1
if (-not $zip) { $zip = Get-ChildItem diagnostics\* -Recurse | Sort-Object LastWriteTime -Descending | Select-Object -First 1 }
if (-not $zip) { Write-Output "No diagnostics found"; exit 0 }
$artifactPath = $zip.FullName
Write-Output "Found diagnostics: $artifactPath"

# Upload to Azure DevOps as a build artifact is handled by pipeline; for triage create a work item
$org = $env:AZURE_DEVOPS_ORG
$project = $env:AZURE_DEVOPS_PROJECT
$pat = $env:AZURE_DEVOPS_PAT
if (-not $org -or -not $project -or -not $pat) { Write-Output "Set AZURE_DEVOPS_ORG, AZURE_DEVOPS_PROJECT, AZURE_DEVOPS_PAT env vars"; exit 0 }

$base64Auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(":$pat"))
$uri = "https://dev.azure.com/$org/$project/_apis/wit/workitems/$`?api-version=6.0"
# Create a bug work item with minimal fields
$body = @(
  @{ "op" = "add"; "path" = "/fields/System.Title"; "value" = "Automated CI Failure - Diagnostics attached" }
  @{ "op" = "add"; "path" = "/fields/System.Description"; "value" = "CI detected failure. Diagnostics packaged. See attachment." }
) | ConvertTo-Json
# Create work item
$response = Invoke-RestMethod -Method Post -Uri $uri -Headers @{ Authorization = "Basic $base64Auth"; "Content-Type" = "application/json-patch+json" } -Body $body
Write-Output "Created work item: $($response.id)"
