import DATA from "../../generator";
export const checkingWin = () => {
    let result
    const item1=document.getElementsByClassName('finish')[0].getBoundingClientRect()
    const item2=document.getElementsByClassName('player')[0].getBoundingClientRect()

        const isInHoriztonalBounds =
            item1.x < item2.x + item2.width && item1.x + item1.width > item2.x;
        const isInVerticalBounds =
            item1.y < item2.y + item2.height &&
            item1.y + item1.height > item2.y;
        result = isInHoriztonalBounds && isInVerticalBounds
        if(result){
            document.getElementsByClassName('player')[0].style.backgroundColor='blue'
            window.location.reload()
            const level=JSON.parse(localStorage.getItem("level"))
            level.filter(data=>{
                if(data.level===localStorage.getItem("activeLevel")){
                    data.completed="true"
                    localStorage.setItem("level",JSON.stringify(level))
                }
            })
        }
        return result
}