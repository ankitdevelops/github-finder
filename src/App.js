import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { GithubProvider } from "./context/GithubContext";
import User from "./components/users/User";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
function App() {
  return (
    <GithubProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
          <Route path = "/" exact element = {<Home/>}  />
          <Route path ="user/:login"  element ={<User/>}/>
          <Route path = "/about" element ={<About/>}/>
          <Route  path ="*"element= {<NotFound/>}/> 
          </Routes>
        </div>
        <Footer />
      </Router>
    </GithubProvider>
  );
}

export default App;
