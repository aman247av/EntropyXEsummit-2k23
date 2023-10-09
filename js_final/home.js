var countDownDate = new Date("Nov 3,2023 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var timeLeft= countDownDate - now;


    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    var formattedDays = (days< 10) ? "0" + days : days;
    var formattedHours = (hours < 10) ? "0" + hours : hours;
    var formattedMinutes = (minutes < 10) ? "0" + minutes : minutes;
    var formattedSeconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = formattedHours + "  :";
    document.getElementById("minutes").innerHTML = formattedMinutes + "  :";
    document.getElementById("seconds").innerHTML = formattedSeconds;
    

    if(timeLeft<0)
    {
        clearInterval(x);
        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";
    }
},1000);





const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


var currentPage = window.location.href;


var navLink= document.querySelectorAll('.nav-menu a');

navLink.forEach(function(link) {
    if (link.href === currentPage) {
        link.classList.add('active');
    }
});