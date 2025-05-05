# Library Form

This library provides a minimal setup to quickly integrate form components into your React application, using Vite for fast development and ESLint for code quality.

It includes a collection of reusable components specifically designed for building forms.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## 📦 Technologies used

- ⚛️ React 18
- ⚡ Vite
- ⌨️ TypeScript
- 🔬 ESLint + Plugins React
- 🎨 Storybook
- 💅 TailwindCSS
- 🔄 React-Select 

---

### 1. Clonar el repositorio

```bash
git clone https://github.com/deivish/library-form.git
cd library-form

---

### 2. Clonar el repositorio

Asegúrate de tener instalado Node.js (v18 o superior) y npm (v9 o superior). Luego, instala las dependencias del proyecto:

```bash
npm install
npm run dev
npm install -D tailwindcss
npm install classnames 
npm install clsx  
npm i react select
npx storybook init
npm run storybook

---

### 3. 📂 Estructura del Proyecto

```bash
src/
├── components/        # Componentes reutilizables (como HelperText)
├── stories/           # Historias de Storybook para componentes
├── App.tsx            # Componente raíz
├── main.tsx           # Punto de entrada de React
├── index.css          # Estilos globales
public/                # Archivos estáticos
.eslintrc.cjs          # Configuración ESLint
vite.config.ts         # Configuración Vite
tsconfig.json 
---
