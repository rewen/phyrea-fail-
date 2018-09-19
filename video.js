(function() {
    // najpierw musisz sie odniesc do jakiego elementu
var video = document.getElementById('video'),
    // twozysz url 
    vendorURL=window.URL || window.webkitURL;
     //sprawdzasz przez jakie przegladarki user uzywa
    navigator.getMedia =navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia;
                        //getMedia to metoda ktora bierze cos z twojego komputera
    //lapanie stremu
    navigator.getMedia({
        //ogarniasz co ma sie dziac w streamie
        video:true,
        audio:false
    }, function(stream){
        video.src = vendorURL.createObjectURL(stream);// podajesz video url 
        video.play();// autoplay
    }, function (error){
        //error kurwa!
    });
})();
