$(document).ready(function(){
    console.log("document is ready.");

    $("div.ci_body").first().show(1000);
    $("#dt_01").show(1000);

    $("div.header_button").mouseenter(function(){
        $("span.circle").each(function(){$(this).hide()});
        $(".detail_box").each(function(){$(this).hide()});  
        $(this).children("span.circle").show();
        var HeaderDetailId = "#" + $(this).attr("data-detail-id");
        $(HeaderDetailId).show();
    });
    $(".detail_box").mouseleave(function(){
        $("span.circle").each(function(){$(this).hide()});
        $(".detail_box").each(function(){$(this).hide()});
    });


    $("div.ci_header").click(function(){
        $("div.ci_body").each(function(){$(this).hide(500);});
        $(this).next().show(1000);

        $("div.details_content").each(function(){$(this).hide(500);});
        var DataContentId = "#" + $(this).attr("data-content-id");
        $(DataContentId).show(1000);
    });


});