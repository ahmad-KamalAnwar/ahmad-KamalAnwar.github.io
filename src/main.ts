import "./style.css";

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const navToggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
const siteNav = document.getElementById("site-nav");

navToggle?.addEventListener("click", () => {
  const open = siteNav?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll<HTMLAnchorElement>('.site-nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    siteNav?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});
