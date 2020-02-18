$(document).ready(function() {
   setTimeout(function(){
     $("#loader-wrapper").fadeOut(500);
   },400);
});
// hover-menu
$(document).ready(function() { 
	$("#menu ul li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(300); 
		},function(){ 
		$(this).find('ul:first').css({visibility: "hidden"});
		}); 
	$("#menu ul li").hover(function(){
			$(this).find('>a').addClass('active2'); 
		},function(){ 
			$(this).find('>a').removeClass('active2'); 
		}); 
});  
// hover-menu
function doEnter2(evt){
  var key;
  if(evt.keyCode == 13 || evt.which == 13){
  	onSearch2(evt);
  }
}
function onSearch2(evt) {			
	var keyword2 = document.getElementById("keyword2").value;
  var id_list = $(".danhmuc_tk").val();
	if(keyword2=='' || keyword2==nhaptukhoatimkiem)
	{
		alert(chuanhaptukhoa);
	}
	else{
		location.href = "tim-kiem.html&keywords="+keyword2;
		loadPage(document.location);			
	}
}		
$(document).ready(function() {
    $(".nut_tim").click(function(){
        onSearch2();
    });
})
///mobi
function doEnter(evt){
  var key;
  if(evt.keyCode == 13 || evt.which == 13){
    onSearch2(evt);
  }
}
function onSearch(evt) {     
  var keyword = document.getElementById("keyword").value;
  var id_list = $(".danhmuc_tk").val();
  if(keyword=='' || keyword==nhaptukhoatimkiem)
  {
    alert(chuanhaptukhoa);
  }
  else{
    location.href = "tim-kiem.html&keywords="+keyword;
    loadPage(document.location);      
  }
}   

///menudanhmuc
$(document).ready(function() { 
	$("#danhmuc ul li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(300); 
		},function(){ 
		$(this).find('ul:first').css({visibility: "hidden"});
		}); 
	
});  
//masory-hinhanh

$(function() {
    $('.hien_menu').click(function(){
      $('nav#menu_mobi').css({height: "auto"});
    });
    $('nav#menu_mobi').mmenu({
      extensions  : [ 'effect-slide-menu', 'pageshadow' ],
      searchfield : true,
      counters  : true,
      navbar    : {
        title   : 'Menu'
      },
    });
  });



$(document).ready(function(){
			$("#i-dc0").addClass("i-map-at");
			$("#map_canvas0").addClass("zit");
	});
function map(s,sl){
	$(document).ready(function(){
		for(i=0;i<sl;i++)
		{
			$("#i-dc"+i).removeClass("i-map-at");
			$("#i-dc"+s).addClass("i-map-at");
			$("#map_canvas"+i).removeClass("zit");
			$("#map_canvas"+s).addClass("zit");
		}
	});
}
// =============Tab
$(document).ready(function(e) {
    $('#tabs a').click(function(e) {
            var id = $(this).attr('href');
            $('#tabs li').removeClass('active');
            $(this).parent().addClass('active');
            $('#tab-2').css('position','relative');
            $('#tab-2').css('opacity','1');
            $('#tab-1,#tab-2,#tab-3,#tab-4,#tab-5,#tab-6,#tab-7').slideUp(500);
            $('#'+id).slideDown(500);
            return false;
        });
});
function isEmpty(el,text){
    //var el = document.getElementById(id);
    var str = el.value;
    
    if (str != "")
        while (str.charAt(0) == " ")
            str = str.substr(1, str.length);
    
    //return str == "" ? true : false;
    if(str != "") return false;
    if(typeof(text) != 'undefined') alert(text);
    el.value = '';
    el.focus();
    return true;
}

function isNumber(el, text){
    //var el = document.getElementById(id);
    var str = "0123456789";
    for(var j=0; j < el.val().length; j++){
        if(str.indexOf(el.val().charAt(j))==-1){
            if( typeof(text) != 'undefined' )
                alert(text);
            el.val() = '';
            el.focus(); 
            return false;
        }
    }
    return true;
}

function isPhone(el, text){
    //var el = document.getElementById(id);
    var str = "0123456789. ()-";
    var result = true;
    for(var j=0; j < el.val().length; j++){
        if(str.indexOf(el.val().charAt(j))==-1){
            result = false;
            break;
        }
    }
    if(el.val().length < 7) result = false;
    if(!result){    
        el.focus();
        if(typeof(text)!='undefined')   alert(text);
    }
    return result;
}

function check_email(email)
{
    emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/;
    return emailRegExp.test(email);
}

function isEmail(el, text){
    //var el = document.getElementById(id);
    emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/;
    if(!emailRegExp.test(el.value)){
        if(typeof(text)!='undefined')   alert(text);
        el.focus();
        return false;
    }
    return true;
}

function isEmail_2(s){   
  if (s=="") return true;//false;
  if(s.indexOf(" ")>0) return false;
  if(s.indexOf("@")==-1) return false;
  var i = 1;
  var sLength = s.length;
  if (s.indexOf(".")==-1) return false;
  if (s.indexOf("..")!=-1) return false;
  if (s.indexOf("@")!=s.lastIndexOf("@")) return false;
  if (s.lastIndexOf(".")==s.length-1) return false;
  var str="abcdefghikjlmnopqrstuvwxyz-@._"; 
  for(var j=0;j<s.length;j++)
    if(str.indexOf(s.charAt(j))==-1)
        return false;
  return true;
}

function compare(value_1, value_2){
    if(value_1 < value_2)
        return -1;
    if(value_1 > value_2)
        return 1;
    return 0;
}
///kiemtra lienhe

function recaptcha_callback(){
	 $('.btn_send_lienhe').prop("disabled", false);
	 $('.btn_send_lienhe').addClass('enable_buttom');
}



////chatf facebook
$(document).ready(function(){
  if($(window).innerWidth() > 992){
     $( '.taidat-messages' ).animate( { bottom: '180px' } ).animate( 
                { right: '-250px' }, 400,
                 function(){ $( '#taidat-facebook' ).css( 'opacity', 0 ) } );

     $( '#taidat-minimize' ).click( 
        function() {
         if( $( '#taidat-facebook' ).css( 'opacity' ) == 0 ) {
          $( '#taidat-facebook' ).css( 'opacity', 1 ); $( '.taidat-messages' ).animate( { right: '0' } ).animate( { bottom: '180' } );
           } else { 
            $( '.taidat-messages' ).animate( { bottom: '180px' } ).animate( 
                { right: '-250px' }, 400,
                 function(){ $( '#taidat-facebook' ).css( 'opacity', 0 ) } ); } } ) 
	}
	else{
	    $( '.taidat-messages' ).animate( { bottom: '180px' } ).animate( 
	                { right: '-250px' }, 400,
	                 function(){ $( '#taidat-facebook' ).css( 'opacity', 0 ) } );

	     $( '#taidat-minimize' ).click( 
	        function() {
	         if( $( '#taidat-facebook' ).css( 'opacity' ) == 0 ) {
	          $( '#taidat-facebook' ).css( 'opacity', 1 ); $( '.taidat-messages' ).animate( { right: '0' } ).animate( { bottom: '0' } );
	           } else { 
	            $( '.taidat-messages' ).animate( { bottom: '180px' } ).animate( 
	                { right: '-250px' }, 400,
	                 function(){ $( '#taidat-facebook' ).css( 'opacity', 0 ) } ); } } ) 
	 }

});


$(document).ready(function(){
    $('#chon_video').change(function(){
        $id = $(this).val();
        if($id!=''){
        $(".box_video_list").load("ajax/ajax_video.php?id=" + $id);
       
    }
        return false;
    });
});


$(document).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > 160) {
            $('#menu').addClass('fixmenu');
        } else {
            $('#menu').removeClass('fixmenu');
        }
    });      
});
//checkbox
$(document).ready(function() {
    $('.check_box').click(function(){
        $('.check_box').removeClass('checked_box');
        $(this).addClass('checked_box');
        $('.item_list_hinhthuc').removeClass('selected_bg');
        $(this).parent('.item_list_hinhthuc').addClass('selected_bg');
    });
});


//likesp
$(document).ready(function() {
    $('.btn_like').click(function(){
        var id = $(this).data('id');
        var result = '.btn_like_'+id;
        $.ajax({
            url: 'ajax/ajax_like.php',
            type: 'post',
            data: {id:id},
            success:function(msg){
              if(msg==0){
                swal({
                    title:'Bạn đã thích sản phẩm',
                    icon: "success",
                    //buttons: true,
                    //dangerMode: true,
                });
  
              }else{
                $(result).html(msg);
              }
            }
        });
    });
});
///
$(document).ready(function(e) {
    $('#tabs a').click(function(e) {
            var id = $(this).attr('href');
            $('#tabs li').removeClass('active');
            $(this).parent().addClass('active');
            $('#tab-2').css('position','relative');
            $('#tab-2').css('opacity','1');
            $('#tab-1,#tab-2,#tab-3,#tab-4,#tab-5,#tab-6,#tab-7').slideUp(500);
            $('#'+id).slideDown(500);
            return false;
        });
});

//===============Top==================
 $(document).ready(function() {

        $('body').append('<div id="top" ></div>');
        
        $(window).scroll(function() {
            if($(window).scrollTop() > 100) {
                $('#top').fadeIn();
            } else {
                $('#top').fadeOut();
            }
        });
        $('#top').click(function() {
            $('html, body').animate({scrollTop:0},500);
        });
    
});
$.fn.mousehold = function(timeout, f) {
  if (timeout && typeof timeout == 'function') {
    f = timeout;
    timeout = 100;
  }
  if (f && typeof f == 'function') {
    var timer = 0;
    var fireStep = 0;
    return this.each(function() {
      $(this).mousedown(function() {
        fireStep = 1;
        var ctr = 0;
        var t = this;
        timer = setInterval(function() {
          ctr++;
          f.call(t, ctr);
          fireStep = 2;
        }, timeout);
      })

      clearMousehold = function() {
        clearInterval(timer);
        if (fireStep == 1) f.call(this, 1);
        fireStep = 0;
      }
      
      $(this).mouseout(clearMousehold);
      $(this).mouseup(clearMousehold);
    })
  }
}
function controlProductQty(){
  $("button.add-cart").unbind("click");
  $("button.add-cart").click(function(){
    p = $(this).parents(".product-qty");
    //doAddCart($(this).data("name"),$(this).data("id"),p.find("input").val());
    return false; 
  })
  
  $(".product-qty .controls button").unbind("mousehold");
  $(".product-qty .controls button").mousehold(function(){

    a = $(this);
    c = $(this).parent().find("input");
    v = parseInt(c.val());
    
    if(a.hasClass("is-up")){
      v++;
    }else{
    v--;
    }
    if(v <1 ){
      v=1;
    }
    
    c.val(v);
    
  })
}
$(document).ready(function() {
  controlProductQty();
   setTimeout(function(){
     $("#pre-loader").fadeOut(1000);
   },400);
});




//jsdangnhap

$(document).ready(function() {
    $('.dangnhap').fancybox();
    $('.click_dk').click(function(){
      $('.tab_dk').css('display','block');
      $('.tab_dn').css('display','none');
      $('.thanh_danhnhap li').removeClass('active');
      $('.thanh_danhnhap li:nth-child(2)').addClass('active');
    });
    $('.click_dn').click(function(){
      $('.tab_dn').css('display','block');
      $('.tab_dk').css('display','none');
      $('.thanh_danhnhap li').removeClass('active');
      $('.thanh_danhnhap li:nth-child(1)').addClass('active');
    });
});
   

// $(document).ready(function() {
//     $('.dangnhap').fancybox();
//     if($(window).innerWidth() < 992){
//       $('.danhnhap-click').click(function(e) {
//           return false;
//       });
//     }
// });
 // ==============Tabs đăng nhập======
$(document).ready(function(e) {
    $('.thanh_danhnhap li').click(function(e) {
            var id = $(this).attr('data-value');
            $('.thanh_danhnhap li').removeClass('active');
            $(this).addClass('active');
            $('.tab_dn,.tab_dk').slideUp(500);
            $('.'+id).slideDown(500);
            return false;
        });
});
////dang ky
function js_dangky(){
  
    $('#username_dk-error').css({display:'none'});
    $('#hoten_dk-error').css({display:'none'});
    $('#email_dk-error').css({display:'none'});
    $('#matkhau_dk-error').css({display:'none'});
    $('#nhaplaimatkhau_dk-error').css({display:'none'});
    $('#nhaplaimatkhau_dk-error').css({display:'none'});
    $('#captcha_dk-error').css({display:'none'});

       var username_dk = $("#username_dk").val();
       var hoten_dk = $("#hoten_dk").val();
       var email_dk = $("#email_dk").val();
       var matkhau_dk = $("#matkhau_dk").val();
       var nhaplaimatkhau_dk = $("#nhaplaimatkhau_dk").val();
       var captcha_dk = $("#captcha_dk").val();

    
     if(username_dk==''){
       $('#username_dk-error').css({display:'block'});
       $('#username_dk-error').html('Bạn chưa nhập họ tên');
       $("#username_dk").removeClass('valid');
       $("#username_dk").addClass('error');
       $("#username_dk").focus();

    }else if(hoten_dk==''){
       $('#hoten_dk-error').css({display:'block'});
       $('#hoten_dk-error').html('Bạn chưa nhập họ tên');
       $("#hoten_dk").removeClass('valid');
       $("#hoten_dk").addClass('error');
       $("#hoten_dk").focus();

    }else if(email_dk==''){
       $('#hoten_dk-error').css({display:'none'});
       $('#email_dk-error').css({display:'block'});
       $('#email_dk-error').html('Bạn chưa nhập Email');
       $("#email_dk").removeClass('valid');
       $("#email_dk").addClass('error');
       $("#email_dk").focus();

    }else if(!check_email(email_dk)){
       $('#hoten_dk-error').css({display:'none'});
       $('#email_dk-error').css({display:'block'});
       $('#email_dk-error').html('Email chưa đúng định dạng');
       $("#email_dk").removeClass('valid');
       $("#email_dk").addClass('error');
       $("#email_dk").focus(); 

    }else if(captcha_dk==''){
        $('#nhaplaimatkhau_dk-error').css({display:'none'});
        $('#captcha_dk-error').css({display:'block'});
        $('#captcha_dk-error').html('Chưa nhập mã bảo vệ');
        $("#captcha_dk").removeClass('valid');
        $("#captcha_dk").addClass('error');
        $("#captcha_dk").focus();
    }else{
        $.ajax({
          url: 'ajax/kt_email.php',
          type: 'post',
          data: {username: username_dk},
          success:function(username){
              if(username==1){
                $('#username_dk-error').css({display:'block'});
                $('#username_dk-error').html('Tên tài khoản đã được đăng ký');
                $("#username_dk").removeClass('valid');
                $("#username_dk").addClass('error');
                $("#username_dk").focus(); 

              }else if(matkhau_dk==''){
                $('#username_dk-error').css({display:'none'});
                $('#matkhau_dk-error').css({display:'block'});
                $('#matkhau_dk-error').html('Bạn chưa nhập mật khẩu');
                $("#matkhau_dk").removeClass('valid');
                $("#matkhau_dk").addClass('error');
                $("#matkhau_dk").focus(); 

              }else if($('#matkhau_dk').val().length < 8){
                $('#username_dk-error').css({display:'none'});
                $('#matkhau_dk-error').css({display:'block'});
                $('#matkhau_dk-error').html('Mật khẩu phải nhiều hơn 8 chữ số');
                $("#matkhau_dk").removeClass('valid');
                $("#matkhau_dk").addClass('error');
                $("#matkhau_dk").focus(); 

              }else if(nhaplaimatkhau_dk==''){
                $('#matkhau_dk-error').css({display:'none'});
                $('#nhaplaimatkhau_dk-error').css({display:'block'});
                $('#nhaplaimatkhau_dk-error').html('Bạn chưa nhập lại mật khẩu');
                $("#nhaplaimatkhau_dk").removeClass('valid');
                $("#nhaplaimatkhau_dk").addClass('error');
                $("#nhaplaimatkhau_dk").focus(); 

              }else if(matkhau_dk!=nhaplaimatkhau_dk){
                $('#nhaplaimatkhau_dk-error').css({display:'none'});
                $('#nhaplaimatkhau_dk-error').css({display:'block'});
                $('#nhaplaimatkhau_dk-error').html('Xác nhận mật khẩu chưa đúng');
                $("#nhaplaimatkhau_dk").removeClass('valid');
                $("#nhaplaimatkhau_dk").addClass('error');
                $("#nhaplaimatkhau_dk").focus(); 

              }else if(captcha_dk!=''){
                  $.ajax({
                    url: 'ajax/kt_captcha.php',
                    type: 'post',
                    data: {code: captcha_dk},
                    success:function(result){
                        if(result==0){
                           $('#captcha_dk-error').css({display:'block'});
                           $('#captcha_dk-error').html('sai mã bảo vệ');
                           $("#captcha_dk").removeClass('valid');
                           $("#captcha_dk").addClass('error');
                      }else{
                          $.ajax({
                              url: 'ajax/dangky.php',
                              type: 'post',
                              data: {txt_hoten:hoten_dk,txt_email:email_dk,txt_matkhau:matkhau_dk,txt_username:username_dk},
                              success:function(msg){
                                if(msg==1){
                                  alert('Đăng ký thành công');
                                  window.location.href='index.html';
                                }else{
                                  alert('Đăng ký thất bạn vui lòng thử lại');
                                  window.location.href='index.html';
                                }
                              }
                          });
                        }
                    }
                });

              }
            }
        });
    }

}
//dangnhap
$(document).ready(function(e) {
  $('.input_dn').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
    kt();
    }
  });
  $('.btn_dn').click(function(e) {
     kt();
  });
  
  function kt(){
      var username=$('#u_kt').val();
      var mk=$('#p_kt').val();
      var ghinho=document.getElementById("checkbox").checked;

      if(email=='')
      {
        alert('Bạn chưa nhập tên tài khoản');
        $('#u_kt').focus();
        return false;
      }else if(mk=='')
      {
        alert('Bạn chưa nhập mật khẩu');
        $('#p_kt').focus();
        return false;
      }
      else
      {
        $.ajax({
            type: 'GET',
            url: 'ajax/ajax_dangnhap.php',
            data: {username:username,mk:mk,ghinho:ghinho},
            success: function(result){
              if(result==0)
              {
                alert('Mật khẩu không đúng');
              }
              else if(result==1)
              {
                alert('Tên đăng nhập không tồn tại');
              }
              else if(result=='true')
              {
                alert('Đăng nhập thành công');
                window.location="index.html";
              }
            }
        });
      }
  };
});

//quenmatkhau 
$(document).ready(function(e) {
  $(".btnLogin").click(function(){
      var email = $("#txtEmail").val();
      if(email!=''){
        $.ajax({
            url: 'ajax/kt_email.php',
            type: 'post',
            data: {email: email},
            success:function(result){
                if(result==0){
                   $('#txtEmail-error').css({display:'block'});
                   $('#txtEmail-error').html(emailkhongtontaivuilongnhaplai);
                   $("#txtEmail").removeClass('valid');
                   $("#txtEmail").addClass('error');
                }else{
                       document.frmdangky.submit();
                }
            }
        });
      }else{
         $('#txtEmail-error').css({display:'block'});
         $('#txtEmail-error').html(banchuanhapemail);
         $("#txtEmail").removeClass('valid');
         $("#txtEmail").addClass('error');
      }
  });
});

$(document).ready(function() {
  $(".cart-items-list").mCustomScrollbar({});
  // load_mini();
  $('.btn-close').click(function(event) {
    $('.popup').removeClass('active');
  });  
  $('.click_gh').click(function(event) {
    $('.popup').addClass('active');
    load_mini();
  }); 
  $('.popup').click(function(e) {
      if (e.target == this ) {
        $('.popup').removeClass('active');
      }
  });  
  

});

// function load_mini(){
//   $.ajax({
//     url:"ajax/ajax_gh_mini.php",
//     dataType:'json',
//     success:function(data){
//         $(".mini-products-list").html(data.item);
//         $(".footer_cart").html(data.footer_cart);
//         $(".kitu #soluongmua").text(data.get_total);
//         $('.cart-item-amount').html(data.title_gh);
//     }
//   });
// }
function refreshCart_mini(){
  load_mini();
}
function deleteCart_mini(id){
  swal({
      title: bancochacchanxoasp,
      icon: "warning",
      buttons: true,
      dangerMode: true,
  })
  .then((thongbao) => {
    if(thongbao){
      initAjax({
        url:"ajax/delete-cart.html",
        data:{id:id},
        success:function(data){
          refreshCart_mini();
        }
      })
    }
  });
}
  

