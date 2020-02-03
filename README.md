# salesnetwork-app
react-native app for salesnetwork

## How to run this project

`npm install or yarn install`

`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`

To give name your android app change file `android/app/src/main/res/values/strings.xml` 

`npx react-native run-android`

Before running above command make sure android phone is connected to laptop with usb debugging on & file transfer is on and install from usb is unable .

After successfull of above command `Sales Network` app will be installed into your android phone.