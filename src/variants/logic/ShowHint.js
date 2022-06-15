import React from "react";




const showHint = () => {

    let tooltip = document.getElementsByClassName("tooltip")[0]
    tooltip.innerHTML = ""
    tooltip.style.display = "block"

    //document.getElementsByClassName("back")[0].style.display = "block"
    switch (localStorage.getItem("activeLevel")) {
        case "level1":
            tooltip.innerHTML = `
            <p>Žiadna dostupná nápoveda
                <br>
            <button class="back" onclick="document.getElementsByClassName('tooltip')[0].style.display='none'">Naspäť</button>  
            </p>`
            break;
        case "level2":
            tooltip.innerHTML = `<p>Posuň bloky v nasledujúcom poradí:<br><br>
                                    1. Blok 1 dole<br><br>
                                 <button class="back" onclick="document.getElementsByClassName('tooltip')[0].style.display='none'">Naspäť</button>  
                                    </p>`
            break;
        case "level3":
            tooltip.innerHTML = `<p>Posuň bloky v nasledujúcom poradí:<br><br>
                                    1. Blok 1 doľava<br>
                                    2. Blok 2 dole<br><br>
                                 <button class="back" onclick="document.getElementsByClassName('tooltip')[0].style.display='none'">Naspäť</button> 
                                    </p>`
            break;
        case "level4":
            tooltip.innerHTML = `<p>Posuň bloky v nasledujúcom poradí:<br><br>
                                    1. Blok 1 dole<br>
                                    2. Blok 2 doprava<br> 
                                    3. Blok 1 hore <br>
                                    4. Blok 3 doprava<br>
                                    5. Blok 3 doľava<br><br>
                                 <button class="back" onclick="document.getElementsByClassName('tooltip')[0].style.display='none'">Naspäť</button> 
                                    </p>`
            break;
        case "level5":
            tooltip.innerHTML = `<p>Posuň bloky v nasledujúcom poradí:<br><br>
                                    1. Blok 1 dole<br>
                                    2. Blok 2 doprava<br><br>
                                 <button class="back" onclick="document.getElementsByClassName('tooltip')[0].style.display='none'">Naspäť</button> 
                                    </p>`
            break;
        case "level6":
            tooltip.innerHTML = `<p>Posuň bloky v nasledujúcom poradí:<br><br>
                                    1. Blok 1 dole<br>
                                    2. Blok 2 dole<br> 
                                    3. Blok 3 dole<br> 
                                    4. Blok 3 hore<br><br>
                                 <button class="back" onclick="document.getElementsByClassName('tooltip')[0].style.display='none'">Naspäť</button>  
                                    </p>`
            break;
        case "level7":
            tooltip.innerHTML = `<p>Posuň bloky v nasledujúcom poradí:<br><br>
                                    1. Blok 1 dole<br>
                                    2. Blok 2 dole<br> 
                                    3. Blok 3 dole <br>
                                    4. Blok 3 doprava<br><br>
                                 <button class="back" onclick="document.getElementsByClassName('tooltip')[0].style.display='none'">Naspäť</button> 
                               
                                    </p>`
            break;
        case "level8":
            tooltip.innerHTML = `<p>Posuň bloky v nasledujúcom poradí:<br><br>
                                    1. Blok 1 doľava<br>
                                    2. Blok 2 dole<br> 
                                    3. Blok 3 doprava <br>
                                    4. Blok 2 hore<br>
                                    5. Blok 4 hore<br><br>
                                 <button class="back" onclick="document.getElementsByClassName('tooltip')[0].style.display='none'">Naspäť</button> 
                                    </p>`
            break;
        case "level9":
            tooltip.innerHTML = `<p>Posuň bloky v nasledujúcom poradí:<br><br>
                                    1. Blok 1 doľava<br>
                                    2. Blok 1 doprava<br> 
                                    3. Blok 2 dole <br>
                                    4. Blok 3 dole<br>
                                    5. Blok 2 hore<br><br>
                                 <button class="back" onclick="document.getElementsByClassName('tooltip')[0].style.display='none'">Naspäť</button> 
                                    </p>`
            break;
        case "level10":
            tooltip.innerHTML = `<p>Posuň bloky v nasledujúcom poradí:<br><br>
                                    1. Blok 1 dole<br>
                                    2. Blok 2 doprava<br> 
                                    3. Blok 3 doprava <br>
                                    4. Blok 1 hore<br><br>
                                 <button class="back" onclick="document.getElementsByClassName('tooltip')[0].style.display='none'">Naspäť</button> 
                               
                                    </p>`
            break;
    }
    return 1
}
export default showHint