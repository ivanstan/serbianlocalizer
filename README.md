# Iva Pajvancic - Serbian Localizer Website

A professional, modern static website for Iva Pajvancic, an English > Serbian IT translator and localizer.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Intersection Observer-based animations that trigger as you scroll
- **Professional Sections**:
  - Hero section with call-to-action buttons
  - About/Who I Am section
  - Services showcase (3-column grid)
  - Detailed services list
  - About section with backstory, facts, and professional development
  - Contact section
  - Footer with quick links

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Professional Google Font

## 📦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to be deployed to any static hosting service.

## 📤 Deployment

You can deploy this website to various platforms:

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Follow GitHub Pages deployment guide
- **Any static hosting**: Upload the contents of the `dist` folder

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',
      secondary: '#1e40af',
      accent: '#7c3aed',
    },
  },
}
```

### Content

All content can be edited in the component files located in `src/components/`:

- `Hero.jsx` - Hero section
- `WhoIAm.jsx` - About/Who I Am section
- `MyServices.jsx` - Services overview (3 columns)
- `Services.jsx` - Detailed services list
- `About.jsx` - Detailed about section
- `Contact.jsx` - Contact information
- `Footer.jsx` - Footer

## 📧 Contact

Email: iva@serbianlocalizer.com

## 📄 License

All rights reserved © 2026 Iva Pajvancic
