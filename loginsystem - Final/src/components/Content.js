import React from 'react';
import { userData } from './helper';  // Importing the `userData` function from the `helper.js` file
import Header from './header';  // Importing the `Header` component from the `header.js` file
import Navbar from './Navbar';  // Importing the `Navbar` component from the `Navbar.js` file
import './App.css';
import Profile from './images/profile.png'  // Importing the profile image
import { toast } from 'react-toastify';  // Importing the `toast` function from the `react-toastify` library

const Content = () => {
    const {username, email} = userData();  // Calling the `userData` function to retrieve the `username` and `email` from local storage

    const handleClick = () => {
        setTimeout(() => {  // Delaying the execution of the following code by 1.5 seconds
          toast.success('Logged out successfully!', {
            hideProgressBar: true,
          })
          localStorage.setItem("isLogged", false);  // Updating the `isLogged` key in local storage to `false` upon logging out
          window.location.href = '/';  // Redirecting the user to the homepage upon logging out
         }, 1500); // Delay for 1.5 seconds (1500 milliseconds)
      };

   return(
    <>
    <Header />
    <Navbar />
        <div className='temp-UI'>
            <div className='temp-UI-inner'>
                <div className='UI-inner'>
                {/* Displaying the username in the header */}
                    <h1 className='header'>Welcome {username}!</h1>  
                    <div className='body'>
                    {/* Displaying the profile picture */}
                        <img src={Profile} alt='Profile' height={180} width={180} />  
                        <div className='body-info'>
                        {/* Displaying the username in the body */}
                            <h3>Username: <span className="username-text">{username}</span></h3>  
                            <br></br>
                            {/* Displaying the email in the body */}
                            <h3>Email: <span className="username-text">{email}</span></h3>  
                            {/* Adding a logout button that calls the `handleClick` function upon clicking */}
                            <button onClick={handleClick}>Log out</button>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
   ) 
}


export default Content;
