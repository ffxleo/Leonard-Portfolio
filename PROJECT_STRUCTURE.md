# Project Structure

## What to Keep

### ✅ Portfolio React App (Main Project)
```
portfolio-react/
├── public/
│   ├── index.html
│   └── profile.jpg          # Your photo
├── src/
│   ├── components/          # All React components
│   ├── data/
│   │   └── portfolioData.js # Edit this for content
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── DEPLOYMENT.md
```

### ✅ Java Portfolio Generator (Optional - for HTML generation)
```
src/
├── Main.java
├── model/
├── service/
└── view/
```
This generates a standalone HTML file. You can keep it as a backup option.

## What You Can Delete

You can safely delete these if you only want the React version:

### ❌ Java Files (if not using)
- `src/` folder (entire Java project)
- `out/` folder (Java build output)
- `Leonard-Portfolio.iml`

### ❌ IDE Files (optional)
- `.idea/` folder (IntelliJ settings)
- `.vscode/` folder (VS Code settings)

## Recommended: Keep Only React

If you only want the React portfolio:

1. Keep:
   - `portfolio-react/` folder
   - `README.md`
   - `.gitignore`

2. Delete:
   - `src/` (Java files)
   - `out/`
   - `.idea/`
   - `.vscode/`
   - `Leonard-Portfolio.iml`

## Current Setup

You have TWO portfolio options:
1. **React App** (modern, recommended) - in `portfolio-react/`
2. **Java Generator** (generates static HTML) - in `src/`

Choose one or keep both!
