# Design Portfolio Website

A modern, responsive portfolio website to showcase design work. Built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Modern and clean UI
- Smooth scrolling navigation
- Portfolio grid with hover effects
- Contact form
- Mobile-friendly navigation
- Social media integration

## Setup Instructions

1. Clone this repository to your local machine
2. Create an `assets` folder in the root directory
3. Add your portfolio images to the `assets` folder
4. Update the `portfolioItems` array in `script.js` with your actual portfolio items
5. Customize the content in `index.html` to match your information
6. Open `index.html` in a web browser to view the website

## Customization

### Adding Portfolio Items

To add new portfolio items, update the `portfolioItems` array in `script.js`:

```javascript
const portfolioItems = [
    {
        title: "Your Project Title",
        category: "Category",
        image: "assets/your-image.jpg",
        description: "Project description"
    },
    // Add more items as needed
];
```

### Changing Colors

The color scheme can be modified in `styles.css`. The main colors used are:

- Primary: #3498db
- Secondary: #2c3e50
- Background: #f5f7fa
- Text: #333

### Updating Social Media Links

Update the social media links in the footer section of `index.html`:

```html
<div class="social-links">
    <a href="your-instagram-url"><i class="fab fa-instagram"></i></a>
    <a href="your-linkedin-url"><i class="fab fa-linkedin"></i></a>
    <a href="your-behance-url"><i class="fab fa-behance"></i></a>
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