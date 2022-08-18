import React, {useEffect,useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import {onAuthStateChanged} from 'firebase/auth';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/collapse';


import {auth} from './firebase/firebase';
import './App.css';
import BookPage from './components/books/bookPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import NavBar from './components/common/NavBar';
import RequireAuth from './components/common/RequireAuth';
import Spinner from './components/common/Spinner';
import ProfilePage from './components/profile/ProfilePage';

export default function App() {

  const [user,setUser] = useState(null);
  const [userRetrieved, setUserRetrieved] = useState(false);

  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUserRetrieved(true);
    })
  }, []);

  return (

 
      <BrowserRouter>
      <NavBar user={user}/>
      {
        userRetrieved ?
        <Routes>
        <Route path = '/' element= {
          <RequireAuth user={user}>
            <BookPage user={user}/>
            
          </RequireAuth>
        } />
        <Route path='/profile' element={
        <RequireAuth user={user}>
          <ProfilePage user={user} />
        </RequireAuth>
      } />
        <Route path = '/login' element= {<LoginPage />} />
        <Route path = '/register' element= {<RegisterPage />} />
     
        </Routes>

        :
        <div className= 'text-center mt-5'>
          <Spinner variant = 'info'/>
        </div>
    
      }
        </BrowserRouter>
   
  )
}

