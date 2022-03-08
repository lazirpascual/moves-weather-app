# Weather Tab

## Live Demo of [Weather Tab](https://moves-weather-app.netlify.app/)

This is a chrome extension that uses the OpenWeatherMap API to dynamically display the 7-day weather forecast at the user's choice of location. Made using TypeScript, React JS, and Material-UI. <br />

## 🛠 Tech Stack

| <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/typescript.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/react.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/material-ui.svg" width="40"> |
| :--------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: |

- **Front-End**: TypeScript, React, Material-UI </br>
- **Testing**: Jest, React-Testing-Library
- **Deployment**: Google Chrome Extension, Netlify

## ⚙️ Features

- Search weather data through user's choice of city
- Display current weather data and forecast for the next seven days
- Clickable panels for the 7-day forecast which displays additional information
- Search and browse through the Google search engine
- Change the background and choose between 7 different background images

## ✎ Notes

- This app was created in React using Typescript
- Material-UI and CSS were used to style and design the application
- Components were built to be as modularized and reusable as possible
- Adequate error handling was implemented to verify the user input
- Unit tests were conducted through Jest and React-Testing-Libary

# Application Progress

- [x] Design the layout and UI of the application
- [x] Split the UI into individual components
- [x] Create and implement app using TypeScript
- [x] Create search page
- [x] Create weather page (description, current/min/max temp, wind speed, precipitation, humidity)
- [x] Create functions to fetch from API
- [x] Add error handling for non-existing cities/zip code
- [x] Add Google search bar
- [x] Add customizable background
- [x] Add responsiveness for all screen sizes
- [x] Add unit testing for components
- [x] Finish readme.md

# Development Process

- **Planning** <br />
  Before any code was written, adequate planning was performed in order to ensure that the requirements are properly met. To do this, I started by building a wireframe for the user interface. This will include the search page as well as the weather page. Afterwards, I broke the user interface down into a component hierarchy, where I identified all the individual components that would form my application. This made it easier for me to identify which components would be more reusable, allowing the application to be more modular. The mock user interface can be seen on the images below.
  &emsp; <p float="left">
  <img src="https://i.imgur.com/C6Ron7k.png" alt="Weather Page" width="450" height="300"/>
  <img src="https://i.imgur.com/jj27BgC.png" alt="Search Page" width="315" height="300"/> </p>
  Additionally, I identified all the properties that I needed in my application when fetching from the OpenWeatherMap API. I decided that all these properties would be defined under an interface in TypeScript, which I called CurrentWeather. I created a class diagram to better illustrate this. <br />
  <img src="https://i.imgur.com/o8cb3ht.png" alt="CurrentWeather Interface" width="300" height="400"/>
- **Development** <br />
  After enough preparation, I decided to begin the development of the project. I started by building a static version of the application, rendering the user interface without any interactivity (no state). I built all the components from top-down, starting from the search page, and then all the components that made up the weather page. Afterwards, I began to think about how I wanted to populate the components with the data from the API. I then built the functions that specifically fetched for data that I needed. Finally, I looked over the entire application and identified where the individual states needed to be. From here on out, I focused on building the main logic of the program which can be summed up by the following steps:
  1. Get user input (city or zip code)
  2. Identify any errors (error handling)
  3. Fetch from the OpenWeatherData API
  4. Take data from API and place it on the state
  5. Populate components with data using state
- **Testing** <br />
  To ensure that the quality of the project is kept at the highest level, I decided to implement some unit testing. These were simple tests that tested the functionality of some of the functions that I used throughout the application, as well as tests that checked whether the components were generating the correct text and information.

- **Deployment** <br />
  After the completion of the project, I deployed the finished application on Netlify. The project can be accessed from this [link](https://moves-weather-app.netlify.app/).

# Preview

## 1. Search Page

![preview](https://i.imgur.com/zLcYCcD.png)

## 2. Weather Info Page

![preview](https://i.imgur.com/XydVVLJ.png)
