import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect } from "react-konva";
import { Html } from 'react-konva-utils';
import "../DrawAnnotations/DrawAnnotations.scss"
import { Link } from 'react-router-dom'

import image1 from "../../assets/images/image1.jpg"
import image2 from "../../assets/images/image2.jpg"

const divStyle = {
    width: "100vw",
    height: "calc(100vw / 1.25)",
    backgroundImage: `url(${image1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
};

class DrawAnnotations extends Component {

    state = {
        annotations: [],
        newAnnotation: []
    }

    //   const [annotations, setAnnotations] = useState([]);
    //   const [newAnnotation, setNewAnnotation] = useState([]);

    handleMouseDown = event => {
        if (this.state.newAnnotation.length === 0) {
            const { x, y } = event.target.getStage().getPointerPosition();
            this.setState({
                newAnnotation: [{ x, y, width: 0, height: 0, key: "0" }]
            })
            // setNewAnnotation([{ x, y, width: 0, height: 0, key: "0" }]);
        }
    };

    handleMouseUp = event => {
        if (this.state.newAnnotation.length === 1) {
            let newAnnotation = this.state.newAnnotation;
            const sx = newAnnotation[0].x;
            const sy = newAnnotation[0].y;
            const { x, y } = event.target.getStage().getPointerPosition();
            const annotationToAdd = {
                x: sx,
                y: sy,
                width: x - sx,
                height: y - sy,
                key: this.state.annotations.length + 1
            };
            let annotationsArray = this.state.annotations;
            annotationsArray.push(annotationToAdd);
            this.setState({
                annotations: annotationsArray,
                newAnnotation: []
            })
            console.log(this.state.annotations)
            // setNewAnnotation([]);
            // setAnnotations(annotations);
        }
    };

    handleMouseMove = event => {
        if (this.state.newAnnotation.length === 1) {
            let newAnnotation = this.state.newAnnotation;
            const sx = newAnnotation[0].x;
            const sy = newAnnotation[0].y;
            const { x, y } = event.target.getStage().getPointerPosition();
            this.setState({
                newAnnotation: [
                    {
                        x: sx,
                        y: sy,
                        width: x - sx,
                        height: y - sy,
                        key: "0"
                    }
                ]
            });
            // setNewAnnotation([
            //     {
            //         x: sx,
            //         y: sy,
            //         width: x - sx,
            //         height: y - sy,
            //         key: "0"
            //     }
            // ]);
        }
    };

    render() {
        const annotationsToDraw = [...this.state.annotations, ...this.state.newAnnotation];
        return (
            <>
            {/* <div className="container" style={ divStyle }></div> */}
            <div className="container" style={ divStyle }>
                <Stage
                  onMouseDown={this.handleMouseDown}
                  onMouseUp={this.handleMouseUp}
                  onMouseMove={this.handleMouseMove}
                  width={460}
                  height={400}
                >
                  <Layer>
                      {/* <Html>
                          <img src={image1} alt="first pic" className="bg-image" />
                      </Html> */}
                      {annotationsToDraw.map(value => {
                          return (
                              <Rect
                                  x={value.x}
                                  y={value.y}
                                  width={value.width}
                                  height={value.height}
                                  fill="transparent"
                                  stroke="red"
                              />
                          );
                      })}
                      {/* <img src={image1} alt="first pic" className="bg-image" /> */}
                  </Layer>
                </Stage>
                <div><Link className="drawAnno__button" to={{pathname:"/rewards", points:100}} >Submit</Link></div>
            </div>
            </>
        );}
};

export default DrawAnnotations;