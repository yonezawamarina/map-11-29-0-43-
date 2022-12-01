///////map/////////
function GetMap(){
    //------------------------------------------------------------------------
    //1. Instance
    //------------------------------------------------------------------------
    const map = new Bmap("#myMap");
  
    //------------------------------------------------------------------------
    //2. Display Map
    //------------------------------------------------------------------------
    map.startMap(43.4180293, 142.6687544, "load", 7.5); //The place is Bellevue.
  
    //----------------------------------------------------
    //3. Add Pushpin
    // map.pin( lat, lon, "color", [drag:true|false], [click:true|false], [hover:true|false], [visible:true|false] );
    //----------------------------------------------------
    let pin = map.pin(42.8269741, 140.7893114, "#ff0000");//羊蹄山
    let pin1 = map.pin(43.6850639, 142.788798, "#ff0000");//大雪山
    let pin2 = map.pin(43.4180293, 142.6687544, "#ff0000");//十勝岳
    let pin3 = map.pin(43.7662733,144.7130241, "#ff0000");//斜里岳
    let pin4 = map.pin(45.180603,141.2324174, "#ff0000");//利尻岳
    let pin5 = map.pin(43.5414655,141.7339251, "#ff0000");//阿寒岳
    let pin6 = map.pin(43.4180293, 142.6687544, "#ff0000");//羅臼岳
    let pin7 = map.pin(43.5272858,142.8400379, "#ff0000");//トムラウシ岳
    let pin8 = map.pin(42.7195718,142.6740824, "#ff0000");//幌尻岳
  
  
  
       //infobox
    //    let infobox = new Microsoft.Maps.Infobox(43.4180293, 142.6687544, {
    //     title: 'title',
    //     description: 'description'
    // });
    // infobox.setMap(map); //Add infobox to Map
    // }
  
    // let center = map.getCenter();
    //     // Create custom Pushpin
    //     let pinpin = new Microsoft.Maps.Pushpin(center,{
    //         title: 'Microsoft',       //PushPin:title
    //         subTitle: 'City Center',  //PushPin:subtitle
    //         text: 'A'                 //PushPin:text
    //     });
  
  
    //クリックしたら緯度経度を拾う//➡拾えた
    map.onGeocode("click", function(data){
    console.log(data);                   
    const lat = data.location.latitude;  
    console.log(lat);
    const lon = data.location.longitude; 
    console.log(lon);
  
    
    // var lat = 40.0686606
    // var lon = 141.3485666
  
    //------openweathermap api-------//
    //クリックで拾ったlat lonを代入
    var strUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&lang=ja&appid=e26be4316cd25437c8603ae0d12d1246";
  
    //lat lonの代入ができたら天気を表示したい（addmessage）
    // function addMessage(msg){
    //     var element = document.getElementById('aiu');
    //     element.textContent = msg;
    //   }
      
    //   addMessage('Hello! Message!');
  
  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        // 非同期通信（Ajax）
        // readyState 4: リクエスト終了, status 200:通信成功
        if (this.readyState == 4 && this.status == 200) {
            var data = this.response;
  
            // 場所
            document.getElementById('place').innerHTML = data.name;
  
            // 天気（画像）
            var img = document.getElementById('icon');
            img.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            img.alt = data.weather[0].main;
  
            // 天気
            document.getElementById('weather').innerHTML = data.weather[0].main + "（" + data.weather[0].description + "）";
  
            // 気温
            document.getElementById('temp').innerHTML = data.main.temp;
  
            // html += `
            // <div>
            //   <div>場所：${data.name}</div>
            //   <div>天気：${data.weather[0].main}</div>
            //   <div>${data.weather[0].icon}</div>
            //   <div>気温：${data.name.temp}</div>
            // </div> 
            // `;
  
        }
    }
    xmlhttp.open("GET", strUrl, true);  // 第３引数の意味（非同期通信：true、同期通信：false）
    xmlhttp.responseType = 'json'; // JSONを取得するために必要
    xmlhttp.send();
  
  
   //何か表示させる？
    
    // 消さない！ map.onGeocode("click"の最後
    });
  
    // 消さない！function get map の最後
    }
  
  
  
  
  











//    ///////map/////////

   
//    function GetMap() {
//     //------------------------------------------------------------------------
//     //1. Instance
//     //------------------------------------------------------------------------
//     const map = new Bmap("#myMap");
//     //------------------------------------------------------------------------
//     //2. Display Map
//     //------------------------------------------------------------------------
//     map.startMap(43.6850639, 142.788798, "load", 10);

// //     //----------------------------------------------------
// //     //3. Infobox
// //     //   options = new Array();
// //     //   options[index] = { lat, lon, width, height, title, pinColor, description, show };
// //     //----------------------------------------------------
//     const options = [];
//     options[0]={
//         "lat":42.8269741,
//         "lon":140.7893114,
//         "title":"YOTEIZANN",
//         "pinColor":"#ff0000",
//         "height":300,
//         "width":320,
//         // "description": 'Byoudouin<br><img src="../img/byoudouin.jpg" width="300">',
//         "show":false
//     };

//     options[1]={
//         "lat":43.6850639,
//         "lon":142.788798,
//         "title":"TAISETSUZANN",
//         "pinColor":"#ff0000",
//         "height":300,
//         "width":320,
//         // "description": 'Kinkakuji<br><img src="../img/kinkakuji.jpg" width="300">',
//         "show":false
//     };

//     options[2]={
//         "lat":43.4180293,
//         "lon":142.6687544,
//         "title":"KYOTO",
//         "pinColor":"#ff0000",
//         "height":300,
//         "width":320,
//         // "description": 'Byoudouin<br><img src="../img/byoudouin.jpg" width="300">',
//         "show":false
//     };
   
//     options[3]={
//         "lat":44.0757667,
//         "lon":145.1046053,
//         "title":"KYOTO",
//         "pinColor":"#ff0000",
//         "height":300,
//         "width":320,
//         // "description": 'Byoudouin<br><img src="../img/byoudouin.jpg" width="300">',
//         "show":false
//     };
 

// //     //----------------------------------------------------
// //     //4. Switch infoboxs
// //     //   infoboxLayers(options, true); //true=one, false=Multiple
// //     //----------------------------------------------------
//     map.infoboxLayers(options,true);



// /////////やりたいこと//////////////////////////////////
// // mapピンをクリックした時の処理
// // addmessage？
// // 緯度経度をひろってlat lonに代入　　座標点？
// // 代入が終わったら、天気を表示する(それまでは”空白”もしくは”隠す”)
// /////////////////////////////////////////////////////////////


//     // クリックしたら緯度経度を拾う//拾えた➡がしかし、『ピン』をクリックしたら拾えない
     
//     map.onGeocode("click", function(data){
//     console.log(data);                   //Get Geocode ObjectData
//     var lat = data.location.latitude;  //Get latitude
//     console.log(lat);
//     var lon = data.location.longitude; //Get longitude
//     console.log(lon);
    

// // // // 消さない！ map.onGeocode("click"の最後
// // // });

// // //消さない！function get map の最後
// // // }



// // // var lat = 40.0686606
// // // var lon = 141.3485666

// var strUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&lang=ja&appid=e26be4316cd25437c8603ae0d12d1246";
// // // var strUrl = "https://api.openweathermap.org/data/2.5/weather?q=Osaka&units=metric&lang=ja&appid=e26be4316cd25437c8603ae0d12d1246";
// // // weather?lat={緯度}&lon={経度}

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//     // 非同期通信（Ajax）
//     // readyState 4: リクエスト終了, status 200:通信成功
//     if (this.readyState == 4 && this.status == 200) {
//         var data = this.response;

//         // 場所
//         document.getElementById('place').innerHTML = data.name;

//         // 天気（画像）
//         var img = document.getElementById('icon');
//         img.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
//         img.alt = data.weather[0].main;

//         // 天気
//         document.getElementById('weather').innerHTML = data.weather[0].main + "（" + data.weather[0].description + "）";

//         // 気温
//         document.getElementById('temp').innerHTML = data.main.temp;
//     }
// }
// xmlhttp.open("GET", strUrl, true);  // 第３引数の意味（非同期通信：true、同期通信：false）
// xmlhttp.responseType = 'json'; // JSONを取得するために必要
// xmlhttp.send();


// // 消さない！ map.onGeocode("click"の最後
// });

// // // 消さない！function get map の最後
// }
