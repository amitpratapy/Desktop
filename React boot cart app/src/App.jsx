import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './comp/Navbar';
import Page from './comp/Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './comp/List';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Page/>}></Route>
      <Route path='/list' element={<List/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


// import React from 'react';

// const App = () => {
//   return (
//     <>
//     <h1>Amit</h1>
//     </>
//   )
// }

// export default App