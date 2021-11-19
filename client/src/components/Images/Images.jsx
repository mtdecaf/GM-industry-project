import React, { Component } from 'react'
import "./Images.scss"
import axios from "axios"
import { Link } from 'react-router-dom'

export default class Images extends Component {
    state = {
        imagesId: [0,1,2,3,4],
        squareDetail: [], 
        imagesIndex: 4
    };




    render(){
        const nextImage = () => {
            this.setState({
                imagesIndex: this.state.imagesIndex + 1
            });
        }
        return(
            <>
                <img src={`http://localhost:8080/image${this.state.imagesId[this.state.imagesIndex]}.jpeg`} />
                <button type="submit" onClick={this.nextImage}>Next</button>
                <Link to={{pathname:"/rewards", points:this.state.imagesIndex}} >Submit</Link>
            </>
        );
    }

}