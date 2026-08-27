# Travel Unbounded

A full-stack travel planning and enquiry website built with React, Node.js, Express.js, and MongoDB.

Travel Unbounded allows users to explore destinations, view destination details, create personalized trip plans, and submit travel enquiries through a functional backend API.

---

## Live Demo

**Live Website:**  
Add your deployed Vercel/Netlify URL here.

Example:

https://travel-unbounded.vercel.app

---

## GitHub Repository

**Source Code:**  
Add your public GitHub repository URL here.

Example:

https://github.com/your-username/travel-unbounded

---

## Features

### Frontend

- Responsive travel website
- Modern travel-focused UI
- Home page with hero section
- Destination listing
- Destination detail pages
- Destination filtering
- Pagination
- Create Trip form
- Personalized trip plan page
- Contact and enquiry form
- Responsive navigation
- Mobile menu
- Footer with company information
- Responsive design for desktop, tablet, and mobile
- SEO metadata using React Helmet

### Trip Planning

Users can create a travel plan by providing:

- Destination
- Start date
- End date
- Number of travellers
- Budget
- Travel style
- Interests

Supported travel styles:

- Budget
- Balanced
- Luxury

Supported interests:

- Nature
- Adventure
- Food
- Culture
- Shopping
- Beaches
- History
- Nightlife

### Contact / Enquiry

Users can submit travel enquiries with:

- Full name
- Country code
- Contact number
- Email
- Date of travel
- Number of people
- Hotel category
- Number of children

Submitted enquiries are stored in MongoDB through the Express.js backend API.

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- React Helmet Async
- Vite
- CSS
- JavaScript (ES6+)

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

### Development Tools

- Git
- GitHub
- VS Code
- npm
- Nodemon

### Deployment

- Frontend: Vercel / Netlify
- Backend: Render
- Database: MongoDB Atlas

---

## Project Architecture

```text
Travel Unbounded
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Destinations.jsx
│   │   │   ├── DestinationDetails.jsx
│   │   │   ├── CreateTrip.jsx
│   │   │   ├── TripPlan.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── services
│   │   │   └── enquiryService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── public
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
├── backend
│   ├── config
│   │   └── database.js
│   │
│   ├── controllers
│   │   └── enquiryController.js
│   │
│   ├── middleware
│   │   ├── validation.js
│   │   └── errorHandler.js
│   │
│   ├── models
│   │   └── Enquiry.js
│   │
│   ├── routes
│   │   └── enquiryRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md