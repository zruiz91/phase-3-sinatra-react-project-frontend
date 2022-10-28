import React from "react";


import Header from "./components/Header";
import PerformancesContainer from "./components/PerformancesContainer";
import './App.css';
import { Container } from "react-bootstrap";


function App() {
  return (
    <Container class="bg-dark">
      <Header/>
      <PerformancesContainer/>
    </Container >
  )
}

export default App;
