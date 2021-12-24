

function checkCart(){
    //Проверка наличия корзины в локалстораж
    if (localStorage.getItem('cart')!=null){
        cart=JSON.parse(localStorage.getItem('cart'));
    }
}

$('document').ready(function(){
    checkCart();
    showMiniCart();
    });

function showMiniCart(){
    //Вывод содержимого корзины
    function loadCart(){
        // Загружаю cоц. сети на стр.
    $.getJSON ('cart.json', function (data) {
        var out = '';
        for (var key in data){
            out+='<span class="cart">';
            out+='<a href="'+data[key]['href']+'">';
            out+='<img src="'+data[key].image+'" width="70">';
            out+='</a>';
            out+='</span>';
            out+='<br>';
            out+='<br>';
        }
        $('#korzina').html(out);
       })
    } loadCart();  
}


$('document').ready(function(){
    loadSocialMedia();
    });

function loadSocialMedia(){
    // Загружаю cоц. сети на стр.
$.getJSON ('social.json', function (data) {
    var out = '';
    for (var key in data){
        out+='<p class="social" style="text-align: right">';
        out+='<a href="'+data[key]['href']+'">';
        out+='<img src="'+data[key].image+'" width="70">';
        out+='</a>';
        out+='</p>';
    }
    $('#socialmedia').html(out);
   })
}


$('document').ready(function(){
    loadLogo();
    });

function loadLogo(){
    // Загружаю лого на стр.
$.getJSON ('logo.json', function (data) {
    var out = '';
    for (var key in data){
        out+='<a href="'+data[key]['href']+'">';
        out+='<div class="logo">';
        out+='<IMG class="displayed" src="'+data[key].image+'" height="150">';
        out+='</div>';
        out+='</a>';
    }
    $('#logotip').html(out);
   })
}


$('document').ready(function(){
    loadMenu();
    loadSlides1();
    loadSlides2();
    loadSlides3();
    });

function loadMenu() {// Загружаю товары на стр.
    $.getJSON ('menu.json', function (data) {
        //console.log(data);
        var increment = 0;
        var out = '';
        for (var key in data){
            if (increment%2==0){
            out+='<p style="text-align:left">';
            out+='&nbsp;&nbsp;&nbsp;&nbsp';
            out+='<img src="'+data[key].image+'" style="width:600px">';
            out+='&nbsp;&nbsp;&nbsp;&nbsp';
            out+='<span style="font-family:Verdana, Geneva, Tahoma, sans-serif; font-size:73px;color:white"><a onclick="c" href="'+data[key].href+'">'+data[key].name+'</a></span>';  
            out+='</p>';
        }
            else{
            out+='<p style="text-align:right">';
            out+='<span style="font-family:Verdana, Geneva, Tahoma, sans-serif; font-size:73px;color:white"><a href="'+data[key].href+'">'+data[key].name+'</a></span>';  
            out+='&nbsp;&nbsp;&nbsp;&nbsp';
            out+='<img src="'+data[key].image+'" style="width:600px">';
            out+='&nbsp;&nbsp;&nbsp;&nbsp';
            out+='</p>';  
            }
            increment++;
        }
        $('#items-menu').html(out);
        //$('button.add-to-cart').on('click', myFunction);
       });
}


function loadSlides1() {// Загружаю товары на стр.
    $.getJSON ('slides1.json', function (data) {
        //console.log(data);
        var out = '';
        for (var key in data){
            out+='<img src="'+data[key].image+'" style="width:100%">'; 
        }
        $('#header-slides1').html(out);
        //$('button.add-to-cart').on('click', myFunction);
       });
}

function loadSlides2() {// Загружаю товары на стр.
    $.getJSON ('slides2.json', function (data) {
        //console.log(data);
        var out = '';
        for (var key in data){
            out+='<img src="'+data[key].image+'" style="width:100%">'; 
        }
        $('#header-slides2').html(out);
        //$('button.add-to-cart').on('click', myFunction);
       });
}

function loadSlides3() {// Загружаю товары на стр.
    $.getJSON ('slides3.json', function (data) {
        //console.log(data);
        var out = '';
        for (var key in data){
            out+='<img src="'+data[key].image+'" style="width:100%">'; 
        }
        $('#header-slides3').html(out);
        //$('button.add-to-cart').on('click', myFunction);
       });
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


