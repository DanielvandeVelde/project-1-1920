# Voice User Interface using Google Assistant

<kbd>![Shiny front-end](https://raw.githubusercontent.com/DanielvandeVelde/project-1-1920/master/images/main.jpg "Shiny front-end")</kbd>

## Install ?

You can clone this repo by using:
`git clone https://github.com/danielvandevelde/project-1-1920.git`  
Then you can install the needed packages by using `npm install` and if you want to make any changes or upload it to your Dialogflow project you can use the the Firebase CLI `npm install -g firebase-tools`  
The `.zip` file located in `/Ines/` can be uploaded to Dialogflow and any changes can be made in that as well since it's basic JSON.

## Prototype

This is a prototype in the Dutch language for children around the age of 5. The child will be asked their name and shown different pictures of animals that reside at a zoo by Ines de papegaai (Ines the parrot). Ines will show a picture, say what animal it is, and show the spelling on screen. After being shown some of the animals Ines will ask them if they still know what they're called. The picture as well as the spelling will be on screen. If a child wants to 'cheat' by reading the 'name' on the screen that is of course fine. Learning is the objective.

The prototype is specifically made for children that have Dutch as a second language and might not even use the Dutch language at home. The application uses a 'happy flow' for now where it assumes you give the right answers but it does have some fallbacks in place (please do not depend on those yet).
The child can type but this is mostly used as a voice application that one can use without the use of their hands (or eyes).

## Google assistant and children (privacy)

Children can get a different user account used with Google's family link. They can play certain games, listen to stories and ask Google Assistant a variety of questions. They however can't play any video's, music, make purchases or use any apps that aren't 'Google For families approved'.

Google will however still use the child's audio-recordings (but won't share this with the application it's using e.g. Ines de papagaai) to create a transcript and sent those to the application being used. It will also not send any personal information such as the name, e-mail or exact location. However, if you're using Google Assistant they do have that information but just won't give it to the application that's being used.  
Any information stored by the application will be uniquely coded and will not be stored in the Google account that the child is using.

My personal believe is that using anything by Google (especially this assistant) is already giving up plenty of information. Using a 'for family children's account' will minimize that but will still send all that data to Google.
It's just what you yourself are comfortable with.
The above paragraphs mostly imply: "Google gets all the data you have by: having a Google account, a mobile device and using your voice with Google Assistant but we won't share it with the application e.g. Ines de papegaai however we will probably use it ourselves."
They even have the function to link your child's voice with their account so they will always have a 'safe experience'.
Pretty scary stuff.

More information can be found in their [Privacy notice for childrens features](https://assistant.google.com/privacy-notice-childrens-features/)

Before releasing an application like this and having it available to download or use from the Google Assistant you would have to agree to the [U.S. Children’s Online Privacy and Protection Act (COPPA)](https://www.ftc.gov/tips-advice/business-center/privacy-and-security/children's-privacy). As well as the [E.U. General Data Protection Regulation (GDPR)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679).
Google also has their own rules in place with their For Families program which sets some [requirements](https://developers.google.com/assistant/console/policies/general-policies#actions_for_families) next to also agreeing with their regular [Terms of Service](https://developers.google.com/assistant/console/policies/terms-of-service) and [addendum](https://developers.google.com/assistant/console/policies/actions-for-families-addendum) for the For Families program.
So it's definitely not easy releasing something on that platform thanks to Google's own Terms of Service, United States and European Union laws and regulations (next to also agreeing to not breaking any rule or law within your own country or any country you're in or releasing in.).
