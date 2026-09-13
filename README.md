# 🚀 Dev Stack

A simple, clean web app where you can explore different frontend, backend, database, and tooling options — then build your own personalized development stack by adding technologies to your list.

## 📖 About

I built this as a practice project to get more comfortable with React, TypeScript, and Tailwind. The idea is simple: browse a catalog of popular technologies (React, Node.js, PostgreSQL, Docker, and more), click "Add to Stack" on the ones you like, and watch them show up in your own personal stack panel on the side.

## 🛠️ Tech Stack

- **React.js** – for building the UI
- **TypeScript** – for type safety
- **Tailwind CSS** – for styling
- **React-Toastify** – for toast notifications
- **JSON** – for storing the technology data
- **Vite** – for the dev server and build tool

> **Icon Source:** All technology logos/icons are sourced from [TechIcons](https://techicons.dev/), a clean and free collection of ready-to-use tech logos.

## ✨ Features

- **Add to Stack** – Click "Add to Stack" on any card and it instantly appears in your "Your Stack" sidebar with its icon, name, and category. Once added, the button switches to a disabled "✓ Added to Stack" state.
- **No Duplicates Allowed** – Try adding the same technology twice and you'll get a warning toast instead of a duplicate entry.
- **Live Toast Feedback** – Every action — add, remove, or remove all — triggers a clean toast notification (via React-Toastify) so you always know what just happened.
- **Loading State** – The technology data loads with a short spinner, simulating a real fetch before the cards appear.
- **Shared Gradient Theme** – The brand name, hero heading highlight, and primary buttons all use one shared orange → pink → violet gradient, defined in a single CSS variable so the whole theme can be changed from one place.
- **Fully Responsive** – The navbar, hero section, and tech grid all adapt cleanly across mobile, tablet, and desktop.

---

## 🧠 React Questions

**1. What is JSX, and why is it used in React?**
JSX lets us write HTML-like syntax right inside JavaScript. It's used because it makes building and reading UI code much easier than writing everything with plain JS function calls.

**2. What is the difference between props and state?**
Props are data passed into a component from its parent — the component can't change them itself. State is data that lives inside a component and can change over time, usually from user interaction.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component hold and update a value across re-renders. I used it in `TechCatalogSection.tsx` to track the selected technologies, and in `Nav.tsx` to track whether the mobile menu is open.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs code after the component renders — great for things like fetching data. I used it to simulate loading the JSON technology data, so a loading spinner shows briefly before the cards appear, just like a real API call would.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses `key` to track which item is which when a list changes. Without a unique key, React can mix up items and re-render the wrong ones when something is added or removed.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on a condition. I used it in `StackSidebar.tsx` — if no technologies are selected, it shows "Your stack is empty," otherwise it shows the list of added items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down using props. To send something back up, the parent passes a function as a prop, and the child calls it — like `onAddToStack`, which the child triggers and the parent uses to update its state.