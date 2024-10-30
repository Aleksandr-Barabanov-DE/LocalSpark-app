# LocalSpark

## City Ratings and Reviews Project

This project features an array of cities, each with detailed information, including ratings, reviews, and descriptions. The data structure is designed to provide insights into various cities in the United States, allowing users to explore their characteristics and experiences.

This App component allows users to view city details, navigate between cities, rate them, add reviews, and search for a specific city.

## Key Functionalities

1. City Navigation: Users can navigate through cities, viewing each city’s name, description, image, average rating, and reviews.
2. City Rating: Users can submit a rating (1-5), updating the average rating in real-time.
3. Reviews: Users can add and delete their own reviews. Only reviews from the current user (currentUserId) are deletable.
4. City Search: Users can search for cities by name using an input field.
5. Real-time Updates: The UI updates automatically as users interact (e.g., when switching cities or adding ratings).
6. Selecting a City from the "Top Searched Cities" List: Users can select a city from the "Top Searched Cities" list, allowing for quick display of its details on the main page. The App component passes the setCurrentCityIndex function to TopSearched, where it is called upon clicking a city, updating the index. This synchronizes data between components and automatically refreshes information about the selected city, including its name, image, and description.

## Technologies

- React, JavaScript (ES6+), HTML5, CSS3,
- GSAP Animation library

## Data Structure

The project utilizes a JavaScript object array to represent each city, containing the following properties:

- **id**: A unique identifier for each city.
- **name**: The name of the city.
- **ratings**: An array of numerical ratings given by users.
- **reviews**: An array of review objects, each containing:
  - **id**: A unique identifier for the review.
  - **userId**: A unique identifier for the user who wrote the review.
  - **text**: The content of the review.
- **description**: A detailed description of the city, highlighting its features and attractions.
- **image**: A URL linking to an image representing the city.

## Example Cities

Here are example of the cities included in the project:

### 1. New York

- **Ratings**: [5, 4, 4, 5, 5]
- **Reviews**:
  - "Amazing city with so much to offer! The energy is contagious."
  - "Great food and iconic sights. Love walking through Central Park."
  - "A bit crowded, but that's what makes it exciting!"
- **Description**: New York City, often simply referred to as New York, is the largest city in the United States. It is renowned for its influence in various fields such as art, fashion, finance, and entertainment. The city is home to iconic landmarks including Times Square, Central Park, and the Statue of Liberty.
- **Image**: ![New York](https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

[git clone https://github.com/your-username/LocalSpark-app.git](https://github.com/Aleksandr-Barabanov-DE/LocalSpark-app.git)

## Navigate to the Project Directory

To navigate to the project directory, run:

cd local-spark

## Install the Necessary Dependencies

To install the necessary dependencies, run:

npm install

## Running the Application

To start the application in development mode, run:

npm start

## Author

Aleksandr Barabanov

## Contacts

<div>
  <a href="https://www.linkedin.com/in/aleksandr-barabanov/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a> 
  <a href="mailto:barabanov.codes@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/>
  </a>
  <a href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-notifcenter">
    <img src="https://img.shields.io/badge/indeed-003A9B?style=for-the-badge&logo=indeed&logoColor=white" alt="Indeed"/>
  </a>
  <a href="https://www.codewars.com/users/Aleksandr-Barabanov">
    <img src="https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=codewars&logoColor=grey" alt="Codewars"/>
  </a>
</div>

© 2024 LocalSpark
