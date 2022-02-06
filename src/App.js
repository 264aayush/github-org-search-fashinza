import './App.css'
import { useState } from 'react';
import Header from './components/Header/Header';
import Repositories from './components/Repositories/Repositories';

import { Provider } from './context/context'
import Modal from './components/Modal/Modal';



function App() {
  let [data, setData] = useState([])
  let [selectedRepo,setSelectedRepo]=useState({})
  return (
    <div className="App">
      <Provider value={{data, setData,setSelectedRepo}}>
        <Modal repo={selectedRepo}></Modal>
        <Header></Header>
        <div className='flexbox flex-wrap justify-around'>
          <Repositories></Repositories>
        </div>
      </Provider>
    </div>
  );
}

export default App;