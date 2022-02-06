
import { useState } from 'react';
import Header from './components/Header/Header';
import Repositories from './components/Repositories/Repositories';

import { Provider } from './context/context'



function App() {
  let [data, setData] = useState([])
  return (
    <div className="App">
      <Provider value={{data, setData}}>
        <Header></Header>
        <div className='d-flex flex-wrap justify-content-around'>
        <Repositories></Repositories>
        </div>
      </Provider>
    </div>
  );
}

export default App;