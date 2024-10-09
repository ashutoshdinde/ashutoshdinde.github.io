document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar ul li a');
    const sidebarItems = document.querySelectorAll('.sidebar ul li'); 
    const sections = document.querySelectorAll('section');

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            sections.forEach((section, i) => {
                if (i === index) {
                    section.classList.add('fade-in', 'loaded'); 
                    section.scrollIntoView({ behavior: 'smooth' }); 
                } else {
                    section.classList.remove('loaded'); 
                }
            });
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`.sidebar ul li a[href="#${entry.target.id}"]`);
            if (entry.isIntersecting) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    }, { threshold: 0.6 });

    sections.forEach((section, index) => {
        observer.observe(section);
        section.classList.add('fade-in'); 

  
        setTimeout(() => {
            section.classList.add('loaded');
        }, 100 * index); 
    });


    sidebarItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('loaded'); 
        }, 100 * index); 
    });
});
