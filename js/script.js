

$('.sideBarIcon').click(function(){
    let sideBarSize=  $('.sideBar').innerWidth()
    // console.log(sideBarSize);
    let containerPosition = $('.sideBarContainer').css('left')
    if(containerPosition === "0px"){

        $('.sideBarContainer').animate({ left: -sideBarSize-5} ,1000)
    }else{
        $('.sideBarContainer').animate({ left: 0} ,1000)
        
    }
    
    
})
$('.fa-xmark').click(function(){
    let sideBarSize=  $('.sideBar').innerWidth()

    $('.sideBarContainer').animate({ left: -sideBarSize-5} ,1000)

})



// $("details summary").click(function(){
//     $(this).nextAll().slideToggle();
//     $("details p").not($(this).nextAll()).slideUp();
// })

$(".accordianContainar h3").click(function(){
    $(this).nextAll().slideToggle();
    $('.accordianContainar p').not($(this).nextAll()).css('display' , 'none');
    // $(this).next().slideDown();
})


var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  $(".day").text(days + " D")
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  $(".hours").text(hours + " hr")
  
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  $(".min").text(minutes  + " min")
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $(".sec").text(seconds  + " sec")

  document.getElementById("#details").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("#details").innerHTML = "EXPIRED";
  }
}, 1000);









$("textarea").keyup(function(){
    // console.log("hello");
    let numOfLetter = $(this).val().length;
     $(".countDown").text(
        100 - numOfLetter <=0 ? "your available character finished" : 100-numOfLetter
     )
   
})