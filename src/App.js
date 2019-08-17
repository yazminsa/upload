import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React, { Component } from 'react';
// import './App.css';
// import Axios from 'axios';

// class App extends Component{
//   state = {
//     file: null
//   }

//   handleFile(e){
//     let file = e.target.files
//     this.setState({file: file})
//     console.log(e.target.files[0]);
//   }

//   handleUpload(e){
//     let file = this.state.file
//     let formdata = new FormData()

//     formdata.append('image', file)
//     formdata.append('name', "")

//     Axios({
//       url: "https://finalcm-ysa.firebaseio.com",
//       method: "POST",
//       headers: {
//         authorization: 'itit.ambrosio@gmail.com'
//       },
//       data: formdata
//     }).then((res) =>{
      
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>PRUEBA</h1>
//         <form>
//           <div className="">
//           <label>Select File</label>
//           <input type="file" multiple name="file" onChange={(e)=>this.handleFile(e)}/>
//           </div>
//           <br />
//           <button type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>
//           </form></div>
//     );
//   }
// }


export default App;
