/* Signal Noir — vanilla JS interactions and content rendering */

const profile = {
  name: "Sharath C",
  firstName: "SHARATH",
  roles: [
    "penetration tester",
    "red team operator",
    "mobile app security specialist",
    "security tool developer",
  ],
  email: "csharath213@gmail.com",
  github: "https://github.com/sharathc213",
  summary:
    "Cybersecurity professional with over four years of experience in application, network, and API penetration testing, secure configuration reviews, and code analysis. I break web and mobile environments using OWASP-aligned methodology and manual technique, build custom offensive tooling, and lead assessment teams across enterprise VAPT engagements.",
  stats: [
    { value: "4+", label: "Years offensive security" },
    { value: "70+", label: "VAPT engagements" },
    { value: "2", label: "Published CVEs" },
    { value: "5+", label: "Security tools built" },
  ],
};

const marqueeWords = [
  "WEB APP PENTEST",
  "MOBILE SECURITY",
  "API SECURITY",
  "RED TEAMING",
  "SOURCE CODE REVIEW",
  "ACTIVE DIRECTORY",
  "DEVSECOPS",
];

const skillGroups = [
  {
    index: "01",
    title: "Offensive Testing",
    items: [
      "Web Application Penetration Testing",
      "Mobile Application Security (Android / iOS)",
      "API Penetration Testing & API Security",
      "Source Code Review",
      "Vulnerability Assessment",
      "Active Directory & Network Security",
      "Secure Configuration Review",
    ],
  },
  {
    index: "02",
    title: "Languages & Frameworks",
    items: [
      "Python",
      "Bash / Shell Script",
      "JavaScript",
      "PHP",
      "C / C++",
      "React · Node.js · Django",
      "MySQL / MongoDB",
    ],
  },
  {
    index: "03",
    title: "Tooling & Standards",
    items: [
      "Burp Suite · SQLMap · Metasploit",
      "Frida · MobSF · JADX · APKTool",
      "Ghidra · Wireshark",
      "Nmap · Nessus · Picus",
      "OWASP · PTES · NIST · CVSS",
      "Secure SDLC · DevSecOps",
    ],
  },
];

const languages = [
  { name: "English", level: "Fluent", value: 95 },
  { name: "Malayalam", level: "Fluent", value: 100 },
  { name: "Tamil", level: "Intermediate", value: 62 },
  { name: "Hindi", level: "Basics", value: 34 },
];

const experience = [
  {
    role: "Sr. Penetration Tester",
    company: "Activebytes Innovations",
    period: "Jan 2025 — Present",
    location: "Onsite · Kuwait & India",
    points: [
      "Spearheaded onsite penetration testing engagements in Kuwait with leading oil & gas companies, hospitals, and government organizations — identifying and mitigating critical vulnerabilities across enterprise networks and digital assets.",
      "Led assessment teams: coordinating testing activity, assigning tasks, validating findings, and delivering technical reports and executive summaries with CVSS-based risk ratings.",
      "Delivered internal/external network assessments, secure configuration reviews, red teaming, and mobile application security testing with actionable remediation guidance.",
    ],
  },
  {
    role: "Security Consultant",
    company: "Freelance",
    period: "Oct 2024 — Jan 2025",
    location: "Remote",
    points: [
      "Completed 20+ comprehensive VAPT projects, surfacing SQL injection, XSS, and authentication flaws with prioritised remediation strategies.",
      "Performed authenticated and unauthenticated assessments across web applications, APIs, networks, and infrastructure.",
    ],
  },
  {
    role: "Security Analyst",
    company: "eHackify Research",
    period: "Oct 2021 — Oct 2024",
    location: "Kerala, India",
    points: [
      "Ran security analysis and vulnerability assessments across 50+ projects with full remediation guidance.",
      "Designed and built a hardware-level red teaming tool, 'WiFi Bad USB', extending physical attack capability.",
      "Built 5+ Python/Bash security tools for threat detection, vulnerability scanning, and incident response.",
      "Led a research team on emerging threats while mentoring junior analysts.",
    ],
  },
  {
    role: "Security Consultant + Developer",
    company: "Kerala Police Cyberdome",
    period: "Nov 2022 — Present",
    location: "Kerala, India",
    points: [
      "Provided security analysis and cyber forensics support across live case scenarios.",
      "Dual role across development and security teams for the Petty Case Management System, driving secure SDLC practice.",
    ],
  },
  {
    role: "Developer",
    company: "Freelance",
    period: "Jan 2020 — Present",
    location: "Remote",
    points: ["Shipped 10+ live, secure production projects end to end."],
  },
];

const projects = [
  {
    id: "01",
    name: "PinRooter",
    tagline: "Dynamic Frida script execution for mobile assessments",
    stack: ["Frida", "Mobile Security", "Script Execution"],
    url: "https://github.com/sharathc213/PinRooter",
    body: "Automates root and SSL-pinning bypass on mobile applications. Supports predefined and codeshare scripts plus real-time execution for debugging, penetration testing, and app analysis.",
  },
  {
    id: "02",
    name: "SecureDock",
    tagline: "Centralised Docker hardening & benchmark scanning",
    stack: ["Docker", "CIS Benchmark", "Security Scanning"],
    url: "https://github.com/sharathc213/SecureDock",
    body: "Scans Docker environments on client machines from a central server against the CIS Docker Benchmark, streaming live client status and detailed visualisations of misconfiguration results.",
  },
  {
    id: "03",
    name: "WiFi Deauth Detector",
    tagline: "Wireless deauthentication monitoring system",
    stack: ["Django", "WiFi Security", "Python"],
    url: "https://github.com/sharathc213/wifi_deauth_detector",
    body: "A Django application that monitors WiFi devices, detects deauthentication events in real time, and exposes a clean interface for configuration and device intelligence.",
  },
  {
    id: "04",
    name: "Django Docker UI",
    tagline: "Web control plane for container operations",
    stack: ["Django", "Docker", "Python"],
    url: "https://github.com/sharathc213/Django-Docker-UI",
    body: "A security-focused web interface for controlling Docker containers through the Docker Python SDK, including shell access — create, start, stop and manage containers without the CLI.",
  },
];

const credentials = [
  { title: "Mobile Application Penetration Tester (eMAPT)", issuer: "INE Security", meta: "Mar 2021" },
  { title: "Certified Red Team Operator (CRTO)", issuer: "Zero Point Security", meta: "Certified" },
  { title: "CVE-2023-7172 & CVE-2023-7173", issuer: "VulDB", meta: "Published research" },
  { title: "APT Labs", issuer: "Hack The Box", meta: "Pro Lab" },
  { title: "Hack The Box Pro Lab", issuer: "Hack The Box", meta: "Completed" },
  { title: "Bachelor of Computer Applications", issuer: "Kannur University", meta: "Computer Applications" },
];

const $ = (s, r = document) => r.querySelector(s);
const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

/* ————— Boot intro ————— */
function boot() {
  const el = $("#boot");
  if (!el) return;
  const lines = [
    ["initialising secure shell", "ok"],
    ["loading operator profile", "ok"],
    ["mounting engagement archive", "ok"],
    ["decrypting portfolio payload", "ok"],
  ];
  const list = $("#boot-lines");
  lines.forEach((l, i) => {
    const div = document.createElement("div");
    div.className = "boot-line";
    div.style.animationDelay = `${0.25 + i * 0.42}s`;
    div.innerHTML = `<span>&gt; ${esc(l[0])}</span><b>[${esc(l[1])}]</b>`;
    list.appendChild(div);
  });
  const bar = $("#boot-bar span");
  let p = 0;
  const t = setInterval(() => {
    p = Math.min(100, p + 8);
    bar.style.width = p + "%";
    if (p >= 100) clearInterval(t);
  }, 90);
  setTimeout(() => el.classList.add("done"), 2300);
}

/* ————— Hero name letters ————— */
function heroName() {
  const wrap = $("#letters");
  profile.firstName.split("").forEach((c, i) => {
    const m = document.createElement("span");
    m.className = "mask";
    m.style.animationDelay = `${3.4 + i * 0.12}s`;
    m.innerHTML = `<span style="animation-delay:${2.35 + i * 0.055}s">${esc(c)}</span>`;
    wrap.appendChild(m);
  });
}

/* ————— Role typer ————— */
function typer() {
  const out = $("#typer-text");
  let i = 0,
    text = "",
    deleting = false;
  const tick = () => {
    const word = profile.roles[i % profile.roles.length];
    const done = text === word;
    const delay = deleting ? 34 : done ? 1900 : 62;
    setTimeout(() => {
      if (!deleting && !done) text = word.slice(0, text.length + 1);
      else if (!deleting && done) deleting = true;
      else if (deleting && text.length > 0) text = word.slice(0, text.length - 1);
      else {
        deleting = false;
        i++;
      }
      out.textContent = text;
      tick();
    }, delay);
  };
  tick();
}

/* ————— Marquees ————— */
function marquees() {
  const inner = marqueeWords.map((w) => `<span>${esc(w)}<i> ✦</i></span>`).join("");
  document.querySelectorAll(".marquee-track").forEach((t) => (t.innerHTML = inner + inner));
}

/* ————— Content ————— */
function content() {
  $("#summary").textContent = profile.summary;

  $("#skills").innerHTML = skillGroups
    .map(
      (g) => `<div class="panel reveal">
        <span class="label amber">${esc(g.index)}</span>
        <h3>${esc(g.title)}</h3>
        <ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  // $("#langs").innerHTML = languages
  //   .map(
  //     (l) => `<div class="reveal">
  //       <div class="lang-head"><span>${esc(l.name)}</span><span class="label" style="letter-spacing:.16em">${esc(l.level)}</span></div>
  //       <div class="bar"><i data-value="${l.value}"></i></div>
  //     </div>`
  //   )
  //   .join("");

  $("#jobs").innerHTML = experience
    .map(
      (j) => `<article class="job reveal">
        <div>
          <div class="label amber">${esc(j.period)}</div>
          <h3 class="job-role" style="margin-top:.6rem">${esc(j.role)}</h3>
          <div class="job-company">${esc(j.company)}</div>
          <div class="label" style="margin-top:.5rem;font-size:.6rem">${esc(j.location)}</div>
        </div>
        <ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </article>`
    )
    .join("");

  $("#projects").innerHTML = projects
    .map(
      (p) => `<a class="project reveal" href="${esc(p.url)}" target="_blank" rel="noreferrer">
        <div class="project-top">
          <div>
            <span class="label amber">${esc(p.id)}</span>
            <div class="project-name">${esc(p.name)}</div>
            <div class="label" style="margin-top:.6rem;letter-spacing:.14em;text-transform:none">${esc(p.tagline)}</div>
          </div>
          <span class="arrow">↗</span>
        </div>
        <p class="project-body">${esc(p.body)}</p>
        <div class="tags">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
      </a>`
    )
    .join("");

  $("#creds").innerHTML = credentials
    .map(
      (c) => `<div class="panel cred reveal">
        <h4>${esc(c.title)}</h4>
        <p>${esc(c.issuer)} — ${esc(c.meta)}</p>
      </div>`
    )
    .join("");

  $("#stats").innerHTML = profile.stats
    .map((s) => {
      const match = String(s.value).match(/^(\d+)(.*)$/);
      const target = match ? match[1] : "";
      const suffix = match ? match[2] : s.value;
      return `<div><div class="stat-value" data-target="${esc(target)}" data-suffix="${esc(
        suffix
      )}">${target ? "0" + esc(suffix) : esc(suffix)}</div><div class="label stat-label">${esc(
        s.label
      )}</div></div>`;
    })
    .join("");

  document.querySelectorAll(".mailto").forEach((a) => {
    a.href = `mailto:${profile.email}`;
  });
  $("#email-text").textContent = profile.email;
  $("#github-link").href = profile.github;
  $("#year").textContent = new Date().getFullYear();
}

/* ————— Stat count-up ————— */
function countStats() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = document.querySelectorAll(".stat-value[data-target]");
  const run = () => {
    nodes.forEach((el) => {
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || "";
      if (!target) return;
      if (reduceMotion) {
        el.textContent = target + suffix;
        return;
      }
      const duration = 1300;
      const start = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        el.textContent = Math.round(ease(p) * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };
  // sync with the hero-foot fade-in timing so numbers land as the stats appear
  setTimeout(run, reduceMotion ? 0 : 3300);
}

/* ————— Cursor spotlight, card shine, magnetic buttons ————— */
function magicHover() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer: fine)").matches;
  if (reduceMotion || !fine) return;

  const glow = $("#cursorGlow");
  let glowActive = false;

  window.addEventListener(
    "mousemove",
    (e) => {
      if (glow) {
        glow.style.setProperty("--mx", `${e.clientX}px`);
        glow.style.setProperty("--my", `${e.clientY}px`);
        if (!glowActive) {
          glow.classList.add("active");
          glowActive = true;
        }
      }
      const card = e.target.closest(".panel, .project");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    },
    { passive: true }
  );

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.32}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

/* ————— Scroll reveals ————— */
function reveals() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        e.target.querySelectorAll("[data-value]").forEach((b) => {
          b.style.width = b.dataset.value + "%";
        });
        io.unobserve(e.target);
      });
    },
    { rootMargin: "-8% 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.07}s`;
    io.observe(el);
  });
}

/* ————— Scroll-driven hero parallax + nav ————— */
function scrollFx() {
  const nav = $(".nav");
  const bar = $("#progress");
  const hero = $(".hero");
  const media = $(".hero-media");
  const inner = $(".hero-inner");

  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("solid", y > 40);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

    const h = hero.offsetHeight;
    const p = Math.min(1, Math.max(0, y / h));
    media.style.transform = `translateY(${p * 22}%) scale(${1.08 + p * 0.16})`;
    inner.style.transform = `translateY(${p * -38}%)`;
    inner.style.opacity = String(Math.max(0, 1 - p / 0.75));
    inner.style.filter = `blur(${p * 9}px)`;
  };
  onScroll();
  window.addEventListener("scroll", () => requestAnimationFrame(onScroll), { passive: true });
}

boot();
heroName();
typer();
marquees();
content();
reveals();
scrollFx();
countStats();
magicHover();