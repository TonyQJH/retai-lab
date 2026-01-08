/**
 * ReTAI Lab - Main JavaScript
 * Handles data rendering and UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Render all dynamic content
    renderResearchPillars();
    renderPeople();
    renderResearchTopics();
    renderPublications();
    renderProjects();

    // Initialize UI interactions
    initNavbar();
    updateCopyright();
});

/**
 * Render Research Pillars (About Section)
 */
function renderResearchPillars() {
    const container = document.getElementById('research-pillars-grid');
    if (!container || typeof RESEARCH_PILLARS === 'undefined') return;

    container.innerHTML = RESEARCH_PILLARS.map(pillar => `
        <div class="pillar-card">
            <span class="pillar-icon">${pillar.icon}</span>
            <h3>${pillar.title}</h3>
            <p>${pillar.description}</p>
        </div>
    `).join('');
}

/**
 * Render People Section
 */
function renderPeople() {
    // Render Faculty
    renderPersonGroup('faculty-grid', PEOPLE.faculty);

    // Render PhD Students
    renderPersonGroup('phd-grid', PEOPLE.phdStudents);

    // Render Research Students
    renderPersonGroup('research-students-grid', PEOPLE.researchStudents);
}

/**
 * Helper to render a group of people cards
 */
function renderPersonGroup(elementId, peopleList) {
    const container = document.getElementById(elementId);
    if (!container || !peopleList) return;

    container.innerHTML = peopleList.map(person => {
        // Create initials for avatar
        const initials = person.name.split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);

        // Render links if they exist and are not just '#'
        const renderLink = (url, label) => {
            if (!url || url === '#') return `<a href="#" title="${label}" style="opacity: 0.5; cursor: default;">${label}</a>`;
            return `<a href="${url}" target="_blank" title="${label}">${label}</a>`;
        };

        return `
            <div class="person-card">
                <div class="person-avatar">${initials}</div>
                <div class="person-name">${person.name}</div>
                <div class="person-role">${person.role}</div>
                <div class="person-affiliation">${person.affiliation}</div>
                ${person.advisor ? `<div class="person-advisor">Advisor: ${person.advisor}</div>` : ''}
                <div class="person-links">
                    ${renderPeopleLinks(person.links)}
                </div>
            </div>
        `;
    }).join('');
}

function renderPeopleLinks(links) {
    if (!links) return '';
    // Simple text links or icons could vary. Using text for clarity as requested "placeholders for icons"
    // For simplicity in pure JS/CSS without icon library dependency, using text labels [Home] [Scholar] etc.
    // Or we can use emoji? Let's use text labels as it's cleaner than potentially broken emojis.

    let html = '';
    if (links.homepage) html += `<a href="${links.homepage}" ${links.homepage !== '#' ? 'target="_blank"' : ''}>HP</a>`;
    if (links.scholar) html += ` • <a href="${links.scholar}" ${links.scholar !== '#' ? 'target="_blank"' : ''}>GS</a>`;
    if (links.github) html += ` • <a href="${links.github}" ${links.github !== '#' ? 'target="_blank"' : ''}>GH</a>`;
    return html;
}

/**
 * Render Research Topics
 */
function renderResearchTopics() {
    const container = document.getElementById('research-topics-grid');
    if (!container || typeof RESEARCH_TOPICS === 'undefined') return;

    container.innerHTML = RESEARCH_TOPICS.map(topic => `
        <div class="topic-card">
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
        </div>
    `).join('');
}

/**
 * Render Publications
 */
function renderPublications() {
    const container = document.getElementById('publication-list');
    if (!container || typeof PUBLICATIONS === 'undefined') return;

    if (PUBLICATIONS.length === 0) {
        container.innerHTML = '<p class="text-center">No publications listed yet.</p>';
        return;
    }

    container.innerHTML = PUBLICATIONS.map(pub => `
        <div class="pub-entry">
            <div class="pub-title">${pub.title}</div>
            <div class="pub-authors">${pub.authors}</div>
            <div class="pub-venue">${pub.venue}, ${pub.year}</div>
            <div class="pub-links">
                ${pub.links.paper ? `<a href="${pub.links.paper}" class="pub-link">Paper</a>` : ''}
                ${pub.links.code ? `<a href="${pub.links.code}" class="pub-link">Code</a>` : ''}
                ${pub.links.project ? `<a href="${pub.links.project}" class="pub-link">Project Page</a>` : ''}
            </div>
        </div>
    `).join('');
}

/**
 * Render Projects
 */
function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container || typeof PROJECTS === 'undefined') return;

    container.innerHTML = PROJECTS.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-title">${project.name}</div>
            </div>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${project.github}" class="project-link">
                View on GitHub →
            </a>
        </div>
    `).join('');
}

/**
 * Navbar Toggle for Mobile
 */
function initNavbar() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('active');

            // Animate hamburger (optional simple standard toggle)
            const hamburger = toggle.querySelector('.hamburger');
            if (links.classList.contains('active')) {
                // simple logical state, css can handle animation if expanded
            }
        });

        // Close menu when clicking a link
        links.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('active');
            });
        });
    }
}

/**
 * Update Copyright Year
 */
function updateCopyright() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
