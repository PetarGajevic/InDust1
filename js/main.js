
/* function showCat(){
    var list = document.getElementById('jew-category');
    var img = document.getElementById('jews-wrap');
    if (list.style.display === "none") {
        list.style.display = "block";
      } else {
        list.style.display = "none";
      }
      if (img.style.display === "none") {
        img.style.display = "flex";
      } else {
        img.style.display = "none";
      }
} */


 function showColl(){
    var list1 = document.getElementById('jew-collections');
    var img1 = document.getElementById('jews-wrap1');
    if (list1.style.display === "none") {
        list1.style.display = "block";
      } else {
        list1.style.display = "none";
      }
      if (img1.style.display === "none") {
        img1.style.display = "flex";
      } else {
        img1.style.display = "none";
      }
} 

$( document ).ready(function() {
  // Scroll to About section
  $('li#About').click(function(){
    positiontherapy = $('.main-about').offset().top;
    $('html, body').animate({scrollTop:positiontherapy}, '500', 'swing');
  });

 
  // Add Active class to navbar link
     $('.nav .nav-item a').click(function(e) {
        $('.nav .nav-item.active').removeClass('active');
        var $parent = $(this).parent();
        $parent.addClass('active');
        e.preventDefault();
    }); 

  
});



function passValue(value){
  var select = value;
  localStorage.setItem("val" , select);
  return true;
}

function openProducts(evt ,products) {
  var i, tablinks;
  var x = document.getElementsByClassName("products");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(products.toUpperCase()).style.display = "flex";
  evt.currentTarget.className += " active";
}


function openProducts1(products) {
  var i, tablinks;
  var x = document.getElementsByClassName("products");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(products.toUpperCase()).style.display = "flex";
  document.getElementById(localStorage.getItem("val").toLowerCase()).className += " active";
}


$(document).on('click', ' .dropdown-menu', function (e) {
    e.stopPropagation();
  });
