# CompCash #
### Earn passive income from your waste ###

CompCash is an open-source non profit project to incentivize at home composting by giving our users a chance to make money from the fertilizer that they create through their composting. We make it easy to get started and guide our users through the process. Once they have completed the composting process, they bring their composte box to us to recieve payment in exchange for the fertilizer.

CompCash is currently deployed on Firebase and open for all to sign up and use.

### How is it built? ###

### How does it work? ###


### Additional Info ###

..* [Authentication](https://firebase.google.com/docs/auth)

..* [Firestore](https://firebase.google.com/docs/firestore)

..* [Cloud Functions for Firebase](https://firebase.google.com/docs/functions)

..* [Sendgrid](https://sendgrid.com/docs/api-reference/)

### Goals ###


### Hackathon Criteria ###


#### Highlighted Features ####
1. Home Page
![grab-landing-page](https://github.com/Wolf4992/Project-Compost/blob/main/readmeAssets/Compcash%20Homepage.gif)

### Significant Design Decisions ###


### Notes ###

1. Please note that in the Functions folder, the Sendgrid API is not correctly used by calling it through the .env file. Unfortunately we had issues with this where the authentication would fail and thus we simply are directly calling it from the index.js file for the purposes of the hackathon.

__This is bad practice and you should not do the same__

__This will be fixed in future versions of the app__