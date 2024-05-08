import React from 'react';
import { Aritcle , Brand , NavBar , CTA , Feature  } from './components';
import { Blog , Features , Footer , Header , Posibility , WhatGPT } from './containers';
import './App.css'; 
import './index.css'; 



const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        < NavBar/>
        <Header/>

      </div>
        <Brand/>
        <WhatGPT/>
        <Features/>
        <Posibility/>
        <CTA/>
        <Blog/>
        <Footer/>

      </div>
  )
}

export default App














// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" /> */}
        
//         <a
//           // className="App-link"
//           // href="https://reactjs.org"
//           // target="_blank"
//           // rel="noopener noreferrer"
//         >
//           <h1>Learn React with Adeel</h1>
//         </a>
//       {/* </header> */}
//     </div>
//   );
// }

// export default App;

