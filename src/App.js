import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
// import TodoItems from "./MyComponents/TodoItems"; 

function App() {
  // let myvariable;
  let todos = [
    {
    sno : 1,
    title : "go to the market",
    desc : "you have to go to the market"
    }, 
    {
    sno : 2,
    title : "go to the sabji mandi",
    desc : "you have to go to the sabji mandi"
    }, 
    {
    sno : 3,
    title : "go to the lonavala",
    desc : "you have to go to the lonavala"
    }, 
  ]
  return (
    <>

      {/*<h2>My Birthday</h2>               {this is how we comment in  JSX - Javascript Syntax Extension}
     <b>

    
    <div>{7+7} / {myvariable = 1+1} / {1997}</div>
    </b>*/}

    <Header title="My Todo List" searchbar = {true}/> {/*try usin false, boolean value*/}
    <Todos/>
    <Footer/>
   {/*<TodoItems/>*/} 
    </>



  );
}

export default App;
