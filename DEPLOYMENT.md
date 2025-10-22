# 🚀 Deployment Guide

This guide covers deployment options for the Wifflestats application to various platforms.

## 📋 Prerequisites

- Node.js 20+ installed
- Git repository configured
- Project built successfully (`npm run build`)

## 🌐 Deployment Platforms

### **1. Vercel (Recommended)**

Vercel is the easiest option for Next.js applications:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Select framework: Next.js
# - Deploy!
```

**Configuration**: `vercel.json` is already configured with:
- Security headers
- Proper routing
- Build optimizations

**Live in ~2 minutes!** 🎉

### **2. Netlify**

Deploy to Netlify for excellent static hosting:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=.next
```

**Configuration**: `netlify.toml` is configured with:
- Build settings
- Environment variables
- Security headers

### **3. Docker Deployment**

For containerized deployments:

```bash
# Build Docker image
docker build -t wifflestats .

# Run container
docker run -p 3000:3000 wifflestats
```

**Features**:
- Multi-stage build for optimal size
- Security best practices
- Production-ready container

### **4. Traditional Hosting (VPS/Shared)**

For traditional hosting providers:

```bash
# Build the application
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "wifflestats" -- start
```

## 🔧 Environment Configuration

### Production Environment Variables

Create `.env.production.local` for sensitive production variables:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Performance monitoring (optional)
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn

# Custom domain (if applicable)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Build Optimization

The application is optimized with:

- ✅ **Static Generation**: All pages are pre-rendered
- ✅ **Bundle Optimization**: Tree-shaking and code splitting
- ✅ **Image Optimization**: WebP/AVIF support
- ✅ **Security Headers**: XSS, CSRF protection
- ✅ **Performance**: Fast loading with modern React patterns

## 📊 Performance Metrics

**Bundle Sizes**:
- Home page: `133 kB` (First Load)
- Players page: `132 kB` (First Load)
- Teams page: `132 kB` (First Load)

**Features**:
- Static pre-rendering for instant loading
- Optimized JavaScript bundles
- Modern ES modules with fallbacks

## 🛡️ Security

Production build includes:
- Security headers (XSS, CSRF protection)
- Content Security Policy ready
- No sensitive data exposure
- Optimized for production environment

## 🚦 Health Checks

After deployment, verify:

1. **Homepage** loads correctly
2. **Players page** displays all statistics
3. **Teams page** shows team data
4. **Navigation** works between pages
5. **Mobile responsiveness** functions properly

## 🎯 Quick Deploy Commands

**Vercel (fastest)**:
```bash
npm run build && vercel --prod
```

**Netlify**:
```bash
npm run build && netlify deploy --prod --dir=.next
```

**Docker**:
```bash
docker build -t wifflestats . && docker run -p 3000:3000 wifflestats
```

## 📞 Support

If you encounter deployment issues:

1. Check build logs for errors
2. Verify Node.js version (20+)
3. Ensure all dependencies are installed
4. Review platform-specific documentation

---

**Your modern Wifflestats application is ready for production! 🎉**