
const albums = {
  lyubov: {
    id: "lyubov",
    title: "Любовь",
    year: "2025",
    theme: "theme-lyubov",
    coverClass: "cover-lyubov",
    featured: true,
    summary: "Главный альбом сайта. Центральный эмоциональный релиз 2025 года.",
    audioFolder: "assets/audio/lyubov/",
    tracks: [
      { n: "01", title: "Eterno", file: "01-eterno.mp3" },
      { n: "02", title: "Almas felices", file: "02-almas-felices.mp3" },
      { n: "03", title: "La provocadora", file: "03-la-provocadora.mp3" },
      { n: "04", title: "Ternura nocturna", file: "04-ternura-nocturna.mp3" }
    ]
  },
  predchuvstvie: {
    id: "predchuvstvie",
    title: "Предчувствие",
    year: "2023",
    theme: "theme-predchuvstvie",
    coverClass: "cover-predchuvstvie",
    featured: false,
    summary: "Атмосферный инструментальный альбом с тревожной и образной линией.",
    audioFolder: "assets/audio/predchuvstvie/",
    tracks: [
      { n: "01", title: "Я растворился в твоей душе", file: "01-ya-rastvorilsya-v-tvoey-dushe.mp3" },
      { n: "02", title: "Предчувствие", file: "02-predchuvstvie.mp3" },
      { n: "03", title: "Божественное очарование", file: "03-bozhestvennoe-ocharovanie.mp3" },
      { n: "04", title: "Интриганка", file: "04-intriganka.mp3" },
      { n: "05", title: "Лето", file: "05-leto.mp3" },
      { n: "06", title: "Добавьте название трека", file: "06-track.mp3" },
      { n: "07", title: "Добавьте название трека", file: "07-track.mp3" }
    ]
  },
  "medovye-melodii": {
    id: "medovye-melodii",
    title: "Медовые мелодии",
    year: "2023",
    theme: "theme-medovye-melodii",
    coverClass: "cover-medovye-melodii",
    featured: false,
    summary: "Лиричный инструментальный альбом с мягким движением и тёплой, медовой атмосферой.",
    audioFolder: "assets/audio/medovye-melodii/",
    tracks: [
      { n: "01", title: "Сближение", file: "01-sblizhenie.mp3", dur: "2:43" },
      { n: "02", title: "Потерянная душа", file: "02-poteryannaya-dusha.mp3", dur: "2:08" },
      { n: "03", title: "Рокот сердца", file: "03-rokot-serdtsa.mp3", dur: "3:02" },
      { n: "04", title: "Воскрешенный", file: "04-voskreshennyy.mp3", dur: "3:30" },
      { n: "05", title: "Изгнанники", file: "05-izgnanniki.mp3", dur: "2:32" },
      { n: "06", title: "Прекрасное утро", file: "06-prekrasnoe-utro.mp3", dur: "2:48" },
      { n: "07", title: "Одинокая ночь", file: "07-odinokaya-noch.mp3", dur: "2:41" },
      { n: "08", title: "Ты всегда рядом", file: "08-ty-vsegda-ryadom.mp3", dur: "3:48" },
      { n: "09", title: "Солнце 2023", file: "09-solntse-2023.mp3", dur: "3:19" },
      { n: "10", title: "Вспышка радости", file: "10-vspyshka-radosti.mp3", dur: "2:24" }
    ]
  },
  natalya: {
    id: "natalya",
    title: "Наталья",
    year: "2023",
    theme: "theme-natalya",
    coverClass: "cover-natalya",
    featured: false,
    summary: "Нежный, воздушный раздел с собственной романтической окраской.",
    audioFolder: "assets/audio/natalya/",
    tracks: [
      { n: "01", title: "Добавьте название трека", file: "01-track.mp3" },
      { n: "02", title: "Добавьте название трека", file: "02-track.mp3" },
      { n: "03", title: "Добавьте название трека", file: "03-track.mp3" }
    ]
  },
  "rezonans-lyubvi": {
    id: "rezonans-lyubvi",
    title: "Резонанс любви",
    year: "2026",
    theme: "theme-rezonans-lyubvi",
    coverClass: "cover-rezonans-lyubvi",
    featured: false,
    summary: "Контрастный романтический релиз с более напряжённой и пульсирующей атмосферой.",
    audioFolder: "assets/audio/rezonans-lyubvi/",
    tracks: [
      { n: "01", title: "Добавьте название трека", file: "01-track.mp3" },
      { n: "02", title: "Добавьте название трека", file: "02-track.mp3" },
      { n: "03", title: "Добавьте название трека", file: "03-track.mp3" }
    ]
  },
  "severnaya-lyubov": {
    id: "severnaya-lyubov",
    title: "Северная любовь",
    year: "2026",
    theme: "theme-severnaya-lyubov",
    coverClass: "cover-severnaya-lyubov",
    featured: false,
    summary: "Холодный, чистый и более северный по ощущению раздел с отдельным характером.",
    audioFolder: "assets/audio/severnaya-lyubov/",
    tracks: [
      { n: "01", title: "Добавьте название трека", file: "01-track.mp3" },
      { n: "02", title: "Добавьте название трека", file: "02-track.mp3" },
      { n: "03", title: "Добавьте название трека", file: "03-track.mp3" }
    ]
  }
};

const app = document.getElementById("app");
const audio = document.getElementById("audio");
const playerTrack = document.getElementById("playerTrack");
const playerAlbum = document.getElementById("playerAlbum");
const playerCover = document.getElementById("playerCover");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const stopBtn = document.getElementById("stopBtn");
const openAlbumBtn = document.getElementById("openAlbumBtn");
const seek = document.getElementById("seek");
const currentTimeEl = document.getElementById("currentTime");
const durationTimeEl = document.getElementById("durationTime");
const closePlayer = document.getElementById("closePlayer");
const playerDock = document.getElementById("playerDock");
const togglePlaylistBtn = document.getElementById("togglePlaylistBtn");
const playerPlaylistWrap = document.getElementById("playerPlaylistWrap");
const playerPlaylist = document.getElementById("playerPlaylist");

const state = {
  queue: [],
  queueAlbumId: null,
  index: -1
};

function formatTime(sec){
  if(!isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function saveState(){
  localStorage.setItem("luis-fader-premium-state", JSON.stringify({
    queue: state.queue,
    queueAlbumId: state.queueAlbumId,
    index: state.index,
    src: audio.currentSrc || "",
    currentTime: audio.currentTime || 0,
    route: location.hash || "#home"
  }));
}

function restoreState(){
  try{
    const raw = localStorage.getItem("luis-fader-premium-state");
    if(!raw) return;
    const saved = JSON.parse(raw);
    state.queue = Array.isArray(saved.queue) ? saved.queue : [];
    state.queueAlbumId = saved.queueAlbumId || null;
    state.index = Number.isInteger(saved.index) ? saved.index : -1;
    if(saved.src){
      audio.src = saved.src;
      audio.currentTime = saved.currentTime || 0;
    }
  }catch(e){}
}

function setActiveNav(){
  document.querySelectorAll(".nav button").forEach(btn => {
    btn.classList.toggle("active", `#${btn.dataset.route}` === location.hash);
  });
}

function bindRoutes(){
  document.querySelectorAll(".nav-route").forEach(btn => {
    btn.addEventListener("click", () => {
      location.hash = `#${btn.dataset.route}`;
    });
  });
}

function homeView(){
  const featured = albums.lyubov;
  const rest = Object.values(albums).filter(album => album.id !== "lyubov");

  return `
    <section class="hero">
      <article class="hero-main glass">
        <div class="hero-content">
          <div class="eyebrow">Главный релиз 2025 • премиальная версия сайта • непрерывное воспроизведение</div>
          <h1>Любовь — главный альбом сайта</h1>
          <p>
            Здесь каждый альбом ощущается как собственная страница с уникальным характером,
            но музыка при этом не прерывается, пока слушатель перемещается по сайту.
          </p>
          <div class="hero-actions">
            <button class="cta nav-route" data-route="album-lyubov">Слушать «Любовь»</button>
            <button class="ghost-btn nav-route" data-route="about">Об авторе</button>
          </div>
        </div>
      </article>

      <aside class="hero-photo glass">
        <div class="hero-photo-card"></div>
      </aside>
    </section>

    <section class="section">
      <div class="section-head">
        <div><h2>Дискография</h2></div>
        <p>Каждый альбом имеет собственную визуальную атмосферу, но весь каталог связан единым постоянным плеером.</p>
      </div>

      <div class="album-grid">
        <article class="album-card featured ${featured.theme}">
          <div class="album-cover ${featured.coverClass}"></div>
          <div class="album-featured-badge">Главный альбом • ${featured.year}</div>
          <h3>${featured.title}</h3>
          <div class="album-summary">${featured.summary}</div>
          <div class="card-actions">
            <button class="cta nav-route" data-route="album-${featured.id}">Открыть альбом</button>
            <button class="ghost-btn quick-play" data-album="${featured.id}">▶ Запустить альбом</button>
          </div>
        </article>

        ${rest.map(album => `
          <article class="album-card ${album.theme}">
            <div class="album-cover ${album.coverClass}"></div>
            <div class="album-badge">Альбом • ${album.year}</div>
            <h3>${album.title}</h3>
            <div class="album-summary">${album.summary}</div>
            <div class="card-actions">
              <button class="cta nav-route" data-route="album-${album.id}">Открыть альбом</button>
              <button class="ghost-btn quick-play" data-album="${album.id}">▶ Запустить альбом</button>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function aboutView(){
  return `
    <section class="section">
      <div class="about-box">
        <div class="section-head">
          <div><h2>Об авторе</h2></div>
          <p>Этот блок можно потом расширить биографией, ссылками и новостями.</p>
        </div>

        <div class="about-text">
          <p><strong>Луис Фадер</strong> — композитор, создающий инструментальную музыку с мелодическим движением,
          яркой образностью и кинематографической атмосферой.</p>

          <p>Эта версия сайта построена по профессиональной логике: альбомы воспринимаются как отдельные страницы
          благодаря собственным темам, цветам и настроению, но технически сайт остаётся единым приложением.
          Поэтому музыка не обрывается при навигации.</p>

          <p>Фото автора: <code>assets/images/luis-fader-photo.jpg</code><br>
          Фон первого экрана: <code>assets/images/hero-bg.jpg</code></p>
        </div>
      </div>
    </section>
  `;
}

function albumView(album){
  return `
    <section class="album-shell ${album.theme}">
      <button class="nav-back nav-route" data-route="home">← Назад на главную</button>
      <h1 class="album-title">${album.title}</h1>
      <p class="copy">${album.summary}</p>

      <div class="album-layout">
        <aside class="album-sidebar">
          <div class="album-cover-large ${album.coverClass}"></div>

          <div class="side-panel">
            <strong>Файлы альбома</strong>
            <ul class="instruction-list">
              <li>Обложка: <code>assets/covers/${album.id}.jpg</code></li>
              <li>Аудио: <code>${album.audioFolder}</code></li>
            </ul>
          </div>

          <div class="side-panel">
            <strong>Управление альбомом</strong>
            <div class="card-actions" style="margin-top:12px;">
              <button class="cta start-album" data-album="${album.id}">▶ Запустить альбом</button>
              <button class="ghost-btn enqueue-album" data-album="${album.id}">Добавить очередь</button>
            </div>
          </div>

          <div class="side-panel">
            <strong>Атмосфера альбома</strong>
            <p>${album.summary}</p>
          </div>
        </aside>

        <div class="track-list">
          ${album.tracks.map((track, idx) => `
            <article class="track-row">
              <div class="track-top">
                <div class="track-left">
                  <div class="track-num">${track.n}</div>
                  <div>
                    <h3 class="track-name">${track.title}</h3>
                    <div class="track-meta">${track.dur || "MP3"}</div>
                  </div>
                </div>
              </div>

              <div class="track-controls">
                <button class="track-btn primary play-track" data-album="${album.id}" data-index="${idx}">▶ Слушать</button>
                <button class="track-btn secondary add-track" data-album="${album.id}" data-index="${idx}">Добавить в очередь</button>
              </div>

              <div class="track-file">Файл: <code>${album.audioFolder}${track.file}</code></div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function render(){
  const route = (location.hash || "#home").replace("#", "");
  setActiveNav();

  if(route === "home"){
    app.innerHTML = homeView();
    bindRoutes();
    document.querySelectorAll(".quick-play").forEach(btn => {
      btn.addEventListener("click", () => startAlbum(btn.dataset.album, 0));
    });
    return;
  }

  if(route === "about"){
    app.innerHTML = aboutView();
    bindRoutes();
    return;
  }

  if(route.startsWith("album-")){
    const albumId = route.replace("album-", "");
    const album = albums[albumId];
    if(album){
      app.innerHTML = albumView(album);
      bindRoutes();

      document.querySelectorAll(".start-album").forEach(btn => {
        btn.addEventListener("click", () => startAlbum(btn.dataset.album, 0));
      });
      document.querySelectorAll(".enqueue-album").forEach(btn => {
        btn.addEventListener("click", () => enqueueAlbum(btn.dataset.album));
      });
      document.querySelectorAll(".play-track").forEach(btn => {
        btn.addEventListener("click", () => startAlbum(btn.dataset.album, Number(btn.dataset.index)));
      });
      document.querySelectorAll(".add-track").forEach(btn => {
        btn.addEventListener("click", () => addTrack(btn.dataset.album, Number(btn.dataset.index)));
      });
      return;
    }
  }

  location.hash = "#home";
}

function buildQueue(albumId){
  const album = albums[albumId];
  return album.tracks.map(track => ({
    albumId: album.id,
    albumTitle: album.title,
    title: track.title,
    src: album.audioFolder + track.file
  }));
}

function startAlbum(albumId, index = 0){
  state.queueAlbumId = albumId;
  state.queue = buildQueue(albumId);
  state.index = index;
  loadCurrent(true);
}

function enqueueAlbum(albumId){
  const queueToAdd = buildQueue(albumId);
  if(!state.queue.length){
    state.queueAlbumId = albumId;
    state.queue = queueToAdd;
    state.index = 0;
    updatePlayer();
    saveState();
    return;
  }
  state.queue.push(...queueToAdd);
  updatePlayer();
  saveState();
}

function addTrack(albumId, index){
  const album = albums[albumId];
  const track = album.tracks[index];
  const item = {
    albumId: album.id,
    albumTitle: album.title,
    title: track.title,
    src: album.audioFolder + track.file
  };

  if(!state.queue.length){
    state.queueAlbumId = albumId;
    state.queue = [item];
    state.index = 0;
  } else {
    state.queue.push(item);
  }

  updatePlayer();
  saveState();
}

function loadCurrent(autoplay = false){
  const current = state.queue[state.index];
  if(!current) return;

  audio.src = current.src;
  showPlayer();
  audio.load();
  updatePlayer();
  saveState();

  if(autoplay){
    audio.play().then(() => {
      updatePlayer();
      saveState();
    }).catch(() => {
      updatePlayer();
      saveState();
    });
  }
}


function renderPlaylist(){
  if(!playerPlaylist) return;
  playerPlaylist.innerHTML = "";

  if(!state.queue.length){
    playerPlaylist.innerHTML = '<div class="track-meta">Очередь пока пуста</div>';
    return;
  }

  state.queue.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.className = "player-playlist-item" + (idx === state.index ? " active" : "");
    btn.innerHTML = `
      <span class="player-playlist-track">${item.title}</span>
      <span class="player-playlist-album">${item.albumTitle}</span>
    `;
    btn.addEventListener("click", () => {
      state.index = idx;
      loadCurrent(true);
    });
    playerPlaylist.appendChild(btn);
  });
}

function updatePlayer(){
  const current = state.queue[state.index];

  if(!current){
    playerTrack.textContent = "Ничего не выбрано";
    playerAlbum.textContent = "Выберите альбом";
    playerCover.innerHTML = "<span>ОБЛОЖКА</span>";
    playPauseBtn.textContent = "▶";
    currentTimeEl.textContent = "0:00";
    durationTimeEl.textContent = "0:00";
    seek.value = 0;
    renderPlaylist();
    return;
  }

  playerTrack.textContent = current.title;
  playerAlbum.textContent = current.albumTitle;
  playerCover.innerHTML = `<span>${current.albumTitle}</span>`;
  playPauseBtn.textContent = audio.paused ? "▶" : "❚❚";
  renderPlaylist();
}

function playPause(){
  if(!audio.src && state.queue.length){
    loadCurrent(true);
    return;
  }

  if(audio.paused){
    audio.play().then(() => {
      updatePlayer();
      saveState();
    }).catch(() => {});
  } else {
    audio.pause();
    updatePlayer();
    saveState();
  }
}

function nextTrack(){
  if(!state.queue.length) return;
  state.index = (state.index + 1) % state.queue.length;
  loadCurrent(true);
}

function prevTrack(){
  if(!state.queue.length) return;
  state.index = (state.index - 1 + state.queue.length) % state.queue.length;
  loadCurrent(true);
}

playPauseBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

stopBtn.addEventListener("click", () => {
  hidePlayerAndStop();
});

togglePlaylistBtn.addEventListener("click", () => {
  playerPlaylistWrap.classList.toggle("hidden-playlist");
  togglePlaylistBtn.textContent = playerPlaylistWrap.classList.contains("hidden-playlist") ? "Список" : "Скрыть";
});

openAlbumBtn.addEventListener("click", () => {
  const current = state.queue[state.index];
  if(!current) return;
  location.hash = `#album-${current.albumId}`;
});

closePlayer.addEventListener("click", () => {
  hidePlayerAndStop();
});

audio.addEventListener("timeupdate", () => {
  const percent = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  seek.value = percent;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationTimeEl.textContent = formatTime(audio.duration);
  saveState();
});

audio.addEventListener("loadedmetadata", () => {
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("ended", nextTrack);
audio.addEventListener("play", () => { updatePlayer(); saveState(); });
audio.addEventListener("pause", () => { updatePlayer(); saveState(); });

seek.addEventListener("input", () => {
  if(audio.duration){
    audio.currentTime = (seek.value / 100) * audio.duration;
  }
});

window.addEventListener("hashchange", render);

restoreState();
if(!location.hash) location.hash = "#home";
render();
updatePlayer();


function enableDraggablePlayer(){
  const dock = document.getElementById("playerDock");
  if(!dock) return;

  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;
  let dragging = false;

  const saved = localStorage.getItem("luis-fader-player-position");
  if(saved){
    try{
      const pos = JSON.parse(saved);
      if(typeof pos.left === "number" && typeof pos.top === "number"){
        dock.style.left = pos.left + "px";
        dock.style.top = pos.top + "px";
        dock.style.right = "auto";
      }
    }catch(e){}
  }

  function clampPosition(left, top){
    const pad = 8;
    const maxLeft = Math.max(pad, window.innerWidth - dock.offsetWidth - pad);
    const maxTop = Math.max(pad, window.innerHeight - dock.offsetHeight - pad);
    return {
      left: Math.min(Math.max(pad, left), maxLeft),
      top: Math.min(Math.max(pad, top), maxTop)
    };
  }

  function savePosition(left, top){
    localStorage.setItem("luis-fader-player-position", JSON.stringify({ left, top }));
  }

  function onPointerMove(e){
    if(!dragging) return;
    const next = clampPosition(
      startLeft + (e.clientX - startX),
      startTop + (e.clientY - startY)
    );
    dock.style.left = next.left + "px";
    dock.style.top = next.top + "px";
    dock.style.right = "auto";
  }

  function onPointerUp(){
    if(!dragging) return;
    dragging = false;
    dock.classList.remove("dragging");
    const rect = dock.getBoundingClientRect();
    savePosition(rect.left, rect.top);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }

  function onPointerDown(e){
    const isHandle = e.target.closest(".player-top") || e.target.closest(".player-cover");
    const isInteractive = e.target.closest("button, input, audio");
    if(!isHandle || isInteractive) return;

    const rect = dock.getBoundingClientRect();
    dragging = true;
    dock.classList.add("dragging");
    startX = e.clientX;
    startY = e.clientY;
    startLeft = rect.left;
    startTop = rect.top;

    dock.style.left = rect.left + "px";
    dock.style.top = rect.top + "px";
    dock.style.right = "auto";

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }

  dock.addEventListener("pointerdown", onPointerDown);

  window.addEventListener("resize", () => {
    const rect = dock.getBoundingClientRect();
    const next = clampPosition(rect.left, rect.top);
    dock.style.left = next.left + "px";
    dock.style.top = next.top + "px";
    dock.style.right = "auto";
    savePosition(next.left, next.top);
  });
}

enableDraggablePlayer();


function showPlayer(){
  playerDock.classList.remove("hidden");
}

function hidePlayerAndStop(){
  audio.pause();
  audio.currentTime = 0;
  audio.src = "";
  state.queue = [];
  state.queueAlbumId = null;
  state.index = -1;
  playerDock.classList.add("hidden");
  if (playerPlaylistWrap) {
    playerPlaylistWrap.classList.add("hidden-playlist");
    if (togglePlaylistBtn) togglePlaylistBtn.textContent = "Список";
  }
  updatePlayer();
  saveState();
}
