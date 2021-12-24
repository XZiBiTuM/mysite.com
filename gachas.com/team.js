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
    loadSlides1();
    loadSlides2();
    loadSlides3();
    loadSlides4();
    });


function loadSlides1() {// Загружаю товары на стр.
    $.getJSON ('teammate1.json', function (data) {
        //console.log(data);
        var out = '';
        for (var key in data){
           // out+='<a href="'+data[key].href+'">';
            out+='<img src="'+data[key].image+'" style="width:100%">'; 
            out+='<p style="color:white;font-family: Verdana, Geneva, Tahoma, sans-serif;font-size:20px;text-align:center;">'+data[key].name+'</p>'; 
            //out+='</a>';
        }
        $('#header-slides1').html(out);
        //$('button.add-to-cart').on('click', myFunction);
       });
}

function loadSlides2() {// Загружаю товары на стр.
    $.getJSON ('teammate2.json', function (data) {
        //console.log(data);
        var out = '';
        for (var key in data){
           // out+='<a href="'+data[key].href+'">';
            out+='<img src="'+data[key].image+'" style="width:100%">';
            out+='<p style="color:white;font-family: Verdana, Geneva, Tahoma, sans-serif;font-size:20px;text-align:center;">'+data[key].name+'</p>'; 
            //out+='</a>';
        }
        $('#header-slides2').html(out);
        //$('button.add-to-cart').on('click', myFunction);
       });
}

function loadSlides3() {// Загружаю товары на стр.
    $.getJSON ('teammate3.json', function (data) {
        //console.log(data);
        var out = '';
        for (var key in data){
            //out+='<a href="'+data[key].href+'">';
            out+='<img src="'+data[key].image+'" style="width:100%">'; 
            out+='<p style="color:white;font-family: Verdana, Geneva, Tahoma, sans-serif;font-size:20px;text-align:center;">'+data[key].name+'</p>';  
            //out+='</a>';
        }
        $('#header-slides3').html(out);
        //$('button.add-to-cart').on('click', myFunction);
       });
}

function loadSlides4() {// Загружаю товары на стр.
    $.getJSON ('teammate4.json', function (data) {
        //console.log(data);
        var out = '';
        for (var key in data){
            //out+='<a href="'+data[key].href+'">';
            out+='<img src="'+data[key].image+'" style="width:100%">'; 
            out+='<p style="color:white;font-family: Verdana, Geneva, Tahoma, sans-serif;font-size:20px;text-align:center;">'+data[key].name+'</p>'; 
            //out+='</a>';
        }
        $('#header-slides4').html(out);
        //$('button.add-to-cart').on('click', myFunction);
       });
}


var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


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
