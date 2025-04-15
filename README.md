# Team Showcase Task Submission

This repo contains my solution for the "Team Showcase" front-end and WordPress integration challenge. It’s split into three parts:

---

## 🅰️ Part A – React Component

A responsive, animated team showcase built using:

- **React 19**
- **Tailwind CSS**
- **React Icons**

### Features

- Fully responsive and accessible
- Hover animations and transitions
- Paginated layout (if multiple members)

Open `React&Tailwindcss(Part A)/` to view the component and run locally.
Live Link: https://team-showcase-task.vercel.app/

---

## 🅱️ Part B – WordPress Plugin (CMS Integration)

This part explains how the React component from Part A would be integrated into a WordPress site using a custom Gutenberg block.

### Approach

- Register a **Custom Post Type** called `team_member`.
- Use **Advanced Custom Fields (ACF)** to manage team details (name, job title, photo, links).
- Register a custom **Gutenberg block** with `block.json`.
- Use a `render_callback` to inject the React app via a `<div id="team-showcase-block"></div>`.
- Fetch team data from the REST API or `get_posts()` within the callback and pass it to the front end using `wp_localize_script()`.

### Reusability

- The block can be added on any page via the **Gutenberg editor**.
- Since data is pulled dynamically, it updates globally across all pages.
- Could also be extended to support shortcode use if needed.

> 💡 A small code snippet is included in the folder (`CMS-Integration(Part B)/snippets.md`) to demonstrate key parts like block registration and data passing.

---

## 🌐 Part C – HTML/CSS Version

A semantic, accessible, and responsive version of the component built with **HTML and Vanilla CSS**.

### Features

- Mobile-first layout
- Uses semantic HTML (`section`, `article`, `h1`, `img`, etc.)
- Clean, well-commented CSS with hover animations
- Includes a 12-card responsive grid

Open `HTML-CSS/index.html` in your browser to view.
Live Link: https://team-showcase-task-htmlcss.vercel.app/

---

## ⚙️ Setup Instructions

### React Component (Part A)

```bash
cd React&Tailwindcss(Part A)
npm install
npm run dev

```
### WordPress Plugin (Part B)
```bash
cd CMS-Integration(Part B)
npm install
npm run build
```
Then place the plugin inside wp-content/plugins/ and activate it from the dashboard.

### Assumptions
ACF Pro is installed for flexible field management.

WordPress version 5.9+ is used for full Gutenberg compatibility.

Data for team members is entered manually via the WordPress admin panel.
---
### ✅ Conclusion
This task demonstrates my ability to build modern, accessible, and responsive user interfaces using React and Tailwind CSS, and to integrate them seamlessly into WordPress as a reusable Gutenberg block. The additional HTML/CSS version shows adaptability to different stacks and a focus on semantic, clean code. 
Thank you for reviewing my submission!

