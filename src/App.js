import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation'
import SigninNavigation from './components/SigninNavigation'
import Login from './components/Login'
import Register from './components/Register'
import LandingPage from './components/landingPage'
import GameList from './components/GameList'
import Game from './components/game'
import Profile from './components/Profile'
import GameDetail from './components/GameDetail'
import Score from './components/Score'
import Home from './components/Home'
import Rockpaper from './components/Detail-1'
import Newfifa from './components/Detail-2'
import Newgta from './components/Detail-3'
import Newsubway from './components/Detail-4'
import Newsa from './components/Detail-5'
import Newcookingmama from './components/Detail-6'
import Newtemplerun from './components/Detail-7'
import Newharvestmoon from './components/Detail-8'





function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Navigation /><LandingPage /></>} />
        <Route path='/login' element={<><Navigation /><Login /></>} />
        <Route path='/register' element={<><Navigation /><Register /></>} />
        
        <Route path='/gameList' element={<><SigninNavigation/><GameList/></>} />
        <Route path='/game' element={<><Navigation /><Game /></>} />
        <Route path='/Profile' element={<><SigninNavigation/><Profile /></>} />
        <Route path='/gameDetail' element={<><Navigation/><GameDetail /></>} />
        <Route path='/Score' element={<><SigninNavigation/><Score /></>} />
        <Route path='/Home' element={<><SigninNavigation/><Home/></>} />
        <Route path="/detail-1/Rockpaper" element={<Rockpaper />} />
        <Route path="/detail-2/Newfifa" element={<Newfifa />} />
        <Route path="/detail-3/Newgta" element={<Newgta />} />
        <Route path="/detail-4/Newsubway" element={<Newsubway />} />
        <Route path="/detail-5/Newsa" element={<Newsa />} />
        <Route path="/detail-6/Newcookingmama" element={<Newcookingmama />} />
        <Route path="/detail-7/Newtemplerun" element={<Newtemplerun />} />
        <Route path="/detail-8/Newharvestmoon" element={<Newharvestmoon />} />

        </Routes>
    </Router>
  );
}

export default App;
