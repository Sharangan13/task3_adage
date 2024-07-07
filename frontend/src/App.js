import './App.css';
import Navbar from './layouts/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Middlebar from './layouts/Middlebar';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page10 from './pages/Page10';
import Page11_map from './pages/Page11_map';
import Page9 from './pages/Page9';
import Page12 from './pages/Page12';
import Page13 from './pages/Page13';
import Page14 from './pages/Page14';
import HomePage from './pages/website/HomePage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Offer from './pages/website/Offer';
import Explore from './pages/website/Explore';
import Contact from './pages/website/Contact';
import ScrollToTop from './utility/ScrollToTop';
import Booking from './pages/website/Booking';



function App() {
  return (
    <div className="App">
     <Router>
<ScrollToTop/>
      <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route  path='/offer' element={<Offer/>}></Route>
      <Route  path='/explore' element={<Explore/>}></Route>
      <Route  path='/contact' element={<Contact/>}></Route>
      <Route  path='/booking' element={<Booking/>}></Route>
      
        
         </Routes>

     </Router>
     
     {/* <HomePage/>
      <Middlebar/>
      
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>



      <Page7/>
      <Page8/>
      <Page9/>
      <Page10/>
      <Page11_map/>
      <Page12/>
      <Page13/>


      
     <Page14/> */}
      
    </div>
  );
}

export default App;
