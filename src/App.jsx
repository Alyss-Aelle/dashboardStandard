import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Public from './Public'
import Private from './Private'
import Loading from './common/Loading'

//importation firebase
import {auth} from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

function App() {

    const [isConnect, setIsConnect] = useState(false);
    const [isLoading, setIsLoading] = useState(true) ;//lancer chargement
    

  useEffect(() => {
    console.log("app chargé");
    //soucription au changement d'état de l'authentification
    onAuthStateChanged(auth, (user)=>{
      user!=null?setIsConnect(true) : setIsConnect(false);

      //stopper chargement
      setIsLoading(false);


      console.log("user:",user);
    })


  }, []) //au chargement
  



  return (
    <>

   {isConnect?<Private/>:
              isLoading?<Loading/>:
                                  <Public/>}
    </>
  )
}

export default App
