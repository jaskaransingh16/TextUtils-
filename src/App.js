
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message)=>{
    setAlert({
      msg: message
    })
  }
  return (
    <>
      <Navbar title="WhiteEagle Computing" />
      <Alert alert={alert}/>
      <div className="container">
        <TextForm  showAlert={showAlert} heading="enter the text here" buttonText="Convert to Uppercase"/>
      </div>
    </>
  );
}

export default App;
