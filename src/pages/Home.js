import { useEffect, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Auth } from '../components/auth';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Form } from '../components/form';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Detail } from '../pages/detail';

function Home() {
    const [gegevens, setGegevens] = useState([]);
    const gegevensCollectionRef = collection(db, "gegevens")
  
    useEffect(() => {
      const getGegevens = async () => {
        try {
          const data = await getDocs(gegevensCollectionRef);
          const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id, }))
          setGegevens(filteredData)
        } catch (err) {
          console.error(err);
        }
      };
  
      getGegevens();
    }, [])
  
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
          <div>
  
  
            <Auth />
            <Form />
            {/* <BrowserRouter>
              <Routes>
                <Route path='/detail' element={<Detail />}></Route>
              </Routes>
            </BrowserRouter> */}
  
            <div>
              {gegevens.map((gegevens) => (
                <div>
                  <p>Naam: {gegevens.fname} {gegevens.lname} </p>
                  <p>Leeftijd: {gegevens.age}</p>
                  <p>Stad: {gegevens.city}</p>
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>
    );
}

export default Home