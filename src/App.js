import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import { Form } from 'react-router-dom';
import { Detail } from './pages/detail';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/detail' element={<Detail />} />
			</Routes>

		</div>
	)
}


export default App;