http://167.71.80.20

### A Mini core banking application with the following features:

1. Account management (ability to open and close accounts)
2. Funds transfer (ability to send money from one account to the other)

The application also exposes API's for
- Account creation
- Funds transfer

### Set Up
## Method 1
- Clone the repo to your local machine.
- Run 'cd ren-banking' in your terminal to move into the folder.
- Then, run 'npm install'
- You can run 'npm run start' to start the server
- Open another terminal window and navigate to the root folder of the cloned repo.
- Run 'cd client && npm install'
- Now run 'npm run start' to view the Frontend.

## Method 2 (Docker)
Have Docker running on your machine.
- Clone the repo to your local machine.
- Run 'cd ren-banking' in your terminal to move into the folder.
- Then, run 'docker-compose up -build' to start the app.

### Exposed API

- User Login: http://localhost:5000/api/v1/public/login
- User Registration: http://localhost:5000/api/v1/public/register

