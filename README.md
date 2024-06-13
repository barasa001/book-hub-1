# Book Hub

Welcome to Book Hub, a web application for searching and exploring books using the Open Library API. This project provides a user-friendly interface to search for books based on various criteria such as genre, author, and publication date filters.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run Book Hub locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/barasa001/book-hub.git
   cd book-hub

## Installation

2. **Install dependencies:**

   ```bash
   # Navigate to the backend directory
   cd backend
   npm install

   # Navigate to the frontend directory
   cd ../frontend
   npm install

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and define the following variables:

   ```plaintext
   PORT=5000
   MONGODB_URI=<mongodb_uri>


4. **Run the backend:**

   ```bash
   # From the backend directory
   npm start

5. **Run the frontend:**

   ```bash
   # From the frontend directory
   npm start

6. **Access Book Hub in your browser:**

   Open [http://localhost:3000](http://localhost:3000) to view the application.
   
## Usage

### Searching for Books
- Enter keywords in the search bar to search for books.
- Use filters (genre, author, publication date) to refine your search results.

### Viewing Book Details
- Click on any book title or "View Details" link to see more information about a specific book.

### Navigation
- Navigate through the app using the sidebar links:
  - **Home:** Returns to the homepage.
  - **Books:** Lists all available books.
  - **Login:** Accesses the login page.
  - **Sign Up:** Accesses the sign-up page.

## Technologies Used

### Frontend:
- React
- React Router DOM
- Axios
- CSS Modules

### Backend:
- Node.js
- Express
- MongoDB
- Mongoose
- Axios
