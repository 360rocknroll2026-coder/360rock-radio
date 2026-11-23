(() => {
  const config = window.RADIO_CONFIG || {};
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  const channelUrl = config.channelUrl || "https://www.youtube.com/@360RockNrollarg";
  const liveUrl = config.liveUrl || channelUrl + "/live";
  document.querySelectorAll('a[href*="youtube.com/@360RockNrollarg"]').forEach(link => {
    if (link.href.includes("/live")) link.href = liveUrl;
    else link.href = channelUrl;
  });

  const videoId = (config.LIVE_VIDEO_ID || "").trim();
  const placeholder = document.getElementById("player-placeholder");
  const frame = document.getElementById("youtube-frame");
  if (videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId) && frame && placeholder) {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(videoId) + "?autoplay=0&rel=0";
    iframe.title = "Transmisión de 360Rock n' Roll Radio Online";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    frame.appendChild(iframe);
    frame.hidden = false;
    placeholder.hidden = true;
  }
})();