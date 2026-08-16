# Is Gabby Stupid?

A simple website that answers the question "Is Gabby Stupid?" with a 75% chance of YES and 25% chance of NO. When NO appears, it gets crossed out and replaced with YES after 1-2 seconds.

## Features

- 75% chance of showing YES (green)
- 25% chance of showing NO (red)
- NO automatically gets crossed out and replaced with YES after 1-2 seconds
- Includes the quote: "I may be dumb, but I'm not stupid" - Terry Bradshaw
- Attributed to: Gabby Jessup

## Local Development

1. Open the project directory
2. Run a local server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open http://localhost:8000 in your browser

## Deployment to Cloudflare Pages (Free)

### Option 1: Direct Upload

1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Click "Create a project"
3. Select "Upload assets"
4. Drag and drop the `isgabbystupid` folder contents (index.html, style.css, script.js)
5. Click "Deploy site"

### Option 2: Git Integration

1. Push this project to GitHub/GitLab
2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
3. Click "Create a project"
4. Connect your Git account
5. Select the repository
6. Keep default build settings (no build command needed for static HTML)
7. Click "Deploy site"

## Custom Domain Setup

### Step 1: Add Custom Domain in Cloudflare

1. In Cloudflare Pages, go to your project
2. Click "Custom domains"
3. Click "Set up a custom domain"
4. Enter your domain (e.g., `isgabbystupid.com`)
5. Click "Continue"

### Step 2: DNS Configuration

If you bought your domain through Cloudflare:
- The DNS records will be automatically configured

If you bought your domain elsewhere (GoDaddy, Namecheap, etc.):
1. Cloudflare will show you the DNS records to add:
   - **Type**: CNAME
   - **Name**: `@` or your subdomain
   - **Value**: `[your-project].pages.dev`
   - **TTL**: Default

2. Go to your domain registrar's DNS settings
3. Add the CNAME record as shown by Cloudflare
4. Wait for DNS propagation (can take up to 24 hours, usually much faster)

### Step 3: SSL Certificate

Cloudflare will automatically provision an SSL certificate for your custom domain. This may take a few minutes to become active.

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling with green YES and red NO
- `script.js` - Logic for random YES/NO with NO-to-YES transition
