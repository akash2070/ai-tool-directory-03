# Deploy to Vercel - Step by Step Guide

## Step 1: Login to Vercel
Run this command in the shell:
```bash
npx vercel login
```
- Choose your preferred login method (GitHub recommended)
- Follow the authentication prompts

## Step 2: Initialize Deployment
```bash
npx vercel
```
- Answer the setup questions:
  - Set up and deploy? → Yes
  - Which scope? → Choose your account
  - Link to existing project? → No
  - Project name? → ai-tools-directory (or your preferred name)
  - Directory? → Press Enter (current directory)
  - Want to override settings? → No

## Step 3: Deployment Complete
After successful deployment, you'll get:
- Preview URL (for testing)
- Production URL (your live site)

## Files Ready for Deployment:
- ✅ index.html (complete application)
- ✅ vercel.json (routing configuration)
- ✅ package.json (project configuration)

## What Happens Next:
1. Your site goes live immediately
2. Gets a free .vercel.app domain
3. SSL certificate auto-configured
4. CDN deployed worldwide
5. Auto-deploys on future updates

Ready to start? Run: `npx vercel login`