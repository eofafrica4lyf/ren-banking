import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/pages/Dashboard"

function App() {
	return (

		<div className='App'>
			<Header />
			<Sidebar />

			<Dashboard />

			<Footer />
		</div >
	)
}

export default App
