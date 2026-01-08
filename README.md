# Reliable & Trustworthy AI (ReTAI) Lab Website

This repository contains the source code for the ReTAI Lab joint research initiative website, co-led by Prof. Irwin King and Prof. Zenglin Xu at CUHK.

## 🚀 Deployment

This site is designed to be hosted on **GitHub Pages**.

### Steps to Deploy:
1. Go to your GitHub repository **Settings**.
2. Navigate to the **Pages** section (on the left sidebar).
3. Under **Build and deployment**, select **Source** as "Deploy from a branch".
4. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
5. Click **Save**.

The site will be live at `https://<username>.github.io/King_Xu_TrustworthyLab/` (or your custom domain) within a few minutes.

## 🛠 Local Development

To preview the site locally:

### Option A: VS Code Live Server (Recommended)
1. Install the "Live Server" extension in VS Code.
2. Right-click on `index.html`.
3. Select "Open with Live Server".

### Option B: Python Simple HTTP Server
If you have Python installed, run:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## 📝 Editing Content

The website is **data-driven**, making it easy to add new members or publications without touching the HTML.

### To Add People, Publications, or Projects:
1. Open [`js/data.js`](js/data.js).
2. Edit the corresponding array:
   - `PEOPLE` (Faculty, PhD, Research Students)
   - `PUBLICATIONS`
   - `PROJECTS` (Open Source)
   - `RESEARCH_TOPICS`

Example - Adding a new PhD student:
```javascript
{
  name: "New Student Name",
  role: "PhD Student",
  affiliation: "CUHK",
  advisor: "Prof. Irwin King",
  links: { homepage: "#", scholar: "#", github: "#" }
},
```

### To Change Text Content:
- **General Page Text**: Edit [`index.html`](index.html) directly (e.g., About section text, Join Us calls to action).
- **Research Pillars**: Edit `RESEARCH_PILLARS` in [`js/data.js`](js/data.js).

### To Change Styles:
- Edit [`css/styles.css`](css/styles.css).
- Important colors are defined as variables at the top of the file (e.g., `--color-primary`, `--color-accent`).

## 📁 Project Structure

```
/
├── index.html        # Main HTML structure
├── css/
│   └── styles.css    # Global styles & responsive design
├── js/
│   ├── data.js       # Content data (Edit this for updates!)
│   └── main.js       # Rendering logic (Don't touch unless adding features)
└── README.md         # This file
```
