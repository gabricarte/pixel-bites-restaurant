# Pixel Bites Restaurant Website

Pixel Bites is a fictional restaurant website project that allows users to order food items and provide feedback about their experience. This project is built using React.js for the frontend, Node.js for the backend, CSS for styling, and MongoDB as a database.

## Features

This project has the following features:

- User name input - Prompts the user to enter their name and saves it to localStorage. This allows for a personalized experience when the user returns to the website.

- Food Order - Prompts the user to select food items they want to order. After the user selects their items, the project calculates the total price of the order and saves the order information, including the user's name, total price, and food items purchased, to both the localStorage and MongoDB.

- Feedback Form - After the user completes their food order, the project redirects them to a feedback form. The feedback form allows users to provide their experience and rate the restaurant. When the user clicks "submit", the feedback is sent to a Google Form for analysis.

## Technologies Used

For back-end:

- Node.js express framework
- Cors to allow the front-end solicitations
- Body-parser
- Mongoose

For front-end:

- React.js
- CSS for styling
- Axios for making HTTP requests
- Uuid library to generate an unique ID for every order
- Styled Components library
- React DOM library
- Web storage API

## Installation

To run the project, please follow these instructions:

1. Clone the repository
2. Install MongoDB and run the database
3. Open the terminal and navigate to the backend project directory
4. Install dependencies with the command npm install
5. Run the project with the command "node index"
6. Navigate to the frontend directory and install dependencies
7. Run with "npm start"

## Screenshots
