const r = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) r.dataset.theme = saved;
document.getElementById("theme-toggle").onclick = () => {
  const t = r.dataset.theme === "dark" ? "light" : "dark";
  r.dataset.theme = t;
  localStorage.setItem("theme", t);
};
