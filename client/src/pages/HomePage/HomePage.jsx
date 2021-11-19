import './HomePage.scss';
import { Component } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import Header from '../../components/Header/Header';

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
      <Header />
      {/* <PageHeader /> */}
    </>
  )
}
}

export default HomePage;
