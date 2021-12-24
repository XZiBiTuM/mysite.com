var cart={}; //Корзина

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

   $('document').ready(function(){
    loadSocialMedia();
    });

function loadSocialMedia(){
    // Загружаю cоц. сети на стр.
$.getJSON ('social.json', function (data) {
    var out = '';
    for (var key in data){
        out+='<p class="social" style="text-align:right">';
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
    loadMinibd();
    });

function loadMinibd() {// Загружаю товары на стр.
$.getJSON ('minibd0.json', function (data) {
    //console.log(data);
    var out = '';
        for (var key in data){
            out+='<a id="'+data[key].aname+'">'; 
            out+='<div class="dws-wrapper-main">';
            out+='<div class="single-goods">';
            out+='<div>&nbsp;&nbsp;&nbsp;</div>'
            out+='<h3>'+data[key]['name']+'</h3>';
            out+='<p>Цена: '+data[key]['cost']+'&#x20bd;</p>';
            out+='<img src="'+data[key].image+'">';
            out+='<button class="add-to-cart" data-art="'+key+'">&nbsp;+&nbsp;</button>';
            out+='</div>';
            out+='</div>';
        }
        $('#items').html(out);
        $('button.add-to-cart').on('click', addToCart);
        $('button.add-to-cart').on('click', ok);
   });
}

function ok(){
    alert("Товар добавлен в корзину");
}

 function addToCart() {
    //В Корзину
    var articul=$(this).attr('data-art');
    if (cart[articul]!=undefined){
        cart[articul]++;
    }
    else{
        cart[articul]=1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    //console.log(cart);
    showMiniCart(); 
}


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

