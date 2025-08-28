# 🔐 Auth — Welcome to the Future

A modern **Sign In / Sign Up UI** built with **HTML, SCSS, and vanilla JS**.  
Smooth transitions, animated tab slider, glassmorphism effects, and responsive design — all without external JS frameworks.

---

## ✨ Features

- 🌈 **Modern design** with gradient backgrounds and glassmorphism cards
- 🔄 **Animated Sign In ↔ Sign Up switch** with smooth height transitions
- 🎚️ **Sliding tab indicator** for active state feedback
- 📱 **Responsive layout** (two-column on desktop, stacked on mobile)
- 🔑 **Reusable SCSS mixins & variables**
- ⚡ **Pure HTML + SCSS + JS** — no frameworks required

---

## 📂 Project Structure

.
├── index.html # Main HTML file
├── scss/
│ └── styles.scss # SCSS source (tidy, structured)
├── public/
│ └── styles.css # Compiled CSS output
└── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
2. Install dependencies
This project only needs Sass for compiling SCSS → CSS.
If you don’t have it installed globally:

bash
Copy
Edit
npm install

3. Watch for changes:

bash
Copy
Edit
npm sass sass/main.scss src/styles.css --watch
4. Open in browser
Just open index.html in your browser. No server required.

🎨 Customization
Edit SCSS variables in styles.scss to tweak colors, fonts, or gradients.

Use mixins like @include glass or @include button-primary to style new components.

Add/remove fields in the Sign Up or Sign In forms as needed.

💡 Credits
Font Awesome for icons

Google Fonts (Inter font family)

Inspiration: glassmorphism & gradient UI trends
