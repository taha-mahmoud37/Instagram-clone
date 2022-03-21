import {useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import Signup from './Components/SignUp/Signup';
import UploadPost from './Components/uploadePost/UploadPost';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './Components/Login/Login';
import  Aos  from 'aos';
import 'aos/dist/aos.css';




function App() {


  useEffect(() => {
    Aos.init();
    
    
  }, []);

  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>

          <Route path='/' element ={<Navigate to='/signup' />} />
          <Route path='/upload' element ={<UploadPost />} />
          <Route path='/header' element ={<Header />} />
          <Route path='/signup' element ={<Signup />} />
          <Route path='/posts' element ={ <Posts />} />
          <Route path='/login' element ={ <Login /> } />
          
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
