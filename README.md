# Baremetrics Homepage Clone

A highly responsive, production-ready, **Pixel-Perfect Homepage Clone** of the Baremetrics landing page, built using React and styled with modular, custom Vanilla CSS.

## 🚀 Key Features

* **Pixel-Perfect Design**: Meticulously matched typography, spacings, layout grids, images, and color palettes from the official Baremetrics landing page.
* **Fluid Responsiveness**: Seamlessly transitions across all screen sizes (mobile, tablet, laptop, and ultra-wide desktop).
* **Premium Mobile Navigation**: Custom-engineered slide-out drawer menu featuring a sleek glassmorphism backdrop (`backdrop-filter: blur(8px)`) and modern, hardware-accelerated micro-animations.
* **Modular React Architecture**: Highly structured and reusable `.jsx` component hierarchy.

---

## 📂 Folder Structure

The project follows a component-driven architecture where each structural element is isolated with its own styles:

```text
baremetrics-homepage-clone/
├── public/                 # Static assets (index.html, favicon, web manifest)
└── src/
    ├── images/             # Icons, illustrations, and SVG graphics assets
    │   ├── 16/
    │   ├── baremetrics-logo.svg
    │   └── burger-list.svg
    │   └── ...
    ├── myComponents/       # Modular JSX components
    │   ├── 1_Header.jsx    # Sticky navigation header & mobile drawer
    │   ├── 2_Title.jsx     # Hero section
    │   ├── 3_Payment_providers.jsx
    │   ├── 4_Feature_box1.jsx
    │   ├── 5_Companies_using.jsx
    │   ├── 6_Feature_box2.jsx
    │   ├── 7_Review.jsx
    │   ├── 8_Growth.jsx
    │   ├── 9_Notification.jsx
    │   ├── 10_Cancellation.jsx
    │   ├── 11_Recover.jsx
    │   ├── 12_Open_Startups.jsx
    │   ├── 13_About.jsx
    │   ├── 14_Publications.jsx
    │   ├── 15_Started.jsx
    │   ├── 16_Fotter.jsx   # Footer component
    │   └── 17_Model.jsx    # Dynamic support bubble modal
    ├── style/              # CSS files corresponding to each component
    │   ├── 1_Header.css
    │   ├── 2_Title.css
    │   └── ...
    ├── App.jsx             # Main orchestrator mounting all components
    ├── App.css             # Root application styles
    ├── index.js            # Webpack entry point
    └── index.css           # Global typography & layout reset styles
```

---

## 🛠️ Technology Stack

* **Core**: [React 19](https://react.dev/)
* **Styling**: Vanilla CSS (modular and optimized for rendering speed)
* **Fonts & Icons**: Inter, Roboto, and Material Symbols via Google Fonts

---

## 💻 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your web browser. The page hot-reloads automatically when you edit components.

### `npm run build`

Builds the app for production in the `build` folder.\
It bundles React in production mode and optimizes, minifies, and hashes assets to guarantee stellar performance and caching.

---

## 🎨 Design & Aesthetic Details

This clone adheres strictly to the premium UI/UX conventions of modern SAAS software, utilizing carefully tuned transitions, dynamic scaling, hover indicators, and interactive micro-animations (such as responsive button transformations and smooth lists transitions) to match the elegant quality of Baremetrics.
