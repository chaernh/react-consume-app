import firebase from 'firebase'
// import 'firebase/auth'
// import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCvkTrIcUIgwDMd6PuKmRwiBjEtpW40la4",
    authDomain: "react-consume-api.firebaseapp.com",
    databaseURL: "https://react-consume-api-default-rtdb.firebaseio.com",
    projectId: "react-consume-api",
    storageBucket: "react-consume-api.appspot.com",
    messagingSenderId: "975351030044",
    appId: "1:975351030044:web:b753da3e85d642b4fe9ad9"
}

firebase.initializeApp(firebaseConfig)

// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider()

export default firebase