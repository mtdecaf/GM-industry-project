import { Component } from 'react';
import './DrawRectangle.scss';

class DrawRectangle extends Component {

    render() {
        return (
            <div>
                <h4>Drag the mouse to create a rectangle</h4>
                <canvas id="canvas" width="500" height="500"></canvas>
                
            </div>
        )
    }
}

export default DrawRectangle
