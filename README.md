
# 📊 ANOWO Digital Marketing Analytics Dashboard

A data-driven, responsive, and dynamic web application for monitoring and analyzing digital advertising campaigns across multiple brands and platforms like Google Ads and Meta Ads.

---

## 🚀 Tech Stack

This project is built with:

- ⚡️ [Vite](https://vitejs.dev/)
- 🧠 [TypeScript](https://www.typescriptlang.org/)
- ⚛️ [React](https://react.dev/)
- 💅 [Tailwind CSS](https://tailwindcss.com/)
- 🧱 [shadcn/ui](https://ui.shadcn.com/) – for elegant UI components

---

## 🎯 Features

- ✅ **Google Authentication** for secure login
- 📊 **Dashboard & Data Visualization**  
  - KPIs like Impressions, Clicks, Conversions, Revenue  
  - Interactive charts and graphs (filterable)
- 🏢 **Multi-Brand & Campaign Management**  
  - Create, view, and manage multiple companies and their ad campaigns
- 🔎 **Filtering & Sorting Options**  
  - Filter by platform (Google Ads, Meta Ads), timeframes, brands, etc.
- 📄 **Data Export & Reporting**  
  - Export reports in CSV or PDF with graphs & summaries
- 🌙 **Dark/Light Theme Toggle**
- 📱 **Fully Responsive UI**

---

## 💻 Requirements

To run this application, you'll need:

- **Node.js** (v16.0 or higher)
- **npm** (v7.0 or higher) or **yarn** (v1.22 or higher)
- Modern web browser (Chrome, Firefox, Safari, or Edge)

---

## 📦 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/anowo-dashboard.git
   cd anowo-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:8080`

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

---

## 📁 Environment Variables

Create a `.env` file in the root and configure:

```env
VITE_API_URL=https://your-api-url.com
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

---

## 📂 Folder Structure

```
src/
├── components/         # Reusable UI components (charts, tables, etc.)
├── pages/              # Route-based pages (Dashboard, Campaigns, Login)
├── hooks/              # Custom hooks
├── context/            # App-wide context (auth, theme, etc.)
├── services/           # API integration (Firebase/Auth/Backend APIs)
├── utils/              # Helper functions
└── styles/             # Global styles and Tailwind config
```

---

## 🔐 Authentication

Uses **Google OAuth** for user login and session management. Integrated with Firebase or Auth.js.

---

## 🚀 Deployment

This application can be deployed to various platforms:

- **Vercel**: Recommended for easy setup
- **Netlify**: Great for continuous deployment
- **Firebase Hosting**: If using Firebase for authentication
- **GitHub Pages**: For static hosting

Follow the platform-specific documentation for deployment instructions.

---

## 📸 Screenshots

> Add UI preview images or GIFs here for Dashboard, Campaigns, Charts, etc.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🤝 Connect With Me

Built by **[Shubham Prajapati](https://github.com/Auspicious-EX)**  
Feel free to ⭐️ the repo and share feedback!
