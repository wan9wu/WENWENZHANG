$(document).ready(function(){
    console.log("document is ready.");
    lazyload();
    let lazy = lazyload();

    $("div.ci_body").first().show(1000);

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

        var DataContentId = "#" + $(this).attr("data-content-id");
        var t = $(DataContentId).offset().top;//  获取需要跳转到标签的top值
        console.log(DataContentId,t,$('#details').scrollTop());
        $("#details").animate({ scrollTop: $('#details').scrollTop()+t-30}, 1000); // 动态跳转到指定位置（数值越大滚动速度越慢）
        
        
    });

    $("#p_title").click(function(){
        $("div.ci_body").each(function(){$(this).hide(500);});
        $("div.ci_body").first().show(1000);

        $("#details").animate({ scrollTop: -30}, 1000); // 动态跳转到指定位置（数值越大滚动速度越慢）
        
        $("#catalogue").animate({ scrollTop:-30}, 1000);
    });

    setTimeout(function (){
        lazy.loadAndDestroy();
    }, 3000);
    

});