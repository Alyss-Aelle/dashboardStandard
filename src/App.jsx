import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Public from './Public'
import Private from './Private'

//importation firebase
import {auth} from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

function App() {

    const [isConnect, setIsConnect] = useState(false)

  useEffect(() => {
    console.log("app chargé");
    //soucription au changement d'état de l'authentification
    onAuthStateChanged(auth, (user)=>{
      user!=null?setIsConnect(true) : setIsConnect(false)
      console.log("user:",user);
    })


  }, []) //au chargement
  



  return (
    <>

   {isConnect?<Private/>:<Public/>}
    </>
  )
}

export default App
