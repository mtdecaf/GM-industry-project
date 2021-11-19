import './HomePage.scss';
import { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import IntroPage from '../../components/IntroPage/IntroPage';

class HomePage extends Component {
  
state = {
  videosArr: []
}

componentDidMount() {
}

componentDidUpdate(prevProps) {
}

render() {
  document.title = "GM-industry-project";

  return (
    <>
      <IntroPage />
    </>
  )
}
}

export default HomePage;
