// Utility to safe get element
const get = (id) => document.getElementById(id);

// --- Shared Components ---

function renderNavbar(activePage) {
    const nav = document.createElement('nav');
    nav.className = "navbar navbar-expand-lg navbar-light fixed-top";
    nav.innerHTML = `
        <div class="container">
            <a class="navbar-brand" href="index.html">ReTAI Lab</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'home' ? 'active' : ''}" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'news' ? 'active' : ''}" href="news.html">News</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${activePage === 'team' ? 'active' : ''}" href="#" id="teamDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Our Team
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="teamDropdown">
                            <li><a class="dropdown-item" href="team.html">People</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'pubs' ? 'active' : ''}" href="pubs.html">Publications</a>
                    </li>
                </ul>
            </div>
        </div>
    `;
    document.body.prepend(nav);
}

function renderHero() {
    const hero = document.createElement('header');
    hero.className = "hero-section text-center";
    // Add margin-top to account for fixed navbar
    hero.style.marginTop = "56px";
    hero.innerHTML = `
        <div class="container">
            <h1 class="hero-title">${retaiData.labName}</h1>
            <p class="hero-subtitle mx-auto">Reliable & Trustworthy AI Lab @ CUHK</p>
        </div>
    `;
    // Insert after navbar
    const nav = document.querySelector('nav');
    if (nav) {
        nav.after(hero);
    } else {
        document.body.prepend(hero);
    }
}

function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="container">
            <p class="mb-0">Copyright &copy; ${retaiData.footerYear} ${retaiData.labName} at CUHK</p>
        </div>
    `;
    document.body.appendChild(footer);
}

// --- Page Specific Rendering ---

function renderHome() {
    renderNavbar('home');
    renderHero();
    renderFooter();

    // 1. About
    const aboutSection = get('about-section');
    if (aboutSection) {
        let bullets = retaiData.about.topics.map(t => `<li>${t}</li>`).join('');
        aboutSection.innerHTML = `
            <div class="container">
                <h2 class="section-title">About Our Group</h2>
                <div class="row">
                    <div class="col-lg-12">
                        <p class="lead">${retaiData.about.text}</p>
                        <ul>${bullets}</ul>
                    </div>
                </div>
            </div>
        `;
    }

    // 2. Latest News (Limit 6)
    const newsSection = get('news-section');
    if (newsSection) {
        let newsItems = retaiData.news.slice(0, 6).map(item => `
            <div class="news-item">
                <span class="news-date">[${item.date}]</span>
                <span class="news-tag">[${item.tag}]</span>
                <span class="news-title">${item.title}</span>
            </div>
        `).join('');

        newsSection.innerHTML = `
            <div class="container">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h2 class="section-title mb-0">Latest News</h2>
                    <a href="news.html" class="btn btn-outline-primary btn-sm">View All</a>
                </div>
                ${newsItems}
            </div>
        `;
    }

    // 3. Research Interests
    const researchSection = get('research-section');
    if (researchSection) {
        let cards = retaiData.researchInterests.map(item => `
            <div class="col-md-4 mb-4">
                <div class="card topic-card">
                    <div class="card-img-top-placeholder">
                        <i class="bi bi-cpu"></i> <!-- Bootstrap Icons placeholder -->
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.desc}</p>
                    </div>
                </div>
            </div>
        `).join('');

        researchSection.innerHTML = `
            <div class="container">
                <h2 class="section-title">Research Interests</h2>
                <div class="row">
                    ${cards}
                </div>
            </div>
        `;
    }

    // 4. Recent Pubs (Limit 2 groups approx)
    const pubsSection = get('pubs-section');
    if (pubsSection) {
        // Just show all year groups but maybe limit items if list is long? 
        // For now show all groups as "Recent" is usually the last 2-3 years.
        let pubHtml = retaiData.publications.map(group => `
            <h4 class="mt-4 border-bottom pb-2">${group.year}</h4>
            <ul class="list-unstyled">
                ${group.items.map(pub => `
                    <li class="mb-2">
                        ${pub.text} 
                        [<a href="${pub.links.pdf}">PDF</a>] 
                        [<a href="${pub.links.code}">Code</a>]
                    </li>
                `).join('')}
            </ul>
        `).join('');

        pubsSection.innerHTML = `
            <div class="container">
                <h2 class="section-title">Recent Publications</h2>
                ${pubHtml}
            </div>
        `;
    }

    // 5. PIs
    const piSection = get('pi-section');
    if (piSection) {
        let piCards = retaiData.team.pi.map(p => `
            <div class="col-md-6 mb-4">
                 <div class="card person-card">
                    <!-- Avatar SVG Placeholder -->
                    <div class="person-avatar">
                        <svg width="50" height="50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </div>
                    <h5>${p.name}</h5>
                    <p class="person-role">${p.role}</p>
                    <div class="person-links">
                        <a href="${p.links.email}">Email</a>
                        <a href="${p.links.homepage}">Home</a>
                        <a href="${p.links.scholar}">Scholar</a>
                    </div>
                 </div>
            </div>
        `).join('');

        piSection.innerHTML = `
            <div class="container">
                <h2 class="section-title">Principal Investigators</h2>
                <div class="row">
                    ${piCards}
                </div>
            </div>
        `;
    }

    // 6. Students
    const studentSection = get('student-section');
    if (studentSection) {
        // Just show a snippet or all? Prompt says "Current Students section: grid of people cards"
        // We will render ALL students here as per "homepage sections should match MISC-like ordering... 6) Current Students"

        let groupsHtml = retaiData.team.students.map(group => `
            <h4 class="mt-4 mb-3">${group.groupname}</h4>
            <div class="row">
                ${group.members.map(m => `
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="person-card p-3">
                             <div class="person-avatar" style="width: 60px; height: 60px;">
                                <svg width="30" height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                             </div>
                             <h6 class="mb-1">${m.name}</h6>
                             <p class="person-role small mb-2">${m.role}</p>
                             <div class="person-links small">
                                <a href="${m.links.homepage}">Web</a>
                             </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');

        studentSection.innerHTML = `
            <div class="container">
                <h2 class="section-title">Current Students</h2>
                ${groupsHtml}
            </div>
        `;
    }
}

function renderNewsPage() {
    renderNavbar('news');
    renderHero();
    renderFooter();

    const container = get('all-news');
    if (container) {
        let newsItems = retaiData.news.map(item => `
            <div class="news-item border-bottom pb-2 mb-2">
                <span class="news-date">[${item.date}]</span>
                <span class="news-tag">[${item.tag}]</span>
                <span class="news-title">${item.title}</span>
            </div>
        `).join('');
        container.innerHTML = `
            <div class="container">
                <h2 class="section-title">All News</h2>
                ${newsItems}
            </div>
        `;
    }
}

function renderTeamPage() {
    renderNavbar('team');
    renderHero();
    renderFooter();

    const container = get('all-team');
    if (container) {
        // Reuse the logic from home but maybe formatted differently? 
        // For simplicity, we use similar grid layout.

        // PIs
        let piCards = retaiData.team.pi.map(p => `
            <div class="col-md-6 mb-4">
                 <div class="card person-card">
                    <div class="person-avatar">
                        <svg width="50" height="50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </div>
                    <h5>${p.name}</h5>
                    <p class="person-role">${p.role}</p>
                    <div class="person-links">
                        <a href="${p.links.email}">Email</a>
                        <a href="${p.links.homepage}">Home</a>
                        <a href="${p.links.scholar}">Scholar</a>
                    </div>
                 </div>
            </div>
        `).join('');

        let studentGroups = retaiData.team.students.map(group => `
            <h3 class="mt-5 mb-4 border-bottom pb-2">${group.groupname}</h3>
            <div class="row">
                ${group.members.map(m => `
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="person-card">
                             <div class="person-avatar">
                                <svg width="40" height="40" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                             </div>
                             <h5 class="mb-1">${m.name}</h5>
                             <p class="person-role small mb-2">${m.role}</p>
                             <div class="person-links">
                                <a href="${m.links.homepage}">Homepage</a>
                             </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');

        container.innerHTML = `
            <div class="container">
                <h2 class="section-title mb-4">Our Team</h2>
                <h3 class="mb-4 border-bottom pb-2">Principal Investigators</h3>
                <div class="row">
                    ${piCards}
                </div>
                ${studentGroups}
            </div>
        `;
    }
}

function renderPubsPage() {
    renderNavbar('pubs');
    renderHero();
    renderFooter();

    const container = get('all-pubs');
    if (container) {
        let pubHtml = retaiData.publications.map(group => `
            <h3 class="mt-4 border-bottom pb-2">${group.year}</h3>
            <ul class="list-unstyled">
                ${group.items.map(pub => `
                    <li class="mb-3">
                        <div class="fw-bold">${pub.text}</div> 
                        <div class="small">
                            <a href="${pub.links.pdf}" class="me-2">[PDF]</a>
                            <a href="${pub.links.code}">[Code]</a>
                        </div>
                    </li>
                `).join('')}
            </ul>
        `).join('');

        container.innerHTML = `
            <div class="container">
                <h2 class="section-title">Publications</h2>
                ${pubHtml}
            </div>
        `;
    }
}
