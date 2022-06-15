import React from "react";
import Draggable from "react-draggable";
import '../styles/Variant2.css'
import { colission} from "./collision";
import '../../index.css'
import {checkingWin} from "./checkingWin";

class Variant2 extends React.Component {

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
            <div className="box l2">
                <Draggable id="drag" onDrag={() => this.state.activeDrags} ref={this.draggableEntity} bounds="parent">
                    <div draggable="false" className="player">
                        <br/>
                    </div>
                </Draggable>
                <div className="block b1">

                </div>
                <div className="block b2">
                </div>
                <div className="finish">
                </div>

                <div className="block b3">
                    <br/>
                </div>
                <div className="block b4">
                    <br/>
                </div>
                <Draggable axis="y" bounds={{top:0}} bounds={"parent"}>
                    <div className="block b5">
                        1
                        <br/>
                    </div>
                </Draggable>
            </div>
        )
    }
}

export default Variant2;