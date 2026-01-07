# Quick Deployment Guide

## 🚀 Deploy to Railway in 3 Steps

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "FIVE Palm presentation - ready for deployment"

# Create a new repository on GitHub, then:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/five-palm-presentation.git
git push -u origin main
```

### Step 2: Connect to Railway

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Connect your GitHub account
5. Select the `five-palm-presentation` repository
6. Railway will automatically detect the Node.js project and deploy

### Step 3: Access Your Presentation

Your presentation will be live at:
```
https://five-palm-presentation.railway.app
```

(Railway will assign a default domain, you can customize it in settings)

---

## 📝 What's Included

✅ **7 Audio Clips** - Complete choruses without cut-off words
✅ **9 Slides** - Full presentation with all content
✅ **Auto-play** - Music automatically plays and advances slides
✅ **Neon Aesthetic** - Dark theme with cyan accents
✅ **Responsive Design** - Works on all devices
✅ **Keyboard Controls** - Arrow keys, Space, M for shortcuts

---

## 🎮 How to Use

**Navigation:**
- Arrow keys (← →) - Move between slides
- Space - Play/Pause audio
- M - Mute/Unmute

**Controls:**
- Click Previous/Next buttons to navigate
- Click Play/Pause to control audio
- Click Mute to toggle sound

---

## 📊 Presentation Structure

| Slide | Title | Audio Duration |
|-------|-------|---|
| 1 | FIVE Palm Jumeirah - Title | 2:06 |
| 2 | Day 1: Arrival & Energy | 2:06 |
| 3 | Day 2: Presence & Calm | 1:38 |
| 4 | Day 3: Connection & Desire | 1:35 |
| 5 | Day 4: Peak Energy & Nightlife | 3:10 |
| 6 | Day 5: Warmth & Care | 1:40 |
| 7 | Day 6: Reflection & Introspection | 3:00 |
| 8 | Day 7: Resolution & Fulfillment | 3:00 |
| 9 | Call to Action - Book Your Stay | 3:00 |

**Total Presentation Duration:** ~21 minutes

---

## 🔧 Local Development

To test locally before deploying:

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Open http://localhost:3000
```

---

## 🎨 Customization

### Change Colors
Edit `/client/src/index.css` to modify the color scheme

### Update Slide Content
Edit `/client/src/components/Presentation.tsx` to change slide text

### Replace Audio Files
Add new MP3 files to `/client/public/audio/` and update file paths in Presentation.tsx

---

## ✅ Deployment Checklist

- [ ] All 7 audio files are in `/client/public/audio/`
- [ ] Project builds without errors (`pnpm build`)
- [ ] GitHub repository is created and code is pushed
- [ ] Railway project is connected to GitHub
- [ ] Deployment is complete and live
- [ ] Test presentation in browser
- [ ] Share the Railway URL with stakeholders

---

## 🆘 Troubleshooting

**Audio not playing?**
- Check browser console for errors
- Ensure audio files are properly loaded
- Try clicking play button manually

**Build fails?**
- Run `pnpm install` to ensure all dependencies are installed
- Check that Node.js version is 18+
- Clear cache: `rm -rf node_modules dist && pnpm install`

**Slides not showing?**
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Check that all files are committed to git
- Verify Railway deployment logs

---

## 📞 Support

For questions or issues:
- Check the main README.md for detailed documentation
- Review Railway documentation: https://docs.railway.app
- Contact: sorayaperrymusic@gmail.com

---

**Ready to deploy? Push to GitHub and let Railway handle the rest! 🚀**
