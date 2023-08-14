window.onload = buildProducts(); //products.length

function buildProducts(){
    for (var i = 0; i < products.length; i++){
        document.querySelector('.marketField').insertAdjacentHTML(
            'afterbegin',
            '<div class="product">' +
            '<div class="newsIcon prod">' +
            `    <div class="bluredNewsIcon" onclick="ShowOrderPanel(true, '` + products[i].title + `', '` + products[i].photo + `')"></div>` +
            '    <img class="icon" src="' + products[i].photo + '">' +
            '</div>' +
            '<div class="newsInfo">' +
            '  <h3>' + products[i].title + '</h3>' +
            products[i].text +
            '  <a class="subText" target="_blank" href="' + products[i].subUrl + '">' + products[i].subText + '</p>' +              
            '</div>' +
            '</div>'
        );
    }          
}