'use strict';

// Import the Dialogflow module from the Actions on Google client library//
const {dialogflow, BasicCard, Suggestions} = require('actions-on-google');

// Import the firebase-functions package//

const functions = require('firebase-functions');

// Instantiate the Dialogflow client//

const app = dialogflow({debug: true});

const afbeeldingen = {
  olifant: {
    title: 'De olifant',
    text: '',
    image: {
      url: 'https://i.imgur.com/zSlpjgE.png',
      accessibilityText: 'Afbeelding van een olifant.',
    },
    display: 'WHITE',
  },
  aap: {
    title: 'De aap',
    text: '',
    image: {
      url: 'https://i.imgur.com/Ga45v27.png',
      accessibilityText: 'Afbeelding van een aap.',
    },
    display: 'WHITE',
  },
  leeuw: {
    title: 'De leeuw',
    text: '',
    image: {
      url: 'https://i.imgur.com/N1PEPuR.png',
      accessibilityText: 'Afbeelding van een leeuw.',
    },
    display: 'WHITE',
  },
  giraffe: {
    title: 'De giraf',
    text: '',
    image: {
      url: 'https://i.imgur.com/bKc1IJI.png',
      accessibilityText: 'Afbeelding van een giraffe.',
    },
    display: 'WHITE',
  },
  zebra: {
    title: 'De zebra',
    text: '',
    image: {
      url: 'https://i.imgur.com/yDwlpAQ.png',
      accessibilityText: 'Afbeelding van een zebra.',
    },
    display: 'WHITE',
  },
};

// Handle the create_name intent//
app.intent('create_name', (conv, {name}) => {
  let audioFile = 'https://sndup.net/7h6c/elephant.wav';
  conv.user.storage.name = name;
  conv.ask(
    '<speak>Leuk je te ontmoeten ' +
      name +
      `. Vandaag gaan we het hebben over dieren uit de dierentuin. Dit is een olifant.<audio src="${audioFile}"></audio> Zeg het woord: olifant</speak>`,
    new BasicCard(afbeeldingen['olifant'])
  );
});

app.intent('create_name_fallback', (conv) => {
  conv.ask(
    'Zeg het woord olifant ' + conv.user.storage.name + '.',
    new BasicCard(afbeeldingen['olifant'])
  );
});

app.intent('did_elephant', (conv, {olifant}) => {
  conv.ask(
    'Goed zo ' +
      conv.user.storage.name +
      '! Dat was een olifant. Probeer nu het woord zebra te zeggen',
    new BasicCard(afbeeldingen['zebra'])
  );
});

app.intent('did_elephant_fallback', (conv) => {
  conv.ask(
    'Probeer het woord Zebra te zeggen ' + conv.user.storage.name,
    new BasicCard(afbeeldingen['zebra'])
  );
});

app.intent('did_zebra', (conv, {zebra}) => {
  conv.ask(
    'Goed zo ' +
      conv.user.storage.name +
      '! Dat was een zebra. Probeer nu het woord aap te zeggen.',
    new BasicCard(afbeeldingen['aap'])
  );
});

app.intent('did_zebra_fallback', (conv) => {
  conv.ask(
    'Zeg het woord aap ' + conv.user.storage.name + '.',
    new BasicCard(afbeeldingen['aap'])
  );
});

app.intent('did_monkey', (conv, {aap}) => {
  conv.ask(
    'Heel erg goed! ' +
      conv.user.storage.name +
      '! Dat was een aap. Dit is een giraf. Herhaal het woord: Giraf',
    new BasicCard(afbeeldingen['giraffe'])
  );
});

app.intent('did_monkey_fallback', (conv) => {
  conv.ask(
    'Zeg het woord giraf ' + conv.user.storage.name + '.',
    new BasicCard(afbeeldingen['giraffe'])
  );
});

app.intent('did_giraffe', (conv, {giraffe}) => {
  conv.ask(
    'Goed gedaan ' +
      conv.user.storage.name +
      '! Dat was inderdaad een giraf. Dit is een leeuw. Zeg maar het woord leeuw.',
    new BasicCard(afbeeldingen['leeuw'])
  );
});

app.intent('did_giraffe_fallback', (conv) => {
  conv.ask(
    'Zeg het woord leeuw ' + conv.user.storage.name + '.',
    new BasicCard(afbeeldingen['leeuw'])
  );
});

app.intent('did_leeuw', (conv, {leeuw}) => {
  conv.ask(
    'Fantastisch ' +
      conv.user.storage.name +
      '! Dat was een leeuw. Weet je nog wel dier dit is?',
    new BasicCard(afbeeldingen['olifant'])
  );
});

app.intent('quiz_olifant', (conv, {olifant}) => {
  conv.ask(
    'Heel goed. Dat was een olifant. Weet je ook nog welk dier dit is?',
    new BasicCard(afbeeldingen['zebra'])
  );
});

app.intent('quiz_zebra', (conv, {zebra}) => {
  conv.ask(
    'Heel goed. Dat was een zebra. Weet je ook nog welk dier dit is?',
    new BasicCard(afbeeldingen['aap'])
  );
});

app.intent('quiz_aap', (conv, {aap}) => {
  conv.ask(
    'Heel goed. Dat was een aap. Weet je ook nog welk dier dit is?',
    new BasicCard(afbeeldingen['giraffe'])
  );
});

app.intent('quiz_giraffe', (conv, {giraffe}) => {
  conv.ask(
    'Heel goed. Dat was een giraf. Weet je ook nog welk dier dit is?',
    new BasicCard(afbeeldingen['leeuw'])
  );
});

app.intent('quiz_leeuw', (conv, {giraffe}) => {
  conv.close(
    'Dat was een leeuw. Wat heb jij het goed gedaan vandaag ' +
      conv.user.storage.name +
      '! Je weet nu 5 dieren uit de dierentuin.'
  );
});

app.intent('Default Fallback Intent', (conv) => {
  conv.close(`Sorry, ik kan je niet goed verstaan.`);
});

// Set the DialogflowApp object to handle the HTTPS POST request//

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
