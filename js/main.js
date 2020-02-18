/*dangkynhantin*/
$(document).ready(function() {
  $('#gui1').click(function() {
    nhantin();
  
  });
});
function doEnter_nhantin(evt){
    var key;
    if(evt.keyCode == 13 || evt.which == 13){
        nhantin(evt);
    }
}
function nhantin(evt) {      

    var email = $('.dangkymail_ft #emaildk1').val();
        if(email=='' || email==nhapdiachiemail){
            alert(banchuanhapemail);
            $('.dangkymail_ft #emaildk1').focus();
        }else if(!check_email(email)){
            alert(checkemail);
            $('.dangkymail_ft #emaildk1').focus();
        }
        else {
            $.ajax ({
                type: "POST",
                url: "ajax/dangky_email.php",
                data: {email:email},
                success: function(result) { 
                    if(result==0){
                        $('.dangkymail_ft #emaildk1').attr('value','');
                        $('.dangkymail_ft #emaildk1').focus();
                        alert(dangkythanhcong);
                    } else if(result==1){
                        alert(emaildaduocdangky);
                        $('.dangkymail_ft #emaildk1').focus();
                    } else if(result==2){
                        alert(dangkykhongthanhcong);
                    }else if(result==4){
                        alert(count_dangky);
                    }

                }
            });
        }     
    
}       

$(document).ready(function(){
  $('.chay_tintuc').slick({
    vertical:true,//Chay dọc
    slidesToShow: 5,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:false, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
  });
});

////trangchitietsp////

$(document).ready(function(){
  $('.chayhinhcon').slick({
    //vertical:true,//Chay dọc
    slidesToShow: 4,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:false, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
    responsive: [
    {
        breakpoint: 1030,
        settings: {
            slidesToShow:4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 801,
        settings: {
            slidesToShow:3,
            slidesToScroll: 1,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow:5,
            slidesToScroll: 1,
            dots: false
        }
    },
    {
        breakpoint: 350,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false
        }
    }
    ]
  });
});
// map_nho

////tintuc
$(document).ready(function(){
  $('.chaytintuc').slick({
    vertical:true,//Chay dọc
    slidesToShow: 3,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:false,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:false, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
  });
});

///chon video
$(document).ready(function(){
    $('.slick_video a').click(function(){
        var $id = $(this).attr('href');
        if($id!=''){
          $(".content_video iframe").attr("src",$id);
      }
        return false;
    });
});   
///chayvideocon
$(document).ready(function(){
  $('.slick_video').slick({
    vertical:true,//Chay dọc
    slidesToShow: 4,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:false, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
  });
});
///doitac
$(document).ready(function(){
  $('.chaydoitac').slick({
    //vertical:true,//Chay dọc
    slidesToShow: 6,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:false, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
    responsive: [
    {
        breakpoint: 1030,
        settings: {
            slidesToShow:3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 801,
        settings: {
            slidesToShow:3,
            slidesToScroll: 1,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
        }
    },
    {
        breakpoint: 350,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
        }
    }
    ]
  });
});

///chaysptieubieu
$(document).ready(function(){
  $('.chay_tieubieu').slick({
    vertical:false,//Chay dọc
    slidesToShow: 4,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:true, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
        responsive: [
    {
        breakpoint: 1030,
        settings: {
            slidesToShow:4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 801,
        settings: {
            slidesToShow:2,
            slidesToScroll: 1,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
        }
    },
    {
        breakpoint: 350,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        }
    }
    ]
  });

  $('.chay_noibat').slick({
    vertical:false,//Chay dọc
    slidesToShow: 4,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    slidesPerRow: 1,
    rows: 2,
    infinite: true,
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:true, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
        responsive: [
    {
        breakpoint: 1030,
        settings: {
            slidesToShow:4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 801,
        settings: {
            slidesToShow:2,
            slidesToScroll: 1,
            slidesPerRow: 1,
            rows: 1,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            slidesPerRow: 1,
            rows: 1,
            dots: false
        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            slidesPerRow: 1,
            rows: 1,
            dots: false
        }
    },
    {
        breakpoint: 350,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            rows: 1,
            dots: false
        }
    }
    ]
  });
});

///chaysplq
$(document).ready(function(){
  $('.chay_splq').slick({
    vertical:false,//Chay dọc
    slidesToShow: 4,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:true, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
        responsive: [
    {
        breakpoint: 1030,
        settings: {
            slidesToShow:3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 801,
        settings: {
            slidesToShow:3,
            slidesToScroll: 1,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
        }
    },
    {
        breakpoint: 350,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        }
    }
    ]
  });
});

///chaysphangmoive
$(document).ready(function(){
  $('.chay_hangmoive').slick({
    vertical:false,//Chay dọc
    slidesToShow: 4,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:true, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
        responsive: [
    {
        breakpoint: 1030,
        settings: {
            slidesToShow:3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 801,
        settings: {
            slidesToShow:2,
            slidesToScroll: 1,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
        }
    },
    {
        breakpoint: 350,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        }
    }
    ]
  });
});



