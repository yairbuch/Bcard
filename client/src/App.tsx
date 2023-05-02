import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import Card from "./cards/components/card/Card";
// import ActionAreaCard from "./cards/components/card/Card";
// import Cards from "./cards/components/Cards";
import CardsPage from "./cards/pages/CardsPage";
import Layout from "./layout/Layout";
import ErrorPage from "./pages/ErrorPage";
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
