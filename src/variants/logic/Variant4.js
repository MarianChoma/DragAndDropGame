import React from "react";
import '../styles/Variant4.css'
import Draggable from "react-draggable";
//import '../../index.css'
import {colission} from "./collision";
import {checkingWin} from "./checkingWin";


class Variant4 extends React.Component {

    state={
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
        return(

            <div className="box l4" >
                <Draggable id="drag" onDrag={() => this.state.activeDrags}  ref={this.draggableEntity} bounds="parent">
                    <div draggable="false" className="player" >
                        <br/>
                    </div>
                </Draggable>
                <Draggable axis="x" bounds="parent">
                    <div className="block l4b1">
                        2
                        <br />
                    </div>
                </Draggable>
                <Draggable axis="y"  bounds="parent">
                    <div className="block l4b2">
                        1
                        <br />
                    </div>
                </Draggable>
                <div className="block l4b3">
                </div>
                <Draggable axis="x" bounds="parent">
                    <div className="block l4b4">
                        3
                        <br />
                    </div>
                </Draggable>
                <div className="block l4b5">

                </div>
                <div className="block l4b6">

                </div>
                <div className="block l4b7">

                </div>
                <div className="finish">
                    <br/>
                </div>

            </div>
        )
    }
}
export default Variant4;