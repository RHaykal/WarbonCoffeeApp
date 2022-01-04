
var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: false,
    },
    views: {
      stackPages: true,
      componentCache: false,
      xhrCache: false,
    },
    // Add default routes
    routes: [
      {
        path: '/home/',
        pageName: 'home',
      },

      {
        path: '/category-page/',
        pageName: 'category-page',
      },

      {
        path: '/product-page/',
        pageName: 'product-page',
      },
    ],
    // ... other parameters
  });

var $$ = Dom7;
var nf = new Intl.NumberFormat();
// to create a number with format, copy this = nf.format(JSON.parse(product[i].prod_price))
var idprod = 0;


// displaying menu catalog from database in the menu tab
readMenu();
function readMenu() {
  app.request.json('http://localhost/Warbon_DB/productList.php', function(product) {
    var i = 0;
    var jumlah = product.length;
    var menuList = ""; var menuList1 = ""; var menuList2 = ""; var menuList3 = ""; var menuList4 = ""; var swipermenu1 = ""; var swipermenu2 = "";

    for(i=0; i<jumlah; i++) {
      if(product[i].prod_category=="Latte") {
        swipermenu1 +=
        "<div class='swiper-slide' style='display: block'>" +
          "<a id='swiper-item' data-id='" + product[i].prod_ID + "'>" +
            "<img src='img/pd-img-1.png' style='width: 100%; border-radius: 10px;'>" +
            "<h4 class='no-margin' style='font-size: 20px; color: black;'>" + product[i].prod_name +"</h4>" +
            "<p class='no-margin' style='color: grey; font-size: 16px;'>Rp." + nf.format(JSON.parse(product[i].prod_price)) + "</p>" +
          "</a>" +
        "</div>"
      }
      $$('#swiper-bc').html(swipermenu1);
    }
    
    for(i=0; i<jumlah; i++) {
      if(product[i].prod_category=="Tea") {
        swipermenu2 +=
        "<div class='swiper-slide' style='display: block'>" +
          "<a href='/product-page/' id='swiper-item' data-id='" + product[i].prod_ID + "'>" +
            "<img src='img/pd-img-13.png' style='width: 100%; border-radius: 10px;'>" +
            "<h4 class='no-margin' style='font-size: 20px; color: black;'>" + product[i].prod_name +"</h4>" +
            "<p class='no-margin' style='color: grey; font-size: 16px;'>Rp." + nf.format(JSON.parse(product[i].prod_price)) + "</p>" +
          "</a>" +
        "</div>"
      }
      $$('#swiper-tea').html(swipermenu2);
    }

    for (i=0; i<jumlah; i++) {
      if(product[i].prod_category=="Black Coffee") {
        // console.log(product[i]);
        menuList += 
          "<ul>" +
            "<li>" + 
              "<a href='/product-page/' class='item-link item-content product-list text-color-black no-padding-left' id='product-item' data-id='"+ product[i].prod_ID +"'>" +
                "<div class = 'item-media'>" + "<img src = 'https://cdn.framework7.io/placeholder/fashion-88x88-1.jpg' width = '44'/>" + "</div>" +
                "<div class = 'item-inner'>" +
                  "<div class = 'item-title' style='height: 24px; line-height: 24px;'>" + 
                    "<div class = 'item-title'>" + product[i].prod_name + "</div>" +
                  "</div>" +
                  "<div class = 'item-subtitle'>Rp." + nf.format(JSON.parse(product[i].prod_price)) + "</div>" +
                "</div>" +
              "</a>" +
            "</li>" +
          "</ul>"
      }
      $$('#black-coffee').html(menuList);
    }

    for (i=0; i<jumlah; i++) {
      if(product[i].prod_category=="Signature") {
        // console.log(product[i]);
        menuList1 += 
          "<ul>" +
            "<li>" + 
              "<a href='/product-page/' class='item-link item-content product-content text-color-black no-padding-left' id='product-item' data-id='"+ product[i].prod_ID +"'>" +
                "<div class = 'item-media'>" + "<img src = 'https://cdn.framework7.io/placeholder/fashion-88x88-1.jpg' width = '44'/>" + "</div>" +
                "<div class = 'item-inner'>" +
                  "<div class = 'item-title' style='height: 24px; line-height: 24px;'>" + 
                    "<div class = 'item-title'>" + product[i].prod_name + "</div>" +
                  "</div>" +
                  "<div class = 'item-subtitle'>Rp." + nf.format(JSON.parse(product[i].prod_price)) + "</div>" +
                "</div>" +
              "</a>" +
            "</li>" +
          "</ul>"
        }
        $$('#signature').html(menuList1);
      }

    for (i=0; i<jumlah; i++) {
      if(product[i].prod_category=="Latte") {
        // console.log(product[i]);
        menuList2 += 
          "<ul>" +
            "<li>" + 
              "<a href='/product-page/' class='item-link item-content product-content text-color-black no-padding-left' id='product-item' data-id='"+ product[i].prod_ID +"'>" +
                "<div class = 'item-media'>" + "<img src = 'https://cdn.framework7.io/placeholder/fashion-88x88-1.jpg' width = '44'/>" + "</div>" +
                "<div class = 'item-inner'>" +
                  "<div class = 'item-title' style='height: 24px; line-height: 24px;'>" + 
                    "<div class = 'item-title'>" + product[i].prod_name + "</div>" +
                  "</div>" +
                  "<div class = 'item-subtitle'>Rp." + nf.format(JSON.parse(product[i].prod_price)) + "</div>" +
                "</div>" +
              "</a>" +
            "</li>" +
          "</ul>"
      }
      $$('#latte').html(menuList2);
    }

    for (i=0; i<jumlah; i++) {
      if(product[i].prod_category=="Manual Brew") {
        // console.log(product[i]);
        menuList3 += 
          "<ul>" +
            "<li>" + 
              "<a href='/product-page/' class='item-link item-content product-content text-color-black no-padding-left' id='product-item' data-id='"+ product[i].prod_ID +"'>" +
                "<div class = 'item-media'>" + "<img src = 'https://cdn.framework7.io/placeholder/fashion-88x88-1.jpg' width = '44'/>" + "</div>" +
                "<div class = 'item-inner'>" +
                  "<div class = 'item-title' style='height: 24px; line-height: 24px;'>" + 
                    "<div class = 'item-title'>" + product[i].prod_name + "</div>" +
                  "</div>" +
                  "<div class = 'item-subtitle'>Rp." + nf.format(JSON.parse(product[i].prod_price)) + "</div>" +
                "</div>" +
              "</a>" +
            "</li>" +
          "</ul>"
      }
      $$('#manual-brew').html(menuList3);
    }

    for (i=0; i<jumlah; i++) {
      if(product[i].prod_category=="Tea") {
        // console.log(product[i]);
        menuList4 += 
          "<ul>" +
            "<li>" + 
              "<a href='/product-page/' class='item-link item-content product-content text-color-black no-padding-left' id='product-item' data-id='"+ product[i].prod_ID +"'>" +
                "<div class = 'item-media'>" + "<img src = 'https://cdn.framework7.io/placeholder/fashion-88x88-1.jpg' width = '44'/>" + "</div>" +
                "<div class = 'item-inner'>" +
                  "<div class = 'item-title' style='height: 24px; line-height: 24px;'>" + 
                    "<div class = 'item-title'>" + product[i].prod_name + "</div>" +
                  "</div>" +
                  "<div class = 'item-subtitle'>Rp." + nf.format(JSON.parse(product[i].prod_price)) + "</div>" +
                "</div>" +
              "</a>" +
            "</li>" +
          "</ul>"
      }
      $$('#tea').html(menuList4);
    }
  })
}

var data = "";
$$('#swiper-bc').on('click', '#swiper-item', function() {
  // console.log("yesyesyes");
  var id = $$(this).data('id');
  // console.log(id);
  app.request({
    url: 'http://localhost/Warbon_DB/productID.php',
    type: 'POST',
    data: {
      "id": id
    },
    dataType: 'json',
    success:function(prodData) {
      // console.log(prodData);
      data = prodData[0];
      app.views.main.router.navigate('/product-page/');
      pagedata();
    }
  })
})

$$('#swiper-tea').on('click', '#swiper-item', function() {
  // console.log("yesyesyes");
  var id = $$(this).data('id');
  // console.log(id);
  app.request({
    url: 'http://localhost/Warbon_DB/productID.php',
    type: 'POST',
    data: {
      "id": id
    },
    dataType: 'json',
    success:function(prodData) {
      // console.log(prodData);
      data = prodData[0];
      app.views.main.router.navigate('/product-page/');
      pagedata();
    }
  })
})

$$('#black-coffee').on('click', '#product-item', function() {
  // console.log("yesyesyes");
  var id = $$(this).data('id');
  // console.log(id);
  app.request({
    url: 'http://localhost/Warbon_DB/productID.php',
    type: 'POST',
    data: {
      "id": id
    },
    dataType: 'json',
    success:function(prodData) {
      // console.log(prodData);
      data = prodData[0];
      app.views.main.router.navigate('/product-page/');
      pagedata();
    }
  })
})

$$('#signature').on('click', '#product-item', function() {
  // console.log("yesyesyes");
  var id = $$(this).data('id');
  // console.log(id);
  app.request({
    url: 'http://localhost/Warbon_DB/productID.php',
    type: 'POST',
    data: {
      "id": id
    },
    dataType: 'json',
    success:function(prodData) {
      // console.log(prodData);
      data = prodData[0];
      app.views.main.router.navigate('/product-page/');
      pagedata();
    }
  })
})

$$('#latte').on('click', '#product-item', function() {
  // console.log("yesyesyes");
  var id = $$(this).data('id');
  // console.log(id);
  app.request({
    url: 'http://localhost/Warbon_DB/productID.php',
    type: 'POST',
    data: {
      "id": id
    },
    dataType: 'json',
    success:function(prodData) {
      // console.log(prodData);
      data = prodData[0];
      app.views.main.router.navigate('/product-page/');
      pagedata();
    }
  })
})

$$('#manual-brew').on('click', '#product-item', function() {
  // console.log("yesyesyes");
  var id = $$(this).data('id');
  // console.log(id);
  app.request({
    url: 'http://localhost/Warbon_DB/productID.php',
    type: 'POST',
    data: {
      "id": id
    },
    dataType: 'json',
    success:function(prodData) {
      // console.log(prodData);
      data = prodData[0];
      app.views.main.router.navigate('/product-page/');
      pagedata();
    }
  })
})

$$('#tea').on('click', '#product-item', function() {
  // console.log("yesyesyes");
  var id = $$(this).data('id');
  // console.log(id);
  app.request({
    url: 'http://localhost/Warbon_DB/productID.php',
    type: 'POST',
    data: {
      "id": id
    },
    dataType: 'json',
    success:function(prodData) {
      // console.log(prodData);
      data = prodData[0];
      app.views.main.router.navigate('/product-page/');
      pagedata();
    }
  })
})

var coldPressed = false;
$$('#cold-varian').click(function() {
  console.log('cold');
  if(coldPressed == true) {
    document.getElementById("cold-varian").style.backgroundColor = "transparent";
    document.getElementById("cold-varian").style.color = "#0B764E";
    coldPressed = false;
    // console.log(coldPressed, hotPressed)
  } else {
    document.getElementById("cold-varian").style.backgroundColor = "#0B764E";
    document.getElementById("cold-varian").style.color = "white";
    coldPressed = true;
    if(hotPressed == true) {
      document.getElementById("hot-varian").style.backgroundColor = "transparent";
      document.getElementById("hot-varian").style.color = "#0B764E";
      hotPressed = false;
    }
    // console.log(coldPressed, hotPressed)
  }
})

var hotPressed = false;
$$('#hot-varian').click(function() {
  console.log("hot");
  if(hotPressed == true) {
    document.getElementById("hot-varian").style.backgroundColor = "transparent";
    document.getElementById("hot-varian").style.color = "#0B764E";
    hotPressed = false;
    // console.log(coldPressed, hotPressed)
  } else {
    document.getElementById("hot-varian").style.backgroundColor = "#0B764E";
    document.getElementById("hot-varian").style.color = "white";
    hotPressed = true;
    if(coldPressed == true) {
      document.getElementById("cold-varian").style.backgroundColor = "transparent";
      document.getElementById("cold-varian").style.color = "#0B764E";
      coldPressed = false;
    }
    // console.log(coldPressed, hotPressed)
  }
})

// this function is to declare product name and its ID to identify which product page it will lead on when product swiper or list is clicked
function pagedata() {
  if(data) {
    title = data.prod_name;
    subtitle = data.prod_desc;
    document.getElementById("prod-title").innerHTML = title;
    document.getElementById("prod-subtitle").innerHTML = subtitle;
    hotPressed = false;
    document.getElementById("hot-varian").style.backgroundColor = "transparent";
    document.getElementById("hot-varian").style.color = "#0B764E";
    coldPressed = false;
    document.getElementById("cold-varian").style.backgroundColor = "transparent";
    document.getElementById("cold-varian").style.color = "#0B764E";
  }
}

cartID = 1;
// when addtocart button is clicked, it will prepare the product ID and its quantity to be registered to cart array
$$('#add-to-cart').click(function() {
  // console.log(data);
  var prodid = data.prod_ID;
  var quantity = $$('#quantity').val();
  if(coldPressed == true) {
    var varian = "cold";
  }
  else if(hotPressed == true) {
    var varian = "hot";
  }
  toastTop.open();
  app.sheet.open('.my-sheet-swipe-to-step')
  app.sheet.stepOpen('.my-sheet-swipe-to-step')
  addtocart(prodid, quantity, varian);
})

// when buy button is clicked, a single product get insert to the cart array and order form showed up 
$$('#buy').click(function() {
  var prodid = data.prod_ID;
  var quantity = $$('#quantity').val();
  if(loginData != true) {
    app.dialog.alert("Oops, you need to login first to be able order this product...", "Warbon App  ")
  }
  else {
    addtocart(prodid, quantity);
    app.popup.open('.popup-swipe-to-close');
  }
})

var cart = [];
var totalPrice = 0;
var indexcart = 0;
// registering product to cart array when addtocart button is clicked
function addtocart(prodid, quantity, varian) {
  let productinfo = {
    id: cartID,
    prodid: prodid,
    name: data.prod_name,
    qty: quantity,
    varian: varian,
    price: data.prod_price,
    subprice: data.prod_price*quantity,
  }
  cartID++;
  cart[indexcart] = productinfo;
  indexcart++;
  totalPrice = totalPrice + (data.prod_price*quantity);
  document.getElementById("total-price").innerHTML = "Rp."+nf.format(totalPrice);
  console.log(cart)
  cartlist(productinfo);
}

// to show the list of product that has been put in to the cart
function cartlist(productinfo) {
  const cartItem = document.createElement('li');
  cartItem.classList.add('item-content');
  cartItem.classList.add('item-cart');
  cartItem.setAttribute('data-id', `${productinfo.prodid}`);
  cartItem.innerHTML = `
  <div class="item-inner">
    <div class="item-title" style="overflow: false; max-width: 50px; position: relative;">${productinfo.name}</div>
    <div class="item-title" style="margin-left: 60%;;">Qty : ${productinfo.qty}</div>
    <div class="item-after text-color-black"><b>Rp.${nf.format(productinfo.subprice)}</b></div>
  </div>
  `;
  document.getElementById("cartlist").appendChild(cartItem);
}

var loginData = false;
var accountInfo = [];
var usrAddress = "";
var usrTellno = "";
//when login button is clicked
$$('#login').click(function() {
  // app.dialog.alert("Hello");
  var username = $$('#username-login').val();
  var password = $$('#password-login').val();
  // console.log(username); console.log(password);
  app.request({
    url:'http://localhost/Warbon_DB/login.php',
    type:"POST",
    data: {
      "username":username,
      "password":password,
    },
    dataType:"json",
    success:function(login) {   
      // console.log(login);  
      if(login[0]) {
        loginData = true;
        accountInfo[0] = login[0];
        app.dialog.alert("Login Successful", "WarbonApp");
        app.loginScreen.close('.sign-in-screen');
        profileGone();
      } else {
        app.dialog.alert("Oops, sepertinya username atau passsword kamu salah. Coba lagi yuk", "WarbonApp");
      }
      
    }
  })
})

//when sign up button is clicked
$$('#register').click(function() {
  // app.dialog.alert("Hello");
  var username = $$('#username').val();
  var email = $$('#email').val();
  var password = $$('#password').val();
  var repassword = $$('#repassword').val();
  // console.log(username); console.log(email); console.log(password); console.log(repassword);
  if(repassword!=password) {
    app.dialog.alert("retype your password plzz")
  }
  else {
    app.request({
      url:'http://localhost/Warbon_DB/register.php',
      type:"POST",
      data:{
        "username":username,
        "email":email,
        "repassword":repassword
      },
      dataType:"json",
      success:function(register) {
        if(register.pesan) {
          app.dialog.alert(register.pesan, "Warbon App");
          app.loginScreen.close('.sign-up-screen');
        }
      }
    })
  }
});

// when succesfully login, the profile button in the top right corner will dissapear
function profileGone() {
  // console.log(loginData);
  var afterlogin = "";
  if(loginData == true) {
    // console.log("logindata berhasil di lempar");
    afterlogin = 
    "<a href='#' class='sheet-open' data-sheet='.my-sheet-swipe-to-step'>" +
      "<i class='icon f7-icons right profile-nav-btn'>cart_fill</i>" +
    "</a>"
    $$('#top-left-home-btn').html(afterlogin);
  }
}

//when make payment btn in cart is clicked
$$('#buy-all').click(function() {
  if(loginData != true) {
    console.log(cart);
    app.dialog.alert("Oops, you need to login first to be able order this product...", "Warbon App  ")
  }
  else {
    console.log(cart);
    app.popup.open('.popup-swipe-to-close');
  }
})

function tab3() {
  var notloginview = 
  "<div style='width: 100%; height: 100%; position: absolute;'>" + 
    "<img src='img/Hnet.com-image.jpg' style='height: 100%; width: 100%; background-position: center; background-repeat: np-repeat; background-size: cover;'>" +
  "</div>"
  $$('#tab-3-content').html(notloginview);
  app.request.json('http://localhost/Warbon_DB/accountList.php', function(updateAccInfo) {
    for(var i=0;i<updateAccInfo.length;i++) {
      if(accountInfo[0].usr_ID == updateAccInfo[i].usr_ID) {
        if(updateAccInfo[0].usr_address == "" || updateAccInfo[0].usr_tellno == "") {
          usrAddress = "Kamu belum menginput alamatmu.";
          usrTellno = "Kamu belum menginput nomor hp kamu";
        }
        else {
          usrAddress = updateAccInfo[0].usr_address;
          usrTellno = updateAccInfo[0].usr_tellno;
        }
        var loginview = "";
        if(loginData == true) {
          loginview = 
          "<div class='list media-list' style='margin-top: 15%; margin-bottom: 0px;'>" +
          "<ul>" +
            "<li>" +
              "<div class='item-content'>" +
                "<div class='item-inner'>" +
                  "<div class='item-title item-label' style='margin-top: 10px;'>Hello!</div>" +
                  "<p style='font-size: 20px; margin: 16px; margin-left: 0px; margin-top: 6px;'>"+updateAccInfo[0].usr_name+"</p>" +
                "</div>" +
              "</div>" +
            "</li>" +
          "</ul>" +
        "</div>" +

        "<form class='list no-margin-top' id='my-form'>" +
          "<div class='list no-margin-top'>" +
            "<ul>" +
              "<li class='item-content item-input'>" +
                "<div class='item-inner'>" +
                  "<div class='item-title item-label'>E-mail</div>" +
                  "<div class='item-input-wrap'>" +
                    "<input type='email' placeholder='Your e-mail' value='" +updateAccInfo[0].usr_email+ "' disabled>" +
                  "</div>"+
                "</div>" +
              "</li>" +
              "<li>" +
                "<div style='height: 1.3px; width: 100%; background-color: #808080; opacity: 0.3;'></div>" +
              "</li>" +
              "<li class='item-content item-input'>" +
                "<div class='item-inner'>" +
                  "<div class='item-title item-label'>Phone Number</div>" +
                  "<div class='item-input-wrap'>" +
                    "<input type='tel' placeholder='Your phone number' value='"+usrTellno+"' disabled>" +
                  "</div>" +
                "</div>" +
              "</li>" +
              "<li>" +
                "<div style='height: 1.3px; width: 100%; background-color: #808080; opacity: 0.3;'></div>" +
              "</li>" +
              "<li class='item-content item-input'>" +
                "<div class='item-inner'>" +
                  "<div class='item-title item-label'>Address</div>" +
                  "<div class='item-input-wrap'>" +
                    "<textarea name='address' placeholder='Your Address' disabled>"+usrAddress+"</textarea>" +
                  "</div>" +
                "</div>" +
              "</li>" +
            "</ul>" +
          "</div>" +
        "</form>" +

        "<center>" +
          "<div>" +
            "<p style='color: grey;'>Copyright By Dev-Team</p>" +
          "</div>" +
        "</center>"
        var edit = `<a href="#" id="edit-btn"><div class="right margin-right" style="color: whitesmoke;"><b>Edit</b></div></a>`;
        $$('#tab-3-content').html(loginview);
        $$('#edit-profile').html(edit);
        }
      }
    }
  })
}

//tab 3 difference before and after login
$$('#tab-3').on('tab:show', function() {
  // console.log(loginData);
  tab3();
});

// when edit button in tab3 is clicked
$$('#edit-profile').on('click', "#edit-btn", function() {
  editview = 
    "<div class='list media-list' style='margin-top: 15%; margin-bottom: 0px;'>" +
    "<ul>" +
      "<li>" +
        "<div class='item-content'>" +
          "<div class='item-inner'>" +
          "<div class='item-title item-label' style='margin-top: 16px;'>Hello!</div>" +
            "<input type='text' id='change-name' style='font-size: 20px;' value='"+accountInfo[0].usr_name+"' placeholder=''></input>" +
          "</div>" +
        "</div>" +
      "</li>" +
    "</ul>" +
  "</div>" +

  "<form class='list no-margin-top' id='my-form'>" +
    "<div class='list no-margin-top'>" +
      "<ul>" +
        "<li class='item-content item-input'>" +
          "<div class='item-inner'>" +
            "<div class='item-title item-label'>E-mail</div>" +
            "<div class='item-input-wrap'>" +
              "<input type='email' placeholder='Your e-mail' value='" +accountInfo[0].usr_email+ "' disabled>" +
            "</div>"+
          "</div>" +
        "</li>" +
        "<li>" +
          "<div style='height: 1.3px; width: 100%; background-color: #808080; opacity: 0.3;'></div>" +
        "</li>" +
        "<li class='item-content item-input'>" +
          "<div class='item-inner'>" +
            "<div class='item-title item-label'>Phone Number</div>" +
            "<div class='item-input-wrap'>" +
              "<input type='text' id='tellno' placeholder='Your phone number' value='"+usrTellno+"'>" +
            "</div>" +
          "</div>" +
        "</li>" +
        "<li>" +
          "<div style='height: 1.3px; width: 100%; background-color: #808080; opacity: 0.3;'></div>" +
        "</li>" +
        "<li class='item-content item-input'>" +
          "<div class='item-inner'>" +
            "<div class='item-title item-label'>Address</div>" +
            "<div class='item-input-wrap'>" +
              "<textarea id='address' placeholder='Your Address'>"+usrAddress+"</textarea>" +
            "</div>" +
          "</div>" +
        "</li>" +
      "</ul>" +
    "</div>" +
  "</form>" +

  "<center>" +
    "<div>" +
      "<p style='color: grey;'>Copyright By Dev-Team</p>" +
    "</div>" +
  "</center>"
  var save = `<a href="#" id="save-btn"><div class="right margin-right" style="color: whitesmoke;"><b>Save</b></div></a>`;
  $$('#tab-3-content').html(editview);
  $$('#edit-profile').html(save);
})

// when save button in tab3 is clicked
$$('#edit-profile').on('click', "#save-btn", function() {
  var changeName = $$('#change-name').val();
  var tellno = $$('#tellno').val();
  var address = $$('#address').val();
  var accID = accountInfo[0].usr_ID;
  console.log(changeName, tellno, address, accID);
  app.request({
    url:'http://localhost/Warbon_DB/updateAccount.php',
    type:"POST",
    data:{
      "changeName":changeName,
      "tellno":tellno,
      "address":address,
      "accID":accID
    },
    dataType:"json",
    success:function(update) {
      app.dialog.alert(update.pesan, "Warbon App");
      tab3();
    }
  })
})

// when popup is opened
$$('.popup-swipe-to-close').on('popup:open', function() {
  var ordercartlist = "";
  for(var i=0;i<cart.length;i++) {
    ordercartlist += `
    <li>
      <div class="item-inner">
        <div class="item-title" style="overflow: false; max-width: 50px; position: relative;">${cart[i].name}</div>
        <div class="item-title" style="margin-left: 60%;;">Qty : ${cart[i].qty}</div>
        <div class="item-after text-color-black"><b>Rp.${nf.format(cart[i].subprice)}</b></div>
      </div>
    </li>
    `
  }
  $$('#orderformlist').html(ordercartlist);
})

// let now = new Date();
$$('#order').click(function() {
  var accID = accountInfo[0].usr_ID;
  var date = new Date().toISOString().slice(0, 10);
  var totalpayment = totalPrice;
  console.log(accID, date, totalpayment, cart);
  app.request({
    url:'http://localhost/Warbon_DB/order.php',
    type:'POST',
    data: {
      "accID": accID,
      "date": date,
      "totalpayment": totalpayment,
      "cart": cart,
    },
    dataType:"json",
    success:function(ordr) {
      app.dialog.alert(ordr.pesan, "Warbon App");
      app.popup.close('.popup-swipe-to-close')
      app.views.main.router.navigate('/home/');
      cart.length = 0;
      totalPrice = 0;
      console.log(cart);
      cartID = 1;
      indexcart = 0;
    }
  })
})

//create popup
// DOM events for About popup
$$('.popup-about').on('popup:open', function (e) {
  console.log('About popup open');
});
$$('.popup-about').on('popup:opened', function (e) {
  console.log('About popup opened');
});

// Create Popup with swipe to close
var swipeToClosePopup = app.popup.create({
  el: '.popup-swipe-to-close',
  swipeToClose: true,
});

// create searchbar
var searchbar = app.searchbar.create({
  el: '.searchbar',
  searchContainer: '.product-list',
  searchIn: '.product-content',
  on: {
    search(sb, query, previousQuery) {
      console.log(query, previousQuery);
    }
  }
});

// DOM events for my-sheet sheet
$$('.my-sheet').on('sheet:open', function (e) {
  console.log('my-sheet open');
});
$$('.my-sheet').on('sheet:opened', function (e) {
  console.log('my-sheet opened');
});

// Create swipe-to-step Sheet
app.sheet.create({
  el: '.my-sheet-swipe-to-step',
  swipeToClose: true,
  swipeToStep: true,
  backdrop: true,
});

// Create top toast
var toastTop = app.toast.create({
  text: 'Added to cart!',
  position: 'top',
  closeTimeout: 1100,
});


var mainView = app.views.create('.view-main');