# Interior Design Portfolio Website

A modern, responsive portfolio website to showcase interior design work. Built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Elegant and sophisticated UI
- Smooth scrolling navigation
- Portfolio grid with hover effects
- Services showcase
- Contact form with service selection
- Mobile-friendly navigation
- Social media integration
- Scroll animations

## Setup Instructions

1. Clone this repository to your local machine
2. Add your interior design project images to the `assets` folder
3. Update the `portfolioItems` array in `script.js` with your actual projects
4. Customize the content in `index.html` to match your studio information
5. Open `index.html` in a web browser to view the website

## Customization

### Adding Portfolio Items

To add new portfolio items, update the `portfolioItems` array in `script.js`:

```javascript
const portfolioItems = [
    {
        title: "Project Title",
        category: "Residential/Commercial",
        image: "assets/your-image.jpg",
        description: "Project description"
    },
    // Add more items as needed
];
```

### Changing Colors

The color scheme can be modified in `styles.css`. The main colors used are:

- Primary: #8B7355 (Warm Brown)
- Secondary: #2C1810 (Dark Brown)
- Accent: #D4B996 (Light Beige)
- Light: #F5F5F5 (Off White)
- Dark: #333333 (Dark Gray)

### Updating Social Media Links

Update the social media links in the footer section of `index.html`:

```html
<div class="social-links">
    <a href="your-instagram-url"><i class="fab fa-instagram"></i></a>
    <a href="your-pinterest-url"><i class="fab fa-pinterest"></i></a>
    <a href="your-linkedin-url"><i class="fab fa-linkedin"></i></a>
    <a href="your-houzz-url"><i class="fab fa-houzz"></i></a>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is open source and available under the [MIT License](LICENSE). 