import {db} from '../../firebase'
import React, {useEffect, useState} from 'react'
import { getDoc, collection } from 'firebase/firestore'

async function fetchDataFromFirestore(){
    const querySnapshot = await getDocs(collection(db,""))
}

const SignIn = () => {

}