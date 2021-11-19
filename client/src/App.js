import logo from './logo.svg';
import './App.scss';
import Images from './components/Images/Images';
import HomePage from "./pages/HomePage/HomePage"
// import HomePage from "./pages/HomePage/HomePage"
import DrawRectangle from "./pages/DrawRectangle/DrawRectangle"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Rewards from './components/Rewards/Rewards';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/rewards" component={Rewards}/>
    </Switch>
    {/* <div className="App">
      <Images/>
    </div> */}
  </BrowserRouter>
  );
    
  // )
}

export default App;