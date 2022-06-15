import React from "react";
import Draggable from "react-draggable";
import '../styles/Variant10.css'
import {colission} from "./collision";
import {checkingWin} from "./checkingWin";


class Variant10 extends React.Component {

    constructor(props){
        super(undefined);
        this.state={showPage:true}
    }
    state = {
        activeDrags: true,
        showPage:true
    }

    componentDidMount() {
        this.draggableEntity = React.createRef();
        document.getElementsByClassName("player")[0].addEventListener('pointerdown', () => {
            document.getElementsByClassName('player')[0].style.backgroundColor = 'yellow'
            this.setState({
                activeDrags: true,

            })
        })
        document.getElementsByClassName("player")[0].addEventListener('pointermove', () => {
            colission(this.draggableEntity, this.state)
            if(checkingWin()){
                this.setState({showPage:false})
                this.forceUpdate()
            }
        })
    }
    render() {


        return(
            <div className="box l10">
                <Draggable id="drag" onDrag={() => this.state.activeDrags} ref={this.draggableEntity} bounds="parent">
                    <div draggable="false" className="player">
                        <br/>
                    </div>
                </Draggable>
                <div className="block l10b1">

                </div>
                <div className="block l10b2">
                </div>
                <div className="finish">
                </div>

                <div className="block l10b3">
                    <br/>
                </div>
                <div className="block l10b4">
                    <br/>
                </div>
                <Draggable axis="y" bounds={"parent"}>
                    <div className="block l10b5">
                        1
                        <br/>
                    </div>
                </Draggable>
                <Draggable axis="x" bounds="parent">
                    <div className="block l10b8">
                        3
                        <br/>
                    </div>
                </Draggable>
                <Draggable axis="x" bounds="parent">
                    <div className="block l10b10">
                        2
                        <br/>
                    </div>
                </Draggable>
                <div className="block l10b7">

                </div>
                <div className="block l10b9">

                </div>
                <div className="block l10b6">

                </div>
            </div>
        )
    }
}

export default Variant10;