function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
        <div class="project-overlay">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
        </div>
    `;
    card.addEventListener('click', () => {
        window.open(project.repoUrl, '_blank');
    });
    return card;
}

function renderProjects(projects) {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    projects.forEach(project => {
        grid.appendChild(createProjectCard(project));
    });
}

function setupSearch(projects) {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredProjects = projects.filter(project =>
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query)
        );
        renderProjects(filteredProjects);
    });
}