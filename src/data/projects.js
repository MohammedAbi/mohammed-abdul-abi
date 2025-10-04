import imgP1 from "../assets/image-p1.png";
import imgP2 from "../assets/image-p2.png";
import imgP3 from "../assets/image-p3.png";
import imgP4 from "../assets/image-p4.png";
import imgP5 from "../assets/image-p5.png";
import imgP6 from "../assets/image-p6.png";
import imgP7 from "../assets/image-p7.png";
import imgP8 from "../assets/image-p8.png";
import imgP9 from "../assets/image-p9.png";
import imgP10 from "../assets/image-p10.png";

const projects = [
  {
    id: 0,
    title: "Rainy Days",
    slug: "rainy-days",
    description: "A JavaScript project built using HTML, CSS, and JS.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: imgP1,
    github:
      "https://github.com/MohammedAbi/javaScript-1-Course-Assignment-Mohammed-Abi",
    live: "https://js-1-course-assignment-mohammedabi.netlify.app/",

    // Structured details
    brief:
      "This project involves using JavaScript to create an interactive online store that fetches products from an API. Users can browse items, add them to a basket, and complete checkout.",

    userStories: [
      "View Product List",
      "Filter Products by category, gender, or genre",
      "View Product Details",
      "Add / Remove items from Basket",
      "Checkout and Order Confirmation",
    ],

    pages: ["Home Page", "Product Page", "Checkout Page", "Confirmation Page"],

    process: [
      "Project Setup using existing HTML & CSS",
      "API Selection: Rainy Days API",
      "Step-by-step Development",
      "Testing and Peer Feedback",
      "Final Adjustments & Submission",
    ],

    features: [
      "Error Handling",
      "Loading Indicator",
      "Dynamic API data",
      "Accessibility best practices",
      "Async/Await actions",
      "Clean code (console.log removed)",
    ],

    builtWith: ["HTML", "CSS", "JavaScript"],

    links: {
      live: "https://js-1-course-assignment-mohammedabi.netlify.app",
      github:
        "https://github.com/MohammedAbi/javaScript-1-Course-Assignment-Mohammed-Abi",
    },
  },
  {
    id: 1,
    title: "Community Science Museum",
    slug: "community-science-museum",
    description:
      "An interactive science museum website for children aged 7-15 and their families, combining web design and development.",
    tech: ["HTML", "CSS", "Figma"],
    image: imgP2,
    github: "https://github.com/MohammedAbi/Semester-Project-1",
    live: "https://communitysciencemuseum-mohammedabi.netlify.app/",
    brief:
      "For my first semester exam at Noroff, I developed an interactive science museum website aimed at children aged 7-15 and their families. This project combined project planning, web design, and development within a set timeframe.",
    userStories: [
      "Explore museum exhibits online",
      "Interactive learning for children",
      "Accessible navigation for families",
    ],
    pages: ["Homepage", "Exhibits Page", "About Page", "Contact Page"],
    process: [
      "Planning & wireframing in Figma",
      "High-fidelity design creation",
      "HTML & CSS implementation",
      "Integration of interactive features",
      "Testing and final submission",
    ],
    features: [
      "Interactive exhibits",
      "Responsive design for desktop and mobile",
      "User-friendly navigation",
      "Figma style guide adherence",
    ],
    builtWith: ["HTML", "CSS", "Figma"],
    links: {
      live: "https://communitysciencemuseum-mohammedabi.netlify.app/",
      github: "https://github.com/MohammedAbi/Semester-Project-1",
      figmaDesktop: "Figma High Fidelity Wireframe - Desktop",
      figmaMobile: "Figma High Fidelity Wireframe - Mobile",
      figmaStyleGuide: "Style Guide",
      kanbanBoard: "Kanban Board",
    },
  },
  {
    id: 2,
    title: "EchoPost",
    slug: "echo-post",
    description:
      "A responsive web application for managing blog posts, developed using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: imgP3,
    github: "https://github.com/NoroffFEU/FED1-PE1-MohammedAbi",
    live: "https://echopost.netlify.app/",
    brief:
      "EchoPost is a responsive web application designed for managing blog posts. It serves as the front-end user interface for an existing API blogging application, allowing users to view dynamic blog posts and providing admin functionalities for managing content. The project demonstrates proficiency in core web technologies.",
    userStories: [
      "View all blog posts",
      "View individual post details",
      "Admin: Create, Edit, Delete posts",
      "Responsive and user-friendly interface",
    ],
    pages: ["Homepage", "Post Page", "Admin Dashboard", "About Page"],
    process: [
      "Planning & wireframing",
      "HTML structure and CSS styling",
      "Dynamic data fetching from API",
      "Form validation and error handling",
      "Final testing & deployment",
    ],
    features: [
      "Dynamic blog content",
      "Responsive design",
      "User-friendly interface",
      "Admin functionalities",
      "Validation & error handling",
      "Clean code following best practices",
    ],
    builtWith: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://echopost.netlify.app/",
      github: "https://github.com/NoroffFEU/FED1-PE1-MohammedAbi",
    },
  },
  {
    id: 3,
    title: "Currency Converter App",
    slug: "currency-converter-app",
    description:
      "A simple currency converter built with React.js and Tailwind CSS, fetching live exchange rates for quick conversions.",
    tech: ["React", "Tailwind CSS", "API"],
    image: imgP4,
    github:
      "https://github.com/MohammedAbi/Currency-Converter-with-React-JS-and-Tailwind-CSS",
    live: "https://currency-converter-application-cca.netlify.app/",
    brief:
      "This app allows users to convert currencies in real-time using live exchange rates. Users can mark favorite currencies, swap between source and destination currencies, and input the amount they want to convert.",
    userStories: [
      "Convert between multiple currencies in real-time",
      "Mark favorite currencies for faster access",
      "Swap source and destination currencies easily",
      "Input any amount for conversion",
    ],
    pages: ["Home / Converter Page"],
    process: [
      "Set up React project with Vite",
      "Implement Tailwind CSS for styling",
      "Integrate Frankfurter API for live exchange rates",
      "Develop currency conversion logic and UI",
      "Testing and deployment on Netlify",
    ],
    features: [
      "Real-time currency conversion",
      "Favorite currencies feature",
      "Swap currencies functionality",
      "Responsive and clean UI",
      "Live API integration",
    ],
    builtWith: ["React", "Tailwind CSS", "Frankfurter API"],
    links: {
      live: "https://currency-converter-application-cca.netlify.app/",
      github:
        "https://github.com/MohammedAbi/Currency-Converter-with-React-JS-and-Tailwind-CSS",
    },
  },
  {
    id: 4,
    title: "Travel Agency Website",
    slug: "travel-agency-website",
    description:
      "A full-stack travel agency website built with React, Vite, Tailwind CSS, and an Express-based API server. Users can explore destinations, book travel services, and view customer testimonials.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express"],
    image: imgP5,
    github: "https://github.com/MohammedAbi/Travel-Agency-full-stack",
    live: "https://travel-agency-full-stack-am.netlify.app/",
    brief:
      "This platform allows users to browse popular travel destinations, explore available services, and view testimonials. The frontend fetches data from a backend Express API, providing a seamless full-stack experience.",
    userStories: [
      "View popular travel destinations",
      "Explore available travel services",
      "Book travel services",
      "Read customer testimonials",
    ],
    pages: [
      "Home Page",
      "Destinations Page",
      "Booking Page",
      "Testimonials Page",
    ],
    process: [
      "Set up React project with Vite",
      "Design UI using Tailwind CSS",
      "Develop backend Express API for destinations and testimonials",
      "Connect frontend to backend API endpoints",
      "Testing, deployment on Netlify, and final adjustments",
    ],
    features: [
      "Dynamic fetching of destinations and testimonials",
      "Responsive and clean UI",
      "Booking functionality integrated with backend",
      "Full-stack architecture",
      "Smooth user experience",
    ],
    builtWith: ["React", "Vite", "Tailwind CSS", "Node.js", "Express"],
    links: {
      live: "https://travel-agency-full-stack-am.netlify.app/",
      github: "https://github.com/MohammedAbi/Travel-Agency-full-stack",
    },
  },
  {
    id: 5,
    title: "Weather App - React & Tailwind CSS",
    slug: "weather-app-react-tailwind-css",
    description:
      "A weather application built with React and Tailwind CSS that fetches real-time weather data and provides a 4-day forecast for any location.",
    tech: ["React", "Vite", "Tailwind CSS", "Fetch API", "OpenWeatherMap API"],
    image: imgP6,
    github:
      "https://github.com/MohammedAbi/Weather-app-react-tailwind?tab=readme-ov-file",
    live: "https://weather-app-react-tailwind-es6.netlify.app/",
    brief:
      "This app allows users to view current weather conditions and a 4-day forecast. Users can search for any location and get responsive, real-time updates.",
    userStories: [
      "View current weather",
      "See a 4-day weather forecast",
      "Search for weather in any location",
      "Responsive design for desktop and mobile",
    ],
    pages: ["Home / Dashboard"],
    process: [
      "Set up React project with Vite",
      "Design UI using Tailwind CSS",
      "Fetch data from OpenWeatherMap API using Fetch API",
      "Implement search functionality for locations",
      "Test responsiveness and deploy on Netlify",
    ],
    features: [
      "Real-time weather updates",
      "4-day forecast display",
      "Search functionality for any location",
      "Responsive UI",
      "Clean code and accessibility practices",
    ],
    builtWith: ["React", "Tailwind CSS", "Fetch API", "OpenWeatherMap API"],
    links: {
      live: "https://weather-app-react-tailwind-es6.netlify.app/",
      github:
        "https://github.com/MohammedAbi/Weather-app-react-tailwind?tab=readme-ov-file",
    },
  },
  {
    id: 6,
    title: "Social Media Application",
    slug: "social-media-application",
    description:
      "A client-side social media application implementing core CRUD functionalities for posts and user authentication, styled with Tailwind CSS and built with modern web tools.",
    tech: ["JavaScript", "Tailwind CSS", "Vite", "Vitest", "Fetch API"],
    image: imgP7,
    github: "https://github.com/MohammedAbi/css-framework?tab=readme-ov-file",
    live: "https://sma-social-media-application-2.netlify.app/",
    brief:
      "This project allows users to register, login, create, read, update, and delete posts. Users can react to posts with emojis, search, and sort posts. The app is fully styled with Tailwind CSS.",
    userStories: [
      "Register a new user",
      "Login existing user",
      "Create, read, update, and delete posts",
      "React to posts with emojis",
      "Search and sort posts",
      "View posts by user or by ID",
    ],
    pages: ["Home / Feed", "User Profile", "Single Post View"],
    process: [
      "Set up project with Vite",
      "Implement user authentication system",
      "Develop CRUD operations for posts",
      "Add reactions, search, and sorting functionality",
      "Style UI with Tailwind CSS",
      "Test functionality with Vitest",
      "Deploy to Netlify",
    ],
    features: [
      "User registration and login",
      "Create, read, update, delete posts",
      "Emoji reactions for posts",
      "Search and sort posts",
      "Responsive design with Tailwind CSS",
      "Future-ready for additional features",
    ],
    builtWith: ["JavaScript", "Tailwind CSS", "Vite", "Vitest", "Fetch API"],
    links: {
      live: "https://sma-social-media-application-2.netlify.app/",
      github: "https://github.com/MohammedAbi/css-framework?tab=readme-ov-file",
    },
  },
  {
    id: 7,
    title: "Flow State Todo App",
    slug: "flow-state-todo-app",
    description:
      "A Todo application that helps users manage tasks based on flow state and task difficulty, categorizing them as Easy, Moderate, or Hard.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: imgP8,
    github: "https://github.com/MohammedAbi/Flow-State-Todo-App",
    live: "https://flow-state-todo-app.netlify.app/",
    brief:
      "This Todo app categorizes tasks into three difficulty levels (Green: Easy, Orange: Moderate, Red: Hard) and displays them based on optimal times for the user.",
    userStories: [
      "Add new tasks with difficulty levels",
      "View tasks by difficulty (Easy, Moderate, Hard)",
      "Mark tasks as completed",
      "Delete tasks",
      "Organize tasks based on optimal time for flow state",
    ],
    pages: ["Home / Todo List", "Task Details"],
    process: [
      "Plan project structure and task categories",
      "Develop HTML & CSS layout",
      "Implement JavaScript for adding, updating, and deleting tasks",
      "Add difficulty-based categorization logic",
      "Test functionality and usability",
      "Deploy to Netlify",
    ],
    features: [
      "Task categorization by difficulty",
      "Add, update, and delete tasks",
      "Flow-state-based task organization",
      "Responsive design for desktop and mobile",
      "Clean and intuitive UI",
    ],
    builtWith: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://flow-state-todo-app.netlify.app/",
      github: "https://github.com/MohammedAbi/Flow-State-Todo-App",
    },
  },
  {
    id: 8,
    title: "VivaTrend Store",
    slug: "viva-trend-store",
    description:
      "A front-end e-commerce application where users can browse fashion products, view details, add items to a cart, and complete checkout. Includes user authentication and profile management using Noroff API.",
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "React Toastify",
      "Swiper.js",
      "Vitest",
      "React Testing Library",
    ],
    image: imgP9,
    github: "https://github.com/MohammedAbi/vivatrend-store",
    live: "https://vivatrend-store.netlify.app/",
    brief:
      "VivaTrend Store is a modern, mobile-first fashion e-commerce site built with React and Tailwind CSS, featuring product listings, cart, checkout, profile, and responsive design.",
    userStories: [
      "User registration and login using Noroff API",
      "Browse product listings with search and filter",
      "View product details and select options (color, size)",
      "Add and remove items from cart",
      "Checkout and view confirmation",
      "Access and manage user profile",
      "Receive toast notifications for actions",
    ],
    pages: [
      "Home / Product Listings",
      "Product Detail Page",
      "Cart Page",
      "Checkout Success Page",
      "User Profile",
      "Contact Form",
    ],
    process: [
      "Plan front-end structure and design",
      "Build responsive layout using Tailwind CSS",
      "Implement product listing and detail pages",
      "Integrate Noroff API for products and authentication",
      "Implement cart and checkout logic",
      "Add toast notifications for user feedback",
      "Test functionality and deploy to Netlify",
    ],
    features: [
      "User registration & login",
      "Product listings with filter/search",
      "Product detail page with options",
      "Cart and checkout functionality",
      "User profile management",
      "Contact form with validation",
      "Responsive, mobile-first design",
      "Toast notifications for actions",
    ],
    builtWith: ["React", "TypeScript", "Tailwind CSS", "Vite", "Noroff API"],
    links: {
      live: "https://vivatrend-store.netlify.app/",
      github: "https://github.com/MohammedAbi/vivatrend-store",
    },
  },
  {
    id: 9,
    title: "Auction Website",
    slug: "auction-website",
    description:
      "A front-end auction platform where users can create listings, place bids, and manage their profiles, interfacing with an existing API for dynamic data handling.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "ESLint",
      "PostCSS",
    ],
    image: imgP10,
    github: "https://github.com/MohammedAbi/Semester-Project-2",
    live: "https://semester-project-2-auction.netlify.app/",
    brief:
      "Auction Website is a responsive front-end application built with React and Tailwind CSS, allowing users to create listings, bid on items, and manage profiles.",
    userStories: [
      "User registration and login",
      "Create and manage auction listings with media and deadlines",
      "Place bids on active listings",
      "View and update user profile with total credits",
      "Search for listings efficiently",
    ],
    pages: [
      "Home / Listings Page",
      "Listing Detail Page",
      "Create Listing Page",
      "User Profile Page",
      "Search Results Page",
    ],
    process: [
      "Plan UI and layout using Tailwind CSS",
      "Setup React project with Vite",
      "Implement user authentication and profile management",
      "Build listing creation and bidding functionalities",
      "Integrate API for dynamic auction data",
      "Test application and deploy to Netlify",
    ],
    features: [
      "User registration & login",
      "Create and manage item listings",
      "Place bids on items",
      "User profile management with avatar and credits",
      "Search bar functionality",
      "Responsive design for desktop and mobile",
    ],
    builtWith: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "ESLint",
      "PostCSS",
    ],
    links: {
      live: "https://auction-website-mohammedabi.netlify.app/",
      github: "https://github.com/MohammedAbi/Semester-Project-2",
    },
  },
];
export default projects;
