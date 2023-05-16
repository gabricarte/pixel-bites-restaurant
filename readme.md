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
![home](https://github.com/gabricarte/pixel-bites-restaurant/assets/104357417/0af83bca-8893-4d01-9109-e78828402464)
![screen1](https://github.com/gabricarte/pixel-bites-restaurant/assets/104357417/984b17d2-415f-464f-91a9-2ae716b89bb9)
![screen1-responsive](https://github.com/gabricarte/pixel-bites-restaurant/assets/104357417/9d8cc474-ae5b-47b7-a6c2-bc89b6663442)
![menu-screen](https://github.com/gabricarte/pixel-bites-restaurant/assets/104357417/2c97cc92-ae8f-4b86-b782-e1487087fdac)
![screen2](https://github.com/gabricarte/pixel-bites-restaurant/assets/104357417/68721d98-f00e-4139-88bf-1e815c7c88c2)
![screen3](https://github.com/gabricarte/pixel-bites-restaurant/assets/104357417/3dd71536-ba83-4b30-9dc2-59a2046480a5)
![screen3-responsive](https://github.com/gabricarte/pixel-bites-restaurant/assets/104357417/07a4de8c-2dc0-458b-bf0a-5842a6aa1c8a)


