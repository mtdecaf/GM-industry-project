import React, { Component } from 'react'
import "./Images.scss"
import axios from "axios"
// import { Link } from 'react-router-dom'

export default class Images extends Component {
    state = {
        imagesId: [0,1,2,3,4],
        squareDetail: [], 
        imagesIndex: 0
    };

    nextImage = () => {
        this.setState({
            imagesIndex: this.state.imagesIndex + 1
        });
    }
    previousImage = () => {
        if (this.state.imagesIndex === 0) {
            return;
        }
        else {
            this.setState({
                imagesIndex: this.state.imagesIndex - 1
            });
        }
    }

    render(){
        
        return(
            <>
                <button type="submit" onClick={this.nextImage}>Next</button>
                <img src={`http://localhost:8080/image${this.state.imagesId[this.state.imagesIndex]}.jpeg`} />
                <button onClick = {this.nextImage}>Next Image</button>
                <button onClick = {this.previousImage}>Previous Image</button>
                {/* <Link to="/rewards">Submit</Link> */}
            </>
        );
    }

}