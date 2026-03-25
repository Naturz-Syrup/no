# Unified preflight detection script
$ErrorActionPreference = "Stop"
$logDir = "diagnostics"
New-Item -ItemType Directory -Path $logDir -Force | Out-Null

Write-Output "Detecting build system..."
if (Test-Path gradlew -PathType Leaf) {
  Write-Output "Using Gradle wrapper"
  & .\gradlew --version 2>&1 | Tee-Object -FilePath "$logDir/tools_gradle.txt"
  & .\gradlew spotlessApply || Write-Output "spotlessApply failed"
  & .\gradlew check || Write-Output "gradle check failed"
  & .\gradlew test --no-daemon 2>&1 | Tee-Object -FilePath "$logDir/test.log"
}
elseif (Test-Path pom.xml) {
  Write-Output "Using Maven"
  mvn -v 2>&1 | Tee-Object -FilePath "$logDir/tools_maven.txt"
  mvn -q -DskipTests=false test 2>&1 | Tee-Object -FilePath "$logDir/test.log"
}
elseif (Test-Path package.json) {
  Write-Output "Using Node"
  node -v 2>&1 | Tee-Object -FilePath "$logDir/tools_node.txt"
  npm --version 2>&1 | Tee-Object -FilePath "$logDir/npm_version.txt"
  if (Get-Content package.json | Select-String '"test"') {
    npm test 2>&1 | Tee-Object -FilePath "$logDir/test.log"
  } else {
    Write-Output "No npm test script found"
  }
}
else {
  Write-Output "No recognized build file found. Creating minimal smoke check."
  Write-Output "Listing top-level files" | Tee-Object -FilePath "$logDir/project_files.txt"
  Get-ChildItem -Force | Out-File -FilePath "$logDir/project_files.txt" -Append
}
Write-Output "Preflight complete"
