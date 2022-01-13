//explanation https://www.pluralsight.com/guides/using-firebase-with-react-and-redux


import Firebase from 'firebase'
import config from "./conf"

Firebase.initializeApp(config);


export const getData = async() => {
    let ref = await Firebase.database()
        .ref("/");

        return ref;
        
}

/* import * as firebase from './firebase'
import 'firebase/firestore'

const db = firebase.firestore(firebaseApp);

export const getCollection = async(collection) => {
    const result = {statusResponse: false, data: null, error: null}

    try {
        const data = await db.collection(collection).get();
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        result.statusResponse = true
        result.data = arrayData
        console.log(data);
    } catch (error) {
        result.error = error
        
    }

    return result;
} */