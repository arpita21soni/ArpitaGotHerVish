# Local Testing Instructions

## Option 1: Using Python (Recommended)

If you have Python installed, you can run a local server:

### Python 3.x:
```bash
python -m http.server 8000
```

### Python 2.x:
```bash
python -m SimpleHTTPServer 8000
```

Then open your browser and go to: `http://localhost:8000`

## Option 2: Using Node.js

If you have Node.js installed:

```bash
npx http-server
```

This will start a local server on port 8080.

## Option 3: Open HTML Directly

You can open `index.html` directly in your browser by:
- Double-clicking the file, or
- Right-click > Open with > Browser

Note: Some features like the mobile menu may work better with a local server.

## Testing Checklist

- [ ] Home page loads correctly
- [ ] Navigation menu works on desktop
- [ ] Mobile menu toggle works on smaller screens
- [ ] All pages load without errors
- [ ] Links between pages work
- [ ] Images display properly (use placeholder.jpg for now)
- [ ] Logo displays in header and hero section
- [ ] Google Form RSVP page loads
- [ ] Guest Book form works
- [ ] Contact form works
- [ ] FAQ accordion opens/closes
- [ ] Responsive design works on mobile screen sizes
- [ ] Footer displays on all pages

## Updating with Your Content

Before deploying, make sure to:

1. **Logo**: Replace files at `assets/images/logo` with your actual logo
2. **Photos**: Add your photos to `assets/images/` directory
3. **Content**: Update all pages with:
   - Your names
   - Venue details
   - Contact information
   - Email addresses
4. **Google Form**: Update the RSVP page with your actual Google Form link
5. **Links**: Update all placeholder links like `[Your Phone Number]`, `[Venue Address]`, etc.

## File Organization

```
assets/images/
├── logo (your wedding logo)
├── placeholder.jpg (example image - replace with your photos)
├── photo1.jpg
├── photo2.jpg
└── ... (add more photos as needed)
```

## Tips for Best Results

- Keep images under 2MB for faster loading
- Use JPG or PNG format for images
- Test on different browsers before deploying
- Check mobile view using browser dev tools (F12)
- Ensure all forms have proper email addresses configured

## Next Steps

1. Test locally using the methods above
2. Make sure everything looks good
3. Upload to GitHub Pages following the deployment guide
