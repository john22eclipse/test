/**
 * Created by Administrator on 2016/5/26.
 */
$(function(){
    /*案例导航*/
    $('#case_nav').find('li').hover(
        function(){
            $(this).addClass('hover');
        },
        function(){
            $(this).removeClass('hover');
        }
    );

    /*主页导航滚动*/
    <!--首页-->
    $('#home').on('click',function(){
        removeCls();
        setTimeout(texteffects,1000);
        $(this).addClass('hover');
        scrollcontent($('#banner'));
    });
    <!--我们的服务-->
    $('#serve').on('click',function(){
        removeCls();
        $(this).addClass('hover');
        scrollcontent($('#content1'));
    });
    <!--公司简介-->
    $('#case').on('click',function(){
        removeCls();
        $(this).addClass('hover');
        scrollcontent($('#content2'));
    });
    <!--公司价值观-->
    $('#values').on('click',function(){
        removeCls();
        $(this).addClass('hover');
        scrollcontent($('#content3'));
    });
    <!--医疗智能化-->
    $('#intelligent').on('click',function(){
        removeCls();
        $(this).addClass('hover');
        scrollcontent($('#content4'));
    });
    <!--团队介绍-->
    $('#team').on('click',function(){
        removeCls();
        $(this).addClass('hover');
        scrollcontent($('#content5'));
    });
    <!--联系我们-->
    $('#contact').on('click',function(){
        removeCls();
        $(this).addClass('hover');
        scrollcontent($('#content6'));
    });

    /*案例图片效果*/
    $('#content1_case').find('img').hover(
        function(){
        $('#content1_case').find('img').stop(true,true);
        $(this).velocity({
            'width':'343px',
            'height':'294px',
            'margin-left':'-29px',
            'margin-top':'-25px'
        });
    },
        function(){
        $('#content1_case').find('img').stop(true,true);
        $(this).velocity({
            'width':'285px',
            'height':'244px',
            'margin-left':'0px',
            'margin-top':'0px'
        });
    }
    );

    texteffects();

    function texteffects(){
        $('#vision').velocity("callout.swing");
    }

    function scrollcontent(obj){
        obj.velocity("scroll", 1000);
    };

    function removeCls(){
        $('.nav').find('a').each(function(i){
            if($(this).hasClass('hover')){
                $(this).removeClass('hover');
            }
        });
    }
});