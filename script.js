// Sample portfolio items
const portfolioItems = [
    {
        title: "Modern Apartment",
        category: "○ Residential ○",
        image: "assets/gemini-interior-design.jpeg",
        description: "Contemporary living space with minimalist design and natural elements"
    },
    {
        title: "Luxury Villa",
        category: "○ Residential ○",
        image: "assets/chatgpt-interior-design.png",
        description: "Elegant villa interior with custom furniture and premium finishes"
    },
    {
        title: "Co-working Space",
        category: "○ Commercial ○",
        image: "assets/hannah.png",
        description: "Innovative workspace design promoting creativity and collaboration"
    },
    {
        title: "Boutique Hotel",
        category: "○ Commercial ○",
        image: "assets/jeddah.png",
        description: "Unique hotel interior with local cultural influences"
    },
    {
        title: "Minimalist Loft",
        category: "○ Residential ○",
        image: "assets/minimalist-loft.jpeg",
        description: "Open-concept living space with industrial elements"
    },
    {
        title: "Restaurant Design",
        category: "○ Commercial ○",
        image: "assets/restaurant.jpeg",
        description: "Sophisticated dining space with custom lighting and furniture"
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
                    <p class="category">${item.category}</p>
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
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Add animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .about-content, .contact-container');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
}); 