import React from "react";
import Draggable from "react-draggable";
import '../styles/Variant7.css'
import {colission} from "./collision";
import {checkingWin} from "./checkingWin";


class Variant7 extends React.Component {

    state = {
        activeDrags: true,
    }

    componentDidMount() {
        this.draggableEntity = React.createRef();
        document.getElementsByClassName("player")[0].addEventListener('pointerdown', () => {
            document.getElementsByClassName('player')[0].style.backgroundColor = 'yellow'
            this.setState({
                activeDrags: true
            })
        })
        document.getElementsByClassName("player")[0].addEventListener('pointermove', () => {
            colission(this.draggableEntity, this.state)
            checkingWin()
        })
    }


    render() {
        return (
            <div className="box l7">
                <Draggable id="drag" onDrag={() => this.state.activeDrags} ref={this.draggableEntity} bounds="parent">
                    <div draggable="false" className="player">
                        <br/>
                    </div>
                </Draggable>
                <div className="block l7b1">

                </div>
                <div className="block l7b2">
                </div>
                <div className="finish">
                </div>

                <div className="block l7b3">
                    <br/>
                </div>
                <div className="block l7b4">
                    <br/>
                </div>
                <Draggable axis="y" bounds={"parent"}>
                    <div className="block l7b5">
                        1
                        <br/>
                    </div>
                </Draggable>
                <Draggable axis="y" bounds="parent">
                    <div className="block l7b6">
                        2
                        <br/>
                    </div>
                </Draggable>
                <Draggable axis="y" bounds="parent">
                    <div className="block l7b8">
                        3
                        <br/>
                    </div>
                </Draggable>
                <Draggable axis="x" bounds="parent">
                    <div className="block l7b10">
                        4
                        <br/>
                    </div>
                </Draggable>
                <div className="block l7b7">

                </div>
                <div className="block l7b9">

                </div>
            </div>
        )
    }
}

export default Variant7;