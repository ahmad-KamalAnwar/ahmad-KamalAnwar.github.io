import { defineConfig } from "vite";

/**
 * GitHub Pages:
 * - User/org site (repo named `username.github.io`): served from site root → base `/`
 * - Project site: served from `https://username.github.io/repo/` → base `/repo/`
 *
 * Set `GITHUB_PAGES=true` in CI (see `.github/workflows/deploy-pages.yml`).
 */
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const githubPages = process.env.GITHUB_PAGES === "true";
const userOrOrgPages = /\.github\.io$/i.test(repo);
const base =
  githubPages && repo ? (userOrOrgPages ? "/" : `/${repo}/`) : "./";

export default defineConfig({ base });
