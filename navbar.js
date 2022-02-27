$(document).ready(function(){
    $(".child").click(function(){
        $(".nav2").toggle();
    })
        $(".nav-link").click(function(){
          $(this).find("#div1").load("demo_test.txt");
        });
}) 