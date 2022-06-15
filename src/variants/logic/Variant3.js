import React from "react";
import Draggable from "react-draggable";
//import '../../index.css'
import '../styles/Variant3.css'
import {colission} from "./collision";
import {checkingWin} from "./checkingWin";


class Variant3 extends React.Component {

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
            <div className="box l3">
                <Draggable id="drag" onDrag={() => this.state.activeDrags} ref={this.draggableEntity} bounds="parent">
                    <div draggable="false" className="player">
                        <br/>
                    </div>
                </Draggable>
                <div className="block l3b1">

                </div>
                <div className="block l3b2">
                </div>
                <div className="finish">
                </div>

                <div className="block l3b3">
                    <br/>
                </div>
                <div className="block l3b4">
                    <br/>
                </div>
                <Draggable axis="y" bounds={"parent"}>
                    <div className="block l3b5">
                        2
                        <br/>
                    </div>
                </Draggable>
                <Draggable axis="x" bounds="parent">

                    <div className="block l3b6">
                        1
                        <br/>
                    </div>
                </Draggable>
                <div className="block l3b7">

                </div>
            </div>
        )
    }
}

export default Variant3;