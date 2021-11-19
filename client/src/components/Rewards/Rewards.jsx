import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Rewards.scss"
import Header from '../Header/Header';

export default class Rewards extends Component {
    state = {points: 0};
    fillerStyles = {
        height: '100%',
        width: `${this.state.points/10}%`,
        backgroundColor: "#65BF73",
        borderRadius: 'inherit',
        textAlign: 'right'
      }
    componentDidMount(){
        this.setState({points:this.state.points+this.props.points});
    }
    render() {
        return (
            <div className="rewards">
                <Header/>
                <div className="rewards__bar">
                    <div className="rewards__filler" style={this.fillerStyles}>
                        <span className="rewards__label">{`${this.state.points}`}</span>
                    </div>
                </div>
                <h1 className="rewards__title">
                    You earned {this.state.points} points!
                </h1>
                <div className="rewards__subtitle">Your contribution has helped prevent {Number(this.state.points)/100} auto accident</div>
                <div className="rewards__button-container">
                    <Link className="rewards__next" to="/rec">ANSWER ANOTHER</Link>
                    <Link className="rewards__home" to="/">RETURN TO HOME</Link>
                </div>
                <div className="rewards__footer">Get involved</div>
                <div className="rewards__container">
                    <div className="rewards__example"></div>
                    <div className="rewards__example"></div>
                </div>
            </div>
        )
    }
}
