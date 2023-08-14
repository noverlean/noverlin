function HandleArrowClick()
{
    var arrow = document.getElementById('arrow');
    var description = document.getElementById('description');

    if (arrow.classList.contains("aUp"))
    {
        arrow.classList.remove("aUp");
        arrow.classList.add("aDown"); 
        description.classList.remove("show");
        description.classList.add("hide"); 
    }
    else if (arrow.classList.contains("aDown"))
    {
        arrow.classList.remove("aDown");
        arrow.classList.add("aUp"); 
        description.classList.remove("hide");
        description.classList.add("show"); 
    }
}

window.onload = ChangeDetailPanelSize();
window.onresize = ChangeDetailPanelSize();

function ChangeDetailPanelSize()
{
    document.getElementById('detailVPanel').style.width = window.width;
    document.getElementById('detailVPanel').style.height = window.height;
}

var videoPanelActive = false;

function ChangeVPActive(vDataJSON)
{
    videoPanelActive = !videoPanelActive;
    console.log(vDataJSON);

    document.getElementById('detailVPanel').style.visibility = videoPanelActive ? "visible" : "hidden";

    document.querySelector('#VDtitle').innerHTML = vDataJSON.snippet.title;
    document.querySelector('#description').innerHTML = vDataJSON.snippet.description;
    document.querySelector('#VDcover').innerHTML = "";
    document.querySelector('#VDcover').insertAdjacentHTML(
        'afterBegin',
        `<img style="width: 100%;" src="` + vDataJSON.snippet.thumbnails.maxres.url + `" onclick="window.open('https://www.youtube.com/watch?v=` + vDataJSON.id + `');">`
    );
}

function Empty(e)
{
    e.stopPropagation();
    e.cancelBubble = true;
}

function ShowOrderPanel(state, t, p)
{
    //document.getElementById("orderPanel").style.visibility = state ? "visible" : "hidden";

    if (state)
    {
        document.querySelector('#Aform').innerHTML = "";
        document.querySelector('#Aform').insertAdjacentHTML(
            'afterBegin',
            `<div id="orderPanel" class="orderPanel" onclick="ShowOrderPanel(false)">` +
            `<form id="form" class="orderCard" action="../backend/sendMessage.php" onclick="Empty(event)">` +
            `<div id="pp" class="prodPhoto" style="background-image: url('` + p + `');"></div>` +
            `<div id="pt" class="prodTitle">` + t + `</div>` +
            `<input name="name" type="name" length="20" placeholder="name" class="inputCl"> ` +
            `<input name="email" type="email" length="36" placeholder="email" class="inputCl">` +
            `<div id="send" onclick="OrderProduct()" style="text-align: center; cursor:pointer;" class="inputCl">SEND TICKET</div>` +
            `</form>  ` + 
            `</div>`
        );
    }
    else{
        document.querySelector('#Aform').innerHTML = "";
    }
}

