# Personal Portfolio

A clean, modern, and responsive portfolio website to showcase your work and skills.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Project showcase section
- Contact form
- Social media links
- Modern UI with animations

## How to Use

1. Clone this repository or download the files
2. Open `index.html` in your web browser
3. Customize the content in `index.html` with your personal information
4. Update the styling in `styles.css` to match your preferences

## Customization

### Changing Colors

You can easily change the color scheme by modifying the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #3a86ff;
    --secondary-color: #8338ec;
    --dark-color: #212529;
    --light-color: #f8f9fa;
    --text-color: #333;
}
```

### Adding Projects

To add a new project, copy and paste a project card in the projects section and update the content:

```html
<div class="project-card">
    <h3>Project Title</h3>
    <p>Project description goes here.</p>
    <a href="#" class="project-link">View Project</a>
</div>
```

### Updating Social Links

Update the social media links in the contact section with your own profiles:

```html
<div class="social-links">
    <a href="YOUR_GITHUB_URL" target="_blank"><i class="fab fa-github"></i></a>
    <a href="YOUR_LINKEDIN_URL" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="YOUR_TWITTER_URL" target="_blank"><i class="fab fa-twitter"></i></a>
</div>
```

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Font Awesome Icons
- Google Fonts

## License

This project is open source and available under the [MIT License](LICENSE).

---

Created with ❤️ by [Your Name]
