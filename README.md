# Web Application Project

## About the App


This web application is designed to provide a system to store user-created book reviews. It allows users to create new reviews, update older ones and delete them. The application is built using Node.js, Express, and EJS. 


## Instructions to Run Locally

**Requirements:**

- Node.js (v16 or higher)
- npm (Node package manager)

1. **Clone the repository:**

git clone https://github.com/Tako030303/wtcoursework2.git

2. **Navigate to the project directory:**

cd wtcoursework2

3. **Install dependencies:**

Ensure you have `npm` (Node Package Manager) installed. Run the following command:

npm install
  
4. **Run the app locally:**

After installing the dependencies, run the app with:

npm start

The app will be accessible at `http://localhost:3000` in your browser.  

## Application Dependencies

The application uses the following dependencies:

[ejs] - Embedded JavaScript templates, a simple templating language to generate HTML markup with plain JavaScript

[express] - Fast, unopinionated, minimalist web framework for Node.js

[express-validator] - A set of Express.js middlewares that wraps validator.js for data validation and sanitization


You can install these by running `npm install` in the project directory.

  

## Links

  

- **GitHub Repository:** [https://github.com/Tako030303/wtcoursework2](https://github.com/Tako030303/wtcoursework2)

- **Live Application:** [link]

  

---

  

### Project Structure

  

/wtcoursework2 │ ├── /public # Static assets (images, fonts, etc.) │ ├── index.html # Main HTML file │ └── ... │ ├── /src # Source files │ ├── /components # Reusable UI components │ ├── /styles # CSS or SCSS files │ ├── /pages # Page-specific components │ ├── /utils # Helper functions │ ├── App.js # Main component │ └── index.js # Entry point for React (or other framework) │ ├── package.json # Project dependencies and scripts ├── README.md # Documentation for the app └── .gitignore # Git ignore file for node_modules, etc.