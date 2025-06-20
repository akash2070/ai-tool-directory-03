# Deploy to Vercel - Step by Step

## Method 1: Direct Drag & Drop (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose authentication method:
   - **GitHub** (recommended)
   - **GitLab** 
   - **Bitbucket**
   - **Email**
4. After login, click "New Project"
5. Select "Browse all templates" or drag & drop these files:
   - `index.html`
   - `vercel.json`
6. Click "Deploy"

## Method 2: GitHub Integration

1. Create GitHub account if needed
2. Create new repository called "ai-tools-directory"
3. Upload these files:
   - `index.html`
   - `vercel.json`
   - `README.md`
4. Go to vercel.com and connect your GitHub
5. Import the repository
6. Deploy automatically

## Authentication Troubleshooting

**If authentication fails:**

1. **Clear browser cache and cookies**
2. **Try incognito/private browsing mode**
3. **Use different authentication method:**
   - Try GitHub instead of email
   - Try email instead of GitHub
4. **Check popup blockers** - disable for vercel.com
5. **Try different browser** (Chrome, Firefox, Safari)

## Files Ready for Deployment

✓ `index.html` - Complete application
✓ `vercel.json` - Routing configuration
✓ Static site with no build process needed

Your site will be live at: `your-project-name.vercel.app`

## After Deployment

- Free custom domain available
- SSL certificate automatic
- CDN worldwide
- No maintenance required