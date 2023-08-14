window.onload = buildAllNews();

function buildAllNews(){
    for (var i = 0; i < news.length; i++){
        document.querySelector('.allNewsField').insertAdjacentHTML(
            'beforeend',
            '<div class="product">' +
            '<div class="newsIcon">' +
            `    <div class="bluredNewsIcon" onclick="location.href='http://noverlin.hostingem.ru/news.html';"></div>` +
            '    <img class="icon" src="' + news[i].photo + '">' +
            '</div>' +
            '<div class="newsInfo">' +
            '  <h3>' + news[i].title + '</h3>' +
            news[i].text +
            '  <a class="subText" target="_blank" href="' + news[i].subUrl + '">' + news[i].subText + '</p>' +              
            '</div>' +
            '</div>'
        );   
    }  
}