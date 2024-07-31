document.addEventListener('DOMContentLoaded', function() {
    const projects = [];

    const projectList = document.getElementById('project-list');
    const addProjectForm = document.getElementById('add-project-form');

    addProjectForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('project-title').value;
        const description = document.getElementById('project-description').value;

        const project = {
            title: title,
            description: description
        };

        projects.push(project);
        displayProjects();

        addProjectForm.reset();
    });

    function displayProjects() {
        projectList.innerHTML = '';

        projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project';
            projectItem.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectList.appendChild(projectItem);
        });
    }

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
        contactForm.reset();
    });
});
