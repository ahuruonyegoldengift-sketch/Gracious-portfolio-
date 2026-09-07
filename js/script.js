/**
 * GRACIOUS EBERECHUKWU — PROFESSIONAL DEVELOPER PORTFOLIO
 * Vanilla JavaScript (ES6+)
 * 
 * Clean, organized, editable configuration & interactive features.
 */

// ============================================================
// DEVELOPER CONFIGURATION (Easily editable personal info)
// ============================================================
const developer = {
    name: "Gracious Eberechukwu",
    title: "Web Developer",
    subtitle: "Web Developer & Creative Problem Solver",
    location: "Nigeria",
    email: "madebygracie287@gmail.com",
    experience: "2+ Years",
    specialization: "Frontend Development",
    availability: "Available for Opportunities",
    bio: "I'm a passionate web developer who enjoys transforming ideas into beautiful, functional and user-friendly digital experiences. I specialize in building responsive websites and interactive web applications while continuously learning and improving my technical skills.",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/"
};

// ============================================================
// PROJECT DATABASE (Real Project URLs & Categories)
// ============================================================
const projects = [
    {
        id: "project-1",
        title: "Obsidian Athletics",
        subtitle: "Fitness & Athletic Performance Web Platform",
        type: "Web Development",
        category: "web-development",
        isLiveWebsite: true,
        buttonText: "VIEW LIVE WEBSITE",
        displayUrl: "happy-page-builder-762.lovable.app",
        description: "A high-impact athletic training and gym website engineered for modern fitness enthusiasts. Features class schedules, membership pricing tiers, dynamic trainer showcases, and a responsive booking interface.",
        url: "https://happy-page-builder-762.lovable.app/",
        image: "images/project1.jpg",
        features: ["Live Production Site", "Class Booking UI", "Responsive Design", "Fast Load Speed"],
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Layout"],
        github: ""
    },
    {
        id: "project-2",
        title: "Stitch Design Project",
        subtitle: "Google Stitch UI/UX Design System & Web App",
        type: "UI/UX Design",
        category: "ui-ux-design",
        isLiveWebsite: false,
        buttonText: "VIEW DESIGN",
        displayUrl: "stitch.withgoogle.com/projects/12377891430504498673",
        description: "Comprehensive web interface design prototype crafted on Google Stitch. Establishes design tokens, cohesive typographic scale, interactive dashboard components, and fluid responsive wireframes.",
        url: "https://stitch.withgoogle.com/projects/12377891430504498673",
        image: "images/project2.jpg",
        features: ["Google Stitch Prototype", "Design System Tokens", "Dashboard Hierarchy", "Wireframe Flows"],
        technologies: ["UI/UX Design", "Wireframing", "Design Systems", "Figma/Stitch"],
        github: ""
    },
    {
        id: "project-3",
        title: "CLAT Restaurant & Lounge",
        subtitle: "Luxury Culinary & Hospitality Web Experience",
        type: "Web Development",
        category: "web-development",
        isLiveWebsite: true,
        buttonText: "VIEW LIVE WEBSITE",
        displayUrl: "lucent-sprite-49b9f8.netlify.app",
        description: "Elegant restaurant and cocktail lounge website capturing ambient dining aesthetics. Highlights seasonal tasting menus, chef's selections, online reservation requests, and seamless mobile responsiveness.",
        url: "https://lucent-sprite-49b9f8.netlify.app",
        image: "images/project3.jpg",
        features: ["Live Web Application", "Table Reservation UI", "Artisanal Menu Layout", "Mobile Diners"],
        technologies: ["HTML5", "CSS3", "JavaScript", "Interactive UI"],
        github: ""
    },
    {
        id: "project-4",
        title: "Gracious Apex",
        subtitle: "Web Development Studio & Technical Portfolio",
        type: "Web Development",
        category: "web-development",
        isLiveWebsite: true,
        buttonText: "VIEW PROJECT",
        displayUrl: "gracious-apex.ai.studio",
        description: "Modern web development showcase engineered by Gracious, emphasizing clean modular code, performance metrics, bespoke responsive layouts, and modern frontend styling.",
        url: "https://gracious-apex.ai.studio",
        image: "images/project4.jpg",
        features: ["Live Deployment", "Semantic HTML5", "Modern CSS Architecture", "98+ Performance"],
        technologies: ["Web Development", "Responsive Layout", "Modern CSS", "JavaScript"],
        github: ""
    },
    {
        id: "project-5",
        title: "Stitch Design Project 2",
        subtitle: "Digital Workflow & Productivity UI Concept",
        type: "UI/UX Design",
        category: "ui-ux-design",
        isLiveWebsite: false,
        buttonText: "VIEW DESIGN",
        displayUrl: "stitch.withgoogle.com/projects/16420433953498625092",
        description: "Interactive UI/UX design exploration on Google Stitch modeling modern productivity tools. Features clean task boards, data cards, intuitive search and navigation, and ergonomic visual hierarchy.",
        url: "https://stitch.withgoogle.com/projects/16420433953498625092",
        image: "images/project5.jpg",
        features: ["Interactive Prototype", "Workflow UX", "Component States", "Visual Hierarchy"],
        technologies: ["UI/UX Design", "Component Design", "Prototypes", "User Experience"],
        github: ""
    }
];

// ============================================================
// INITIALIZATION & DOM CONTENT LOADED
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNavigation();
    renderProjects("all");
    initProjectFilters();
    initContactForm();
    initStatsCounter();
    initScrollToTop();
    initSmoothScroll();
});

// ============================================================
// THEME SWITCHER (Dark / Light Mode with localStorage)
// Default is Dark Mode
// ============================================================
function initTheme() {
    const savedTheme = localStorage.getItem("ge-portfolio-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("ge-portfolio-theme", newTheme);
        });
    }
}

// ============================================================
// NAVIGATION & ACTIVE SECTION SPY
// ============================================================
function initNavigation() {
    const navbar = document.getElementById("navbar");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Sticky nav on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        highlightActiveSection();
    });

    // Mobile Hamburger Menu
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle("open");
            hamburgerBtn.setAttribute("aria-expanded", isOpen);
        });

        // Close when clicking nav link
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                hamburgerBtn.setAttribute("aria-expanded", "false");
            });
        });

        // Close on outside click
        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                navMenu.classList.remove("open");
                hamburgerBtn.setAttribute("aria-expanded", "false");
            }
        });
    }

    function highlightActiveSection() {
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }
}

// ============================================================
// SMOOTH SCROLLING
// ============================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

// ============================================================
// PROJECTS RENDERING & FILTERING
// ============================================================
function renderProjects(filterCategory = "all") {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    let filtered = projects;
    if (filterCategory === "web-development") {
        filtered = projects.filter(p => p.category === "web-development");
    } else if (filterCategory === "ui-ux-design") {
        filtered = projects.filter(p => p.category === "ui-ux-design");
    } else if (filterCategory === "web-design") {
        filtered = projects.filter(p => p.category === "web-design");
    } else if (filterCategory === "design-concepts") {
        filtered = projects.filter(p => p.category === "design-concepts");
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
                <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No projects found in this category yet.</p>
                <p style="font-size: 0.9rem;">Check back soon as Gracious adds new projects!</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(project => {
        const badgeClass = project.isLiveWebsite ? "badge-live" : "badge-design";
        const badgeText = project.isLiveWebsite ? "ACTIVE DEPLOYMENT" : "DESIGN PROTOTYPE";
        const techTagsHtml = project.technologies && project.technologies.length > 0
            ? project.technologies.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join("")
            : `<span class="tech-tag">Web Standards</span>`;
        
        const featuresHtml = project.features && project.features.length > 0
            ? `
                <div class="project-features-list">
                    ${project.features.map(f => `
                        <div class="feature-pill">
                            <span class="feature-pill-icon">✓</span>
                            <span>${escapeHtml(f)}</span>
                        </div>
                    `).join("")}
                </div>
            `
            : "";

        return `
            <article class="project-card" data-category="${project.category}">
                <!-- Realistic Browser Chrome Mockup -->
                <div class="project-preview">
                    <div class="browser-chrome">
                        <div class="browser-dots">
                            <span class="browser-dot dot-close"></span>
                            <span class="browser-dot dot-minimize"></span>
                            <span class="browser-dot dot-maximize"></span>
                        </div>
                        <div class="browser-address-bar">
                            <svg class="browser-lock-icon" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <span class="browser-url-text">${escapeHtml(project.displayUrl || "production-preview.app")}</span>
                        </div>
                        <div class="browser-actions">
                            <a 
                                href="${escapeHtml(project.url)}" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                class="browser-external-link" 
                                title="Open in new tab"
                                aria-label="Open ${escapeHtml(project.title)} in new tab"
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div class="browser-viewport">
                        <span class="viewport-status-tag ${badgeClass}">
                            <span class="status-pulse-dot"></span>
                            ${badgeText}
                        </span>
                        <img 
                            src="${escapeHtml(project.image)}" 
                            alt="${escapeHtml(project.title)} UI Screenshot" 
                            class="project-img" 
                            loading="lazy"
                            onerror="this.onerror=null; this.src='images/project1.jpg';"
                        />
                        <div class="viewport-hover-overlay">
                            <a 
                                href="${escapeHtml(project.url)}" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                class="btn-preview-launch"
                            >
                                ${escapeHtml(project.buttonText)}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="project-body">
                    <span class="project-subtitle">${escapeHtml(project.subtitle || project.type)}</span>
                    <h3 class="project-title">${escapeHtml(project.title)}</h3>
                    <p class="project-desc">${escapeHtml(project.description)}</p>
                    
                    ${featuresHtml}

                    <div class="project-tech-tags">
                        ${techTagsHtml}
                    </div>

                    <div class="project-actions">
                        <a 
                            href="${escapeHtml(project.url)}" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="btn btn-primary btn-sm"
                            aria-label="${escapeHtml(project.buttonText)} for ${escapeHtml(project.title)}"
                        >
                            ${escapeHtml(project.buttonText)}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                        ${project.github ? `
                            <a 
                                href="${escapeHtml(project.github)}" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                class="btn btn-secondary btn-sm"
                                aria-label="GitHub repository for ${escapeHtml(project.title)}"
                            >
                                GitHub
                            </a>
                        ` : ''}
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function initProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const filterValue = button.getAttribute("data-filter") || "all";
            renderProjects(filterValue);
        });
    });
}

// ============================================================
// CONTACT FORM VALIDATION & MVP HANDLING
// ============================================================
function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const subjectInput = document.getElementById("form-subject");
    const messageInput = document.getElementById("form-message");
    const statusBox = document.getElementById("form-status");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        // Reset errors
        [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
            if (field) field.classList.remove("error");
        });
        if (statusBox) {
            statusBox.className = "form-status";
            statusBox.style.display = "none";
        }

        // Validate Name
        if (!nameInput.value.trim()) {
            nameInput.classList.add("error");
            isValid = false;
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add("error");
            isValid = false;
        }

        // Validate Subject
        if (!subjectInput.value.trim()) {
            subjectInput.classList.add("error");
            isValid = false;
        }

        // Validate Message
        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
            messageInput.classList.add("error");
            isValid = false;
        }

        if (!isValid) return;

        // Form submission MVP state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Processing...</span>`;

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            
            // Clear inputs
            form.reset();

            // Clear, honest status message acknowledging MVP status
            if (statusBox) {
                statusBox.className = "form-status success";
                statusBox.innerHTML = `
                    <strong>Message Validated!</strong><br/>
                    Thank you for reaching out, ${escapeHtml(nameInput.value || 'Friend')}. 
                    <em>Note for portfolio review:</em> This is the frontend MVP validation interface. An active email relay service (such as Formspree or custom API) can be hooked up directly here. You can also reach Gracious directly at <strong>${escapeHtml(developer.email)}</strong>.
                `;
                statusBox.style.display = "block";
            }
        }, 600);
    });
}

// ============================================================
// STATISTICS COUNTER ANIMATION
// ============================================================
function initStatsCounter() {
    const statsSection = document.getElementById("statistics");
    if (!statsSection) return;

    let animated = false;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateNumbers();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(statsSection);

    function animateNumbers() {
        const counters = document.querySelectorAll(".stat-number[data-target]");
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute("data-target"), 10);
            const suffix = counter.getAttribute("data-suffix") || "";
            let current = 0;
            const duration = 1500;
            const stepTime = 25;
            const steps = duration / stepTime;
            const increment = target / steps;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = `${target}${suffix}`;
                    clearInterval(timer);
                } else {
                    counter.textContent = `${Math.floor(current)}${suffix}`;
                }
            }, stepTime);
        });
    }
}

// ============================================================
// SCROLL TO TOP BUTTON
// ============================================================
function initScrollToTop() {
    const scrollTopBtn = document.getElementById("scroll-top-btn");
    if (!scrollTopBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add("visible");
        } else {
            scrollTopBtn.classList.remove("visible");
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ============================================================
// UTILITY: Escape HTML to avoid XSS
// ============================================================
function escapeHtml(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
