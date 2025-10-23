# Vercel Deployment Guide

This app is now configured for seamless deployment on Vercel.

## Quick Deploy

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment"
   git push
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration
   - Click "Deploy"

## Configuration Changes Made

### 1. Vercel Configuration (`vercel.json`)
- Set build command to `pnpm build:client`
- Configure output directory as `dist/spa`
- Added install command with `--no-frozen-lockfile` flag to handle lockfile issues
- Set up SPA routing to redirect all routes to `index.html`

### 2. Serverless API Functions
Converted Express routes to Vercel serverless functions in `/api` directory:
- `/api/ping.ts` - Simple ping endpoint
- `/api/demo.ts` - Demo endpoint with type-safe response

### 3. Package.json Updates
- Added `@vercel/node` as dev dependency
- Simplified build script to use `pnpm build:client`
- Added `vercel-build` script for Vercel
- Removed strict `packageManager` constraint
- Added Node.js engine requirement (>=18.12.0)

### 4. Build Optimization
- Created `.vercelignore` to exclude unnecessary files
- Removed old lockfiles to prevent sync issues

## Environment Variables

If you need environment variables (e.g., for `PING_MESSAGE`):

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables:
   - `PING_MESSAGE`: Your custom ping message

## API Routes

All API routes are automatically available at `/api/*`:
- `GET /api/ping` - Returns a ping message
- `GET /api/demo` - Returns a demo response

## SPA Routing

All frontend routes (defined in `pages/App.tsx`) will work correctly:
- `/` - Home page
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- All other routes redirect to index.html for client-side routing

## Troubleshooting

### 404 NOT_FOUND Error
If you see a 404 error, verify:
- The build completed successfully in Vercel dashboard
- The output directory is set to `dist/spa`
- Check Vercel deployment logs for errors

### Lockfile Issues
The configuration now uses `--no-frozen-lockfile` to prevent lockfile sync errors. Vercel will automatically update the lockfile during deployment.

### Build Failures
- Ensure all dependencies are listed in `package.json`
- Check Node.js version is 18.12.0 or higher in Vercel settings
- Review build logs in Vercel dashboard

## Local Development

Development still works as before:
```bash
pnpm dev
```

This runs the Vite dev server with Express integration on port 8080.

## Production Build (Local)

To test the production build locally:
```bash
pnpm build
```

Note: You need Node.js 18.12.0 or higher for this to work.

## Differences from Netlify

If you were previously using Netlify:
- API routes moved from `netlify/functions` to `api/` directory
- Configuration moved from `netlify.toml` to `vercel.json`
- Serverless functions use Vercel's format instead of Netlify's
- No changes needed to frontend code

## Support

For more information:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel SPA Configuration](https://vercel.com/docs/concepts/projects/project-configuration)
- [Vercel Serverless Functions](https://vercel.com/docs/serverless-functions/introduction)

