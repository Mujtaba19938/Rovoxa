# Script to commit and push code to GitHub
# Run this after installing Git and restarting your terminal

cd "C:\Users\Mujtaba Khanani\Downloads\rovoxa---ai-chatbot-landing-page (1)"

# Initialize git repository (if not already initialized)
if (-not (Test-Path .git)) {
    git init
}

# Add the remote repository (if not already added)
$remoteUrl = "https://github.com/Mujtaba19938/Rovoxa.git"
$existingRemote = git remote get-url origin 2>&1
if ($LASTEXITCODE -ne 0) {
    git remote add origin $remoteUrl
} else {
    git remote set-url origin $remoteUrl
}

# Add all files
git add .

# Commit the changes
git commit -m "Initial commit: AI chatbot landing page"

# Push to GitHub (main branch)
git branch -M main
git push -u origin main

Write-Host "Code has been pushed to GitHub successfully!"

