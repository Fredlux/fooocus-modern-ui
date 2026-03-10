# 🦀 Crabs Compressor 2026 - Modern UI

A premium 2026 UI for Fooocus-inspired image generation, built with React and Electron for Mac and Windows.

## 🌟 Features

- **Modern 2026 Design** - Glassmorphism effects and smooth animations
- **Cross-Platform** - Works on macOS and Windows
- **Dark Theme** - Vibrant accents with comfortable dark backgrounds
- **Prompt Engineering** - GPT-2 based prompt processing
- **Style Presets** - Default, Realistic, Anime modes
- **Advanced Settings** - Steps, CFG Scale, Seed control
- **Image Generation** - Text-to-image and image-to-image support
- **History Panel** - Keep track of your generations

## 🚀 Quick Start

```bash
cd fooocus-modern-ui
npm install
npm run electron:dev
```

## 📦 Building

```bash
# Build for current platform
npm run electron:build

# Build specific platform
npm run electron:build -- --mac
npm run electron:build -- --win
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS + Custom CSS
- **UI Components**: Custom components with headless UI
- **Desktop**: Electron 28
- **Icons**: Lucide React

## 📁 Project Structure

```
fooocus-modern-ui/
├── src/
│   ├── components/
│   │   └── ui/          # Reusable UI components
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main app component
│   └── main.ts          # Electron main process
├── public/              # Static assets
├── dist/                # Build output
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Design Philosophy

The UI follows a modern 2026 aesthetic:
- **Glassmorphism** - Semi-transparent panels with backdrop blur
- **Gradient Text** - Eye-catching gradients on primary elements
- **Smooth Transitions** - All interactions feel responsive
- **Dark-First** - Comfortable dark theme for long sessions
- **Clean Layout** - Clear separation of controls and preview

## 🔌 Integration

This UI is designed to work with the Fooocus backend via API. Connect to your Fooocus instance by updating the API configuration in `src/config.ts`.

## 📝 License

MIT - See LICENSE file for details.

## 👥 Credits

- **Original Fooocus**: [lllyasviel](https://github.com/lllyasviel/Fooocus)
- **UI Implementation**: Crabs Corp 2026
- **Electron**: [electronjs.org](https://www.electronjs.org/)

---

*Made with ❤️ by Crabs Corp*
