
const showRules=()=>{
    let tooltip=document.getElementsByClassName("tooltip")[0]
    tooltip.style.display="block"
    tooltip.innerHTML=''
    tooltip.innerHTML=
        `<p>
            <h1>Pravidlá hry:</h1><br>
            Cieľom hry je dostať žltý štvorček do zeleného štvorčeka bez toho aby ste sa dotkli prekážok.
            Na presúvanie žltého štvorca ťahajte myšou alebo prstom v prípade mobilných zariadení.
            Čierne bloky predstavujú statické prekážky naopak červené bloky musíte posunúť aby ste si tak uvoľnili cestu do cieľa.
            Ak sa žltý štvorec dotkne nejakého z blokov automaticky sa vrácate na štart a môžete začat odznova.
            V prípade ak nebudete vedieť v akom poradí presúvať bloky môžete kliknúť na nápovedu. 
            <br><br>
            <button onclick="document.getElementsByClassName('tooltip')[0].style.display='none'">Naspäť</button>   
        </p>`
}
export default showRules