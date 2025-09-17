# Next.js + Tailwind CSS Template

This is a modern Next.js template with Tailwind CSS pre-configured and ready to use.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Responsive design** out of the box
- 🌙 **Dark mode** support
- 🔧 **TypeScript** ready
- 📦 **ESLint** configured
- 🚀 **Optimized** for production

## Getting Started

### Prerequisites

Make sure you have Node.js 18+ installed on your machine.

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # App Router directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Tailwind CSS

The Tailwind configuration is located in `tailwind.config.js`. You can customize:

- Colors
- Fonts
- Spacing
- Breakpoints
- And much more!

### Styling

Global styles are in `app/globals.css`. This file includes:

- Tailwind directives
- CSS custom properties for theming
- Dark mode support
- Custom utility classes

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

## License

This project is open source and available under the [MIT License](LICENSE).
