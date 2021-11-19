import HomePage from "./pages/HomePage/HomePage"
import FinishPage from "./pages/FinishPage/FinishPage"
import DrawRectangle from "./pages/DrawRectangle/DrawRectangle"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


const App = () => {

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/rectangle" component={DrawRectangle}/>
      <Route path="/finish" component={FinishPage}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;