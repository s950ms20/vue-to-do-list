import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: 'AIzaSyCsVLNXqKz9jvPv3eJA6D11GlvAaiNmZ1Q',
    authDomain: 'vue-to-do-list-b142c.firebaseapp.com',
    databaseURL: 'https://vue-to-do-list-b142c.firebaseio.com',
    projectId: 'vue-to-do-list-b142c',
    storageBucket: '',
    messagingSenderId: '1014494636027'
};
const firebaseapp = firebase.initializeApp(config)

const firestore = firebase.firestore();

const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);


export const db = firebase.firestore();

export default firebaseapp.firestore()

