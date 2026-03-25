PS C:\\Users\\himhe> # 1.1 show whether .git exists in home

PS C:\\Users\\himhe> Set-Location $env:USERPROFILE

PS C:\\Users\\himhe> Test-Path .git

False

PS C:\\Users\\himhe>

PS C:\\Users\\himhe> # 1.2 if True, back it up (creates C:\\Users\\himhe\\git\_home\_backup)

PS C:\\Users\\himhe> if (Test-Path .git) { Copy-Item -Path .\\.git -Destination "$env:USERPROFILE\\git\_home\_backup" -Recurse -Force }

PS C:\\Users\\himhe>

PS C:\\Users\\himhe> # 1.3 remove the home .git (only if it exists)

PS C:\\Users\\himhe> if (Test-Path .git) { Remove-Item -Recurse -Force .\\.git }

PS C:\\Users\\himhe>

PS C:\\Users\\himhe> # 1.4 confirm removal

PS C:\\Users\\himhe> Test-Path .git

False

PS C:\\Users\\himhe> Set-Location $env:USERPROFILE\\Projects\\MyApp

PS C:\\Users\\himhe\\Projects\\MyApp> pwd



Path

\----

C:\\Users\\himhe\\Projects\\MyApp





PS C:\\Users\\himhe\\Projects\\MyApp> git status --porcelain

?? MASTER\_EDU\_DOC.md

?? package-lock.json

PS C:\\Users\\himhe\\Projects\\MyApp> git rev-parse --abbrev-ref HEAD

main

PS C:\\Users\\himhe\\Projects\\MyApp> git remote -v

origin  git@github.com:Naturz-Syrup/no.git (fetch)

origin  git@github.com:Naturz-Syrup/no.git (push)

PS C:\\Users\\himhe\\Projects\\MyApp> git log --oneline -n 5

0d50064 (HEAD -> main, origin/main) Convert AiMe from submodule placeholder to normal folder

e6a1c4d Initial project files import

b5b5222 Add .gitignore

PS C:\\Users\\himhe\\Projects\\MyApp> # open for editing

PS C:\\Users\\himhe\\Projects\\MyApp> notepad.exe .\\MASTER\_EDU\_DOC.md

PS C:\\Users\\himhe\\Projects\\MyApp>

PS C:\\Users\\himhe\\Projects\\MyApp> # after saving edits, stage and commit (PowerShell-safe)

PS C:\\Users\\himhe\\Projects\\MyApp> git add .\\MASTER\_EDU\_DOC.md

PS C:\\Users\\himhe\\Projects\\MyApp> git commit -m "Document: removed home .git; confirmed project repo and AiMe import"

\[main 07abb49] Document: removed home .git; confirmed project repo and AiMe import

&#x20;1 file changed, 0 insertions(+), 0 deletions(-)

&#x20;create mode 100644 MASTER\_EDU\_DOC.md

PS C:\\Users\\himhe\\Projects\\MyApp>

PS C:\\Users\\himhe\\Projects\\MyApp> # push to origin (set upstream already done)

PS C:\\Users\\himhe\\Projects\\MyApp> git pushTest-Path .\\azure-pipelines.yml

git: 'pushTest-Path' is not a git command. See 'git --help'.

PS C:\\Users\\himhe\\Projects\\MyApp> git add azure-pipelines.yml

PS C:\\Users\\himhe\\Projects\\MyApp> git commit -m "Ensure azure-pipelines.yml at repo root"



On branch main

Your branch is ahead of 'origin/main' by 1 commit.

&#x20; (use "git push" to publish your local commits)



Untracked files:

&#x20; (use "git add <file>..." to include in what will be committed)

&#x20;       package-lock.json



nothing added to commit but untracked files present (use "git add" to track)

PS C:\\Users\\himhe\\Projects\\MyApp> # If commit fails because no changes, the next line will still be safe

PS C:\\Users\\himhe\\Projects\\MyApp> git push

