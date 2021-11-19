import logo from './logo.svg';
import './App.scss';
import Images from './components/Images/Images';
// import HomePage from "./pages/HomePage/HomePage"
// import HomePage from "./pages/HomePage/HomePage"
import DrawRectangle from "./pages/DrawRectangle/DrawRectangle"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
<<<<<<< HEAD
    <div className="App">
      <Images/>
    </div>
  );
    // <BrowserRouter>
    //           <Switch>
    //             <Route path="/" exact component={HomePage}/>
    //           </Switch>
    // </BrowserRouter>
  // )
=======
    <BrowserRouter>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/rectangle" component={DrawRectangle}/>
              </Switch>
    </BrowserRouter>
  )
>>>>>>> 8f1fc639c757f9b27e9149249a7207a58dca100d
}

export default App;