import React from "react";
import Form from './component/Page';
import './component/formcomponent/FormPage.css';
import './component/formcomponent/FormPage.css';
import {Link , Route, Routes} from "react-router-dom";
import HomePage from "./component/homecomponent/HomePage";
import FormPage from "./component/formcomponent/FormPage";

class App extends React.Component {
  render(){
  return (
    <div >
    <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/form' element={<FormPage/>}/>
            <Route path="/PersonForm/:id" element={<FormPage />}></Route>
        </Routes>
    </div>
  );
  }
}
export default App
