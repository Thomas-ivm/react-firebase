import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
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