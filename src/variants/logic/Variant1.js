import React from "react";
import '../styles/Variant1.css'
import Draggable from "react-draggable";
import {colission} from "./collision";
import {checkingWin} from "./checkingWin";

export class Variant1 extends React.Component {

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
                <div className="box l1" >
                    <Draggable id="drag" onDrag={() => this.state.activeDrags}  ref={this.draggableEntity} bounds="parent">
                        <div draggable="false" className="player" >
                            <br/>
                        </div>
                    </Draggable>

                    <Draggable axis="x" bounds="parent">
                        <div className="block b1">
                           <br />
                        </div>
                    </Draggable>
                    <Draggable axis="y"  bounds={{top: 0, left: 0, right: 0, bottom: 50}}>
                        <div className="block b2">
                            <br />
                        </div>
                    </Draggable>
                    <div className="block b3">
                    </div>
                    <Draggable axis="x" bounds={{top: 0, left: -50, right: 0, bottom: 0}}>
                        <div className="block b4">
                            <br />
                        </div>
                    </Draggable>
                    <div className="finish">
                        <br/>
                    </div>
                </div>
        )
    }
}

