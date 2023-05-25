import {Container} from 'reactstrap';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Menus from './Components/Menus';
import AddStudent from './Components/AddStudent';
import AllStudent from './Components/AllStudent';
import UpdateStudent from './Components/UpdateStudent';
import AboutUs from './Components/AboutUs';

function App() {
  const btnHandle=()=>{
      toast.success("done",{
        position:"top-center",
      });
  };
  return (
    <div>
 <ToastContainer/>
          <Header/>
                <Container>
                    <div className="row">
                        <div className="col-4 col-md-4"><Menus/></div>
                        <div className="col-8 col-md-8">
                          <Router>
                              <Routes>
                                  <Route path="/" element={<Home />} exact/>
                                              
                                  <Route path="/add-student" element={<AddStudent/>} exact/> 

                                  <Route path="/view-students"element={<AllStudent/>} exact/>

                                  <Route path="/update-students"element={<UpdateStudent/>} exact/>

                                  <Route path="/about-us"element={<AboutUs/>} exact/>

                              </Routes>
                          </Router>
                          
                           
                            
                        </div>
                    </div>
                </Container>

        
      
    </div>
   
  );
}

export default App;
