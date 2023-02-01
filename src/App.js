
import './App.css';
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';

import Account from './Pages/Account'
import News from './Pages/News'
import Messenger from './Pages/Messenger'
import Calendar from './Pages/Calendar'

import Header from './Components/Header';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <>
      <Header></Header>
      <div className='mg-10-auto grid-col-2 '>
        <Menu></Menu>
        <BrowserRouter>
          <Routes>
            <Route path='/account' element={<Account />} />
            <Route path='/news' element={<News />} />
            <Route path='/messenger' element={<Messenger />} />
            <Route path='/calendar' element={<Calendar />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>

  );
}

export default App;
