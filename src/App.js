import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {action,originals} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals}/>
      <RowPost url={action} title='Action' isSmall={true}/>
    </div>
  );
}

export default App;
