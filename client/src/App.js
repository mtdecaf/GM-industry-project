import HomePage from "./pages/HomePage/HomePage"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
              <Switch>
                <Route path="/" exact component={HomePage}/>
              </Switch>
    </BrowserRouter>
  )
}

export default App