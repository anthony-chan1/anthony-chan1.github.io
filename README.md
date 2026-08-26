# Anthony Chan — PhD portfolio

A lightweight academic portfolio designed for GitHub Pages. It presents my profile, research, publications, projects, and resources in an original, dependency-free design.

## Updating the site

The site content lives in `index.html`, with its visual design in `styles.css` and small interactions in `script.js`.

Search-engine metadata and Person/ProfilePage structured data are stored in the `<head>` of `index.html`. `sitemap.xml` and `robots.txt` help search engines discover the canonical public URL.

The current portrait is `assets/Self-Portrait Pro.jpg`. The site also uses `banner2-web.jpg`, `Sea Ice 2.jpg`, `Parliament.jpg`, `Polar potrait.jpg`, `logo2.png`, and `Penguinfavicon.png` as feature imagery.

To preview the embedded YouTube video locally, serve the folder over HTTP rather than opening `index.html` directly:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish at `https://YOUR_USERNAME.github.io`

1. On GitHub, create a **public** repository named exactly `YOUR_USERNAME.github.io`.
2. In a terminal, from this folder, run:

   ```bash
   git init
   git add .
   git commit -m "Create PhD portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
   git push -u origin main
   ```

3. On GitHub, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a few minutes, visit `https://YOUR_USERNAME.github.io`.

For later edits, change the files and run:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will republish the site automatically.
