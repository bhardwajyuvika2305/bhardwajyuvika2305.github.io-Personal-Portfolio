// ==========================================
// 🚀 TIME TO TIME PROJECTS CONTROLLER
// ==========================================
// Whenever you build a new project, just copy/paste a block inside this array.
// Your UI will auto-generate and update perfectly!

const projectsData = [
    {
        title: "Futuristic AI Chat Interface",
        description: "A clean UI, production-ready AI text application build with Gemini engine integration and smart streaming responses.",
        techStack: ["React", "NodeJS", "Google Cloud"],
        githubLink: "https://github.com/bhardwajyuvika2305",
        liveLink: "https://vercel.com"
    },
    {
        title: "Clean Design Dev Portfolio",
        description: "High-end glassmorphic interactive developer showcase website utilizing modern CSS grids and custom structural layouts.",
        techStack: ["JavaScript", "HTML/CSS", "Figma"],
        githubLink: "https://github.com/bhardwajyuvika2305",
        liveLink: "#"
    },
    {
        title: "Advanced DSA Visualizer",
        description: "A C++ driven algorithm logic workspace converted to interactive visualization graphs for mapping complex sorting engines.",
        techStack: ["C++", "JavaScript", "Bootstrap"],
        githubLink: "https://github.com/bhardwajyuvika2305",
        liveLink: "https://render.com"
    }
];

// ==========================================
// DYNAMIC INJECTION ENGINE
// ==========================================
function loadProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = ""; // Clear existing fallback items

    projectsData.forEach(project => {
        // Map tech badges into bullet items
        const techTags = project.techStack.map(tech => `<li>${tech}</li>`).join('');

        // Build Futuristic Project Card Markup Structure
        const projectCard = `
            <div class="project-card">
                <div>
                    <div class="project-header">
                        <i class="fa-regular fa-folder-open"></i>
                        <div class="project-links">
                            <a href="${project.githubLink}" target="_blank" title="View Source"><i class="fa-brands fa-github"></i></a>
                            <a href="${project.liveLink}" target="_blank" title="Live Preview"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
                <ul class="project-tech-list">
                    ${techTags}
                </ul>
            </div>
        `;
        container.innerHTML += projectCard;
    });
}

// ==========================================
// INTERACTIVE VISUAL EFFECTS
// ==========================================
function setupNavbarHighlights() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// Initialise Portfolio Scripts
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupNavbarHighlights();
});