'use strict';

// Import the Dialogflow module from the Actions on Google client library//
const {dialogflow, BasicCard, Suggestions} = require('actions-on-google');

// Import the firebase-functions package//

const functions = require('firebase-functions');

// Instantiate the Dialogflow client//

const app = dialogflow({debug: true});

const afbeeldingen = {
  olifant: {
    title: 'Welk dier zie je op deze afbeelding?',
    text: '',
    image: {
      url: 'https://i.imgur.com/zSlpjgE.png',
      accessibilityText: 'Afbeelding van een olifant.', // Feels very weird to put the answer here.
    },
    display: 'WHITE',
  },
  aap: {
    title: 'Welk dier zie je op deze afbeelding?',
    text: '',
    image: {
      url: 'https://i.imgur.com/Ga45v27.png',
      accessibilityText: 'Afbeelding van een aap.', // Feels very weird to put the answer here.
    },
    display: 'WHITE',
  },
  leeuw: {
    title: 'Welk dier zie je op deze afbeelding?',
    text: '',
    image: {
      url: 'https://i.imgur.com/N1PEPuR.png',
      accessibilityText: 'Afbeelding van een leeuw.', // Feels very weird to put the answer here.
    },
    display: 'WHITE',
  },
  giraffe: {
    title: 'Welk dier zie je op deze afbeelding?',
    text: '',
    image: {
      url: 'https://i.imgur.com/bKc1IJI.png',
      accessibilityText: 'Afbeelding van een giraffe.', // Feels very weird to put the answer here.
    },
    display: 'WHITE',
  },
  zebra: {
    title: 'Welk dier zie je op deze afbeelding?',
    text: '',
    image: {
      url: 'https://i.imgur.com/yDwlpAQ.png',
      accessibilityText: 'Afbeelding van een zebra.', // Feels very weird to put the answer here.
    },
    display: 'WHITE',
  },
};

// Handle the create_name intent//
app.intent('create_name', (conv, {name}) => {
  conv.user.storage.name = name;
  conv.ask(
    'Leuk je te ontmoeten ' +
      name +
      '. Vandaag gaan we het hebben over dieren uit de dierentuin. dit is een olifant. Kan je olifant zeggen?',
    new BasicCard(afbeeldingen['olifant'])
  );
});

app.intent('did_elephant', (conv, {olifant}) => {
  conv.ask(
    'Goed zo ' + conv.user.storage.name + '! Een olifant. Dit is een zebra',
    new BasicCard(afbeeldingen['zebra'])
  );
});

app.intent('did_zebra', (conv, {zebra}) => {
  conv.ask(
    'Goed zo ' + conv.user.storage.name + '! Een zebra. Dit is een aap',
    new BasicCard(afbeeldingen['aap'])
  );
});

app.intent('did_monkey', (conv, {aap}) => {
  conv.ask(
    'Goed zo ' + conv.user.storage.name + '! Een aap. Dit is een giraffe',
    new BasicCard(afbeeldingen['giraffe'])
  );
});

app.intent('did_giraffe', (conv, {giraffe}) => {
  conv.ask(
    'Goed zo ' + conv.user.storage.name + '! Een giraffe. Dit is een leeuw',
    new BasicCard(afbeeldingen['leeuw'])
  );
});

app.intent('did_leeuw', (conv, {leeuw}) => {
  conv.close(
    'Goed zo ' +
      conv.user.storage.name +
      '! Een leeuw. Nu weet je alle woordjes!'
  );
});

app.fallback((conv) => {
  // intent contains the name of the intent
  // you defined in the Intents area of Dialogflow

  conv.ask('Kan jij het woord zeggen?');

  /*
  const intent = conv.intent;
  switch (intent) {
    case create_name:
      conv.ask('Kan jij het woord olifant zeggen?');
      break;
    case did_elephant:
      conv.close('Kan jij het woord zebra zeggen?');
      break;
  }
  */
});

// Set the DialogflowApp object to handle the HTTPS POST request//

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
