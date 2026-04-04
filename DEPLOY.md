# Deploying your portfolio (free hosting)

Your site is a **static** Vite project. After `npm run build`, upload the `dist/` folder (or connect Git so the host builds for you).

## One-time setup on your machine

1. Install [Node.js](https://nodejs.org/) (LTS).
2. In the project folder, run:

   ```bash
   npm install
   npm run build
   ```

3. Confirm `dist/` exists and open `dist/index.html` locally if you want to sanity-check (some features need a local server; use `npm run preview`).

---

## GitHub: upload the project and turn on Pages

Your GitHub username is **ahmad-KamalAnwar**. You can host this portfolio on **GitHub Pages** in two common ways.

### Step 1 — Create a repository on GitHub

1. Log in at [https://github.com](https://github.com) as **ahmad-KamalAnwar**.
2. Click **+** → **New repository**.
3. Name it either:
   - **`portfolio`** (or any name), **or**
   - **`ahmad-KamalAnwar.github.io`** if you want the short URL `https://ahmad-KamalAnwar.github.io/` with no extra path.
4. Leave it **Public** (required for free GitHub Pages on personal accounts).
5. Do **not** add a README from the template if you already have this folder locally (avoids a merge conflict). Create an empty repo.

### Step 2 — Push this folder from your computer

In Terminal, from your portfolio folder (the one that contains `package.json`):

```bash
cd /path/to/portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/ahmad-KamalAnwar/YOUR-REPO-NAME.git
git push -u origin main
```

Replace **`YOUR-REPO-NAME`** with the repo you created (e.g. `portfolio` or `ahmad-KamalAnwar.github.io`).

If GitHub asks for login, use a **Personal Access Token** (Settings → Developer settings) or **GitHub CLI** (`gh auth login`).

### Step 3 — Enable GitHub Actions for Pages

This repo includes **`.github/workflows/deploy-pages.yml`**, which builds with Vite and publishes the `dist/` folder.

1. On GitHub, open your repo → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to **`main`** (or **`master`**). The **Actions** tab should show **Deploy to GitHub Pages**; when it succeeds, Pages shows your live URL.

**URLs:**

| Repository name | Your site URL |
|-----------------|---------------|
| `ahmad-KamalAnwar.github.io` | `https://ahmad-KamalAnwar.github.io/` |
| Anything else, e.g. `portfolio` | `https://ahmad-KamalAnwar.github.io/portfolio/` |

`vite.config.ts` sets the correct **base path** automatically when `GITHUB_PAGES=true` in CI (already set in the workflow).

### If you use a project repo (not `*.github.io`)

The first deploy may 404 assets if the repo was renamed—keep the **GitHub repository name** and the **base path** in sync. This project reads `GITHUB_REPOSITORY` during the Actions build so paths match.

---

## Option A — Netlify (simple drag-and-drop)

1. Sign up at [https://www.netlify.com/](https://www.netlify.com/) (free tier).
2. Run `npm run build` on your computer.
3. In Netlify: **Sites → Add new site → Deploy manually** → drag the **`dist`** folder onto the page.
4. Your site gets a URL like `https://random-name-123.netlify.app`.

**Connect Git:** Push this project to GitHub, then in Netlify choose **Import from Git**, set build command `npm run build`, publish directory `dist`. For Netlify you do **not** need `GITHUB_PAGES=true`; local/default build uses `base: "./"`, which works on Netlify.

---

## Option B — Vercel

1. Sign up at [https://vercel.com/](https://vercel.com/).
2. Import the GitHub repo in the Vercel dashboard.
3. Build command: `npm run build`. Output directory: `dist`.

---

## Option C — Cloudflare Pages

1. Sign up at [https://pages.cloudflare.com/](https://pages.cloudflare.com/).
2. Connect the Git repository.
3. Build command: `npm run build`. Build output directory: `dist`.

---

## Free “domains” — what is actually free

| What you get | Example | Notes |
|--------------|---------|--------|
| **Free subdomain from the host** | `yoursite.netlify.app`, `yoursite.vercel.app` | No purchase. |
| **GitHub Pages** | `ahmad-KamalAnwar.github.io` or `ahmad-KamalAnwar.github.io/repo/` | Free for public repos. |

**Truly free custom `.com` domains** are uncommon; prefer a reputable registrar (~$10–15/year) and attach it in GitHub **Settings → Pages → Custom domain**.

---

## Quick checklist before sharing

- [ ] Run `npm run build` with no errors.
- [ ] Open the live URL on your phone and desktop.
- [ ] Confirm **ahmadkamalanwar.it@gmail.com**, **LinkedIn**, and **GitHub** links work.
- [ ] After changing the GitHub repo name, push again so Actions rebuilds with the correct base path.
