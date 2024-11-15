import "./App.css";
import {useLocation} from "react-router-dom"
import {useLayoutEffect} from "react"
import Router from "./Router"
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";




const Wrapper=({children}) => {
  const location = useLocation();
  useLayoutEffect(()=>{
    document.documentElement.scrollTo(0,0);
  },[location.pathname]);
  return children

}


function App () {
  return (
    <div className="Assignment">
      <Wrapper>
      <Header/>
      <Router/>
      <Footer/>
      </Wrapper>
    </div>
  );
}













export default App;
