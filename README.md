# Reliable & Trustworthy AI (ReTAI) Lab Website

This is the source code for the ReTAI Lab website. It is a static website built with HTML, CSS (Bootstrap 5), and JavaScript.

## Project Structure
- `index.html`: Main homepage
- `news.html`, `team.html`, `pubs.html`: Subpages
- `js/data.js`: Centralized content data (edit this to update people, news, etc.)
- `js/render.js`: Logic to render content from data.js
- `css/styles.css`: Custom academic styling
- `assets/`: Images and other static assets

## Deployment Instructions (GitHub Pages)

1.  Go to the repository **Settings**.
2.  Navigate to the **Pages** section (on the left sidebar).
3.  Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4.  Under **Branch**, select **main** and folder **/(root)**.
5.  Click **Save**.

The site will be live at `https://<username>.github.io/retai-lab/` shortly.

## Updating Content

To update the website content (e.g., adding a new publication or news item):
1.  Open `js/data.js`.
2.  Add the new item to the respective array (e.g., `news`, `publications`).
3.  Commit and push changes. The site will auto-update.
