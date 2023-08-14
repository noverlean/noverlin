function buildLastNews(){
    newObj = {
        title: "Uff... Nothing new...",
        text: "Try again later -_-",
        photo: "sprites/homeMenu.jpg",
        subText: "02:07:2022 NOVERLIN",
        subUrl: "https://www.youtube.com/channel/UCnnXNLGRxQbZGBYUCy3_tNQ",
    }

    if (news.length > 0) 
        newObj = news[0]

    document.querySelector('.homeNewsField').insertAdjacentHTML(
        'afterbegin',
        '<div class="newsIcon">' +
        `    <div class="bluredNewsIcon" onclick="open('news.html')"></div>` +
        '    <img class="icon" src="' + newObj.photo + '">' +
        '</div>' +
        '<div class="newsInfo">' +
        '  <h3>' + newObj.title + '</h3>' +
            newObj.text +
        '  <a class="subText" target="_blank" href="' + newObj.subUrl + '">' + newObj.subText + '</p>' +              
        '</div>'
    );      
}