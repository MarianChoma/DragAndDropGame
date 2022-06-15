import React from "react";
import Draggable from "react-draggable";
import '../styles/Variant5.css'
import { colission} from "./collision";
import '../../index.css'
import {checkingWin} from "./checkingWin";

class Variant5 extends React.Component {

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
            <div className="box l5">
                <Draggable id="drag" onDrag={() => this.state.activeDrags} ref={this.draggableEntity} bounds="parent">
                    <div draggable="false" className="player">
                        <br/>
                    </div>
                </Draggable>
                <div className="block l5b1">

                </div>
                <div className="block l5b2">
                </div>
                <div className="finish">
                </div>

                <div className="block l5b3">
                    <br/>
                </div>
                <div className="block l5b4">
                    <br/>
                </div>
                <div className="block l5b6">
                    <br/>
                </div>
                <Draggable axis="y" bounds={"parent"}>
                    <div className="block l5b5">
                        1
                        <br/>
                    </div>
                </Draggable>
                <Draggable axis="x" bounds={"parent"}>
                    <div className="block l5b7">
                        2
                        <br/>
                    </div>
                </Draggable>
                <div className="block l5b8">
                    <br/>
                </div>
            </div>
        )
    }
}

export default Variant5;