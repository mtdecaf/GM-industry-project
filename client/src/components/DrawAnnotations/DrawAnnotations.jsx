import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect } from "react-konva";

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
          <Stage
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            onMouseMove={this.handleMouseMove}
            width={900}
            height={700}
          >
            <Layer>
                {annotationsToDraw.map(value => {
                    return (
                        <Rect
                            x={value.x}
                            y={value.y}
                            width={value.width}
                            height={value.height}
                            fill="transparent"
                            stroke="black"
                        />
                    );
                })}
            </Layer>
          </Stage>
        );}
};

export default DrawAnnotations;