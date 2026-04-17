const SOUNDTRACK = [{"title": "Романтический хаос", "file": "assets/audio/track-01.mp3", "image": "assets/images/cover.jpg"}, {"title": "Больно", "file": "assets/audio/track-02.mp3", "image": "assets/images/robert-natalia.jpg"}, {"title": "Te fuiste", "file": "assets/audio/track-03.mp3", "image": "assets/images/natalia.jpg"}, {"title": "Ясность", "file": "assets/audio/track-04.mp3", "image": "assets/images/oxana.jpg"}, {"title": "Almas rebeldes", "file": "assets/audio/track-05.mp3", "image": "assets/images/encuentro-alexey.jpg"}, {"title": "Construyendo sueños", "file": "assets/audio/track-06.mp3", "image": "assets/images/jenny.jpg"}, {"title": "Motivación 38", "file": "assets/audio/track-07.mp3", "image": "assets/images/robert.jpg"}, {"title": "Corazón turquesa", "file": "assets/audio/track-08.mp3", "image": "assets/images/cover.jpg"}, {"title": "Abrazados", "file": "assets/audio/track-09.mp3", "image": "assets/images/robert-natalia.jpg"}, {"title": "Несовершенство", "file": "assets/audio/track-10.mp3", "image": "assets/images/robert.jpg"}, {"title": "Плен твоей души", "file": "assets/audio/track-11.mp3", "image": "assets/images/natalia.jpg"}];

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('novel-audio');
  if (!audio) return;
  const cover = document.getElementById('soundtrack-cover');
  const miniCover = document.getElementById('mini-cover');
  const nowTitle = document.getElementById('now-title');
  const nowSubtitle = document.getElementById('now-subtitle');
  const visualTitle = document.getElementById('visual-title');
  const visualText = document.getElementById('visual-text');
  const playBtn = document.getElementById('play-toggle');
  const prevBtn = document.getElementById('prev-track');
  const nextBtn = document.getElementById('next-track');
  const playlist = document.getElementById('playlist');
  const progress = document.getElementById('progress');
  const progressFill = document.getElementById('progress-fill');
  const currentTimeLabel = document.getElementById('current-time');
  const durationLabel = document.getElementById('duration-time');
  const visualChip = document.getElementById('visual-chip');
  const STORAGE_KEY = 'predchuvstvie-soundtrack-state-v1';

  const descriptions = [
    'Музыка для чтения романа: внутреннее напряжение, любовь, катастрофа и надежда.',
    'Трек для эмоциональных поворотов и пауз между главами.',
    'Мелодия для сцен утраты, расстояния и несказанных чувств.',
    'Светлая линия среди тревоги и руин.',
    'Ритм сопротивления, риска и столкновения характеров.',
    'Звучание мечты, общего дела и строительства новой жизни.',
    'Импульс движения, выдержки и внутренней силы.',
    'Бирюзовое сердце романа: мягкость, красота и память.',
    'Тепло близости, доверия и редких счастливых мгновений.',
    'Тема уязвимости и человеческой несовершенности.',
    'Музыка одержимости, притяжения и душевного плена.'
  ];

  let index = 0;
  let isSeeking = false;
  let rafId = null;
  let audioCtx, analyser, source, dataArray;

  function formatTime(value) {
    if (!Number.isFinite(value)) return '0:00';
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ index, time: audio.currentTime || 0 }));
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const state = JSON.parse(raw);
      if (typeof state.index === 'number' && state.index >= 0 && state.index < SOUNDTRACK.length) {
        index = state.index;
      }
      return state;
    } catch (e) {}
  }

  function updatePlaylistUI() {
    [...playlist.querySelectorAll('.track-btn')].forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
      btn.querySelector('.track-state').textContent = i === index ? 'Сейчас' : '▶';
    });
  }

  function setTrack(newIndex, preserveTime = false) {
    index = (newIndex + SOUNDTRACK.length) % SOUNDTRACK.length;
    const track = SOUNDTRACK[index];
    const previousTime = preserveTime ? audio.currentTime : 0;
    audio.src = track.file;
    cover.style.opacity = '0.65';
    miniCover.style.opacity = '0.65';
    setTimeout(() => {
      cover.src = track.image;
      miniCover.src = track.image;
      cover.style.opacity = '1';
      miniCover.style.opacity = '1';
    }, 120);
    nowTitle.textContent = track.title;
    visualTitle.textContent = track.title;
    nowSubtitle.textContent = descriptions[index] || 'Музыкальная сцена романа.';
    visualText.textContent = descriptions[index] || 'Музыкальная сцена романа.';
    visualChip.querySelector('span').textContent = 'Саундтрек романа';
    updatePlaylistUI();
    audio.load();
    if (preserveTime && previousTime) {
      audio.currentTime = previousTime;
    }
    saveState();
  }

  function ensureAudioContext() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.78;
    source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    dataArray = new Uint8Array(analyser.frequencyBinCount);
  }

  function drawSpectrum() {
    const canvas = document.getElementById('spectrum');
    if (!canvas || !analyser) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = Math.max(300, rect.width * window.devicePixelRatio);
    canvas.height = Math.max(200, rect.height * window.devicePixelRatio);
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    const render = () => {
      rafId = requestAnimationFrame(render);
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, w, h);
      const bars = 72;
      const step = Math.floor(dataArray.length / bars);
      const barWidth = w / bars;
      for (let i = 0; i < bars; i++) {
        const v = dataArray[i * step] / 255;
        const barHeight = h * (0.10 + v * 0.26);
        const x = i * barWidth;
        const y = h - barHeight;
        const gradient = ctx.createLinearGradient(0, y, 0, h);
        gradient.addColorStop(0, 'rgba(136, 255, 234, .12)');
        gradient.addColorStop(.5, 'rgba(114, 227, 212, .42)');
        gradient.addColorStop(1, 'rgba(87, 197, 190, .92)');
        ctx.fillStyle = gradient;
        const radius = Math.min(10 * window.devicePixelRatio, barWidth * .35);
        roundedRect(ctx, x + barWidth * .12, y, barWidth * .76, barHeight, radius);
        ctx.fill();
      }
    };
    if (rafId) cancelAnimationFrame(rafId);
    render();
  }

  function roundedRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function togglePlay() {
    ensureAudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function updatePlayButton() {
    playBtn.textContent = audio.paused ? '▶ Слушать' : '⏸ Пауза';
  }

  SOUNDTRACK.forEach((track, i) => {
    const btn = document.createElement('button');
    btn.className = 'track-btn';
    btn.type = 'button';
    btn.innerHTML = `
      <span class="track-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="track-copy"><strong>${track.title}</strong><span>${descriptions[i]}</span></span>
      <span class="track-state">▶</span>
    `;
    btn.addEventListener('click', () => {
      const same = i === index;
      setTrack(i);
      ensureAudioContext();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      audio.play();
      if (same) audio.currentTime = 0;
    });
    playlist.appendChild(btn);
  });

  const state = loadState();
  setTrack(index);
  if (state && state.time) {
    audio.addEventListener('loadedmetadata', () => {
      if (state.index === index) audio.currentTime = Math.min(state.time, audio.duration || state.time);
    }, { once: true });
  }

  playBtn.addEventListener('click', togglePlay);
  prevBtn.addEventListener('click', () => { setTrack(index - 1); togglePlay(); });
  nextBtn.addEventListener('click', () => { setTrack(index + 1); togglePlay(); });

  audio.addEventListener('play', () => { ensureAudioContext(); drawSpectrum(); updatePlayButton(); saveState(); });
  audio.addEventListener('pause', () => updatePlayButton());
  audio.addEventListener('ended', () => { setTrack(index + 1); audio.play(); });
  audio.addEventListener('timeupdate', () => {
    if (!isSeeking) {
      const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
      progressFill.style.width = pct + '%';
    }
    currentTimeLabel.textContent = formatTime(audio.currentTime);
    durationLabel.textContent = formatTime(audio.duration);
    saveState();
  });
  audio.addEventListener('loadedmetadata', () => { durationLabel.textContent = formatTime(audio.duration); });

  progress.addEventListener('click', (event) => {
    const rect = progress.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    if (audio.duration) audio.currentTime = audio.duration * pct;
  });

  window.addEventListener('resize', () => { if (!audio.paused && analyser) drawSpectrum(); });
  updatePlayButton();
});
