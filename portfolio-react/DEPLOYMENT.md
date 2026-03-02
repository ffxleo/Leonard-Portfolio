# Deploy to GitHub Pages

Follow these steps to deploy your portfolio to GitHub Pages:

## Step 1: Install Node.js
Make sure Node.js is installed and working:
```bash
node --version
npm --version
```

## Step 2: Update package.json
Edit `package.json` and change the homepage URL:
```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME"
```

Example:
```json
"homepage": "https://leonardlalican.github.io/portfolio"
```

## Step 3: Install Dependencies
```bash
cd portfolio-react
npm install
```

## Step 4: Create GitHub Repository
1. Go to https://github.com
2. Click "New repository"
3. Name it (e.g., "portfolio")
4. Don't initialize with README
5. Click "Create repository"

## Step 5: Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

## Step 6: Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Push the build to GitHub Pages

## Step 7: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" section
4. Source should be set to "gh-pages" branch
5. Click "Save"

## Your site will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME
```

## To Update Your Portfolio
After making changes:
```bash
npm run deploy
```

This automatically rebuilds and redeploys your site.

## Troubleshooting

### If npm is not recognized:
- Restart your terminal after installing Node.js
- Make sure Node.js is in your PATH

### If deploy fails:
- Make sure you've committed all changes
- Check that your GitHub remote is set correctly:
  ```bash
  git remote -v
  ```

### If images don't show:
- Make sure images are in the `public` folder
- Use relative paths like `/profile.jpg`
