import { initializeApp } from "firebase/app"
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    documentId
} from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyDhr1KYIjXIlN4nMC9scUiHEIr9XSJowkg",
  authDomain: "vanlife-42499.firebaseapp.com",
  projectId: "vanlife-42499",
  storageBucket: "vanlife-42499.firebasestorage.app",
  messagingSenderId: "504833820502",
  appId: "1:504833820502:web:69e74c03ad238d297978f7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans")



export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}


export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

// A function whose only purpose is to delay execution
// for the specified # of milliseconds when used w/ `await`
// e.g. inside an async function:
// await sleep(2000)  => pauses the function for 2 seconds before moving on
function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

//export async function getVans(id) {
//    const res = await fetch(url)
 //   if (!res.ok) {
 //       throw {
  //          message: "Failed to fetch vans",
 //           statusText: res.statusText,
 //           status: res.status
 //       }
 //   }
 //   const data = await res.json()
 //   return data.vans
//}


export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}