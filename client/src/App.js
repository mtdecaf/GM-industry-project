import logo from './logo.svg';
import './App.scss';
import Images from './components/Images/Images';
import Header from './components/Header/Header';
// import HomePage from "./pages/HomePage/HomePage"
// import HomePage from "./pages/HomePage/HomePage"
import DrawAnnotations from './components/DrawAnnotations/DrawAnnotations';
import DrawRectangle from "./pages/DrawRectangle/DrawRectangle"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Header/>
      {/* <Images />
      <DrawAnnotations/> */}
    </div>
  );
    // <BrowserRouter>
    //           <Switch>
    //             <Route path="/" exact component={HomePage}/>
    //           </Switch>
    // </BrowserRouter>
  // )
}

export default App;