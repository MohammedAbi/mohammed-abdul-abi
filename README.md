# 💼 Portfolio 2

A multipage professional portfolio website showcasing my main front-end development projects completed during the Noroff Front-End Development course.  
The portfolio highlights my growth, technical skills, and improvements made based on teacher feedback across three major course assignments.

---

## 🚀 Live Portfolio

**🔗 [View Live Site](https://portfolio-2-course-assaignment.netlify.app/)**  
**🔗 [GitHub Repository](https://github.com/MohammedAbi/mohammed-abdul-abi)**

---

## 📁 Projects Featured

The portfolio showcases the following three projects, each improved based on teacher feedback:

1. **CSS Frameworks Assignment**
2. **JavaScript Frameworks Assignment**
3. **Semester Project 2**

Each project has its own article page including:

- Project title and featured image
- Live site link
- GitHub repository link
- Description and details page

---

## 🧩 Project Details & Improvements

### **Project 1 – CSS Frameworks**

**Improvements Based on Feedback**

- Removed all unnecessary `console.log` statements to clean up production code.
- Deleted redundant comments to improve readability and reduce maintenance overhead.
- Implemented a `.env` file for API keys and tokens, enhancing security.
- Updated the `.gitignore` to exclude the `.env` file from version control.
- Improved the `README.md` with environment variable setup instructions.
- Refined HTML structure with proper `<main>` tags and updated page titles for better accessibility.

---

### **Project 2 – JavaScript Frameworks**

**Improvements Based on Feedback**

- Converted JSX elements without children into **self-closing tags** for cleaner syntax.
- Added **JSDoc comments** to key functions for better documentation and developer experience.
- Fixed inconsistent indentation to maintain code readability.
- Replaced **array indices** with unique IDs in React keys to prevent rendering issues.
- Removed **trailing whitespace** and improved overall formatting.
- Enhanced **accessibility** by using proper interactive elements (e.g., `<button>` instead of `<div>`).
- Linked labels correctly to inputs using `htmlFor` for improved accessibility.
- Improved the avatar input component for a better user experience.

---

### **Project 3 – Semester Project 2**

**Reflection on Improvements**

- Fixed **unused variables** and cleaned up imports.
- Replaced **array indices** with stable unique IDs for React keys.
- Corrected **self-closing components** for cleaner and consistent JSX.
- Removed **trailing whitespace** and ensured consistent indentation.
- Ensured functions have **consistent return statements** for reliability.
- Attempted to implement **JSDoc comments**, but due to conflicts between ESLint and JSDoc, it became too time-consuming to resolve.  
  As the project had already received a **B grade**, I chose to focus on smaller improvements rather than full refactoring.

---

## 🌐 Portfolio Structure

### **Home Page**

- Displays teaser cards for each project, including:
  - Optimized project thumbnail (≤200KB)
  - Project title
  - Short teaser description (max 130 characters)
  - Link to each project’s article page

### **Project Article Pages**

Each project page contains:

- Title and share/copy link
- Featured image with caption
- Live project link
- GitHub repository link
- Detailed project description

---

## 🛠️ Tech Stack

- **React.js**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **Framer Motion**
- **React Icons**
- **HTML5 / CSS3 / JavaScript (ES6+)**

---

## 🧠 Key Learning Outcomes

- Improved understanding of **React best practices** and accessibility.
- Learned how to use **JSDoc** for professional documentation.
- Applied **environment variables** securely in front-end projects.
- Practiced **code readability, consistency, and optimization**.
- Gained experience in **portfolio presentation and client-ready project structure**.

---

## 📄 Additional Deliverables

- **Reflection Document (PDF):** Includes detailed feedback responses and commit links showing implemented improvements.
- **Video Presentation (5 minutes):** Demonstrates the portfolio website, navigation, and project highlights.

---

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio-2.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🔐 Environment Variables

If applicable, create a `.env` file in the project root with your environment variables:

```bash
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key_here
```

Make sure your `.env` file is listed in `.gitignore` to prevent accidental commits.

---

## 👤 Author

**Mohammed Abdul Abi**
