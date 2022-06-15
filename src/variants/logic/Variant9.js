import React from "react";
import Draggable from "react-draggable";
import '../styles/Variant9.css'
import {colission} from "./collision";
import {checkingWin} from "./checkingWin";


class Variant9 extends React.Component {

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
            <div className="box l9">
                <Draggable id="drag" onDrag={() => this.state.activeDrags} ref={this.draggableEntity} bounds="parent">
                    <div draggable="false" className="player">
                        <br/>
                    </div>
                </Draggable>
                <div className="block l9b1">

                </div>
                <div className="block l9b2">
                </div>
                <div className="finish">
                </div>

                <div className="block l9b3">
                    <br/>
                </div>
                <div className="block l9b4">
                    <br/>
                </div>
                <Draggable axis="y" bounds={"parent"}>
                    <div className="block l9b5">
                        2
                        <br/>
                    </div>
                </Draggable>
                <Draggable axis="y" bounds="parent">
                    <div className="block l9b8">
                        3
                        <br/>
                    </div>
                </Draggable>
                <Draggable axis="x" bounds="parent">
                    <div className="block l9b10">
                        1
                        <br/>
                    </div>
                </Draggable>
                <div className="block l9b7">

                </div>
                <div className="block l9b9">

                </div>
            </div>
        )
    }
}

export default Variant9;