$(function(){ 
    $("#header").load("header.html");  
    $("#footer").load("footer.html");  

    $('.radio_pwd').click(function(){
        console.log(1);
        $('.find_id').css('display','none') ;  
        $('.find_pwd').css('display','block')   ;
        
    })
    $('.radio_id').click(function(){
        console.log(1);
        $('.find_pwd').css('display','none') ;  
        $('.find_id').css('display','block')   ;
        
    });
      
    //console.log($('.menu').position().left)
    var q_left = $('.mem_content').position().left+1300;
    
    var q_top = $('.mem_content').position().top;
   
    $(".mypage_ad").css({
        'top':'350px',
        'left':q_left
    });
    
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        var new_top = $(window).scrollTop()+330;
        $(".mypage_ad").stop().animate({
        'top':new_top, 'left':q_left
        
    },300);
    })

    $('.del_why ').change(function(){
        console.log($(this).val())
        if($(this).val() == 'mass' ){
            $('.hidden').show();  
        } else{
            $('.hidden').hide();  
        }           
    })
    $('.up_spancon_t > select').change(function(){
        var msg = $(this).val();
        $('#emailv').val(msg);
        if(msg ==""){
            $('#emailv').show();
        }else{
            $('#emailv').hide();
        }
        })   
 
  
    
  }); 
  function ShowCurrentTime() {
    $.ajax({
        async: false,
        type: "POST",
        url: "Default.aspx/GetCurrentTime",
        data: '{name: "Mudassar" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            alert(response.d);
        }
    });
   
}