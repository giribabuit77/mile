import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';


function App() {

  //should be memoized or stable
 

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='home' element={<Home/>}></Route>
         <Route path='about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
