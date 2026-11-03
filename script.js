/**
 * NELSON GEOVETTY - PORTFOLIO
 * JavaScript puro - Toda a lógica dinâmica
 */

// ========================================
// DADOS
// ========================================

const ROLES = [
  "Full-Stack Developer",
  "Front-End Developer",
  "Back-End Developer",
  "Mobile",
];

const STATS = [
  { number: "6+", label: "Anos de Experiência" },
  { number: "15+", label: "Projetos Entregues" },
  { number: "10+", label: "Tecnologias" },
];

const SKILLS = [
  { name: "HTML5", img: "/assets/html.png" },
  { name: "CSS3", img: "/assets/css3.png" },
  { name: "JavaScript", img: "/assets/js.png" },
  { name: "TypeScript", img: "/assets/ts.png" },
  { name: "React", img: "/assets/react.png" },
  { name: "Next.js", img: "/assets/next2.png" },
  { name: "Node.js", img: "/assets/node.png" },
  { name: "NestJS", img: "/assets/nest.png" },
  { name: "PHP", img: "/assets/php.png" },
  { name: "C#", img: "/assets/csharp.png" },
  { name: "MySQL", img: "/assets/mysql.png" },
  { name: "PostgreSQL", img: "/assets/psql.png" },
  { name: "SQL", img: "/assets/sql.png" },
  { name: "Git", img: "/assets/git.png" },
  { name: "GitHub", img: "/assets/github.png" },
];

const PROJECTS = [
  {
    id: 1,
    title: "Music Store Platform",
    description:
      "Plataforma completa de e-commerce para músicos, bandas e artistas. Inclui autenticação de utilizadores, recuperação de senha, carrinho de compras, checkout, gestão de produtos, álbuns musicais, turnês, encomendas e painel administrativo completo integrado com MySQL.",
    tags: ["PHP", "MySQL", "JavaScript", "AJAX", "HTML5", "CSS3"],
    icon: "🎵",
    demoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7467562806012194817/",
    repoLink: "https://github.com/DevNelson16/music-store-platform",
  },

  {
    id: 2,
    title: "PrimeFlix - React Movies App",
    description:
      "Aplicação web desenvolvida com React.js para exploração de filmes, visualização de detalhes completos e gestão de favoritos. Consome uma API externa de filmes, utiliza React Router para navegação entre páginas e Local Storage para persistência de dados.",
    tags: ["React", "JavaScript", "React Router", "Axios", "CSS3"],
    icon: "🎬",
    demoLink: "https://primeflixpt.netlify.app/",
    repoLink: "https://github.com/DevNelson16/PimeFlix",
  },
  {
    id: 3,
    title: "Cars API AI Search",
    description:
      "API REST desenvolvida com Node.js, TypeScript, PostgreSQL e OpenAI. Permite pesquisar veículos através de linguagem natural utilizando Inteligência Artificial. Atualmente em desenvolvimento da versão Front-End com React e TypeScript.",
    tags: [
      "Node.js",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Drizzle ORM",
      "OpenAI",
      "React",
    ],
    icon: "🚗",
    demoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7472966015258361857/",
    repoLink: "https://github.com/DevNelson16/Openai-Project",
  },
  {
    id: 4,
    title: "React Firebase CRUD",
    description:
      "Aplicação Full-Stack desenvolvida com React e Firebase, incluindo autenticação de utilizadores, operações CRUD completas, base de dados em tempo real e interface responsiva.",
    tags: ["React", "Firebase", "JavaScript", "CRUD"],
    icon: "🔥",
    demoLink: "https://tiny-choux-125e17.netlify.app/",
    repoLink: "https://github.com/DevNelson16/React-Firebase-CRUD",
  },
  {
    id: 5,
    title: "Restaurante Online",
    description:
      "Sistema completo de restaurante online com encomendas, carrinho de compras, gestão de produtos, clientes e pedidos. Inclui painel administrativo para controlo total da plataforma, gestão de utilizadores, produtos, encomendas e informações do restaurante.",
    tags: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    icon: "🍽️",
    demoLink: "",
    repoLink: "https://github.com/DevNelson16/Restaurante-Online",
  },
  {
    id: 6,
    title: "Sistema de Controle de Horas Trabalhadas",
    description:
      "Aplicação web para gestão e controlo de horas trabalhadas, inspirada em plataformas como Jibble. Permite registo de colaboradores, marcação de entrada e saída, acompanhamento de horas, gestão de horários e controlo de produtividade através de um painel administrativo.",
    tags: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    icon: "⏱️",
    demoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7454922471033610240/",
    repoLink: "https://github.com/DevNelson16/Programa-o-De-Horas-De-Trabalho",
  },
  {
    id: 7,
    title: "Cripto Moedas + API",
    description:
      "Aplicação web desenvolvida com React e TypeScript para acompanhar criptomoedas em tempo real através da API CoinCap. Permite viualizar a listagem das principais moeda, consultar detalhes como preço, capitalização de mercado, volume de negociação e variação nas últimas 24 horas, com interface moderna e responsiva.",
    tags: ["React", "TypeScript", "Vite", "CSS Modules", "CoinCap API"],
    icon: "🪙",
    demoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7484195876966670336/",
    repoLink: "https://github.com/DevNelson16/Criptomoedas-API",
  },
];

const CODE_LINES = [
  { content: "const developer = {", class: "" },
  {
    content: "  name: '",
    class: "",
    highlight: "Nelson Geovetty",
    highlightClass: "code-string",
  },
  { content: "',", class: "" },
  {
    content: "  role: '",
    class: "",
    highlight: "Full-Stack Developer",
    highlightClass: "code-string",
  },
  { content: "',", class: "" },
  { content: "  skills: [", class: "" },
  {
    content: "    '",
    class: "",
    highlight: "JavaScript",
    highlightClass: "code-string",
  },
  {
    content: "', '",
    class: "",
    highlight: "React",
    highlightClass: "code-string",
  },
  {
    content: "', '",
    class: "",
    highlight: "Node.js",
    highlightClass: "code-string",
  },
  { content: "'", class: "" },
  { content: "  ],", class: "" },
  {
    content: "  passion: ",
    class: "",
    highlight: "true",
    highlightClass: "code-keyword",
  },
  { content: ",", class: "" },
  {
    content: "  coffee: ",
    class: "",
    highlight: "Infinity",
    highlightClass: "code-number",
  },
  { content: "", class: "" },
  { content: "};", class: "" },
  { content: "", class: "" },
  {
    content: "// Vamos construir algo incrível juntos!",
    class: "code-comment",
  },
];

// ========================================
// THEME MANAGEMENT
// ========================================

function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const html = document.documentElement;

  // Verifica preferência salva ou do sistema
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (savedTheme === "light" || (!savedTheme && !systemPrefersDark)) {
    html.setAttribute("data-theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Animação de transição suave
    document.body.style.transition =
      "background-color 0.5s ease, color 0.5s ease";
  });
}

// ========================================
// TYPEWRITER EFFECT
// ========================================

function initTypewriter() {
  const element = document.getElementById("typewriter");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = ROLES[roleIndex];

    if (isDeleting) {
      element.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      element.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pausa antes de apagar
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % ROLES.length;
      typingSpeed = 500; // Pausa antes de digitar próximo
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ========================================
// CODE WINDOW ANIMATION
// ========================================

function renderCodeWindow() {
  const codeBody = document.getElementById("codeBody");
  if (!codeBody) return;

  CODE_LINES.forEach((line, index) => {
    const lineElement = document.createElement("div");
    lineElement.style.opacity = "0";
    lineElement.style.transform = "translateX(-10px)";
    lineElement.style.transition = `all 0.3s ease ${index * 0.08}s`;

    if (line.class) {
      lineElement.className = line.class;
    }

    if (line.highlight) {
      lineElement.innerHTML = `${line.content}<span class="${line.highlightClass}">${line.highlight}</span>`;
    } else {
      lineElement.textContent = line.content;
    }

    codeBody.appendChild(lineElement);

    // Animação de entrada
    setTimeout(
      () => {
        lineElement.style.opacity = "1";
        lineElement.style.transform = "translateX(0)";
      },
      1500 + index * 80,
    );
  });
}

// ========================================
// RENDER STATS
// ========================================

function renderStats() {
  const container = document.getElementById("aboutStats");
  if (!container) return;

  STATS.forEach((stat, index) => {
    const item = document.createElement("div");
    item.className = "stat-item reveal";
    if (index > 0) item.classList.add(`reveal-delay-${index}`);

    item.innerHTML = `
            <span class="stat-number">${stat.number}</span>
            <span class="stat-label">${stat.label}</span>
        `;

    container.appendChild(item);
  });
}

// ========================================
// RENDER SKILLS
// ========================================

function renderSkills() {
  const container = document.getElementById("skillsGrid");
  if (!container) return;

  SKILLS.forEach((skill, index) => {
    const card = document.createElement("div");
    card.className = "skill-card stagger-item";
    card.style.transitionDelay = `${index * 0.05}s`;

    card.innerHTML = `
      <img class="skill-icon" src="${skill.img}" alt="${skill.name}">
      <span class="skill-name">${skill.name}</span>
    `;

    container.appendChild(card);
  });
}

// ========================================
// RENDER PROJECTS
// ========================================

function renderProjects() {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  PROJECTS.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card stagger-item";
    card.style.transitionDelay = `${index * 0.1}s`;

    const tagsHtml = project.tags
      .map((tag) => `<span class="project-tag">${tag}</span>`)
      .join("");

    card.innerHTML = `
            <div class="project-image">
                <span class="project-icon">${project.icon}</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">${tagsHtml}</div>
                <div class="project-links">
                    <a href="${project.demoLink}" class="project-link" target="_blank" rel="noopener">
                        Demo
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                    <a href="${project.repoLink}" class="project-link" target="_blank" rel="noopener">
                        Código
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                </div>
            </div>
        `;

    container.appendChild(card);
  });
}

// ========================================
// SCROLL & NAVIGATION
// ========================================

function setupScroll() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Navbar scroll effect
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Navbar background
    if (currentScroll > 50) {
      navbar.style.boxShadow = "0 4px 30px var(--shadow)";
    } else {
      navbar.style.boxShadow = "none";
    }

    // Active section
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        currentScroll >= sectionTop &&
        currentScroll < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("data-section") === sectionId) {
            link.classList.add("active");
          }
        });
      }
    });

    lastScroll = currentScroll;
  });

  // Smooth scroll for nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }

      // Close mobile menu
      const navMenu = document.getElementById("navMenu");
      const mobileToggle = document.getElementById("mobileToggle");
      navMenu.classList.remove("active");
      mobileToggle.classList.remove("active");
    });
  });
}

// ========================================
// MOBILE MENU
// ========================================

function setupMobileMenu() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal, .stagger-item");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

// ========================================
// FORM VALIDATION + EMAILJS
// ========================================

function setupFormValidation() {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("formSuccess");

  if (!form) return;

  // ==========================
  // EMAILJS CONFIG
  // ==========================

  emailjs.init({
    publicKey: "hJGrATqj_1kv5p2r5",
  });

  const fields = {
    name: {
      element: document.getElementById("name"),

      error: document.getElementById("nameError"),

      validate(value) {
        if (!value.trim()) {
          return "Nome é obrigatório";
        }

        if (value.trim().length < 2) {
          return "Nome muito curto";
        }

        return "";
      },
    },

    email: {
      element: document.getElementById("email"),

      error: document.getElementById("emailError"),

      validate(value) {
        if (!value.trim()) {
          return "Email é obrigatório";
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(value)) {
          return "Email inválido";
        }

        return "";
      },
    },

    message: {
      element: document.getElementById("message"),

      error: document.getElementById("messageError"),

      validate(value) {
        if (!value.trim()) {
          return "Mensagem obrigatória";
        }

        if (value.trim().length < 10) {
          return "Mensagem muito curta";
        }

        return "";
      },
    },
  };

  // ==========================
  // ENVIO DO FORMULÁRIO
  // ==========================

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    Object.values(fields).forEach((field) => {
      const error = field.validate(field.element.value);

      field.error.textContent = error;

      if (error) {
        valid = false;
      }
    });

    if (!valid) return;

    const button = form.querySelector("button");

    button.disabled = true;

    button.querySelector(".btn-text").textContent = "Enviando...";

    const params = {
      name: fields.name.element.value,
      email: fields.email.element.value,
      message: fields.message.element.value,
      title: "Nova mensagem do portfólio",
    };

    emailjs
      .send(
        "service_5bncm8n",

        "template_56ypbbi",

        params,
      )

      .then(function (response) {
        console.log("Mensagem enviada!", response);

        successMessage.classList.add("show");

        form.reset();

        button.disabled = false;

        button.querySelector(".btn-text").textContent = "Enviar Mensagem";

        setTimeout(() => {
          successMessage.classList.remove("show");
        }, 5000);
      })

      .catch(function (error) {
        console.log("ERRO COMPLETO:", error);
        console.log("MENSAGEM:", error.text);

        alert("Erro ao enviar mensagem");

        button.disabled = false;

        button.querySelector(".btn-text").textContent = "Enviar Mensagem";
      });
  });
}

// ========================================
// NAVBAR SCROLL HIDE/SHOW
// ========================================

function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          navbar.style.transform = "translateY(-100%)";
        } else {
          // Scrolling up
          navbar.style.transform = "translateY(0)";
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });

      ticking = true;
    }
  });
}

// ========================================
// PARALLAX EFFECT (Hero)
// ========================================

function setupParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      const heroContent = hero.querySelector(".hero-container");
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
      }
    }
  });
}

// ========================================
// CUSTOM CURSOR (Desktop only)
// ========================================

function setupCustomCursor() {
  // Só em desktop
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid var(--accent);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease, opacity 0.15s ease;
        mix-blend-mode: difference;
    `;
  document.body.appendChild(cursor);

  const cursorDot = document.createElement("div");
  cursorDot.className = "custom-cursor-dot";
  cursorDot.style.cssText = `
        width: 6px;
        height: 6px;
        background: var(--accent);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.05s ease;
    `;
  document.body.appendChild(cursorDot);

  let mouseX = 0,
    mouseY = 0;
  let cursorX = 0,
    cursorY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX - 3 + "px";
    cursorDot.style.top = mouseY - 3 + "px";
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = cursorX - 10 + "px";
    cursor.style.top = cursorY - 10 + "px";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effects
  const interactiveElements = document.querySelectorAll(
    "a, button, .skill-card, .project-card",
  );
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5)";
      cursor.style.background = "rgba(139, 92, 246, 0.1)";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursor.style.background = "transparent";
    });
  });
}

// ========================================
// PARTICLES BACKGROUND (Hero)
// ========================================

function setupParticles() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const canvas = document.createElement("canvas");
  canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;
  hero.insertBefore(canvas, hero.firstChild);

  const ctx = canvas.getContext("2d");
  let particles = [];
  const particleCount = 30;

  function resize() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (
        this.x < 0 ||
        this.x > canvas.width ||
        this.y < 0 ||
        this.y > canvas.height
      ) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    // Draw connections
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach((p2) => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTypewriter();
  renderCodeWindow();
  renderStats();
  renderSkills();
  renderProjects();
  setupScroll();
  setupMobileMenu();
  setupFormValidation();
  setupNavbarScroll();
  setupScrollReveal();
  setupParallax();
  setupParticles();

  // Custom cursor apenas em desktop
  if (window.innerWidth > 768) {
    setupCustomCursor();
  }
});