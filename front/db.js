var news = [];

// var news = [
//     {
//         title: "ЗАЦЕПИЛА<br> Official Release",
//         text: "The track is released, which is his first track.<br>" +
//             "Date of release - 30.04.2022.<br>" +
//             "Listen on all platforms",
//         photo: "sprites/зацепила.jpg",
//         subText: "NOVERLIN (Listen)",
//         subUrl: "https://links.freshtunes.com/5DQhW",
//     },
//     {
//         title: "THOUGHTS OF YOU<br> Official Release",
//         text: "The track is released, which is his first track.<br>" +
//         "Date of release - 07.11.2021.<br>" +
//         "Listen on all platforms",
//         photo: "sprites/thoughtsOfYou.jpg",
//         subText: "NOVERLIN (Listen)",
//         subUrl: "https://links.freshtunes.com/Blq1d",
//     },
//     {
//         title: "OPENED NICE WEB-SITE",
//         text: "New self web-site of beatmaker NOVERLIN <br>"+
//             "was open by this summer. You could watch many <br>"+
//             "interesting and up-to-date information, listen all beats <br>"+
//             "and be enjoyned by our style sure.",
//         photo: "sprites/HomeMenu.jpg",
//         subText: "NOVERLIN",
//         subUrl: "https://www.youtube.com/channel/UCnnXNLGRxQbZGBYUCy3_tNQ",
//     },
// ]

var products = [
    {
        title: "WAW",
        text: "New self web-site of beatmaker NOVERLIN <br>"+
            "was open by this summer. You could watch many <br>"+
            "interesting and up-to-date information, listen all beats <br>"+
            "and be enjoyned by our style sure.",
        photo: "sprites/homeMenu.jpg",
        subText: "NOVERLIN",
        subUrl: "https://www.youtube.com/channel/UCnnXNLGRxQbZGBYUCy3_tNQ",
    },
    {
        title: "MP3",
        text: "New self web-site of beatmaker NOVERLIN <br>"+
            "was open by this summer. You could watch many <br>"+
            "interesting and up-to-date information, listen all beats <br>"+
            "and be enjoyned by our style sure.",
        photo: "sprites/axis.jpg",
        subText: "NOVERLIN",
        subUrl: "https://www.youtube.com/channel/UCnnXNLGRxQbZGBYUCy3_tNQ",
    },
    {
        title: "FLAC",
        text: "New self web-site of beatmaker NOVERLIN <br>"+
            "was open by this summer. You could watch many <br>"+
            "interesting and up-to-date information, listen all beats <br>"+
            "and be enjoyned by our style sure.",
        photo: "sprites/homeMenu.jpg",
        subText: "NOVERLIN",
        subUrl: "https://www.youtube.com/channel/UCnnXNLGRxQbZGBYUCy3_tNQ",
    },
    {
        title: "ALL RULES",
        text: "New self web-site of beatmaker NOVERLIN <br>"+
            "was open by this summer. You could watch many <br>"+
            "interesting and up-to-date information, listen all beats <br>"+
            "and be enjoyned by our style sure.",
        photo: "sprites/axis.jpg",
        subText: "NOVERLIN",
        subUrl: "https://www.youtube.com/channel/UCnnXNLGRxQbZGBYUCy3_tNQ",
    },
]

var videousID = [
    "moCIoAULIjs",
    "GwAkC-imez0",
    "3-4v2DAjh_U",
    "IscxDeJJGHc",
    "UgNvU9pqwnQ",
    "eLWiTm5Le1M",
    "d1x_iN9VZe4",
    "EV8IcBbgkrg",
    "DxDTejx12Tk",
    "fXQxnHbGYqk",
    "HnFFlPxPsZU",
    "SgH2TmrSKS4",
    "mYMVwFh-9TM",
    "ps1zngMXGWU"
];
var videous = []

window.onload = LoadData();
window.onload = LoadChannelData();

function LoadChannelData()
{
    $.ajax({
        url: '../backend/channelInfoLoader.php',
        method: 'get',
        dataType: 'text',
        success: function(data){
            var videoData = JSON.parse(data.split('<')[0]).items[0];

            document.getElementById("subs").innerHTML = videoData.statistics.subscriberCount;
            document.getElementById("views").innerHTML = videoData.statistics.viewCount;
            document.getElementById("title").innerHTML = videoData.snippet.title;

            document.querySelector('.blurCircleYoutube').insertAdjacentHTML(
                'afterBegin',
                '<div class="channelIcon" style="background-image: url(' + videoData.snippet.thumbnails.medium.url + ')"></div>'
            );

            $(document).ready(function () 
            {
                $('.benefits__number').css('opacity', '1');
                $('.benefits__number').spincrement({
                    thousandSeparator: "",
                    duration: 1200
                });
            });
            //console.log(JSON.parse(data));
        },
    error: function (jqXHR, exception) {
	if (jqXHR.status === 0) {
		console.log('Not connect. Verify Network.');
	} else if (jqXHR.status == 404) {
		console.log('Requested page not found (404).');
	} else if (jqXHR.status == 500) {
		console.log('Internal Server Error (500).');
	} else if (exception === 'parsererror') {
		console.log('Requested JSON parse failed.');
	} else if (exception === 'timeout') {
		console.log('Time out error.');
	} else if (exception === 'abort') {
		console.log('Ajax request aborted.');
	} else {
		console.log('Uncaught Error. ' + jqXHR.responseText);
	}
    }
    });

    $.ajax({
        url: '../backend/videousInfoLoader.php',
        method: 'post',
        dataType: 'text',
        data: {
            urls: videousID
        },
        success: function(data){
            data = JSON.parse(data.split('<')[0]);
            console.log(data);
            
            for (var i = 0; i < data.length; i++){
                let videous = data[i].items[0];

                let publishDate = videous.snippet.publishedAt.replace('T', ' ').replace('Z', ' ');
                let description = videous.snippet.description.replaceAll('\n', '<br>');
                videous.snippet.publishedAt = publishDate;
                videous.snippet.description = description;

                document.querySelector('.lastVideoPanel').insertAdjacentHTML(
                    'beforeend',
                    `<div class="videoCard" style="cursor: pointer;" onclick='ChangeVPActive(` + JSON.stringify(videous) + `)'>` + 
                    '<div class="videoCover">' + 
                    '  <img style="width: 100%;" src="' + videous.snippet.thumbnails.maxres.url + '" alt="">' + 
                    // '  <div class="timer"></div>' + 
                    '</div>' + 
                    '<div class="videoInfo">' + 
                    '  <h2 class="videoTitle">' + videous.snippet.title + '</h2>' + 
                    '  <div class="line"></div>' + 
                    '  <div class="parameters">' + 
                    '    <div class="parameter"><img src="sprites/like.png" alt=""><p>' + videous.statistics.likeCount + '</p></div>' + 
                    '    <div class="parameter"><img src="sprites/eye.png" alt=""><p>' + videous.statistics.viewCount + '</p></div>' + 
                    '    <div class="parameter timeAgo">' + publishDate.substring(0, publishDate.length-4) + '</div>' + 
                    '  </div>' + 
                    '</div>' + 
                '</div>'
                );   
            } 


            console.log(videoData.snippet.title);
            console.log(videoData.snippet.thumbnails.medium.url);
            console.log(videoData.statistics.likeCount);
            console.log(videoData.statistics.viewCount);
            console.log(videoData.snippet.publishedAt);
            
            //console.log();
        },
    error: function (jqXHR, exception) {
	if (jqXHR.status === 0) {
		console.log('Not connect. Verify Network.');
	} else if (jqXHR.status == 404) {
		console.log('Requested page not found (404).');
	} else if (jqXHR.status == 500) {
		console.log('Internal Server Error (500).');
	} else if (exception === 'parsererror') {
		console.log('Requested JSON parse failed.');
	} else if (exception === 'timeout') {
		console.log('Time out error.');
	} else if (exception === 'abort') {
		console.log('Ajax request aborted.');
	} else {
		console.log('Uncaught Error. ' + jqXHR.responseText);
	}
    }
    });
}

function LoadData()
{
    $.ajax({
        url: '../backend/dataLoader.php',
        method: 'get',
        dataType: 'text',
        success: function(data){
            var temp;
            data = data.substring(0, data.length - 1);
            temp = data.split('|');

            for (let i = 0; i < temp.length; i++)
            {
                temp[i] = JSON.parse(temp[i]);
                var obj = 
                {
                    title: temp[i][1],
                    text: temp[i][2],
                    photo: temp[i][3],
                    subText: temp[i][4],
                    subUrl: temp[i][5],
                }
                news.push(obj);
            }

            switch (window.location.pathname)
            {
               case "/index.html":
                   buildLastNews();
               break;
               case "/news.html":
                   buildAllNews();
                   buildLastNews();
               break;
            }     

            console.log(news);
        },
    error: function (jqXHR, exception) {
	if (jqXHR.status === 0) {
		console.log('Not connect. Verify Network.');
	} else if (jqXHR.status == 404) {
		console.log('Requested page not found (404).');
	} else if (jqXHR.status == 500) {
		console.log('Internal Server Error (500).');
	} else if (exception === 'parsererror') {
		console.log('Requested JSON parse failed.');
	} else if (exception === 'timeout') {
		console.log('Time out error.');
	} else if (exception === 'abort') {
		console.log('Ajax request aborted.');
	} else {
		console.log('Uncaught Error. ' + jqXHR.responseText);
	}
    }
    });
}

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
        `    <div class="bluredNewsIcon" onclick="location.href='http://noverlin.hostingem.ru/news.html';"></div>` +
        '    <img class="icon" src="' + newObj.photo + '">' +
        '</div>' +
        '<div class="newsInfo">' +
        '  <h3>' + newObj.title + '</h3>' +
            newObj.text +
        '  <a class="subText" target="_blank" href="' + newObj.subUrl + '">' + newObj.subText + '</p>' +              
        '</div>'
    );      
}