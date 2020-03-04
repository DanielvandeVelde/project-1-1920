'use strict';

// Import the Dialogflow module from the Actions on Google client library//
const {dialogflow, BasicCard, Suggestions} = require('actions-on-google');

// Import the firebase-functions package//

const functions = require('firebase-functions');

// Instantiate the Dialogflow client//

const app = dialogflow({debug: true});

const afbeeldingen = {
  hond: {
    title: 'Welk dier zie je op deze afbeelding?',
    text: '',
    image: {
      url:
        'https://i0.wp.com/yourdog.nl/wp-content/uploads/2015/04/labrador.png',
      accessibilityText: 'Afbeelding van een hond.', // Feels very weird to put the answer here.
    },
    display: 'WHITE',
  },
};

// Handle the create_name intent//
app.intent('create_name', (conv, {name}) => {
  // Construct the conversational response//
  conv.user.storage.name = name;
  conv.ask(
    'Leuk je te ontmoeten ' + name + '. Wil je met mij een quiz spelen?',
    new BasicCard(afbeeldingen['hond'])
  );
  conv.ask(new Suggestions('Ja', 'Nee'));
});

app.intent('what_animal'),
  (conv) => {
    conv.ask('Welk dier zie je hier?', new BasicCard(afbeeldingen['hond']));
  };

// Poging tot stoerdoenerij
app.intent('keuze_hond', (conv, {hond}) => {
  // Construct the conversational response//
  conv.close(
    `Dat klopt ${conv.user.storage.name}! Het was inderdaad een hond. Bedankt voor het spelen.`
  );
});

// Set the DialogflowApp object to handle the HTTPS POST request//

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
