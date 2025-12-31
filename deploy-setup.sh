#!/bin/bash
# Deployment setup script for RedwoodSDK projects
# This ensures all files are properly tracked in git before deployment

echo "Setting up deployment environment..."

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
    git add .
    git config user.email "deploy@example.com"
    git config user.name "Deployment Bot"
    git commit -m "Initial RedwoodSDK setup"
    echo "Git repository initialized with all files"
else
    echo "Git repository already exists"
fi

echo "Deployment setup complete"