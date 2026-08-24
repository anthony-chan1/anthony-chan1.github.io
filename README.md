# Anthony Chan — PhD portfolio

A lightweight academic portfolio designed for GitHub Pages. It presents my profile, research, publications, projects, and resources in an original, dependency-free design.

## Personalise the site

Open `index.html` in a text editor and search for `[` to find every sample placeholder. Replace:

- the PhD topic, university, research question, methods, and impact;
- the three project summaries and links;
- publications and Google Scholar URL;
- email address, GitHub, LinkedIn, and CV links.

Add your portrait as `assets/profile.jpg`. The header shows your initials until that file is present.

If you want a CV button, add your PDF (for example at `assets/anthony-chan-cv.pdf`) and replace the “More about me” link. Test locally by opening `index.html` in a browser.

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
