import './IntroPage.scss';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';

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
      <div className = 'intro'>
      <p>Hi there!</p>
      <p>You can earn rewards with a few simple steps.</p>
      <p>By labelling photos accurately, you’re contributing to our
Goal Zero misson!</p>
      <Link className="intro__link" to = "/rectangle">
         let's begin
      </Link>
      </div>
    </>
  )
}
}

export default IntroPage;
