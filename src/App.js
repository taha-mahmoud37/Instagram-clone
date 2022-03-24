import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Posts from "./Components/Posts/Posts";
import Signup from "./Components/SignUp/Signup";
import UploadPost from "./Components/uploadePost/UploadPost";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Aos from "aos";
import "aos/dist/aos.css";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init();
    setLoading(true);
    const spin = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(spin)
    }
  }, []);

  return (
    <Router>
      <div className="App">
        
        {loading ? (
        <div className = 'spineer'>  
          <HashLoader 
          className = 'spinner'
          color={"#f5A623"} 
          loading={loading} 
          size={50}
          margin = {2} />
        </div> ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/signup" />} />
              <Route path="/upload" element={<UploadPost />} />
              <Route path="/header" element={<Header />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
