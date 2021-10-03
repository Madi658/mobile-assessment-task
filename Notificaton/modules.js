import PushNotification from "react-native-push-notification";

export const NotificationServices=()=>{
    PushNotification.configure({
        onRegister: function (token) {
          console.log('TOKEN:', token);
        },
        onNotification: function (notification) {
          console.log('NOTIFICATION:', notification);
        },
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },
      requestPermissions: Platform.OS === 'ios'
      });
}

export const NotificationChannal=()=>{
    PushNotification.createChannel({
        channelId:'User-Rejister',
        channelName:'User-Rejister'
    })
}
export const Notify=(message)=>{
    PushNotification.localNotification({
        channelId:'User-Rejister',
        title: "Rejistration Complete", // (optional)
        message:message, // (required)
        picture: "https://www.example.tld/picture.jpg", // (optional) Display an picture with the notification, alias of `bigPictureUrl` for Android. default: undefined
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      });
}