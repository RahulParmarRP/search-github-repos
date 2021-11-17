import './App.css'
import Navbar from './components/Navbar'
import {
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import UserRepos from './pages/UserRepos'

function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/:username"} element={<UserRepos />} />
      </Routes >
    </>
  )
}

export default App
