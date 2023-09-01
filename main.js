let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrIcon = document.getElementById('ctrIcon');
let left = document.getElementById('left');
let right = document.getElementById('right');
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPauseFunction(){
    
    if(ctrIcon.classList.contains('fa-pause')){
        song.pause();
        ctrIcon.classList.remove("fa-pause");
        ctrIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrIcon.classList.add("fa-pause");
        ctrIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrIcon.classList.add("fa-pause");
    ctrIcon.classList.remove("fa-play");
}
alert('which song u wish to play\n 1 : Old Twon Road \n 2 : ME! \n 3 : Wow. \n 4 : Sucker \n 5 : Sunflower \n 6 : 7 Rings \n 7 : Without Me  \n 8 : Dancing With A Stranger \n 9 : Bad Guy \n 10 : Lover');
arrsong = ['Old Twon Road','ME!','Wow.','Sucker','Sunflower','7 Rings','Without Me','Danceing With A Stranger','Bad Guy ','Lover']
rank = prompt("Enter Number : ");
if(rank>10 || rank<0){
    alert('Enter valid number ');
}
for(var i=1;i<=10;i++){
    if(i==rank){
        changeSong(i);
        imgChange(i);
        songNameChange(i);
    }
}
function changeSong(i){
    var audioE = document.getElementById("song");
    audioE.src = `Songs/s${i}.mp3`;
}
function imgChange(i){
    var mysongimg = document.getElementById("mysongimg");
    mysongimg.src = `/image/p${i}.jpeg`;
}
function songNameChange(i){
    var txt = document.getElementById('songname');
    txt.innerHTML = arrsong[i-1];
}

