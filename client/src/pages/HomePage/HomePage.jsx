import './HomePage.scss';
import { Component } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';

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
      {/* <PageHeader /> */}
    </>
  )
}
}

export default HomePage;
