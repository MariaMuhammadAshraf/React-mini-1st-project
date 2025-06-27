 //react Router 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Contact from './components/Contact'; // adjust the path if needed
import Blogs from './components/Blogs';

//import use state 
import React, { useState } from 'react';




function App() {






   // alert state
  const [alert,setAlert] = useState(null); // by default null
  //method setAlert name arrow function
  const showAlert =(message,type) =>{
       setAlert({
        msg:message,
        type:type

       })
       //alert litne seconds tk show hota rahega 
       setTimeout(() => {
        setAlert(null);
       },1500);//seconds set krna 1500 mtlb dehher second
  }

  //new state create here dark light mode
  // const [Mode, setMode] = useState('light');// by default weather dark mode is enabled or not!
// function create toggle mode
  // const toggleMode = () =>{
  //   if(Mode === 'light'){
  //      setMode ('dark');
  //      document.body.style.backgroundColor='#063970';
  //      showAlert("Dark mode has been enable","success");
  //   }
  //   else{
  //     setMode ('light');
  //      document.body.style.backgroundColor='white';
  //       showAlert("light mode has been enable","success");
  //   }


 //color palate mode multi colors pallate 
const [Mode, setMode] = useState('light');
const [colorIndex, setColorIndex] = useState(0);

const lightColors = ['#a68a64', '#c2c5aa', '#ecf39e', '#f5cac3', '#e4c1f9'];
const darkColors = ['#9b2226', '#ffa62b', '#2d6a4f', '#5a189a', '#ba181b','#007f5f'];

const toggleMode = () => {
  const nextIndex = (colorIndex + 1) % lightColors.length; // 👈 5 because 5 colors in each array
  setColorIndex(nextIndex);

  setMode((prevMode) => {
    if (prevMode === 'light') {
      document.body.style.backgroundColor = darkColors[nextIndex];
      document.body.style.color = 'white';
      // document.title ='TextUtils - Dark Mode';
      showAlert(`Dark mode applied`, "success");
      return 'dark';
    } else {
      document.body.style.backgroundColor = lightColors[nextIndex];
      document.body.style.color = 'black';
      // document.title ='TextUtils - Light Mode';
      showAlert(`Light mode applied`, "success");
      return 'light';
    }
  });
};




return (
 
    // props pass here 
    <>
    {/* <Navbar title="TextUtils" aboutUs="About Us" contactus="Contact Us" mode={Mode} toggleMode = {toggleMode} />  */}

    {/* // for defaultprops use// */}
      <Router> 
      <Navbar
        title="TextUtils"
        aboutUs="About Us"
        contactus ="Contact Us"
        blogs = "Blogs"
         mode={Mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        {/* <TextForm showAlert={showAlert} heading="Enter the text to Analyze Below" mode={Mode} /> */}
        <Routes>
         <Route
            path="/"
            element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter,Character Counter,Remove Extra Spaces" mode={Mode} />}
          /> 
           {/* users ---> component 1
          users/home ---> component 2
          exact path example  */}
            <Route exact path="/about" element={<About  mode={Mode}  />} />
           <Route exact path="/Contact" element={<Contact />} />
             <Route exact path="/blog" element={<Blogs />} /> 
            
         </Routes> 
      </div>
    </Router>
   
   </>
   
  );
}


export default App;



