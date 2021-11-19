import logo from './logo.svg';
import './App.scss';
import Images from './components/Images/Images';
// import HomePage from "./pages/HomePage/HomePage"
import HomePage from "./pages/HomePage/HomePage"
// import HomePage from "./pages/HomePage/HomePage"
import DrawAnnotations from './components/DrawAnnotations/DrawAnnotations';
import DrawRectangle from "./pages/DrawRectangle/DrawRectangle"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Rewards from './components/Rewards/Rewards';
import Header from './components/Header/Header';


const App = () => {
  return (
      <BrowserRouter>
          <div class="app">
      <Header/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/rewards" component={Rewards}/>
        <Route path="/rec" component={DrawRectangle}/>
      </Switch>
          </div>
        </BrowserRouter>
  );
}

export default App;