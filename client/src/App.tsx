import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import { SnackbarProvider } from "./providers/SnackbarProvider";
import ThemeProvider from "./providers/ThemeProvider";
import Router from "./routes/Router";




function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
       <ThemeProvider>
        <SnackbarProvider>
       <Layout>
        <Router/>
      </Layout>
      </SnackbarProvider>
      </ThemeProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
