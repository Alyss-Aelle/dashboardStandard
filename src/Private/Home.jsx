import React from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../firebase'


const Home = () => {


  //initialisation fonction flché de deconnexion
  const logout = () => { 

    signOut(auth);
    console.log('logout');
   }


  return (
    <div className='flex justify-between text-sky-950'>Home

      <button  className="btn btn-outline btn-info" onClick={logout}>Logout</button>


    {/* lien categorie */}
              <a href='/compte' className='hover:text-violet-500'>
        Compte
        </a>
    </div>
  )
}

export default Home