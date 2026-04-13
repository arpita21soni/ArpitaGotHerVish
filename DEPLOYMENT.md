# GitHub Pages Deployment Guide

## Step-by-Step Deployment Instructions

### Prerequisites
- A GitHub account (create one at https://github.com/join if needed)
- Git installed on your computer (or use GitHub Desktop)
- All website files ready to upload

---

## Method 1: Using GitHub Desktop (Easiest)

### 1. Install GitHub Desktop
- Download from: https://desktop.github.com
- Sign in with your GitHub account

### 2. Create a New Repository
- Click "New Repository"
- Name it: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
- Choose the folder where your wedding website files are
- Click "Create Repository"

### 3. Publish to GitHub
- Click "Publish repository"
- Make sure "Keep this code private" is unchecked (for GitHub Pages)
- Click "Publish Repository"

### 4. Enable GitHub Pages
- Go to https://github.com/yourusername/yourusername.github.io
- Click "Settings" tab
- Scroll to "GitHub Pages" section
- Select "main" as the source branch
- Your site will be live at: `https://yourusername.github.io`

---

## Method 2: Using Git Command Line

### 1. Open Command Prompt/PowerShell
Navigate to your wedding website folder:
```bash
cd "c:\Users\arpit\OneDrive - University of Pittsburgh\Wedding\website"
```

### 2. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial wedding website commit"
```

### 3. Create Repository on GitHub
- Go to https://github.com/new
- Create repository named: `yourusername.github.io`
- Do NOT initialize with README
- Click "Create repository"

### 4. Push to GitHub
```bash
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

### 5. Your site is live!
Visit: `https://yourusername.github.io`

---

## Method 3: Using Custom Domain (Optional)

If you want to use a custom domain like `our-wedding.com`:

1. Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In GitHub repository settings > Pages, add your custom domain
3. Update DNS records at your domain registrar:
   - Type: A
   - Name: @
   - Value: `185.199.108.153` (and other GitHub IPs)
4. Enable HTTPS in GitHub Pages settings

---

## After Deployment

### Updating Your Website
Whenever you make changes to your website:

#### Using GitHub Desktop:
1. Make your changes to the files
2. GitHub Desktop shows changes automatically
3. Write a description in "Summary"
4. Click "Commit to main"
5. Click "Push origin"

#### Using Command Line:
```bash
git add .
git commit -m "Update wedding details"
git push origin main
```

Your changes will be live within seconds!

---

## Common Issues & Solutions

### Issue: Site not showing up
**Solution:**
- Verify repository name is exactly `yourusername.github.io`
- Check GitHub Pages is enabled in Settings
- Wait 5-10 minutes for GitHub to build the site
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Custom domain not working
**Solution:**
- Verify DNS records are correct
- Wait up to 48 hours for DNS propagation
- Check GitHub Pages settings for domain configuration

### Issue: RSVP form not working
**Solution:**
- Verify Google Form embed link is correct
- Check if Google Form is set to accept responses
- Test form directly at the Google Form URL

---

## Sharing Your Website

Once live, share the link with guests:
- **Default:** `https://yourusername.github.io`
- **Custom Domain:** `https://our-wedding.com` (if using custom domain)

Include in:
- Wedding invitations
- WhatsApp messages
- Email announcements
- Social media

---

## Maintenance & Support

### Regular Updates
- Add new photos after events
- Update FAQ with common questions
- Share the live gallery link with guests
- Keep contact information current

### Backup Your Website
- GitHub automatically backs up your files
- You can also download your website files anytime

### Future Updates
After the wedding, you can:
- Keep it as a memory
- Archive the photos
- Remove time-sensitive information
- Convert to a family website

---

## Need Help?

GitHub Pages Documentation: https://pages.github.com
GitHub Support: https://support.github.com

For technical issues with the website:
1. Check TESTING.md for local testing
2. Review the HTML/CSS in code editor
3. Check browser console for errors (F12)

---

**Your wedding website is ready to share with the world!** 🎉