const sidebars = document.querySelectorAll('.sidebar');

    sidebars.forEach(sidebar => {
        sidebar.addEventListener('click', (event) => {
            if (!event.target.closest('a')) {
                sidebar.classList.toggle('expanded');
            }
            
        });

    
    const links = sidebar.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            console.log(`Clicked link: ${link.textContent} `);
        });
    });
});
