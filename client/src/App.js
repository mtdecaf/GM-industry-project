import HomePage from "./pages/HomePage/HomePage"
import DrawRectangle from "./pages/DrawRectangle/DrawRectangle"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/rectangle" component={DrawRectangle}/>
              </Switch>
    </BrowserRouter>
  )
}

export default App;