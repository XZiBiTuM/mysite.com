

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
        out+='<div class="logo">';
        out+='<a href="'+data[key]['href']+'">';
        out+='<IMG class="displayed" src="'+data[key].image+'" height="150">';
        out+='</div>';
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
        var increment = 1;
        var out = '';
        for (var key in data){
            out+='<div class="dws-wrapper';
            out+=increment+++'">'
            out+='<div class="boxImg">';
            out+='<a href="'+data[key].href+'">';
            //out+='<button class="mini-cart" onclick="myFunction" style="border:1px solid black; background-color: transparent;width:350px;height:350px">'
            out+='<img src="'+data[key].image+'">'; 
            out+='<div class="container">';
            out+='<div class="text">';
            out+='<h1>'+data[key]['name']+'</h1>';
            out+='</div>';
            out+='</div>';
            out+='</div>';
            out+='</div>';
            //out+='<button class="add-to-cart" style="background: -webkit-gradient(linear, 0 0, 0 100%, from(#696969), to(#778899), color-stop(0.5, #A9A9A9));" data-art="'+key+'">В корзину</button>';
            out+='</a>';
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


