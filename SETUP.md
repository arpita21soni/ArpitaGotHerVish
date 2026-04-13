# Wedding Website - Setup & Customization Guide

## 🎉 Congratulations!

Your wedding website is now ready! This guide will help you customize it with your information and deploy it online.

---

## 📋 Quick Customization Checklist

- [ ] Update couple's names on all pages
- [ ] Update wedding dates and times
- [ ] Update venue information
- [ ] Add your wedding logo to `assets/images/logo`
- [ ] Add your photos to `assets/images/`
- [ ] Update contact information
- [ ] Update Google Form RSVP link
- [ ] Update email address for guest book
- [ ] Test website locally
- [ ] Deploy to GitHub Pages
- [ ] Share website link with guests

---

## 🖼️ Adding Your Logo

Your logo should be placed at: `assets/images/logo`

**Steps:**
1. Find your wedding logo file (logo.jpg, logo.png, etc.)
2. Copy it to the `assets/images/` folder
3. Name it exactly as: `logo` (keep the original file extension)
4. The website will automatically use it!

**Supported formats:** JPG, PNG, GIF, SVG, WebP

---

## 📸 Adding Your Photos

1. Prepare your photos (compress to ~ 500KB-2MB each for faster loading)
2. Copy photos to `assets/images/` folder
3. Use standard filenames like: `photo1.jpg`, `engagement.jpg`, etc.

**Where photos appear:**
- Home page header (optional)
- Our Story page
- Wedding Details page
- Photo Gallery page

**To use them on pages:**
- Open the HTML file
- Find `placeholder.jpg`
- Replace with your actual photo filename

Example:
```html
<!-- Before -->
<img src="assets/images/placeholder.jpg" alt="Our Story">

<!-- After -->
<img src="assets/images/photo1.jpg" alt="Our Story">
```

---

## ✏️ Updating Content

### On Home Page (`index.html`)
- Add your names where it says "We're Getting Married!"
- Keep the event cards as they show your wedding schedule

### On Our Story Page (`story.html`)
- Fill in how you met
- Describe your relationship journey
- Add proposal story
- Add relevant photos

### On Wedding Details Page (`details.html`)
- Update venue address and details
- Keep event information (already filled in)
- Describe what to expect at each event
- Update dress code suggestions

### On Contact Page (`contact.html`)
- Add your phone number
- Add your email address
- Add venue address
- Update subject options if needed

### On Q&A Page (`qa.html`)
- Add specific information about your wedding
- Customize answers to FAQs
- Add important phone numbers as needed

---

## 📧 Email Setup (Optional)

### For Guest Book Form
The guest book form currently shows a thank you message. To receive actual emails:

**Option 1: Using Formspree.io (Free & Easy)**
1. Go to https://formspree.io
2. Sign up with your email
3. Create a new form
4. Copy your form ID
5. In `assets/js/script.js`, find the guest book form function
6. Replace `YOUR_FORM_ID` with your actual ID

**Option 2: Using Netlify Forms**
1. Deploy your site on Netlify instead of GitHub Pages
2. Enable Netlify Forms
3. Netlify handles form submissions automatically

**Option 3: Contact Form Service**
- EmailJS
- Basin.io
- Getform.io

---

## 🎨 Customizing Colors

If you want to change the blue/purple theme to match your logo better:

1. Open `assets/css/style.css`
2. Find the `:root` section (around line 12)
3. Update these color variables:

```css
:root {
  --primary-blue: #2c3e7f;        /* Main blue */
  --primary-purple: #663399;      /* Main purple */
  --light-purple: #9966cc;        /* Light purple */
  --accent-gold: #d4af37;         /* Gold accents */
  --light-bg: #f5f3f7;            /* Light background */
}
```

Use any hex color codes. Get color codes from:
- https://www.colorpicker.com
- https://www.colordot.it
- Extract from your logo using https://chir.ag/projects/ntc/js/ntc.js

---

## 🔗 Google Form Integration

The RSVP page embeds your Google Form. To update:

1. Get your Google Form embed code:
   - Open your Google Form
   - Click the three dots menu
   - Select "Embed in website"
   - Copy the iframe link

2. Update `rsvp.html`:
   - Find the `<iframe src=...` line
   - Replace the entire URL with your form's embed URL
   - Keep `embedded=true` at the end

---

## 🌐 Text Updates Across All Pages

### Update These Consistently:
1. **Venue Name:** "Atrio by Devam" → Your venue name
2. **Event Dates/Times:** December 3-4, 2026 → Your dates
3. **Email Address:** your.email@example.com → Your email
4. **Phone Number:** [Your Phone Number] → Your actual number
5. **Couple Names:** Used in titles and content

**Tip:** Use Find & Replace (Ctrl+H) in your text editor to update multiple instances at once!

---

## 📱 Testing Before Going Live

### Test Locally:
1. Open `index.html` in your browser
2. Test all navigation links
3. Check homepage on mobile (use browser dev tools)
4. Verify images load
5. Test forms work
6. Click through all pages

### On Different Browsers:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

### Testing Checklist:
- [ ] All pages load
- [ ] Navigation works
- [ ] Mobile menu appears on small screens
- [ ] Images display correctly
- [ ] Forms look good
- [ ] Links work (within reason - Google Form will error before deployment)
- [ ] Text is readable
- [ ] Colors look good

---

## 🚀 Deploying to GitHub Pages

### Quick Steps:
1. Create GitHub account (free!) at github.com
2. Follow the deployment guide in `DEPLOYMENT.md`
3. Your site goes live at: `https://yourusername.github.io`
4. Share the link with guests!

### Advantages:
- 100% FREE hosting
- Automatically secure (HTTPS)
- Easy to update - just edit and push
- Reliable and fast
- Perfect for wedding websites

---

## 🔄 After Deployment - Updating Your Site

To make changes after going live:

1. Update HTML files locally
2. Save changes
3. Upload to GitHub (using Git or GitHub Desktop)
4. Changes live in seconds!

Example updates you might make:
- Add another photo
- Update Q&A with new questions
- Fix a typo
- Add a "Thank You" message after the wedding
- Add photos to gallery after events

---

## 📊 After the Wedding

### Keep Your Website Alive!
- Add final wedding photos to gallery
- Add link to full photo album
- Keep for memories
- Share with friends
- Convert to family website

### Optional Next Steps:
- Add "Thank You" page
- Share honeymoon updates
- Create baby announcement page
- Build into family history

---

## ❓ Troubleshooting

### Images not showing:
- Check file is in `assets/images/` folder
- Check filename spelling (case-sensitive)
- Use web-friendly formats (JPG, PNG)

### Forms not working:
- Check internet connection
- Verify Google Form URL is correct
- Test on different browser

### Site looks broken:
- Clear browser cache (Ctrl+Shift+Delete)
- Check all HTML files are properly saved
- View browser console (F12) for errors

### Page layout weird on mobile:
- That's done automatically!
- Just make sure to test on phone browser
- Report specific issues if they occur

---

## 🆘 Need More Help?

### Documentation Files Included:
- `README.md` - Overview of files and features
- `DEPLOYMENT.md` - Detailed GitHub Pages deployment
- `TESTING.md` - Local testing instructions
- `SETUP.md` - This file!

### External Resources:
- GitHub Pages: https://pages.github.com
- HTML Guide: https://www.w3schools.com/html/
- CSS Guide: https://www.w3schools.com/css/
- GitHub Help: https://support.github.com

---

## 🎊 You're All Set!

Your wedding website is complete and ready to customized with your beautiful details. Make it yours and share your love story with everyone!

**Happy Wedding! 💕**

---

## 📝 Before Launching Checklist

- [ ] All couple names updated
- [ ] Wedding dates/times correct
- [ ] Venue information updated
- [ ] Logo added
- [ ] At least one sample photo added
- [ ] Contact info updated
- [ ] Google Form RSVP link updated
- [ ] All pages tested
- [ ] Mobile view tested
- [ ] Ready to deploy!

✦ ✦ ✦

With love and celebration! 🎉