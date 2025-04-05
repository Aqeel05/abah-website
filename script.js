// Sample portfolio items
const portfolioItems = [
    {
        title: "Project 1",
        category: "Web Design",
        image: "assets/project1.jpg",
        description: "A modern website design with clean aesthetics"
    },
    {
        title: "Project 2",
        category: "Branding",
        image: "assets/project2.jpg",
        description: "Complete brand identity for a tech startup"
    },
    {
        title: "Project 3",
        category: "UI/UX",
        image: "assets/project3.jpg",
        description: "Mobile app interface design"
    },
    {
        title: "Project 4",
        category: "Print Design",
        image: "assets/project4.jpg",
        description: "Magazine layout and typography"
    }
];

// Function to create portfolio items
function createPortfolioItems() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <div class="portfolio-item-content">
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-item-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.category}</p>
                    <p class="description">${item.description}</p>
                </div>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Create portfolio items
    createPortfolioItems();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
}); 