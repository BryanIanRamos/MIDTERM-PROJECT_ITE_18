import React from 'react';
import {Container} from 'reactstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/LogIn';
import Home from './components/Content';
import ProtectedRoutes from './components/ProtectRouter';

function App() {
  // Return the JSX code that will be rendered to the screen
  return (
    // Use the Container component from the reactstrap library to wrap the content
  <Container>
    {/* Set up routing */}
    <BrowserRouter>
     {/* Define the routes for the application */}
      <Routes>
        <Route path="/" element={<Login />}/>
          <Route element = {<ProtectedRoutes/>}>
            <Route path="/home" element={<Home />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </Container> 
  );
}


export default App;
