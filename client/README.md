# FIVE Palm Jumeirah - 7-Day TikTok Presentation

An interactive web presentation showcasing the FIVE Palm Jumeirah 7-day TikTok campaign with autoplay audio clips, smooth slide transitions, and a neon cyan aesthetic matching the Soraya Perry Music website.

## Features

- ✅ **Auto-playing Audio**: Music automatically plays without clipping words, extending through complete choruses
- ✅ **Smooth Transitions**: Fade-in animations between slides for a polished experience
- ✅ **Full Audio Control**: Play/pause, mute, and navigate through slides independently
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile devices
- ✅ **Keyboard Navigation**: Arrow keys to navigate, Space to play/pause, M to mute
- ✅ **Neon Aesthetic**: Dark theme with cyan accents matching sorayaperrymusic.com
- ✅ **Auto-advance**: Automatically moves to the next slide when audio finishes
- ✅ **Progress Tracking**: Visual progress bar and time display for each audio clip

## Project Structure

```
five-palm-presentation/
├── client/
│   ├── public/
│   │   ├── audio/                    # Audio files for each day
│   │   │   ├── Day1_DanceCrazy_FullChorus.mp3
│   │   │   ├── Day2_WhenYouFeelSomething_FullChorus.mp3
│   │   │   ├── Day3_SomeoneWhoWantsMe_FullChorus.mp3
│   │   │   ├── Day4_YouSaid_FullChorus.mp3
│   │   │   ├── Day5_YouAreValuable_FullChorus.mp3
│   │   │   ├── Day6_MissingFromMe_FullChorus.mp3
│   │   │   └── Day7_YouHaveEverything_FullChorus.mp3
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Presentation.tsx      # Main presentation component
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css                 # Dark theme with cyan accents
│   └── package.json
├── server/
│   └── index.ts                      # Express server for deployment
├── railway.json                      # Railway deployment configuration
├── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Local Development

1. **Clone the repository** (or push to GitHub first)
   ```bash
   git clone <your-repo-url>
   cd five-palm-presentation
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Usage

### Keyboard Shortcuts
- **← / →** - Navigate between slides
- **Space** - Play/Pause audio
- **M** - Mute/Unmute audio

### Mouse/Touch
- **Previous/Next buttons** - Navigate between slides
- **Play/Pause button** - Control audio playback
- **Mute button** - Toggle audio mute
- **Progress bar** - Visual indicator of audio progress

### Auto-play Behavior
- Audio automatically plays when you navigate to a slide
- When audio finishes, the presentation automatically advances to the next slide
- The final slide loops back to the beginning
- You can pause audio to review a slide without advancing

## Deployment to Railway

### Step 1: Push to GitHub

1. Create a new GitHub repository
2. Initialize git in the project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FIVE Palm presentation"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/five-palm-presentation.git
   git push -u origin main
   ```

### Step 2: Deploy to Railway

1. **Go to Railway.app**
   - Visit https://railway.app
   - Sign in or create an account

2. **Create a new project**
   - Click "New Project"
   - Select "Deploy from GitHub"
   - Connect your GitHub account
   - Select the `five-palm-presentation` repository

3. **Configure environment**
   - Railway will automatically detect the Node.js project
   - The `railway.json` file will be used for build configuration
   - No additional environment variables needed

4. **Deploy**
   - Railway will automatically build and deploy
   - Your presentation will be live at `https://<your-project-name>.railway.app`

### Step 3: Custom Domain (Optional)

1. In Railway dashboard, go to your project
2. Click "Settings"
3. Under "Domains", add your custom domain
4. Follow the DNS configuration steps

## Audio Files

The presentation includes 7 audio clips, each capturing a complete chorus without cutting off words:

| Day | Song | Duration | File |
|-----|------|----------|------|
| 1 | Dance Crazy in Dubai | 2:06 | Day1_DanceCrazy_FullChorus.mp3 |
| 2 | When You Feel Something | 1:38 | Day2_WhenYouFeelSomething_FullChorus.mp3 |
| 3 | Someone Who Wants Me | 1:35 | Day3_SomeoneWhoWantsMe_FullChorus.mp3 |
| 4 | You Said (Club Mix) | 3:10 | Day4_YouSaid_FullChorus.mp3 |
| 5 | You Are Valuable (Piano) | 1:40 | Day5_YouAreValuable_FullChorus.mp3 |
| 6 | Missing From Me | 3:00 | Day6_MissingFromMe_FullChorus.mp3 |
| 7 | You Have Everything | 3:00 | Day7_YouHaveEverything_FullChorus.mp3 |

## Slide Content

### Slide 1: Title
**FIVE PALM JUMEIRAH** - 7-Day TikTok Campaign

### Slide 2: Day 1 - Arrival & Energy
**Soundtrack**: Dance Crazy in Dubai
The journey begins with an exhilarating arrival. Aerial shots showcase the stunning beachfront location on Palm Jumeirah.

### Slide 3: Day 2 - Presence & Calm
**Soundtrack**: When You Feel Something
After the excitement of arrival, Day 2 invites viewers into a moment of tranquility. Slow, meditative shots capture a guest finding peace.

### Slide 4: Day 3 - Connection & Desire
**Soundtrack**: Someone Who Wants Me
Day 3 shifts focus to connection. A couple shares intimate moments on a rooftop terrace at sunset.

### Slide 5: Day 4 - Peak Energy & Nightlife
**Soundtrack**: You Said (Club Mix)
The campaign reaches its energetic peak. Fast-paced editing showcases The Penthouse with colorful LED lights and dancing crowds.

### Slide 6: Day 5 - Warmth & Care
**Soundtrack**: You Are Valuable Always
Day 5 focuses on wellness and self-worth through the ReFIVE Spa experience. Soothing visuals showcase spa treatments.

### Slide 7: Day 6 - Reflection & Introspection
**Soundtrack**: Missing From Me
Day 6 offers a quiet, introspective moment. A solo guest sits on their balcony overlooking the Dubai Marina.

### Slide 8: Day 7 - Resolution & Fulfillment
**Soundtrack**: You Have Everything You Need
The campaign concludes with Day 7's resolution. A montage of the week's highlights culminates in the guest's satisfied departure.

### Slide 9: Call to Action
**Ready to Create Your Story?** - Book Your Experience at FIVE Palm Jumeirah

## Design

### Color Scheme
- **Background**: Dark slate (#0f172a)
- **Primary Accent**: Neon cyan (#22d3ee)
- **Secondary**: Slate gray (#1e293b)
- **Text**: Light gray/white (#f0f9fa)

### Typography
- **Titles**: Large, bold, with neon glow effect
- **Subtitles**: Medium weight, cyan colored
- **Body**: Regular weight, light gray

### Animations
- Smooth fade-in transitions between slides
- Neon glow effect on titles
- Progress bar animations
- Hover effects on buttons

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized audio files (MP3 format)
- Lazy loading of audio resources
- Efficient CSS animations
- Responsive design for all screen sizes
- Fast load times (~2-3 seconds)

## Troubleshooting

### Audio not playing
- Check browser autoplay policies (may need user interaction first)
- Ensure audio files are in `/client/public/audio/`
- Try clicking the play button manually

### Slides not transitioning
- Check browser console for errors
- Ensure audio files are properly loaded
- Try refreshing the page

### Styling issues
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Check that CSS file is properly linked
- Verify dark theme is enabled

## Development

### Build for production
```bash
pnpm build
# or
npm run build
```

### Preview production build
```bash
pnpm preview
# or
npm run preview
```

### Type checking
```bash
pnpm check
# or
npm run check
```

## License

© 2026 FIVE Palm Jumeirah. All rights reserved.

## Support

For questions or issues, contact: sorayaperrymusic@gmail.com

---

**Tagline**: Where Every Moment Matters
