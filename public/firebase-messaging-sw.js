// Import and configure the Firebase SDK
// It's important to include the an empty catch statement here to avoid an error on browsers that don't support SWs
import { initializeApp } from 'firebase/app';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';

const firebaseConfig = {
  "projectId": "cds-english-ace",
  "appId": "1:990980407498:web:4af71caacc34494bb23433",
  "storageBucket": "cds-english-ace.appspot.com",
  "apiKey": "AIzaSyAqQNXp8mdS0B5WxDLf2Ma_Gf5VwGXjk_M",
  "authDomain": "cds-english-ace.firebaseapp.com",
  "messagingSenderId": "990980407498"
};


const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
