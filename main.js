// Agenda des concerts (données dans concerts.js)
(function () {
  const list = typeof CONCERTS !== "undefined" ? CONCERTS : [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const parse = (c) => {
    const [y, m, d] = c.date.split("-").map(Number);
    return new Date(y, m - 1, d);
  };

  const upcoming = list.filter((c) => parse(c) >= today).sort((a, b) => parse(a) - parse(b));
  const past = list.filter((c) => parse(c) < today).sort((a, b) => parse(b) - parse(a));

  const fmtDay = new Intl.DateTimeFormat("fr-CH", { day: "2-digit" });
  const fmtMonth = new Intl.DateTimeFormat("fr-CH", { month: "short" });
  const fmtYear = new Intl.DateTimeFormat("fr-CH", { year: "numeric" });
  const fmtWeekday = new Intl.DateTimeFormat("fr-CH", { weekday: "long" });

  const esc = (s) => String(s || "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

  const render = (c) => {
    const d = parse(c);
    const when = [fmtWeekday.format(d), c.heure].filter(Boolean).join(" · ");
    const link = c.lien
      ? `<a class="gig-link" href="${esc(c.lien)}" target="_blank" rel="noopener">Infos</a>`
      : "";
    return `<li class="gig">
      <div class="gig-date">
        <span class="day">${fmtDay.format(d)}</span>
        <span class="month">${fmtMonth.format(d).replace(".", "")}</span>
        <span class="year">${fmtYear.format(d)}</span>
      </div>
      <div class="gig-info">
        <strong>${esc(c.lieu)}</strong>
        <span>${esc(c.ville)}</span>
        <small>${esc(when)}</small>
      </div>
      ${link}
    </li>`;
  };

  document.getElementById("upcoming").innerHTML = upcoming.map(render).join("");
  document.getElementById("no-upcoming").hidden = upcoming.length > 0;

  if (past.length) {
    document.getElementById("past").innerHTML = past.map(render).join("");
    document.getElementById("past-wrap").hidden = false;
  }
})();

// Vidéos YouTube : on n'affiche que la miniature, le lecteur se charge au clic
// (plus rapide, et aucun cookie YouTube tant que le visiteur ne lance pas la vidéo).
document.querySelectorAll(".video").forEach((el) => {
  const id = el.dataset.id;
  const title = el.dataset.title;
  el.innerHTML = `<button type="button" class="video-thumb" aria-label="Lire « ${title} »">
      <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
      <span class="play" aria-hidden="true"></span>
    </button>
    <h3>${title}</h3>`;
  el.querySelector("button").addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    frame.title = title;
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    frame.allowFullscreen = true;
    el.querySelector("button").replaceWith(frame);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
