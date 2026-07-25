# Project Overview

**Kanva Digital Academy** is a modern Learning Management System (LMS) frontend built with **React.js** and **Tailwind CSS** to provide a seamless and responsive online learning experience. The application offers dedicated interfaces for students, teachers, and administrators, enabling them to perform their respective tasks efficiently through an intuitive and user-friendly design.

The frontend includes features such as secure authentication, course browsing, role-based dashboards, assignment and examination interfaces, study materials, live class access, and notice management. It communicates with the backend through REST APIs, ensuring secure data exchange and real-time updates.

Designed with a component-based architecture and responsive layouts, the application is easy to maintain, scalable, and optimized for use across desktop, tablet, and mobile devices. Kanva Digital Academy aims to simplify digital education by providing a clean, accessible, and engaging platform for effective teaching and learning.


# 🌐 Live Demo

Experience the live version of **Kanva Digital Academy** through the link below:

* **Live Application:** https://kanva-digital-platform-seven.vercel.app/

The application is deployed on **Vercel** and showcases the complete frontend of the Learning Management System. You can explore the landing page, authentication flow, role-based dashboards, course interface, and other user features. Some functionalities require user authentication and depend on the backend API to display dynamic data.


# ✨ Features

## 🔐 Authentication

* Secure user registration and login.
* Forgot password with OTP verification.
* JWT-based authentication for protected routes.
* Role-based access control for Admin, Teacher, and Student.

## 🏠 Landing Page

* Modern and responsive homepage.
* Featured courses section.
* About and contact sections.
* Easy navigation with a clean user interface.

## 👨‍🎓 Student Dashboard

* Browse and enroll in available courses.
* Access study materials and notes.
* View assignments and online examinations.
* Join live classes and read announcements.
* Manage personal profile information.

## 👨‍🏫 Teacher Dashboard

* Create and manage courses.
* Upload notes and learning resources.
* Create assignments and examinations.
* Schedule and manage live classes.
* Monitor course-related activities.

## 👨‍💼 Admin Dashboard

* Manage users, teachers, and students.
* Create and manage courses.
* Publish notices and announcements.
* Monitor platform activities through a centralized dashboard.

## 📚 Course Management

* Browse course catalog.
* View detailed course information.
* Responsive course cards and layouts.
* Organized course content for better learning.

## 📝 Assignment & Examination

* Interactive assignment interface.
* Online examination pages with a user-friendly layout.
* Easy navigation between learning activities.

## 📢 Notice Board

* Display important announcements.
* Support for text and image-based notices.
* Organized notice section for quick updates.

## 🎨 Responsive & Modern UI

* Fully responsive design for desktop, tablet, and mobile devices.
* Reusable React components for consistency.
* Clean, intuitive, and accessible user interface built with Tailwind CSS.

# 🛠️ Technology Stack

| Technology                  | Purpose                                                                                                  |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| **React.js**                | Builds a fast, component-based, and interactive user interface.                                          |
| **Vite**                    | Provides a fast development environment and optimized production builds.                                 |
| **Tailwind CSS**            | Creates responsive and modern user interfaces using utility-first styling.                               |
| **JavaScript (ES6+)**       | Implements the application's core logic and interactivity.                                               |
| **React Router DOM**        | Handles client-side routing and navigation between pages.                                                |
| **Axios**                   | Sends HTTP requests and communicates with the backend REST API.                                          |
| **React Hot Toast**         | Displays user-friendly notifications for success, error, and warning messages.                           |
| **Lucide React**            | Provides lightweight and customizable icons for the user interface.                                      |
| **Context API** *(if used)* | Manages shared application state across components.                                                      |
| **JWT (JSON Web Token)**    | Supports secure authentication and protected routes by storing authentication tokens on the client side. |
| **Vercel**                  | Hosts and deploys the frontend application with continuous deployment from GitHub.                       |



# 📁 Project Structure

```text
frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, icons, and other static resources
│   ├── components/         # Reusable UI components
│   ├── pages/              # Application pages
│   ├── layouts/            # Common layouts (Admin, Teacher, Student, etc.)
│   ├── utils/              # Utility functions and API configuration
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── .env                    # Environment variables
├── .gitignore              # Git ignored files
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```


# 🚀 Future Improvements

The frontend is designed with scalability in mind, and several enhancements are planned to improve the user experience and expand the platform's capabilities:

* **🔑 Password Reset:** Implement a complete password reset interface with secure OTP verification and an improved recovery workflow.
* **🤖 AI Learning Assistant:** Integrate an AI-powered assistant to help students with learning, assignments, and course-related questions.
* **💬 Real-Time Chat:** Enable instant messaging between students, teachers, and administrators.
* **🔔 Real-Time Notifications:** Introduce live notifications for assignments, exams, notices, and course updates.
* **📊 Student Progress Dashboard:** Display learning progress, course completion, and performance analytics.
* **🎓 Certificate Management:** Allow students to view and download certificates after successfully completing courses.


# ✅ Conclusion

The frontend of **Kanva Digital Academy** was developed to provide a modern, responsive, and user-friendly interface for an online learning platform. Built with React.js and Tailwind CSS, it delivers a seamless experience for students, teachers, and administrators through role-based dashboards, secure authentication, course management, and interactive learning features. The project emphasizes clean code, reusable components, and scalability, making it a strong foundation for future enhancements and continuous development.



# 👨‍💻 Author

**Aadarsha Dumre**

BSc CSIT Student | MERN Stack Developer

* **GitHub:** https://github.com/your-github-username
* **Email:** adarshadumre45@gmail.com

If you find this project useful or have suggestions for improvement, feel free to open an issue or submit a pull request. Contributions and feedback are always welcome.
