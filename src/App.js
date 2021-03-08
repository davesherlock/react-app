import React from "react"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import './App.css';

function App() {
    return (
        <div id="wrapper">
            <Header />
            <Sidebar />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App