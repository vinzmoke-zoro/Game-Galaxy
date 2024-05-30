let searchBtn=document.querySelector("#search-btn");
let searchBtn2=document.querySelector("#search-btn2");
let carousel=document.querySelector(".carousel");
let description=document.querySelector("#description");
let gameCard=document.querySelectorAll(".gameCard");
let gameCardName=document.querySelectorAll(".gameCard h4 a");

searchBtn.addEventListener("click",()=>{
    let searchValue=document.querySelector("#search").value.toLocaleLowerCase();
    search(searchValue);
    window.scrollTo(0,0);
})

searchBtn2.addEventListener("click",()=>{
    let searchValue=document.querySelector("#search2").value.toLocaleLowerCase();
    search(searchValue);
    window.scrollTo(0,0);
})

function search(searchValue){

    let allDivShowBoolean=true;

    for(let i=0; i<gameCard.length; i++)
    {
        let gameName=gameCardName[i].textContent.split(" ");
        for(let j=0; j<gameName.length; j++)
        {
            gameName[j]=gameName[j].toLocaleLowerCase();
            if(searchValue.includes(gameName[j]) && gameName[j].length>1 && gameName[j]!="game")
            {
                document.querySelector("#search-results").classList.remove("hideDiv");
                document.querySelector("#no-match-found").classList.add("hideDiv");
                carousel.classList.add("hideDiv");
                description.classList.add("hideDiv");
                gameCard[i].classList.remove("hideDiv");
                allDivShowBoolean=false;
                break;
            }
            else
            gameCard[i].classList.add("hideDiv");
        }

        
    }

    if(allDivShowBoolean)
    {
        if(searchValue!=""&&!searchValue.includes("all")&&!searchValue.includes("game"))
        {
            document.querySelector("#search-results").classList.remove("hideDiv");
            document.querySelector("#no-match-found").classList.remove("hideDiv");
            carousel.classList.add("hideDiv");
            description.classList.add("hideDiv");
            for(let i=0; i<gameCard.length; i++)
            {
                gameCard[i].classList.add("hideDiv");
            }
        }
        else
        {
        document.querySelector("#search-results").classList.add("hideDiv");
        document.querySelector("#no-match-found").classList.add("hideDiv");
        carousel.classList.remove("hideDiv");
        description.classList.remove("hideDiv");
        for(let i=0; i<gameCard.length; i++)
        {
            gameCard[i].classList.remove("hideDiv");
        }
        }
    }

}
