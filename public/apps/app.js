/* ==========================================================================
   KRAFTOR APP SPACE - CORE APPLICATION ENGINE (ACTUAL APPS DATA)
   ========================================================================== */

// 1. Core Applications Data
const KRAFTOR_APPS = [
  {
    id: "kraftorapp",
    name: "Kraftor App",
    tagline: "Agency Portal, Client CRM & Employee Workspace",
    category: "Business & Utility",
    categoryKey: "business",
    rating: "4.9",
    size: "79.8 MB",
    downloads: "5K+",
    lastUpdated: "July 28, 2026",
    version: "1.2.0",
    developer: "Prakhar",
    accentColor: "var(--color-kraftor)",
    accentRgb: "249, 115, 22", // imperial gold
    logoUrl: "app-data/kraftor/app_logo.jpg",
    downloadUrl: "app-data/kraftor/kraftor.apk",
    downloadLabel: "Download APK File",
    downloadIcon: "download",
    shortDesc: "A multi-role React Native application for Kraftor. Integrates client CRM dashboards, real-time project chats, employee attendance logging, salary checkouts, and admin business metrics.",
    longDesc: "The Kraftor App is a complete React Native (Expo) mobile application that syncs live with the main website's database. It offers role-based access for the general public, registered clients, employees, and administrators. It consolidates CRM capabilities, HR logs, salary slips distribution, lead tracking, and client assets vaults into a unified workspace.",
    techStack: ["React Native", "Expo", "PHP Laravel", "MySQL", "WebSockets", "Firebase Cloud Storage"],
    features: [
      {
        icon: "hub",
        title: "Role-Based Multi-Portal",
        desc: "Custom gateways for Public users, Authenticated Clients, Employees, and Administrators within a single mobile app."
      },
      {
        icon: "account_balance",
        title: "Client CRM & Billing",
        desc: "Clients can monitor ongoing projects, accept/decline quotations, view detailed invoices, and book virtual meetings."
      },
      {
        icon: "alarm",
        title: "Employee HR Workspace",
        desc: "Employees clock in/out with geolocation tracking, submit leaves, check off assigned tasks, and download detailed salary payslips."
      },
      {
        icon: "dashboard",
        title: "Admin Executive Dashboard",
        desc: "Business owners can view revenue metrics, manage accounts, distribute payroll, review AI chatbot leads, and upload files to client vaults."
      },
      {
        icon: "campaign",
        title: "Public Service Directory",
        desc: "Browse core agency services (Design, Dev, Video/VFX, Ads, AI), view standard package pricing, and apply for open career positions."
      }
    ],
    screenshots: [
      "app-data/kraftor/kraftor-screen-shot-1.jpg",
      "app-data/kraftor/kraftor-screen-shot-2.jpg",
      "app-data/kraftor/kraftor-screen-shot-3.jpg",
      "app-data/kraftor/kraftor-screen-shot-4.jpg",
      "app-data/kraftor/kraftor-screen-shot-5.jpg",
      "app-data/kraftor/kraftor-screen-shot-6.jpg",
      "app-data/kraftor/kraftor-screen-shot-7.jpg",
      "app-data/kraftor/kraftor-screen-shot-8.jpg"
    ],
    specs: {
      "Operating System": "Android (APK Available)",
      "Sync Mode": "Live Database Sync",
      "Client Test Login": "client@kraftor.in (client123)",
      "Employee Test Login": "emp@kraftor.in (emp123)",
      "Backend Framework": "PHP Laravel Core API",
      "Features Integrations": "Push Announcements & HR Ledger"
    }
  },
  {
    id: "ustad",
    name: "Ustad",
    tagline: "Razorpay-Integrated Course Selling App",
    category: "Education",
    categoryKey: "education",
    rating: "4.8",
    size: "30.4 MB",
    downloads: "50K+",
    lastUpdated: "July 28, 2026",
    version: "3.2.1",
    developer: "Prakhar",
    accentColor: "var(--color-ustad)",
    accentRgb: "14, 165, 233", // sky electric blue
    logoUrl: "app-data/ustad/logo_appustad.jpeg",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.ustad.app",
    downloadLabel: "Get on Play Store",
    downloadIcon: "play_store",
    shortDesc: "A feature-rich e-learning platform built for Tassawar Khan Academy. Includes Firebase student authentication, Razorpay payment triggers, embedded video lessons, and PDF note downloaders.",
    longDesc: "Ustad is an educational mobile application tailored for course distribution. It allows students to sign up, explore catalogs, enroll in courses securely using Razorpay, watch video lectures, and download study notes. Administrators have full course curation models, manual payment approvals, and client ticket resolvers built-in.",
    techStack: ["React Native", "Expo", "Redux Toolkit", "Node.js", "Express", "Firebase", "Razorpay"],
    features: [
      {
        icon: "school",
        title: "Course Catalog & Previews",
        desc: "Browse categorized courses, read course overviews, and watch designated 'Free Preview' lessons before purchasing."
      },
      {
        icon: "credit_card",
        title: "Razorpay Checkout Gateway",
        desc: "Seamless, secure in-app payments to enroll in premium courses, with support for manual payment slips approval by admins."
      },
      {
        icon: "play_circle",
        title: "Video Learning Studio",
        desc: "Watch lessons directly inside the app with YouTube-embedded players and fetch notes (PDF/docs) linked to specific lessons."
      },
      {
        icon: "support_agent",
        title: "Admin CMS & CRM desks",
        desc: "Admins create courses, coordinate lessons, toggle free previews, manage registered users, and resolve customer support tickets."
      }
    ],
    screenshots: [
      "app-data/ustad/ustad-screen-shot-1.jpg",
      "app-data/ustad/ustad-screen-shot-2.jpg",
      "app-data/ustad/ustad-screen-shot-3.jpg",
      "app-data/ustad/ustad-screen-shot-4.jpg",
      "app-data/ustad/ustad-screen-shot-5.jpeg",
      "app-data/ustad/ustad-screen-shot-6.jpg",
      "app-data/ustad/ustad-screen-shot-7.jpg",
      "app-data/ustad/ustad-screen-shot-8.jpg"
    ],
    specs: {
      "Operating System": "Android (Play Store Active)",
      "Academy Affiliate": "Tassawar Khan Academy",
      "Payment Gateway": "Razorpay In-App Billing",
      "State Handler": "Redux Toolkit Store",
      "Database Layer": "Firebase Firestore Cloud",
      "Video Stream": "YouTube API Integration"
    }
  },
  {
    id: "cloudkitchen",
    name: "Cloud Kitchen",
    tagline: "Dynamic Food Delivery & Restaurant Platform",
    category: "Food & Drink",
    categoryKey: "food",
    rating: "4.8",
    size: "25.4 MB",
    downloads: "10K+",
    lastUpdated: "July 28, 2026",
    version: "1.0.4",
    developer: "Prakhar",
    accentColor: "var(--color-cloudkitchen)",
    accentRgb: "239, 68, 68", // flame red
    downloadUrl: "app-data/cloud-kitchen/cloud-kitchen.apk",
    downloadLabel: "Download APK File",
    downloadIcon: "download",
    logoSvg: `
      <svg viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad_kitchen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ef4444" />
            <stop offset="100%" stop-color="#dc2626" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill="url(#grad_kitchen)" />
        <path d="M25,55 C25,40 35,32 50,32 C65,32 75,40 75,55 L25,55 Z" fill="#ffffff" />
        <rect x="22" y="58" width="56" height="6" rx="2" fill="#ffffff" />
        <circle cx="50" cy="24" r="5" fill="#ffffff" />
        <path d="M35,68 L65,68" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
      </svg>
    `,
    shortDesc: "An end-to-end restaurant ecosystem combining customer ordering apps (Veg/Non-Veg toggles, live COD checkout, status tracker), delivery partner modules, and Laravel admin dashboards.",
    longDesc: "Cloud Kitchen is a fully integrated, multi-app catering ecosystem. It bridges the gap between hungry customers, delivery personnel, and restaurant operators. The platform handles menus, order routing, real-time location streaming, promotional banners scheduling, and monthly revenue analytics securely.",
    techStack: ["React Native", "Expo", "PHP Laravel Backend", "MySQL", "Expo Push Notifications"],
    features: [
      {
        icon: "restaurant_menu",
        title: "Customer Mobile Ordering",
        desc: "Guest mode browsing, dietary filters (Veg / Non-Veg toggle), food categories, cart editor, and Cash on Delivery (COD) order placement."
      },
      {
        icon: "route",
        title: "Live Order Status Tracking",
        desc: "Real-time updates on orders (Pending, Cooking, Out for Delivery), including invoice generation, history, and push notifications."
      },
      {
        icon: "sports_motorsports",
        title: "Delivery Partner Client",
        desc: "A dedicated mobile app for delivery agents to accept tasks, update delivery progress, and stream live coordinate location vectors."
      },
      {
        icon: "query_stats",
        title: "Laravel Admin Dashboard",
        desc: "Web panel to view incoming orders, assign them to partners, manage menus (CRUD), upload festival banners, and download PDF sales reports."
      }
    ],
    screenshots: [
      "app-data/cloud-kitchen/cloud-screen-shot-1.jpeg",
      "app-data/cloud-kitchen/cloud-screen-shot-2.jpg",
      "app-data/cloud-kitchen/cloud-screen-shot-3.jpg",
      "app-data/cloud-kitchen/cloud-screen-shot-4.jpg",
      "app-data/cloud-kitchen/cloud-screen-shot-5.jpg",
      "app-data/cloud-kitchen/cloud-screen-shot-6.jpg",
      "app-data/cloud-kitchen/cloud-screen-shot-7.jpg",
      "app-data/cloud-kitchen/cloud-screen-shot-8.jpg"
    ],
    specs: {
      "Operating System": "Android & iOS Clients",
      "Backend Service": "PHP Laravel Framework",
      "Database Core": "MySQL Database Server",
      "Payment Support": "Cash On Delivery (COD)",
      "Partner App": "React Native Delivery App",
      "Push Channels": "Expo Notifications Hub"
    }
  }
];

// 2. Active Application State
let currentAppsState = [...KRAFTOR_APPS];
let activeCategory = "all";
let searchQuery = "";

// 3. Document Elements
document.addEventListener("DOMContentLoaded", () => {
  init();
});

function init() {
  // Initial Page Render
  renderFeaturedHero(KRAFTOR_APPS[1]); // default Kraftor App as featured
  renderAppGrid(KRAFTOR_APPS);
  
  // Set up Event Listeners
  setupEventListeners();
  
  // Check and Load Theme from LocalStorage
  loadThemePreference();
}

// 4. Render Functions
function renderFeaturedHero(app) {
  const heroContainer = document.getElementById("heroShowcase");
  if (!heroContainer) return;
  
  heroContainer.style.setProperty("--hero-accent", app.accentColor);
  
  // Choose first screenshot as mockup screen image
  const screenshotImg = app.screenshots[0];
  
  // Logo check: Image logo vs vector SVG fallback
  let logoHTML = "";
  if (app.logoUrl) {
    logoHTML = `<img src="${app.logoUrl}" alt="${app.name} Logo" class="hero-logo-img" />`;
  } else {
    logoHTML = app.logoSvg;
  }
  
  heroContainer.innerHTML = `
    <div class="hero-card">
      <div class="hero-card-glow" style="background: ${app.accentColor}"></div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="material-symbols-rounded">stars</span>
          Featured Application
        </div>
        <h3 class="hero-title">${app.name}</h3>
        <p class="hero-tagline">${app.tagline}</p>
        <p class="hero-desc">${app.shortDesc}</p>
        <div class="hero-cta-row">
          <button class="btn-primary" onclick="openAppDetailsModal('${app.id}')">
            <span class="material-symbols-rounded">info</span>
            Explore Features
          </button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-mockup-frame">
          <div class="hero-mockup-screen">
            <img src="${screenshotImg}" alt="App Preview Screen" class="hero-mockup-screen-img" />
          </div>
          <div class="hero-mockup-glow" style="background: ${app.accentColor}"></div>
        </div>
      </div>
    </div>
  `;
}

function renderAppGrid(apps) {
  const gridContainer = document.getElementById("appGrid");
  const noResultsContainer = document.getElementById("noResults");
  const countContainer = document.getElementById("appsCount");
  
  if (!gridContainer || !noResultsContainer || !countContainer) return;
  
  // Update count indicator
  countContainer.textContent = `${apps.length} App${apps.length === 1 ? '' : 's'} Available`;
  
  if (apps.length === 0) {
    gridContainer.style.display = "none";
    noResultsContainer.style.display = "block";
    return;
  }
  
  gridContainer.style.display = "grid";
  noResultsContainer.style.display = "none";
  
  gridContainer.innerHTML = apps.map(app => {
    // Logo check
    let logoHTML = "";
    if (app.logoUrl) {
      logoHTML = `<img src="${app.logoUrl}" alt="${app.name} Logo" class="card-logo-img" />`;
    } else {
      logoHTML = app.logoSvg;
    }
    
    return `
      <article class="app-card" onclick="openAppDetailsModal('${app.id}')" style="--card-accent: ${app.accentColor}; --card-accent-rgb: ${app.accentRgb};">
        <div class="app-card-top">
          <div class="card-icon-box" style="background: ${app.logoUrl ? 'transparent' : app.accentColor};">
            ${logoHTML}
          </div>
          <div class="card-header-info">
            <h3 class="card-app-title">${app.name}</h3>
            <span class="card-app-dev">by ${app.developer}</span>
          </div>
        </div>
        
        <div class="card-body">
          <p class="card-description">${app.shortDesc}</p>
          
          <div class="card-badges">
            <span class="card-badge theme-badge">${app.category}</span>
            <span class="card-badge">${app.techStack[0]}</span>
            <span class="card-badge">${app.techStack[1]}</span>
          </div>
          
          <div class="card-footer">
            <div class="card-rating">
              <span class="material-symbols-rounded">star</span>
              <span>${app.rating}</span>
            </div>
            <span class="card-stats">${app.size}</span>
            <span class="material-symbols-rounded card-action-arrow">arrow_forward</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 5. Interaction Controllers
function setupEventListeners() {
  // Search bar input filter
  const searchInput = document.getElementById("appSearch");
  const clearSearchBtn = document.getElementById("clearSearch");
  const heroShowcase = document.getElementById("heroShowcase");
  
  if (searchInput && clearSearchBtn) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      
      // Toggle clear search button visibility
      if (searchQuery.length > 0) {
        clearSearchBtn.style.display = "flex";
        // Hide Hero showcase when active search query is entered
        if (heroShowcase) heroShowcase.style.display = "none";
      } else {
        clearSearchBtn.style.display = "none";
        // Restore Hero showcase if category is all
        if (heroShowcase && activeCategory === "all") heroShowcase.style.display = "block";
      }
      
      applyFilters();
    });
    
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearSearchBtn.style.display = "none";
      if (heroShowcase && activeCategory === "all") heroShowcase.style.display = "block";
      applyFilters();
    });
  }
  
  // Category Pill Filter Buttons
  const categoryFilters = document.getElementById("categoryFilters");
  if (categoryFilters) {
    const pills = categoryFilters.querySelectorAll(".filter-pill");
    pills.forEach(pill => {
      pill.addEventListener("click", () => {
        // Clear active pill state
        pills.forEach(p => p.classList.remove("active"));
        
        // Mark current pill as active
        pill.classList.add("active");
        
        activeCategory = pill.getAttribute("data-category");
        
        // Hide or Show Featured Hero Banner depending on category selection
        if (heroShowcase) {
          if (activeCategory === "all" && searchQuery === "") {
            heroShowcase.style.display = "block";
          } else {
            heroShowcase.style.display = "none";
          }
        }
        
        applyFilters();
      });
    });
  }
  
  // Light/Dark Theme Switch Trigger
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const body = document.body;
      const currentTheme = body.getAttribute("data-theme");
      const targetTheme = currentTheme === "dark" ? "light" : "dark";
      
      body.setAttribute("data-theme", targetTheme);
      updateThemeTogglerUI(targetTheme);
      localStorage.setItem("kraftor-theme", targetTheme);
    });
  }
  
  // Modal Close triggers
  const modalCloseBtn = document.getElementById("modalClose");
  const modalOverlay = document.getElementById("appModal");
  
  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener("click", closeAppDetailsModal);
    modalOverlay.addEventListener("click", (e) => {
      // Close only if clicked directly on overlay backdrop
      if (e.target === modalOverlay) {
        closeAppDetailsModal();
      }
    });
  }
  
  // Listen for Escape key to close modal
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
      closeAppDetailsModal();
    }
  });
}

function applyFilters() {
  let filtered = [...KRAFTOR_APPS];
  
  // 1. Filter by category
  if (activeCategory !== "all") {
    filtered = filtered.filter(app => app.categoryKey === activeCategory);
  }
  
  // 2. Filter by search query
  if (searchQuery.length > 0) {
    filtered = filtered.filter(app => {
      const matchName = app.name.toLowerCase().includes(searchQuery);
      const matchTag = app.tagline.toLowerCase().includes(searchQuery);
      const matchDesc = app.shortDesc.toLowerCase().includes(searchQuery);
      const matchTech = app.techStack.some(t => t.toLowerCase().includes(searchQuery));
      return matchName || matchTag || matchDesc || matchTech;
    });
  }
  
  // Render grid results
  renderAppGrid(filtered);
}

// 6. Modal Window Controller
window.openAppDetailsModal = function(appId) {
  const app = KRAFTOR_APPS.find(a => a.id === appId);
  if (!app) return;
  
  const modalOverlay = document.getElementById("appModal");
  const modalContent = document.getElementById("modalContent");
  
  if (!modalOverlay || !modalContent) return;
  
  // Lock document scroll
  document.body.style.overflow = "hidden";
  
  // Logo check for Modal
  let logoHTML = "";
  if (app.logoUrl) {
    logoHTML = `<img src="${app.logoUrl}" alt="${app.name} Logo" class="modal-logo-img" />`;
  } else {
    logoHTML = app.logoSvg;
  }
  
  // Action/Download Buttons
  let downloadButtonHTML = "";
  if (app.downloadUrl) {
    let actionIcon = "download";
    if (app.downloadIcon === "play_store") actionIcon = "open_in_new";
    
    downloadButtonHTML = `
      <a href="${app.downloadUrl}" class="btn-download-action" download style="background-color: ${app.accentColor};">
        <span class="material-symbols-rounded">${actionIcon}</span>
        <span>${app.downloadLabel}</span>
      </a>
    `;
  } else {
    downloadButtonHTML = `
      <div class="badge-internal-release">
        <span class="material-symbols-rounded">security</span>
        <span>Internal Release Only</span>
      </div>
    `;
  }
  
  // Populate content
  modalContent.innerHTML = `
    <!-- Header Hero with ambient background -->
    <div class="modal-header-hero" style="--modal-accent: ${app.accentColor}; --modal-accent-rgb: ${app.accentRgb};">
      <div class="modal-icon-box" style="background: ${app.logoUrl ? 'transparent' : app.accentColor};">
        ${logoHTML}
      </div>
      <div class="modal-header-text">
        <h2 class="modal-app-title">${app.name}</h2>
        <span class="modal-app-tagline">${app.tagline}</span>
        
        <div style="display:flex; align-items:center; gap:16px; margin-bottom:12px; flex-wrap:wrap;">
          <div class="modal-meta-row">
            <div class="modal-meta-pill">
              <span class="material-symbols-rounded rating-star">star</span>
              <span>${app.rating} / 5.0</span>
            </div>
            <div class="modal-meta-pill">
              <span class="material-symbols-rounded">download_for_offline</span>
              <span>${app.downloads}</span>
            </div>
            <div class="modal-meta-pill">
              <span class="material-symbols-rounded">save</span>
              <span>${app.size}</span>
            </div>
          </div>
          
          ${downloadButtonHTML}
        </div>
      </div>
    </div>
    
    <!-- Screenshot interactive mockups -->
    <div class="modal-gallery-section" style="--modal-accent: ${app.accentColor};">
      <h3 class="gallery-title">Application Screenshots</h3>
      <div class="gallery-scroll">
        ${app.screenshots.map((screen, idx) => {
          return `
            <div class="mockup-card">
              <div class="mockup-screen-img-container">
                <img src="${screen}" alt="Screenshot ${idx + 1}" class="mockup-screen-img" loading="lazy" />
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
    
    <!-- Navigation Tabs -->
    <div class="modal-tabs-nav" style="--modal-accent: ${app.accentColor};">
      <button class="modal-tab-btn active" onclick="switchModalTab(event, 'tab-overview')">About App</button>
      <button class="modal-tab-btn" onclick="switchModalTab(event, 'tab-features')">Core Features</button>
    </div>
    
    <!-- Tab Panes -->
    <div class="modal-tab-body" style="--modal-accent: ${app.accentColor}; --modal-accent-rgb: ${app.accentRgb};">
      
      <!-- Tab 1: Overview -->
      <div class="tab-pane active" id="tab-overview">
        <div class="overview-layout">
          <div class="overview-main">
            <h3>Overview</h3>
            <p>${app.longDesc}</p>
            
            <h3 style="margin-top: 24px;">Technology Stack</h3>
            <div class="tech-badges-box">
              ${app.techStack.map(tech => `
                <span class="tech-badge">
                  <span class="tech-badge-dot"></span>
                  ${tech}
                </span>
              `).join("")}
            </div>
          </div>
          
          <div class="overview-side">
            <h3 style="font-size:14px; text-transform:uppercase; color:var(--text-muted); margin-bottom:16px;">App Details</h3>
            <div class="spec-list">
              ${Object.entries(app.specs).map(([key, val]) => `
                <div class="spec-item">
                  <span class="spec-label">${key}</span>
                  <span class="spec-value" style="text-align: right; max-width: 60%; word-break: break-all;">${val}</span>
                </div>
              `).join("")}
              <div class="spec-item">
                <span class="spec-label">Version</span>
                <span class="spec-value">${app.version}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Updated</span>
                <span class="spec-value">${app.lastUpdated}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Developer</span>
                <span class="spec-value">${app.developer}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Tab 2: Features -->
      <div class="tab-pane" id="tab-features">
        <div class="features-grid">
          <h3>Interactive Modules</h3>
          ${app.features.map(f => {
            return `
              <div class="feature-bullet">
                <div class="feature-bullet-icon">
                  <span class="material-symbols-rounded">${f.icon}</span>
                </div>
                <div class="feature-bullet-text">
                  <h4>${f.title}</h4>
                  <p>${f.desc}</p>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
      
    </div>
  `;
  
  // Show Modal
  modalOverlay.classList.add("active");
  modalOverlay.setAttribute("aria-hidden", "false");
};

window.closeAppDetailsModal = function() {
  const modalOverlay = document.getElementById("appModal");
  if (!modalOverlay) return;
  
  modalOverlay.classList.remove("active");
  modalOverlay.setAttribute("aria-hidden", "true");
  
  // Restore document scroll
  document.body.style.overflow = "";
};

window.switchModalTab = function(event, tabId) {
  const clickedTab = event.currentTarget;
  const tabsContainer = clickedTab.parentElement;
  
  // Clear active tab buttons
  tabsContainer.querySelectorAll(".modal-tab-btn").forEach(btn => btn.classList.remove("active"));
  // Mark clicked as active
  clickedTab.classList.add("active");
  
  // Hide all tab panes
  const bodyContainer = tabsContainer.nextElementSibling;
  bodyContainer.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
  
  // Show targeted tab pane
  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add("active");
};

// 7. Theme Preference Manager
function loadThemePreference() {
  const savedTheme = localStorage.getItem("kraftor-theme");
  
  if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
    updateThemeTogglerUI(savedTheme);
  } else {
    // Default to light mode if no local setting exists
    document.body.setAttribute("data-theme", "light");
    updateThemeTogglerUI("light");
  }
}

function updateThemeTogglerUI(theme) {
  const darkIcon = document.querySelector(".theme-icon-dark");
  const lightIcon = document.querySelector(".theme-icon-light");
  
  if (!darkIcon || !lightIcon) return;
  
  if (theme === "light") {
    darkIcon.style.display = "none";
    lightIcon.style.display = "flex";
  } else {
    darkIcon.style.display = "flex";
    lightIcon.style.display = "none";
  }
}
