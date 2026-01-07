# Deploy FIVE Palm Presentation to Railway

This guide will help you deploy your presentation to Railway so you can share it with anyone via a URL.

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `five-palm-presentation`
3. Choose "Public" or "Private" (your preference)
4. **Do NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Push Your Code to GitHub

Copy and paste these commands into your Terminal (on Mac):

```bash
cd /path/to/five-palm-presentation
git remote add origin https://github.com/YOUR_USERNAME/five-palm-presentation.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

**What this does:**
- Connects your local project to GitHub
- Pushes all your files to the repository
- Sets up automatic tracking

## Step 3: Deploy to Railway

1. Go to https://railway.app
2. Click **"New Project"**
3. Select **"Deploy from GitHub"**
4. Authorize Railway to access your GitHub account
5. Select your `five-palm-presentation` repository
6. Click **"Deploy"**

Railway will automatically:
- Detect it's a Node.js project
- Install dependencies
- Build the project
- Deploy it live

## Step 4: Get Your Live URL

After deployment completes (usually 2-5 minutes):

1. Go to your Railway dashboard
2. Click on the `five-palm-presentation` project
3. Find the **"Domains"** section
4. Copy your public URL (looks like: `https://five-palm-presentation-production.up.railway.app`)

## Step 5: Share Your Presentation

Send the URL to anyone and they can:
- View the presentation in their browser
- Click play/pause, next/previous
- Use keyboard shortcuts (← → Space M)
- Works on Mac, Windows, mobile, tablet

## Keyboard Shortcuts

- **← Arrow**: Previous slide
- **→ Arrow**: Next slide
- **Space**: Play/Pause
- **M**: Mute/Unmute

## Making Updates

If you want to update the presentation:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update presentation"
   git push
   ```
3. Railway will automatically redeploy

## Troubleshooting

**Audio not playing?**
- Check browser volume
- Try a different browser
- Refresh the page

**Slides not loading?**
- Clear browser cache (Cmd+Shift+Delete on Mac)
- Try incognito/private mode
- Check internet connection

**Need help?**
- Check Railway docs: https://docs.railway.app
- GitHub help: https://docs.github.com

---

**That's it!** Your presentation is now live and shareable. 🎉
