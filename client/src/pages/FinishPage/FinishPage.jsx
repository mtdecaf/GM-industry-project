import './FinishPage.scss';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';

class IntroPage extends Component {
  
state = {
}

componentDidMount() {
}

componentDidUpdate(prevProps) {
}

render() {
  document.title = "GM-industry-project";

  return (
    <>
      <PageHeader />
      <div className = 'finish'>
      <h1 className = 'finish__title'>Nice Job!</h1>
      <progress className = 'finish__progress'></progress>
      <h1 className = 'finish__title'>You earned 100 points!</h1>
      <p className = 'finish__paragraph'>Your contribution has helped preventone auto accident.</p>
      <Link className="finish__link" to = "/rectangle">
         Answer another
      </Link>
      <Link className="finish__link--home" to = "/">
         Return to home
      </Link>
      </div>
    </>
  )
}
}

export default IntroPage;
