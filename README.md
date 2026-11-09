# React Deep Dive – ITEC 305

This project uses the `01-starting-project` Vite/React starter project and the React slides supplied in class.

## Requirements implemented

- `src/App.jsx`: loads the Header, CoreConcepts and Examples components.
- `src/components/CoreConcepts.jsx`: owns the Core Concepts section and renders each concept from the given `CORE_CONCEPTS` data.
- `src/components/Examples.jsx`: owns tab selection state and displays the selected item from the given `EXAMPLES` data.
- `src/components/Section.jsx`: forwards extra props (`...props`) such as the `id` to `<section>` so the provided CSS continues to work.
- `src/components/TabButton.jsx`: forwards `onClick` and other standard button props (`...props`) to the HTML button; `isSelected` controls the `active` class.
- `src/components/Tabs.jsx`: uses JSX slots for `buttons` and `children` and defaults `buttonsContainer` to `menu`.

## Run

From this directory:

```bash
npm install
npm run dev
```

Follow the local URL printed by Vite. To check the production build run `npm run build`.

## GitHub submission

You must publish the files to **your own GitHub repository** and submit its URL along with the requested files. These files do not upload themselves to GitHub.

1. Create a new repository on GitHub (or select a suitable repository for this assignment).
2. Upload these project files, preserving the `src/components` structure. Do not upload `node_modules` or `.env` files.
3. Confirm `App.jsx`, `Examples.jsx`, and `CoreConcepts.jsx` are visible on the repository page.
4. Submit the actual repository URL on Canvas; do not substitute a previous unrelated repository link.

If using Git on the command line in this folder after creating an empty remote repository:

```bash
git init
git add .
git commit -m "Complete React Deep Dive components and forwarded props"
git branch -M main
git remote add origin YOUR_NEW_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_NEW_REPOSITORY_URL` with the URL from your GitHub account. Set up Git authentication as directed by GitHub before pushing.
