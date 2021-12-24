var cart={}; //Корзина

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

$.getJSON('minibd.json',function(data){
    var minibd=data;  //все товары в массиве
    //console.log(minibd);
    checkCart();
    //console.log(cart);
    showCart(); // показать содержимое корзины
    //==============================================
    function showCart(){
        if ($.isEmptyObject(cart)   ){
            //корзина пуста
            var out='<br>'+'<h1 style="text-align:center;font-family: Verdana, Geneva, Tahoma, sans-serif;">Корзина пуста</h1>'
            $('#myCart').html(out);
        }
        else{
        var out='';
        for (var key in cart){
            out+='<button class="delete" data-art="'+key+'">&#10008;</button>';
            out+='<img src="'+minibd[key].image+'"style="width:100">';
            out+=minibd[key].name;
            out+='<button class="minus" data-art="'+key+'">&ndash;</button>';
            out+=cart[key];  
            out+='<button class="plus" data-art="'+key+'">+</button>';
            out+=cart[key]*minibd[key].cost+'&#x20bd;';
            out+='<br>';
        }
        $('#myCart').html(out);
        $('.plus').on('click',plusItems);
        $('.minus').on('click',minusItems);
        $('.delete').on('click',delItems);
    }
}
    //============================================
    function plusItems(){
        var articul=$(this).attr('data-art');
        cart[articul]++;
        saveCartToLS(); //Сохранение корзины в LS после манипуляций
        showCart();
    }
    //============================================
    function minusItems(){
        var articul=$(this).attr('data-art');
        if (cart[articul]>1){
        cart[articul]--;
        }
        else{
            delete cart[articul];
        }
        saveCartToLS(); //Сохранение корзины в LS после манипуляций
        showCart();
    }
    //============================================
    function delItems(){
        var articul=$(this).attr('data-art');
        delete cart[articul];
        saveCartToLS();
        showCart();
    }

});



function checkCart(){
    //Проверка наличия корзины в локалстораж
    if (localStorage.getItem('cart')!=null){
        cart=JSON.parse(localStorage.getItem('cart'));
    }
}

function saveCartToLS(){
    localStorage.setItem('cart', JSON.stringify(cart));
}