# Movie Management Exercises

## Overview

This repository contains a series of exercises focused on managing and analyzing movie data using JavaScript and Jest for testing.

## Technology Used

- JavaScript
- Jest (for testing)

## Getting Started

To get started with this project, follow these steps:

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gogamar/s3_testing.git
   ```

2. Navigate to the project directory:

   ```bash
   cd s3_testing
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

### Running Tests

To run the tests using Jest, execute the following command:

```bash
npm test
```

This will run all test files matching the `*.spec.js` pattern in the `tests` directory.

### Running Tests with HTML Report

To run the tests in watch mode and generate an HTML report of the test results, use the following command:

```bash
npm run test -- --watch
```

This command will execute the tests continuously in watch mode, allowing you to see real-time results as you make changes.

After running tests, you can open the HTML report by navigating to `test-results.html` file and opening it with Visual Code live server.

## Exercises Overview

### Level 1

1. **Exercise 1: Get All Directors**

   - Create a function `getAllDirectors()` that returns an array of all movie directors.

2. **Exercise 2: Get Movies from a Director**

   - Implement `getMoviesFromDirector(director)` to return an array of movies directed by a specified director.

3. **Exercise 3: Average Rating of a Director's Movies**

   - Implement `moviesAverageOfDirector(movies, director)` to calculate and return the average score of a director's movies.

4. **Exercise 4: Order Movies Alphabetically by Title**

   - Create a function that returns the first 20 movies sorted alphabetically by title.

5. **Exercise 5: Order Movies by Year**

   - Create a function to return movies sorted by year, then by title alphabetically for movies released in the same year.

6. **Exercise 6: Average Rating by Genre**
   - Implement a function to calculate the average score of movies by a specific genre.

### Level 2 (Optional)

7. **Exercise 7: Convert Movie Duration to Minutes**
   - Create a function that converts movie durations from the format `Xh Ymin` to just minutes.

### Level 3 (Optional)

8. **Exercise 8: Best Film of the Year**
   - Implement a function that returns the best film of a given year based on the highest rating.
