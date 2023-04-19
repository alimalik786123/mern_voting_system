import Home from "./components/home/home";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import VotingPage from "./Screens/VotingPage";
import Vote from "./components/Vote/Vote";
import Result from "./components/Results/Result";
import Login from "./Screens/Login/Login";
import Signup from "./Screens/Signup/Signup";
import Addpoll from "./Admin/Addpoll";
import Prev from "./components/Prev/Prev";
import Votemid from "./components/Vote/Votemid";
function App() {
  return (
    <>
         <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/vote' element={<Vote/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/addpoll' element={<Addpoll/>}/>
      <Route path='/prev' element={<Prev/>}/>
      <Route path='/votemid' element={<Votemid/>}/>







       


      
    </Routes>
   </Router>
    </>
  );
}

export default App;
