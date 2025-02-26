#!/bin/bash

# Build the project
npm run build

# Move to the build directory
cd dist

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# If you're deploying to a custom domain
# echo 'www.example.com' > CNAME

# Init git if not already done
git init

# Add all files
git add -A

# Commit changes
git commit -m 'deploy'

# Force push to the gh-pages branch
git push -f https://github.com/YOUR_USERNAME/central-texas-fly-fishing.git main:gh-pages

cd -