# Web Application Project

## About the App


This web application is designed to provide a system to store user-created book reviews. It allows users to create new reviews, update older ones and delete them. The application is built using Node.js, Express, and EJS. 


## Instructions to Run Locally

**Requirements:**

- Node.js (v16 or higher)
- npm (Node package manager)

1. **Clone the repository:**

```
git clone https://github.com/Tako030303/wtcoursework2.git
```

2. **Navigate to the project directory:**

```
cd wtcoursework2
```

3. **Install dependencies:**

Ensure you have `npm` (Node Package Manager) installed. Run the following command:

```
npm install
```

4. **Run the app locally:**

After installing the dependencies, run the app with:

```
npm start
```

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

```
book-app/
├── **controllers/**          # MVC Controllers
│   └── bookController.js     # Renamed for clarity (previously 'book.js')
│
├── **data/**                 # Database/files
│   └── book.db.json         # JSON-based database
│
├── **public/**               # Static assets (served directly)
│   ├── images/              # Images
│   ├── js/                  # Client-side JavaScript (renamed from 'javascripts')
│   └── css/                 # Styles (renamed from 'styles')
│       ├── create-update.css
│       ├── full-view.css
│       └── mainpage.css
│
├── **routes/**               # Express route definitions
│   ├── api/                 # API endpoints (REST/JSON)
│   │   └── bookRoutes.js    # Renamed for clarity (previously 'book.js')
│   └── web/                 # Web views (HTML/EJS)
│       └── bookRoutes.js    # Renamed for clarity
│
├── **services/**             # Business logic
│   └── bookService.js       # Renamed for clarity
│
├── **validators/**           # Input validation
│   └── bookValidator.js     # Renamed for clarity
│
├── **views/**                # EJS templates
│   ├── create_update.ejs    # Form for create/update
│   ├── full_view.ejs        # Detailed book view
│   └── main.ejs             # Homepage listing
│
├── **.gitignore**            # Specifies ignored files
├── **app.js**                # Main Express app setup
├── **LICENSE**               # Project license
├── **package.json**          # Project metadata/dependencies
├── **package-lock.json**     # Auto-generated (exact dependency versions)
└── **README.md**             # Project documentation
```