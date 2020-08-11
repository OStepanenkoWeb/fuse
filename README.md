This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Firebase Setup
Create a format database in firebase

### 

     Collection: people
        Documens: {
            name: User Name
            url: User photo url
            }

Add to the src directory firebase.js file with content
###
     import firebase from "firebase"
     const FIREBASE_CONFIG = {
             apiKey: "yourApiKey",
             authDomain: "yourDomain",
             databaseURL: "yourDatabaseURL",
             projectId: "yourProjectId",
             storageBucket: "yourStorageBucket",
             messagingSenderId: "yourSenderId",
             appId: "yourAppId"
     };
     
     const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
     const database = firebaseApp.firestore();
     
     export default database;`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
