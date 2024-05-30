window.onscroll=function()
{
    if(window.scrollY>40){
    document.querySelector("#top").classList.add("hideHeader");
    document.querySelector("#top").style.height="0";
    document.querySelector("#top2").style.visibility="visible";
    }

    if(window.scrollY<=0)
    {
        document.querySelector("#top").classList.remove("hideHeader");
        document.querySelector("#top").style.height="200px";

        document.querySelector("#top2").style.visibility="hidden";
    }
}