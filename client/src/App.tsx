import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Router from "./routes/Router";




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Layout>
        <Router/>
      </Layout>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
