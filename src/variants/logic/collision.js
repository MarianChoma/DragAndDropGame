
export const colission = (draggableEntity,state) => {
    let result = false
    const dragables = document.getElementsByClassName('block')
    Array.from(dragables).map((element)=>{
        const item1=element.getBoundingClientRect()
        const item2=document.getElementsByClassName('player')[0].getBoundingClientRect()
        const isInHoriztonalBounds =
            item1.x < item2.x + item2.width && item1.x + item1.width > item2.x;
        const isInVerticalBounds =
            item1.y < item2.y + item2.height &&
            item1.y + item1.height > item2.y;
        result = isInHoriztonalBounds && isInVerticalBounds
        if(result){
            document.getElementsByClassName('player')[0].style.backgroundColor='blue'
            state.activeDrags=false
            draggableEntity.current.state.x = 0;
            draggableEntity.current.state.y = 0;
        }
    })

}



