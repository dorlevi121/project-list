import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification: any) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then((doc: any) => console.log('notification added', doc));
});


exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(doc => {

    const project = doc.data();
    if( project === undefined) return;
    const notification = {
      content: 'Added a new project',
      user: project.authorFirstName + ' ' +  project.authorLastName,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    
    return admin.firestore().collection('users')
      .doc(user.uid).get().then((doc: any) => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });
});