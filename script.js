const CONFIG = {
  
  profile: {
    name: "[Ｎｏｏｂｉｅ]",
    handle: "@noobie._exe",
    bio: "Développeur basé en France, créant des outils Wii U, des logiciels et des projets communautaires.",
    avatar: "https://cdn.discordapp.com/avatars/1451963850441359400/14f5af0ebed500d85ca0b6db961eb6c9.webp?size=512",

    badges: [
      { id: "developer", icon: "code", tooltip: "Développeur" }
    ],

    status: {
      text: "Statut Discord en cours...",
      color: "#80848e"
    },

    localTime: {
      enabled: true,
      timeZone: "Europe/Paris", 
      format24h: true,          
      showSeconds: true,        
      showTimezone: true        
    },

    systemUptime: {
      enabled: true,
      mode: "auto",             
      customBootHours: 14.5,    
      showSeconds: true,        
      label: "Uptime"           
    },

  },

  discord: {
    enabled: true, 

    syncProfile: true,

    userId: "1451963850441359400",

    fallback: {
      username: "noobie._exe",
      displayName: "[Ｎｏｏｂｉｅ]",
      avatar: "https://cdn.discordapp.com/avatars/1451963850441359400/14f5af0ebed500d85ca0b6db961eb6c9.webp?size=512",
      status: "offline", 
      customStatus: null, 
      activity: null      
    }
  },

  steam: {
    enabled: false,
    autoSync: false,
    steamId64: "",
    apiKey: "",
    profileUrl: "",
    fallbackGames: []
  },

  pcSpecs: {
    enabled: true,
    title: "MON PC",
    badgeText: "Main PC",
    specs: [
      { label: "Processeur", value: "AMD Ryzen 7 3700X", icon: "cpu" },
      { label: "Carte graphique", value: "GTX 1660", detail: "6 GB VRAM", icon: "gpu" },
      { label: "Mémoire vive", value: "16 GB", detail: "2666 MHz", icon: "ram" },
      { label: "Carte mère", value: "MPG B550 GAMING PLUS", icon: "motherboard" },
      { label: "Stockage NVMe", value: "512 GB", icon: "ssd" },
      { label: "Stockage SSD", value: "238 GB", icon: "ssd" },
      { label: "Stockage HDD", value: "2 TB", icon: "ssd" },
      { label: "Système", value: "Windows 10 + Omarchy", icon: "os" },
      { label: "Écran", value: "60 Hz · VGA", detail: "Adaptateur VGA", icon: "monitor" }
    ]
  },

  music: {
    enabled: false,
    defaultVolume: 0.35,
    autoplayOnEnter: false,
    tracks: []
  },

  links: [
    {
      title: "Discord",
      subtitle: "@noobie._exe",
      icon: "discord",
      url: "https://discord.com/users/1451963850441359400",
      target: "_blank",
      highlight: true
    },
    {
      title: "GitHub",
      subtitle: "github.com/NoobieDoesModding",
      icon: "github",
      url: "https://github.com/NoobieDoesModding",
      target: "_blank"
    },
    {
      title: "WiiUBootEditor",
      subtitle: "Wii U boot editor",
      icon: "github",
      url: "https://github.com/NoobieDoesModding/WiiUBootEditor",
      target: "_blank"
    }
  ],

  theme: {
    accentColor: "#5865f2",
    accentGlow: "rgba(88, 101, 242, 0.45)",
    secondaryAccent: "#8892ff",
    enterText: "Cliquez n'importe où pour entrer...",
    particlesEffect: "none", 
    clickSparks: true,
    tiltEffect: true,
  }
};

const ICONS = {
  'discord': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
  'steam': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.005.105.005.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12S18.605 0 11.979 0z"/></svg>`,
  'github': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
  'spotify': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.502 17.306c-.218.358-.684.471-1.042.253-2.857-1.746-6.453-2.14-10.689-1.173-.41.093-.815-.164-.908-.573-.093-.41.164-.815.573-.908 4.636-1.06 8.608-.616 11.813 1.359.358.218.471.684.253 1.042zm1.47-3.267c-.275.447-.862.589-1.309.314-3.27-2.01-8.254-2.593-12.122-1.418-.501.152-1.031-.134-1.183-.635-.152-.501.134-1.031.635-1.183 4.417-1.34 9.907-.69 13.665 1.623.447.275.589.862.314 1.309zm.126-3.41c-3.921-2.329-10.38-2.544-14.122-1.408-.6.182-1.237-.16-1.419-.76-.182-.6.16-1.237.76-1.419 4.303-1.306 11.433-1.053 15.938 1.622.539.32.716 1.02.396 1.56-.32.538-1.02.716-1.553.405z"/></svg>`,
  'twitter': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  'instagram': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
  'youtube': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  'twitch': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>`,
  'telegram': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  'globe': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  'mail': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  'badge-check': `<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>`,
  'bug': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 9h8v7a4 4 0 0 1-8 0V9z"/><path d="M12 5v4M5 11h3M16 11h3M5 16h3M16 16h3M7 6l2 3M17 6l-2 3M7 21l2-3M17 21l-2-3"/></svg>`,
  'code': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  'sparkles': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/></svg>`,
  'crown': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  'prev': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 20L9 12l10-8v16zM5 4h3v16H5V4z"/></svg>`,
  'next': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 4l10 8-10 8V4zm11 0h3v16h-3V4z"/></svg>`,
  'play': `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>`,
  'pause': `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`,
  'external-link': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  'copy': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
  'cpu': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  'gpu': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="8" cy="12" r="2.5"/><circle cx="16" cy="12" r="2.5"/><line x1="6" y1="2" x2="6" y2="6"/><line x1="10" y1="2" x2="10" y2="6"/></svg>`,
  'ram': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="1"/><line x1="6" y1="17" x2="6" y2="20"/><line x1="10" y1="17" x2="10" y2="20"/><line x1="14" y1="17" x2="14" y2="20"/><line x1="18" y1="17" x2="18" y2="20"/><circle cx="7" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="17" cy="12" r="1"/></svg>`,
  'ssd': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>`,
  'motherboard': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="5" height="5"/><line x1="16" y1="7" x2="16" y2="10"/><line x1="16" y1="13" x2="16" y2="16"/><line x1="7" y1="16" x2="10" y2="16"/></svg>`,
  'os': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4h-13.051M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.8"/></svg>`,
  'monitor': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initProfile();
  initLocalTime();
  initSystemUptime();
  initViewsCounter();
  initLinks();
  initDiscordStatus();
  initSteamGames();
  initPcSpecs();
  initAudio();
  initClickOverlay();
  init3DTilt();
  initParticles();
  initClickSparks();
});

function initTheme() {
  const root = document.documentElement;
  if (CONFIG.theme.accentColor) {
    root.style.setProperty('--accent', CONFIG.theme.accentColor);
  }
  if (CONFIG.theme.accentGlow) {
    root.style.setProperty('--accent-glow', CONFIG.theme.accentGlow);
    root.style.setProperty('--card-border-hover', CONFIG.theme.accentGlow);
  }
  if (CONFIG.theme.secondaryAccent) {
    root.style.setProperty('--accent-secondary', CONFIG.theme.secondaryAccent);
  }
}

function initProfile() {
  const { profile } = CONFIG;
  
  document.title = `${profile.name} (${profile.handle}) ✦ Bio`;

  const avatarImg = document.getElementById('avatar-img');
  if (avatarImg && profile.avatar) {
    avatarImg.src = profile.avatar;
    avatarImg.alt = profile.name;
  }

  const nameEl = document.getElementById('profile-name');
  if (nameEl) nameEl.textContent = profile.name;

  const handleEl = document.getElementById('profile-handle');
  if (handleEl) handleEl.textContent = profile.handle;

  const statusDot = document.getElementById('status-dot');
  const statusText = document.getElementById('status-text');
  if (statusDot && profile.status?.color) {
    statusDot.style.backgroundColor = profile.status.color;
  }
  if (statusText && profile.status?.text) {
    statusText.textContent = profile.status.text;
  }

  const bioEl = document.getElementById('profile-bio');
  if (bioEl) bioEl.textContent = profile.bio;

  renderProfileBadges(profile.badges);

  const viewsEl = document.getElementById('views-count');
  if (viewsEl && profile.viewsCount) {
    viewsEl.textContent = Number(profile.viewsCount).toLocaleString();
  }
}

function renderProfileBadges(badges) {
  const container = document.getElementById('badges-container');
  if (!container) return;

  container.innerHTML = (Array.isArray(badges) ? badges : []).map(badge => `
    <div class="badge-item" title="${badge.tooltip}" aria-label="${badge.tooltip}">
      ${ICONS[badge.icon] || ICONS['badge-check']}
      <span class="badge-tooltip">${badge.tooltip}</span>
    </div>
  `).join('');
}

function initLocalTime() {
  const pill = document.getElementById('localtime-pill');
  const textEl = document.getElementById('localtime-text');
  const tzEl = document.getElementById('localtime-tz');

  const conf = CONFIG.profile?.localTime || {
    enabled: true,
    timeZone: 'Europe/Paris',
    format24h: true,
    showSeconds: true,
    showTimezone: true
  };

  if (!conf.enabled) {
    if (pill) pill.style.display = 'none';
    return;
  }

  const timeZone = (conf.timeZone && conf.timeZone.trim()) 
    ? conf.timeZone.trim() 
    : (Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Paris');

  function update() {
    try {
      const now = new Date();
      
      const timeStr = now.toLocaleTimeString('fr-FR', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: conf.showSeconds !== false ? '2-digit' : undefined,
        hour12: conf.format24h === false
      });

      if (textEl) textEl.textContent = timeStr;

      if (tzEl && conf.showTimezone !== false) {
        const tzName = new Intl.DateTimeFormat('fr-FR', {
          timeZone,
          timeZoneName: 'short'
        }).formatToParts(now).find(p => p.type === 'timeZoneName')?.value || '';

        tzEl.textContent = tzName;
        tzEl.style.display = tzName ? 'inline-block' : 'none';
      } else if (tzEl) {
        tzEl.style.display = 'none';
      }

      if (pill) {
        pill.title = `Heure locale de ${CONFIG.profile?.name || 'Profil'} (${timeZone})`;
      }
    } catch (e) {
      console.warn("Erreur mise à jour heure locale :", e);
    }
  }

  update();
  setInterval(update, 1000);
}

function initSystemUptime() {
  const pill = document.getElementById('uptime-pill');
  const textEl = document.getElementById('uptime-text');

  const conf = CONFIG.profile?.systemUptime || {
    enabled: true,
    mode: 'auto',
    customBootHours: 14.5,
    showSeconds: true,
    label: 'Uptime'
  };

  if (!conf.enabled) {
    if (pill) pill.style.display = 'none';
    return;
  }

  const pad = (n) => String(n).padStart(2, '0');
  let bootTimestamp = Date.now() - (Number(conf.customBootHours || 8) * 3600 * 1000);
  let isLiveServer = false;

  function formatUptime() {
    const elapsedMs = Math.max(0, Date.now() - bootTimestamp);
    const totalSec = Math.floor(elapsedMs / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;

    let timeString = '';
    if (days > 0) {
      timeString = `${days}j ${pad(hours)}h ${pad(minutes)}m`;
    } else {
      timeString = `${hours}h ${pad(minutes)}m`;
    }

    if (conf.showSeconds !== false) {
      timeString += ` ${pad(seconds)}s`;
    }

    const prefix = conf.label ? `${conf.label}: ` : '';
    if (textEl) textEl.textContent = `${prefix}${timeString}`;

    if (pill) {
      const source = isLiveServer ? "Machine / Système hôte" : "Session configurée";
      pill.title = `System Uptime : ${days} jour(s), ${hours} h, ${minutes} m (${source})`;
    }
  }

  if (conf.mode !== 'custom') {
    fetch('/api/system')
      .then(res => {
        if (!res.ok) throw new Error("API non disponible");
        return res.json();
      })
      .then(data => {
        if (data && data.bootTimestamp) {
          bootTimestamp = data.bootTimestamp;
          isLiveServer = true;
          formatUptime();
        }
      })
      .catch(() => {
        
      });
  }

  formatUptime();
  setInterval(formatUptime, 1000);
}

function initViewsCounter() {
  const viewsEl = document.getElementById('views-count');
  if (!viewsEl) return;

  const hasVisitedThisSession = sessionStorage.getItem('profile_view_recorded');
  const apiUrl = '/api/views';
  const fallbackJsonUrl = 'views.json';

  if (hasVisitedThisSession) {
    fetch(apiUrl)
      .catch(() => fetch(fallbackJsonUrl))
      .then(res => res.json())
      .then(doc => updateViewsFromAtomicDoc(doc, viewsEl))
      .catch(() => {});
    return;
  }

  const atomicPayload = {
    jsonapi: {
      version: '1.1',
      ext: ['https://jsonapi.org/ext/atomic']
    },
    'atomic:operations': [
      {
        op: 'update',
        ref: {
          type: 'profile-views',
          id: 'alya-main'
        },
        data: {
          type: 'profile-views',
          id: 'alya-main'
        }
      }
    ]
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.api+json; ext="https://jsonapi.org/ext/atomic"'
    },
    body: JSON.stringify(atomicPayload)
  })
    .then(res => {
      if (!res.ok) throw new Error('Proxy local indisponible');
      sessionStorage.setItem('profile_view_recorded', 'true');
      return res.json();
    })
    .then(doc => {
      updateViewsFromAtomicDoc(doc, viewsEl);
    })
    .catch(() => {
      
      fetch(fallbackJsonUrl)
        .then(res => res.json())
        .then(doc => updateViewsFromAtomicDoc(doc, viewsEl))
        .catch(() => {});
    });
}

function updateViewsFromAtomicDoc(doc, viewsEl) {
  if (!doc || !viewsEl) return;

  let count = null;
  if (doc['atomic:results'] && doc['atomic:results'][0]?.data?.attributes?.totalViews) {
    count = doc['atomic:results'][0].data.attributes.totalViews;
  } else if (doc['atomic:operations']) {
    const updateOp = doc['atomic:operations'].find(op => op.data?.attributes?.totalViews);
    if (updateOp) count = updateOp.data.attributes.totalViews;
  } else if (doc.meta?.totalViews) {
    count = doc.meta.totalViews;
  }

  if (count !== null) {
    viewsEl.textContent = Number(count).toLocaleString();
  }
}

function initLinks() {
  const container = document.getElementById('links-container');
  if (!container || !Array.isArray(CONFIG.links)) return;

  container.innerHTML = CONFIG.links.map((link, index) => {
    const isCopy = Boolean(link.copyToClipboard);
    const actionIcon = isCopy ? ICONS['copy'] : ICONS['external-link'];
    const highlightClass = link.highlight ? 'highlighted' : '';
    const iconSvg = ICONS[link.icon] || ICONS['globe'];

    return `
      <a class="link-card ${highlightClass} link-${link.icon || 'default'}" 
         href="${isCopy ? 'javascript:void(0)' : link.url}" 
         ${isCopy ? '' : `target="${link.target || '_blank'}" rel="noopener noreferrer"`}
         data-copy="${isCopy ? encodeURIComponent(link.copyToClipboard) : ''}"
         data-index="${index}">
        <div class="link-left">
          <div class="link-icon-box">
            ${iconSvg}
          </div>
          <div class="link-details">
            <span class="link-title">${link.title}</span>
            <span class="link-subtitle">${link.subtitle || ''}</span>
          </div>
        </div>
        <div class="link-action-icon">
          ${actionIcon}
        </div>
      </a>
    `;
  }).join('');

  container.addEventListener('click', (e) => {
    const card = e.target.closest('.link-card');
    if (!card) return;

    const copyData = card.getAttribute('data-copy');
    if (copyData) {
      e.preventDefault();
      const text = decodeURIComponent(copyData);
      copyToClipboard(text);
    }
  });
}

let currentActivityStart = null;
let activityTimerInterval = null;
let lanyardPollInterval = null;
let isSocketConnected = false;

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

function initDiscordStatus() {
  const wrapper = document.getElementById('discord-card');
  if (!CONFIG.discord || !CONFIG.discord.enabled) {
    if (wrapper) wrapper.style.display = 'none';
    return;
  }

  const copyBtn = document.getElementById('discord-action-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const username = window.currentDiscordUsername || CONFIG.discord.fallback?.username || "noobie._exe";
      copyToClipboard(username);
    });
  }

  const userId = CONFIG.discord.userId?.trim();

  if (CONFIG.discord.fallback) {
    renderDiscordData(CONFIG.discord.fallback);
  }

  if (!userId) return;

  connectLanyardSocket(userId);
  fetchLanyard(userId);

  if (!lanyardPollInterval) {
    lanyardPollInterval = setInterval(() => {
      if (!isSocketConnected) {
        fetchLanyard(userId);
      }
    }, 10000);
  }
}

function fetchLanyard(userId) {
  const tryFallbackProxy = () => {
    fetch(`/api/discord/presence?userid=${encodeURIComponent(userId)}`)
      .then(res => res.ok ? res.json() : null)
      .then(res => {
        if (res && res.success && res.data) {
          parseAndRenderLanyardData(res.data);
        }
      })
      .catch(() => {});
  };

  fetch(`https://api.lanyard.rest/v1/users/${encodeURIComponent(userId)}`)
    .then(res => {
      if (!res.ok) throw new Error("Erreur réponse Lanyard");
      return res.json();
    })
    .then(res => {
      if (res.success && res.data) {
        parseAndRenderLanyardData(res.data);
        if (!isSocketConnected) {
          connectLanyardSocket(userId);
        }
      } else {
        tryFallbackProxy();
      }
    })
    .catch(() => {
      tryFallbackProxy();
    });
}

function connectLanyardSocket(userId) {
  if (isSocketConnected) return;

  try {
    const ws = new WebSocket('wss://api.lanyard.rest/socket');
    let heartbeatInterval = null;

    ws.onopen = () => {
      isSocketConnected = true;
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.op === 1) {
          if (heartbeatInterval) clearInterval(heartbeatInterval);
          heartbeatInterval = setInterval(() => {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify({ op: 3 }));
            }
          }, data.d.heartbeat_interval);

          ws.send(JSON.stringify({
            op: 2,
            d: { subscribe_to_id: userId }
          }));
        }

        if (data.t === 'INIT_STATE' || data.t === 'PRESENCE_UPDATE') {
          parseAndRenderLanyardData(data.d);
        }
      } catch (err) {
        console.warn("Erreur WebSocket Lanyard :", err);
      }
    };

    ws.onerror = () => {
    };

    ws.onclose = () => {
      isSocketConnected = false;
      if (heartbeatInterval) clearInterval(heartbeatInterval);
      setTimeout(() => {
        if (!isSocketConnected) connectLanyardSocket(userId);
      }, 6000);
    };
  } catch (e) {
    console.warn("WebSocket Lanyard indisponible :", e);
  }
}

function parseAndRenderLanyardData(lanyard) {
  if (!lanyard) return;
  const user = lanyard.discord_user;
  const status = lanyard.discord_status || 'offline';

  let avatarUrl = CONFIG.profile?.avatar || "";
  if (user && user.avatar) {
    const isGif = user.avatar.startsWith('a_');
    avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${isGif ? 'gif' : 'webp'}?size=512`;
  } else if (user) {
    const defaultIndex = user.discriminator && user.discriminator !== '0'
      ? Number(user.discriminator) % 5
      : (BigInt(user.id) >> 22n) % 6n;
    avatarUrl = `https://cdn.discordapp.com/embed/avatars/${defaultIndex}.png`;
  }

  let customStatus = null;
  let customStatusHtml = null;
  const customActivity = lanyard.activities?.find(a => a.type === 4);
  if (customActivity && (customActivity.state || customActivity.emoji)) {
    const text = customActivity.state || '';
    if (customActivity.emoji) {
      if (customActivity.emoji.id) {
        const ext = customActivity.emoji.animated ? 'gif' : 'webp';
        const emojiUrl = `https://cdn.discordapp.com/emojis/${customActivity.emoji.id}.${ext}?size=40`;
        customStatusHtml = `<img class="status-custom-emoji" src="${emojiUrl}" alt="${escapeHtml(customActivity.emoji.name)}"> <span>${escapeHtml(text)}</span>`;
        customStatus = text ? `${customActivity.emoji.name} ${text}` : customActivity.emoji.name;
      } else if (customActivity.emoji.name) {
        customStatus = text ? `${customActivity.emoji.name} ${text}` : customActivity.emoji.name;
        customStatusHtml = `<span>${customActivity.emoji.name}</span> <span>${escapeHtml(text)}</span>`;
      }
    } else if (text) {
      customStatus = text;
      customStatusHtml = `<span>${escapeHtml(text)}</span>`;
    }
  }

  let activity = null;
  if (lanyard.listening_to_spotify && lanyard.spotify) {
    activity = {
      isSpotify: true,
      categoryLabel: "ÉCOUTE SPOTIFY",
      name: lanyard.spotify.song,
      details: `par ${lanyard.spotify.artist}`,
      state: lanyard.spotify.album ? `sur ${lanyard.spotify.album}` : "",
      timestamps: lanyard.spotify.timestamps,
      largeImage: lanyard.spotify.album_art_url
    };
  } else if (Array.isArray(lanyard.activities)) {
    const gameAct = lanyard.activities.find(a => a.type === 0);
    const streamAct = lanyard.activities.find(a => a.type === 1);
    const watchAct = lanyard.activities.find(a => a.type === 3);
    const mainAct = gameAct || streamAct || watchAct || lanyard.activities.find(a => a.type !== 4);

    if (mainAct) {
      let largeImg = null;
      if (mainAct.assets?.large_image) {
        if (mainAct.assets.large_image.startsWith('mp:external/')) {
          largeImg = 'https://media.discordapp.net/external/' + mainAct.assets.large_image.slice('mp:external/'.length);
        } else if (mainAct.assets.large_image.startsWith('http://') || mainAct.assets.large_image.startsWith('https://')) {
          largeImg = mainAct.assets.large_image;
        } else if (mainAct.application_id) {
          largeImg = `https://cdn.discordapp.com/app-assets/${mainAct.application_id}/${mainAct.assets.large_image}.png`;
        }
      } else if (mainAct.assets?.small_image) {
        if (mainAct.assets.small_image.startsWith('mp:external/')) {
          largeImg = 'https://media.discordapp.net/external/' + mainAct.assets.small_image.slice('mp:external/'.length);
        } else if (mainAct.application_id) {
          largeImg = `https://cdn.discordapp.com/app-assets/${mainAct.application_id}/${mainAct.assets.small_image}.png`;
        }
      }

      let categoryLabel = "ACTIVITÉ EN COURS";
      if (mainAct.type === 0) categoryLabel = "JOUANT À UN JEU";
      else if (mainAct.type === 1) categoryLabel = "EN STREAMING";
      else if (mainAct.type === 2) categoryLabel = "ÉCOUTE";
      else if (mainAct.type === 3) categoryLabel = "REGARDE";
      else if (mainAct.type === 5) categoryLabel = "EN COMPÉTITION";

      activity = {
        categoryLabel: categoryLabel,
        name: mainAct.name,
        details: mainAct.details || "",
        state: mainAct.state || "",
        timestamps: mainAct.timestamps || null,
        largeImage: largeImg
      };

      window.currentDiscordGame = mainAct.name;
    }
  }

  renderDiscordData({
    displayName: user ? (user.global_name || user.username) : "Discord User",
    username: user ? user.username : "user",
    avatar: avatarUrl,
    status: status,
    customStatus: customStatus,
    customStatusHtml: customStatusHtml,
    activity: activity
  });
}

function renderDiscordData(data) {
  if (!data) return;

  if (data.username) {
    window.currentDiscordUsername = data.username;
  }

  const displayNameEl = document.getElementById('discord-display-name');
  const usernameEl = document.getElementById('discord-username');
  const avatarImgEl = document.getElementById('discord-avatar-img');
  const statusBadgeEl = document.getElementById('discord-badge-indicator');
  const liveDotEl = document.getElementById('discord-live-dot');
  const liveTextEl = document.getElementById('discord-live-text');

  if (displayNameEl && data.displayName) displayNameEl.textContent = data.displayName;
  if (usernameEl && data.username) usernameEl.textContent = `@${data.username}`;
  if (avatarImgEl && data.avatar) avatarImgEl.src = data.avatar;

  const statusKey = data.status || 'offline';
  const statusLabels = {
    'online': 'EN LIGNE',
    'idle': 'INACTIF',
    'dnd': 'NE PAS DÉRANGER',
    'offline': 'HORS LIGNE'
  };

  if (statusBadgeEl) {
    statusBadgeEl.className = `discord-badge-indicator ${statusKey}`;
  }
  if (liveDotEl) {
    liveDotEl.className = `discord-live-dot ${statusKey}`;
  }
  if (liveTextEl) {
    liveTextEl.textContent = statusLabels[statusKey] || 'DISCORD';
  }

  const customStatusEl = document.getElementById('discord-custom-status');
  const statusQuoteEl = document.getElementById('discord-status-quote');
  if (data.customStatus) {
    if (customStatusEl) customStatusEl.style.display = 'flex';
    if (statusQuoteEl) {
      if (data.customStatusHtml) {
        statusQuoteEl.innerHTML = data.customStatusHtml;
      } else {
        statusQuoteEl.textContent = data.customStatus;
      }
    }
  } else if (customStatusEl) {
    customStatusEl.style.display = 'none';
    if (statusQuoteEl) statusQuoteEl.textContent = '';
  }

  const actSection = document.getElementById('discord-activity-section');
  const actLabel = document.getElementById('activity-section-label');
  const actName = document.getElementById('activity-name');
  const actDetails = document.getElementById('activity-details');
  const actState = document.getElementById('activity-state');
  const actImg = document.getElementById('activity-img');
  const timerWrap = document.getElementById('activity-timer-wrap');

  if (data.activity) {
    if (actSection) actSection.style.display = 'block';
    if (actLabel && data.activity.categoryLabel) actLabel.textContent = data.activity.categoryLabel;
    if (actName) actName.textContent = data.activity.name || "Activité";
    if (actDetails) {
      actDetails.textContent = data.activity.details || "";
      actDetails.style.display = data.activity.details ? "block" : "none";
    }
    if (actState) {
      actState.textContent = data.activity.state || "";
      actState.style.display = data.activity.state ? "block" : "none";
    }
    if (actImg) {
      if (data.activity.largeImage) {
        actImg.src = data.activity.largeImage;
        actImg.style.display = "block";
      } else {
        actImg.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff007f'><path d='M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'/></svg>";
        actImg.style.display = "block";
      }
    }

    if (data.activity.timestamps?.start) {
      currentActivityStart = data.activity.timestamps.start;
      if (timerWrap) timerWrap.style.display = 'inline-flex';
      updateActivityTimer();

      if (!activityTimerInterval) {
        activityTimerInterval = setInterval(updateActivityTimer, 1000);
      }
    } else {
      if (timerWrap) timerWrap.style.display = 'none';
      if (activityTimerInterval) {
        clearInterval(activityTimerInterval);
        activityTimerInterval = null;
      }
      currentActivityStart = null;
    }
  } else {
    if (actSection) actSection.style.display = 'none';
    if (timerWrap) timerWrap.style.display = 'none';
    if (activityTimerInterval) {
      clearInterval(activityTimerInterval);
      activityTimerInterval = null;
    }
    currentActivityStart = null;
  }

  if (CONFIG.discord.syncProfile) {
    syncMainProfileWithDiscord(data);
  }
}

function syncMainProfileWithDiscord(data) {
  if (!data) return;

  const mainAvatar = document.getElementById('avatar-img');
  if (mainAvatar && data.avatar) {
    mainAvatar.src = data.avatar;
    mainAvatar.alt = data.displayName || "Avatar Discord";
  }

  const mainName = document.getElementById('profile-name');
  if (mainName && data.displayName) {
    mainName.textContent = data.displayName;
  }

  const mainHandle = document.getElementById('profile-handle');
  if (mainHandle && data.username) {
    mainHandle.textContent = `@${data.username.replace(/^@/, '')}`;
  }

  const statusColorMap = {
    'online': '#23a55a',
    'idle': '#f0b232',
    'dnd': '#f23f43',
    'offline': '#80848e'
  };

  const statusLabelMap = {
    'online': 'En ligne sur Discord',
    'idle': 'Inactif sur Discord',
    'dnd': 'Ne pas déranger',
    'offline': 'Hors ligne sur Discord'
  };

  const color = statusColorMap[data.status] || '#80848e';
  const mainStatusIndicator = document.getElementById('status-indicator');
  const mainStatusDot = document.getElementById('status-dot');
  const mainStatusText = document.getElementById('status-text');

  if (mainStatusIndicator) {
    mainStatusIndicator.style.backgroundColor = color;
    if (data.status === 'offline') {
      mainStatusIndicator.classList.add('offline');
    } else {
      mainStatusIndicator.classList.remove('offline');
    }
  }

  if (mainStatusDot) {
    mainStatusDot.style.backgroundColor = color;
  }

  if (mainStatusText) {
    if (data.customStatus) {
      mainStatusText.textContent = data.customStatus;
    }
    else if (data.activity) {
      if (data.activity.isSpotify) {
        mainStatusText.textContent = `🎵 Écoute ${data.activity.name}`;
      } else {
        mainStatusText.textContent = `🎮 Joue à ${data.activity.name}`;
      }
    }
    else if (data.status) {
      mainStatusText.textContent = statusLabelMap[data.status] || 'En ligne sur Discord';
    }
  }

  if (data.displayName && data.username) {
    document.title = `${data.displayName} (@${data.username.replace(/^@/, '')}) ✦ Bio`;
  }

  const discordLinkCard = document.querySelector('.link-card[data-copy]');
  if (discordLinkCard) {
    discordLinkCard.setAttribute('data-copy', encodeURIComponent(data.username));
    const subtitle = discordLinkCard.querySelector('.link-subtitle');
    if (subtitle) {
      subtitle.textContent = `@${data.username} (clique pour copier)`;
    }
  }
}

function updateActivityTimer() {
  if (!currentActivityStart) return;
  const timerText = document.getElementById('activity-timer-text');
  if (!timerText) return;

  const elapsedMs = Math.max(0, Date.now() - currentActivityStart);
  const totalSeconds = Math.floor(elapsedMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, '0');
  if (hours > 0) {
    timerText.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} écoulé`;
  } else {
    timerText.textContent = `${pad(minutes)}:${pad(seconds)} écoulé`;
  }
}

function initSteamGames() {
  const steamCard = document.getElementById('steam-card');
  if (!CONFIG.steam || !CONFIG.steam.enabled) {
    if (steamCard) steamCard.style.display = 'none';
    return;
  }

  const profileBtn = document.getElementById('steam-profile-btn');
  if (profileBtn && CONFIG.steam.profileUrl) {
    profileBtn.href = CONFIG.steam.profileUrl;
  }

  renderSteamGamesList(CONFIG.steam.fallbackGames || []);

  const steamId = CONFIG.steam.steamId64?.trim();
  const apiKey = CONFIG.steam.apiKey?.trim();

  if (CONFIG.steam.autoSync && steamId) {
    fetchSteamRecentGames(steamId, apiKey);
  }
}

function fetchSteamRecentGames(steamId, apiKey) {
  const localProxyUrl = `/api/steam/recent?steamid=${encodeURIComponent(steamId)}&key=${encodeURIComponent(apiKey || '')}`;
  
  fetch(localProxyUrl)
    .then(res => {
      if (!res.ok) throw new Error("Proxy local non disponible");
      return res.json();
    })
    .then(data => {
      if (data && data.response && Array.isArray(data.response.games) && data.response.games.length > 0) {
        handleSteamGamesResponse(data.response.games);
      }
    })
    .catch(() => {
      if (apiKey) {
        const steamDirectUrl = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${encodeURIComponent(apiKey)}&steamid=${encodeURIComponent(steamId)}&format=json`;
        const corsProxyUrl = `https://corsproxy.io/?url=${encodeURIComponent(steamDirectUrl)}`;

        fetch(corsProxyUrl)
          .then(res => res.json())
          .then(data => {
            if (data && data.response && Array.isArray(data.response.games) && data.response.games.length > 0) {
              handleSteamGamesResponse(data.response.games);
            }
          })
          .catch(() => {
          });
      }
    });
}

function handleSteamGamesResponse(rawGames) {
  const mappedGames = rawGames.map(g => {
    const totalMinutes = g.playtime_forever || 0;
    const totalHours = totalMinutes < 600 
      ? Number((totalMinutes / 60).toFixed(1)) 
      : Math.round(totalMinutes / 60);

    const recentMinutes = g.playtime_2weeks || 0;
    const recentHours = recentMinutes > 0 
      ? Number((recentMinutes / 60).toFixed(1)) 
      : 0;
    
    return {
      name: g.name,
      appId: g.appid,
      playtimeTotal: totalHours,
      playtimeRecent: recentHours,
      badge: recentHours > 0 ? "Récemment joué" : ""
    };
  });

  try {
    localStorage.setItem('cached_steam_games', JSON.stringify(mappedGames));
  } catch (e) {}

  renderSteamGamesList(mappedGames);
}

function renderSteamGamesList(games) {
  const listContainer = document.getElementById('steam-games-list');
  const totalHoursEl = document.getElementById('steam-total-hours');

  if (!listContainer || games.length === 0) return;

  const totalHoursRaw = games.reduce((sum, g) => sum + (Number(g.playtimeTotal) || 0), 0);
  const totalHoursFormatted = totalHoursRaw >= 100 
    ? Math.round(totalHoursRaw).toLocaleString() 
    : totalHoursRaw.toFixed(1);

  if (totalHoursEl) {
    totalHoursEl.textContent = `${totalHoursFormatted} h au total`;
  }

  listContainer.innerHTML = games.map(game => {
    const bannerUrl = game.banner || (game.appId 
      ? `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${game.appId}/header.jpg`
      : 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80');

    const storeUrl = game.appId 
      ? `https://store.steampowered.com/app/${game.appId}`
      : (CONFIG.steam.profileUrl || '#');

    const isLivePlaying = window.currentDiscordGame && 
      game.name.toLowerCase().includes(window.currentDiscordGame.toLowerCase());

    let badgeHtml = '';
    if (isLivePlaying) {
      badgeHtml = `<span class="steam-game-badge live">🟢 En cours</span>`;
    } else if (game.playtimeRecent && Number(game.playtimeRecent) > 0) {
      badgeHtml = `<span class="steam-game-badge recent">+${game.playtimeRecent} h (2 sem.)</span>`;
    } else if (game.badge && game.badge !== "Récemment joué") {
      badgeHtml = `<span class="steam-game-badge">${game.badge}</span>`;
    }

    const playtimeDisplay = Number(game.playtimeTotal) < 10 && Number(game.playtimeTotal) % 1 !== 0
      ? Number(game.playtimeTotal).toFixed(1)
      : Math.round(Number(game.playtimeTotal)).toLocaleString();

    const gameTitle = game.name || `Steam App #${game.appId}`;

    return `
      <a class="steam-game-item" href="${storeUrl}" target="_blank" rel="noopener noreferrer" title="Voir ${gameTitle} sur Steam">
        <img class="steam-game-banner" src="${bannerUrl}" alt="${gameTitle}" loading="lazy" onerror="this.style.opacity='0.1'">
        <div class="steam-game-content">
          <div class="steam-game-top">
            <span class="steam-game-title">${gameTitle}</span>
          </div>
          <div class="steam-game-bottom">
            <span class="steam-game-playtime">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>${playtimeDisplay} h au total</span>
            </span>
            ${badgeHtml ? `<div class="steam-game-badges">${badgeHtml}</div>` : ''}
          </div>
        </div>
      </a>
    `;
  }).join('');
}

function initPcSpecs() {
  const specsBox = document.getElementById('profile-specs-box') || document.getElementById('specs-card');
  const titleEl = document.getElementById('specs-title');
  const badgeTextEl = document.getElementById('specs-badge-text');
  const gridEl = document.getElementById('specs-grid');

  if (!CONFIG.pcSpecs || !CONFIG.pcSpecs.enabled) {
    if (specsBox) specsBox.style.display = 'none';
    return;
  }

  if (titleEl && CONFIG.pcSpecs.title) {
    titleEl.textContent = CONFIG.pcSpecs.title;
  }

  if (badgeTextEl && CONFIG.pcSpecs.badgeText) {
    badgeTextEl.textContent = CONFIG.pcSpecs.badgeText;
  }

  if (!gridEl || !Array.isArray(CONFIG.pcSpecs.specs)) return;

  gridEl.innerHTML = CONFIG.pcSpecs.specs.map(spec => {
    const iconSvg = ICONS[spec.icon] || ICONS['cpu'] || ICONS['code'];
    const detailHtml = spec.detail 
      ? `<span class="spec-detail">${spec.detail}</span>` 
      : '';

    return `
      <div class="spec-item spec-${spec.icon || 'default'}" title="${spec.label}: ${spec.value}">
        <div class="spec-icon-box">
          ${iconSvg}
        </div>
        <div class="spec-info">
          <span class="spec-label">${spec.label}</span>
          <span class="spec-value">${spec.value}</span>
          ${detailHtml}
        </div>
      </div>
    `;
  }).join('');
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`"${text}" copié dans le presse-papier !`);
  }).catch(() => {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(`"${text}" copié !`);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

let audio = null;
let isPlaying = false;
let currentTrackIndex = 0;
let playlist = [];

function getPlaylist() {
  if (Array.isArray(CONFIG.music?.tracks) && CONFIG.music.tracks.length > 0) {
    return CONFIG.music.tracks;
  }
  if (CONFIG.music?.audioSrc) {
    return [{
      title: CONFIG.music.title || "Track",
      artist: CONFIG.music.artist || "Artist",
      audioSrc: CONFIG.music.audioSrc
    }];
  }
  return [];
}

function updateTrackDisplay(track) {
  const titleEl = document.getElementById('track-title');
  const artistEl = document.getElementById('track-artist');
  const trackText = document.querySelector('.track-text');

  if (trackText) {
    trackText.classList.add('fade-transition');
    setTimeout(() => {
      if (titleEl) titleEl.textContent = track.title || "Track";
      if (artistEl) artistEl.textContent = track.artist || "Artist";
      trackText.classList.remove('fade-transition');
    }, 120);
  } else {
    if (titleEl) titleEl.textContent = track.title || "Track";
    if (artistEl) artistEl.textContent = track.artist || "Artist";
  }

  const skipBtn = document.getElementById('skip-btn');
  const prevBtn = document.getElementById('prev-btn');
  if (playlist.length > 1) {
    const nextIdx = (currentTrackIndex + 1) % playlist.length;
    const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    if (skipBtn) skipBtn.title = `Morceau suivant (Skip) : ${playlist[nextIdx].title}`;
    if (prevBtn) prevBtn.title = `Morceau précédent : ${playlist[prevIdx].title}`;
  }

  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: track.title || "Track",
        artist: track.artist || "Artist"
      });
    } catch (_) {}
  }
}

function loadTrack(index, autoPlay = false) {
  if (!playlist.length) return;
  currentTrackIndex = ((index % playlist.length) + playlist.length) % playlist.length;
  const track = playlist[currentTrackIndex];

  updateTrackDisplay(track);

  if (!audio) {
    audio = document.getElementById('bg-audio');
  }

  if (audio) {
    audio.src = track.audioSrc;
    if (autoPlay) {
      audio.play().then(() => {
        isPlaying = true;
        updatePlayerUI(true);
      }).catch(err => {
        console.warn("Lecture audio bloquée ou restreinte :", err);
      });
    }
  }
}

function nextTrack(autoPlay = true) {
  if (!playlist.length) return;
  const nextIdx = (currentTrackIndex + 1) % playlist.length;
  loadTrack(nextIdx, autoPlay || isPlaying);
}

function prevTrack(autoPlay = true) {
  if (!playlist.length) return;
  if (audio && audio.currentTime > 3) {
    audio.currentTime = 0;
    if (autoPlay || isPlaying) {
      audio.play().catch(() => {});
    }
    return;
  }
  const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(prevIdx, autoPlay || isPlaying);
}

function updatePlayerUI(playing) {
  const playBtn = document.getElementById('play-btn');
  const musicDock = document.getElementById('music-dock');
  const vinyl = document.getElementById('vinyl-disc');

  if (playBtn) {
    playBtn.innerHTML = playing ? ICONS['pause'] : ICONS['play'];
  }
  if (musicDock) {
    musicDock.classList.toggle('playing', playing);
  }
  if (vinyl) {
    vinyl.classList.toggle('playing', playing);
  }
}

function initAudio() {
  const musicDock = document.getElementById('music-dock');
  if (!CONFIG.music || !CONFIG.music.enabled) {
    if (musicDock) musicDock.style.display = 'none';
    return;
  }

  playlist = getPlaylist();
  if (playlist.length === 0) {
    if (musicDock) musicDock.style.display = 'none';
    return;
  }

  audio = document.getElementById('bg-audio');
  if (!audio) return;

  audio.volume = CONFIG.music.defaultVolume !== undefined ? CONFIG.music.defaultVolume : 0.35;
  audio.loop = false;

  loadTrack(0, false);

  audio.addEventListener('ended', () => {
    nextTrack(true);
  });

  const playBtn = document.getElementById('play-btn');
  const skipBtn = document.getElementById('skip-btn');
  const prevBtn = document.getElementById('prev-btn');
  const volumeSlider = document.getElementById('volume-slider');

  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlay();
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextTrack(true);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevTrack(true);
    });
  }

  if (volumeSlider) {
    volumeSlider.value = audio.volume * 100;
    volumeSlider.addEventListener('input', (e) => {
      audio.volume = e.target.value / 100;
    });
  }

  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.setActionHandler('play', () => togglePlay(true));
      navigator.mediaSession.setActionHandler('pause', () => togglePlay(false));
      navigator.mediaSession.setActionHandler('nexttrack', () => nextTrack(true));
      navigator.mediaSession.setActionHandler('previoustrack', () => prevTrack(true));
    } catch (_) {}
  }
}

function togglePlay(forcePlay) {
  if (!audio) return;

  if (forcePlay === true || (!isPlaying && forcePlay !== false)) {
    audio.play().then(() => {
      isPlaying = true;
      updatePlayerUI(true);
    }).catch(err => {
      console.warn("Autoplay restreint par le navigateur :", err);
    });
  } else {
    audio.pause();
    isPlaying = false;
    updatePlayerUI(false);
  }
}

function initClickOverlay() {
  const overlay = document.getElementById('click-overlay');
  const enterText = document.getElementById('enter-text');
  if (CONFIG.theme.enterText && enterText) {
    enterText.textContent = CONFIG.theme.enterText;
  }

  overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');

    if (CONFIG.music.enabled && CONFIG.music.autoplayOnEnter) {
      togglePlay(true);
    }
  });
}

function init3DTilt() {
  if (!CONFIG.theme.tiltEffect) return;
  if (window.innerWidth < 768) return;

  const cards = document.querySelectorAll('.profile-card, .discord-card, .steam-card, .specs-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.012, 1.012, 1.012)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

function initParticles() {
  const canvas = document.getElementById('canvas-bg');
  if (!canvas || CONFIG.theme.particlesEffect === 'none') {
    if (canvas) canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = width < 600 ? 35 : 70;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: Math.random() * 0.7 + 0.2,
      opacity: Math.random() * 0.6 + 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y > height) {
        p.y = -5;
        p.x = Math.random() * width;
      }
      if (p.x > width) p.x = 0;
      if (p.x < 0) p.x = width;
    }

    requestAnimationFrame(render);
  }

  render();
}

function initClickSparks() {
  if (!CONFIG.theme.clickSparks) return;

  window.addEventListener('click', (e) => {
    if (e.target.closest('#music-dock, .volume-slider')) return;
    createSparks(e.clientX, e.clientY);
  });
}

function createSparks(x, y) {
  const sparkCount = 7;
  for (let i = 0; i < sparkCount; i++) {
    const spark = document.createElement('div');
    spark.className = 'click-spark';

    const angle = (Math.PI * 2 / sparkCount) * i + (Math.random() - 0.5);
    const distance = Math.random() * 30 + 20;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;

    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.setProperty('--tx', `${tx}px`);
    spark.style.setProperty('--ty', `${ty}px`);

    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 600);
  }
}
