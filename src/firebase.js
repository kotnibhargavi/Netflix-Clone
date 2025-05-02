import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDwC6svjHqtcuwOkmHfaudSC89PPXX177s",
  authDomain: "netflix-clone-91e0f.firebaseapp.com",
  projectId: "netflix-clone-91e0f",
  storageBucket: "netflix-clone-91e0f.firebasestorage.app",
  messagingSenderId: "882673773000",
  appId: "1:882673773000:web:c9e350a77ccc6a2b5978fd"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async (name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email
        })
    } catch (error) {
        console.log(error)
        toast.error(error)
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}

const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password) 
    } catch (error) {
        console.log(error)
        toast.error(error)
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}

const logout = ()=>{
    signOut(auth)
}

export {auth,db,signUp,login,logout}