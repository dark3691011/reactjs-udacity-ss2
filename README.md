# Polling Application

This project is a **polling application** where users can log in, view polls, vote on polls, and create new polls. It includes features like leaderboards to track user activity and a streamlined interface for better usability.

---

## Start

- **Node version:** 18.17.0
- **Steps to run:**
  1. Install dependencies: `npm install`
  2. Start the application: `npm run start`
  3. Run tests: `npm run test`

---

## Pages

1. **Login Page:**  
   Users can log in by providing their username and password.

2. **Home Page:**  
   Displays polls grouped into two categories:

   - **New Questions:** Polls the user has not answered.
   - **Done:** Polls the user has already answered.

3. **Leader Board Page:**  
   Displays a ranking of users based on their activity (number of polls created and answered).

4. **Create Poll Page:**  
   Allows users to create a new poll by specifying two options for others to vote on.

---

## Description

This application is designed to enable users to engage in polling activities. Key features include:

- **User Authentication:**  
  Credentials for other users are available in `src/utils/_DATA.js`.

- **Poll Management:**  
  Users can:

  - Answer polls.
  - View the results of answered polls, including the number and percentage of votes for each option.
  - Create new polls.

- **Leaderboard:**  
  Encourages participation by ranking users based on their activity.

---

## Data Source

The application uses a mock data source located at `src/utils/_DATA.js` for:

- User accounts.
- Polls and votes.

Feel free to modify the data source for testing purposes.

---
