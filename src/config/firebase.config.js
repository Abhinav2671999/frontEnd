import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: 'AIzaSyDWl8MGmj2ukIGFlhHoAVwocjyEC0gWVaA',
    authDomain: 'project-musicapp-ff18a.firebaseapp.com',
    projectId: 'project-musicapp-ff18a',
    storageBucket: 'project-musicapp-ff18a.appspot.com',
    messagingSenderId: '990397162189',
    appId: '1:990397162189:web:be9005542f6ff9a6147f84',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
