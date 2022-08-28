import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/firebase-config';
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '../auth/firebase-config'
import { data } from '../data'


const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
    const [favs, setFavs] = useState([])
    const [currentUser, setCurrentUser] = useState();
    const [ counter, setCounter] = useState(0)

    const getFavs = async () => {
        let favs = []
        const colRef = collection(db, 'favs')
        const todoSnapshot = await getDocs(colRef)
        // console.log(todoSnapshot.docs)
        todoSnapshot.docs.forEach(doc => {
            favs.push({ ...doc.data(), id: doc.id })
        })
        setFavs(favs)
    }

    const addFav = (id) => {
        const dataToAdd = data.filter(el => el.product_id == id)
        console.log('add')
        const colRef = collection(db, 'favs')
        console.log(dataToAdd[0]);
        addDoc(colRef, { data: dataToAdd[0] }).then(doc => {
            favs.push({ data: dataToAdd[0], id: doc.id })
            setFavs(favs)
        })
    }

    const deleteFav = (id) => {
        console.log('delete');
        console.log(id, favs);
        const dataToDelete = favs.filter(el => el.data.product_id == id);
        // console.log(dataToDelete[0]);
        const docRef = doc(db, 'favs', dataToDelete[0].id);
        deleteDoc(docRef)
            .then(() => {
                let newFiltered = favs.filter(el => el.data.product_id != id)
                setFavs(newFiltered);
            })
    }
    
    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        getFavs()
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        })
    }, [])



    return (
        <AuthContext.Provider value={{
            favs,
            setFavs,
            addFav,
            deleteFav,
            getFavs,
            currentUser,
            counter,
            increaseCounter
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;