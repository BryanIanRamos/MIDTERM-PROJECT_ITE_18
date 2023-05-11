import React from 'react';
import Navbar from '../components/Navbar';
import Body from '../components/body';
import '../components/App.css';// import the styles
import Header from '../components/header';
import { ToastContainer} from 'react-toastify';

function LogIn() {
  return (
   <div className='Home'>
    {/* Render the components */}
      <Header />
      <Navbar />
      <Body />
      <ToastContainer/>
    </div> 
  );
}




export default LogIn;
