# week-3-Mern-Stack-Assignment
# 🌐 React Task Manager & API Viewer

A modern React application that demonstrates component architecture, state management using React Hooks, API integration, theme switching (light/dark mode), and styling using Tailwind CSS.

---

## 🚀 Features

* ✅ **Reusable Components**: Navbar, Footer, Card, Button, Layout
* ✅ **Task Manager**: Add, complete, delete, and filter tasks
* ✅ **Local Storage**: Persist tasks with `useLocalStorage` custom hook
* ✅ **API Viewer**: Fetches posts from JSONPlaceholder, with search & pagination
* ✅ **Dark Mode Toggle**: Switch between light and dark themes
* ✅ **Responsive Design**: Looks great on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

* React (with Vite)
* Tailwind CSS
* React Router DOM
* React Context API (for Theme Management)
* JSONPlaceholder API

---

## 📁 Folder Structure

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── TaskManager.jsx
│   ├── PostList.jsx
│   └── ThemeToggle.jsx
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   └── useLocalStorage.js
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/react-task-api-app.git

# Navigate into the project folder
cd react-task-api-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

> **Note:** Make sure Node.js (v18+) and npm are installed on your system.

---

## 🌙 Enabling Dark Mode

Tailwind is configured with `darkMode: 'class'`.

Dark mode is toggled using the `ThemeContext` provider and applied via:

```js
document.documentElement.classList.toggle('dark')
```

Use the toggle in the Navbar to switch themes.

---

## 🔍 API Integration

* The app fetches posts from: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
* Users can:

  * View posts in a responsive grid
  * Search posts by title
  * Use pagination controls

---

## 🧪 Example Routes

| Route    | Page Description    |
| -------- | ------------------- |
| `/`      | Homepage layout     |
| `/tasks` | Task manager page   |
| `/api`   | PostList API viewer |

---

## 🌍 Deployment

The application can be deployed to Vercel, Netlify, or GitHub Pages.

### Example:

* Vercel: [https://react-task-api.vercel.app](https://react-task-api.vercel.app)
* GitHub Pages: `https://your-username.github.io/react-task-api-app/`

---

## 🧾 Screenshots

> *Add screenshots of the Home, Tasks page, and API page in both light and dark mode.*

---

## 🙌 Acknowledgements

* [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Router](https://reactrouter.com/)

---

## 📬 Contact

Made with ❤️ by Lynn Violet Wanjiru Kimotho
Connect on [LinkedIn](https://linkedin.com)
Email: [your-email@example.com](mailto:your-email@example.com)


