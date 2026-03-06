# Jai Malhar Transport - Website Setup & Deployment Guide

## Overview
This is a Next.js 15 website for Jai Malhar Transport with integrated form submissions via Netlify Forms.

## Fixed Issues

### 1. ✅ Form Submissions Implemented
Both Contact and Quote forms now submit data to Netlify Forms with automatic email notifications.

**Configuration:**
- Netlify Forms are enabled on both forms using `data-netlify="true"`
- Honeypot field included for spam protection
- Form data is automatically received by Netlify

**Email Setup Instructions:**
1. Deploy the site to Netlify
2. In your Netlify dashboard, go to Site Settings → Forms
3. Under "Form notifications", set up email notifications:
   - Add email: `vishals1070@gmail.com`
   - Configure to receive emails for both `contact` and `quote` forms

**Alternative: Using Netlify Functions for Custom Email**
If you want to use a custom email service:

1. Create `.env.local` in the project root:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

2. Run the site - Netlify Functions will automatically send emails to `vishals1070@gmail.com`

### 2. ✅ SEO & Metadata Fixed
Updated `src/app/layout.js` with proper metadata:
- Title: "Jai Malhar Transport - Pan-India Logistics Solutions | JMT"
- Description: Complete SEO-friendly description
- Keywords and Open Graph tags included

### 3. ✅ Mobile Menu Focus Trap Implemented
- Added focus trap within mobile menu
- Keyboard navigation (Tab key) is now trapped within the menu
- **Escape key now closes the menu** (accessibility enhancement)
- ARIA labels added for screen readers
- Menu sets `aria-hidden="true"` when closed

### 4. ✅ Phone Number Mismatch Fixed
- Header top bar: Now correctly links to `tel:+918655294908`
- Footer: Phone number now correctly links to `tel:+918655294908`
- All phone displays now match: **+91 8655294908**

## Files Changed

1. **src/app/layout.js**
   - Updated metadata for SEO

2. **src/app/page.jsx**
   - Fixed phone number in header top bar (line ~162)
   - Fixed phone number in footer contact info (line ~723)
   - Added focus trap to mobile menu Header component
   - Added Escape key handler to close mobile menu
   - Updated ContactPage form with Netlify Forms support
   - Updated QuotePage form with Netlify Forms support
   - Added proper form validation and error handling

3. **netlify.toml**
   - Added form configuration for contact and quote forms
   - Added honeypot field configuration for spam protection

4. **netlify/functions/send-email.js** (NEW)
   - Custom email function (optional, for advanced setup)
   - Handles both contact and quote form submissions
   - Sends emails to vishals1070@gmail.com

## Deployment Instructions

### 1. Basic Deployment (Recommended)
```bash
# Push code to GitHub
git add .
git commit -m "Fix forms, SEO, mobile menu, and phone numbers"
git push origin main

# On Netlify dashboard:
# 1. Connect your GitHub repository
# 2. Build settings: Command: "npm run build", Publish: ".next"
# 3. Deploy
# 4. Configure form notifications in Site Settings → Forms
```

### 2. Advanced Deployment with Email Function
If you want custom email handling:
```bash
# Set environment variables in Netlify dashboard:
# Site Settings → Build & deploy → Environment
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = your-email@gmail.com
SMTP_PASSWORD = your-app-specific-password

# Then deploy
```

**Note:** For Gmail, use App Password (not regular password). 
Get it from: https://myaccount.google.com/apppasswords

## Testing Forms Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:3000

# Note: Netlify Forms won't work in local dev
# They only work when deployed to Netlify
```

## Browser Compatibility

### Mobile Menu Focus Trap
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Keyboard Navigation
- **Tab**: Navigate forward through menu items, cycles at end
- **Shift+Tab**: Navigate backward through menu items
- **Escape**: Close the menu
- **Click backdrop**: Close the menu

## Performance Notes

- SEO metadata helps with search engine indexing
- Netlify Forms has built-in spam protection (honeypot field)
- Forms submit asynchronously without page reload
- Success message shows for 5 seconds before clearing

## Future Enhancements

1. **Email Verification**: Add email confirmation links
2. **Rate Limiting**: Prevent spam submissions
3. **Admin Dashboard**: Create custom admin panel for form submissions
4. **Slack Integration**: Send notifications to Slack channel
5. **Analytics**: Track form submission metrics

## Support

For issues or questions:
- Check Netlify Documentation: https://docs.netlify.com/forms/setup/
- Review Form Submissions: Netlify Dashboard → Forms
- Check logs: Netlify Dashboard → Functions

---

**Website**: https://jmttransport.com (after deployment)
**Contact**: vishals1070@gmail.com
**Last Updated**: 2026-03-06
