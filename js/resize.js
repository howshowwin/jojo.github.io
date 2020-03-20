$(function () {
    $(window).resize(objSizeReset);
    objSizeReset();
    function objSizeReset() {
        convertSizeALL('.outside-frame');

    }



    $(window).on('load', function () {
        objSizeReset();
    });


});
var canvasHH
var canvasWW
var b4_inline_style = `width:${Math.round(90 * sRatio) + "px"};height:auto;`
var sR = 1
var spcial_move = ''
var inline_style = `width:${Math.round(124 * sRatio) + "px"};height:auto};`
var popo = $('.append_box_word').offset().left
var jiji = $('.canvas_wrapper').offset().top
function convertSizeALL(className) {

    var w = 1920, h = 900;
    var iw = $(window).innerWidth(), ih = $(window).innerHeight();
    var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
    sRatio = Math.min(xRatio, yRatio);
    $(className).css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".outside-frame").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    inline_style = `width:${Math.round(124 * sRatio) + "px"};height:auto};`
    popo = $('.append_box_word').offset().left
    jiji = $('.canvas_wrapper').offset().top
    var reW = 1.92771084337349
    var reH = 1.31964809384164
    $("body").css("margin-left", (iw - Math.round(w * sRatio)) / 2);
    $("body").css("margin-top", "0");
    $("body").css("zoom", "100%");
    canvas.setHeight(900*sRatio);
    canvas.setWidth(1340*sRatio);
    sR = Math.min(xRatio, yRatio);
    spcial_move = (iw - Math.round(w * sRatio)) / 2
    b4_inline_style = `width:${Math.round(90 * sRatio) + "px"};height:auto;`
    $(".box").css({ width: Math.round(270 * sRatio), height: Math.round(680 * sRatio) });
    // $('canvas').css({ width: Math.round(1620  * sRatio), height: Math.round(700* sRatio) });
    $('.carousel-item img').css({ width: Math.round(295 * sRatio), height: Math.round(138 * sRatio) });
    $(".ans_hv,.ans2_hv,.ans3_hv").css({ width: Math.round(89.5 * sRatio), height: Math.round(44 * sRatio) });
    $(".clear_frame").css({ width: Math.round(300 * sRatio), height: Math.round(170 * sRatio) });
    $('.input_1').css({ width: Math.round(200 * sRatio), height: Math.round(165 * sRatio), fontSize: Math.round(50 * sRatio) });
    $('.btn_1').css({ width: Math.round(90 * sRatio), height: Math.round(160 * sRatio) });
    $('.btn_1 img').css({ width: Math.round(40 * sRatio), height: Math.round(50 * sRatio) });
    $("#imgset").css({ width: Math.round(1920 * sRatio), height: Math.round(195 * sRatio) });
    $('.imgbox img').css({ width: Math.round(100 * sRatio), height: Math.round(100 * sRatio) });
    $('.imgbox ').css({ width: Math.round(100 * sRatio), height: Math.round(200 * sRatio), marginRight: Math.round(80 * sRatio) });
    $('.es-input').css({ width: Math.round(120 * sRatio), height: Math.round(30 * sRatio) });
    $('.change_frame').css({ width: Math.round(340 * sRatio), height: Math.round(200 * sRatio) });
    $('.btn_3,.btn_4,.btn_5').css({ width: Math.round(170 * sRatio), height: Math.round(60 * sRatio), fontSize: Math.round(15 * sRatio) });
    $('.btn_6').css({ width: Math.round(60 * sRatio), height: Math.round(60 * sRatio) });
    $("#background_canvas").css({ width: Math.round(1570 * sRatio), height: Math.round(678 * sRatio) });
    $('.info_change').css({ fontSize: Math.round(60 * sRatio) })
    $('.info_delete').css({ fontSize: Math.round(60 * sRatio) })
    $('.outside_frame').css({ width: Math.round(1920 * sRatio), height: Math.round(900 * sRatio) })
    $('.outside_frame_main').css({ width: Math.round(1920 * sRatio), height: Math.round(900 * sRatio) })

    $('.append_box_word').css({ width: Math.round(300 * sRatio), height: Math.round(300 * sRatio) })
    $('.canvas_wrapper ').css({ width: Math.round(1340 * sRatio), height: Math.round(900 * sRatio) })
    canvasHH = Math.round(847 * sRatio)
    canvasWW = Math.round(1340 * sRatio)
    $('.next img,.pre img').css({ width: Math.round(40 * sRatio), height: Math.round(40 * sRatio) })
    $('.ab-bb-next img,.ab-bb-pre img').css({ width: Math.round(40 * sRatio), height: Math.round(40 * sRatio) })
    $('.classindex img').css({ width: Math.round(168 * sRatio), height: Math.round(168 * sRatio) })
    $('.btn_choose .btn').css({ width: Math.round(90 * sRatio), height: Math.round(158 * sRatio) })
    $('.dotbox').css({ width: Math.round(250 * sRatio), height: Math.round(30 * sRatio) })
    $('.dot').css({ width: Math.round(30 * sRatio), height: Math.round(30 * sRatio), marginLeft: Math.round(0 * sRatio) })
    $('.append_box_word').css({ width: Math.round(380 * sRatio), height: Math.round(550 * sRatio) });
    $('.out-layout').css({ width: Math.round(194 * sRatio), height: Math.round(213 * sRatio) });
    $('.layout-img').css({ width: Math.round(102 * sRatio), height: Math.round(130 * sRatio) });
    $('.in-flex-box').css({ width: Math.round(1396 * sRatio), height: Math.round(214 * sRatio) });
    $('.font-box').css({ width: Math.round(1280 * sRatio), height: Math.round(155 * sRatio) });
    $('.box-pic').css({ width: Math.round(110 * sRatio), height: Math.round(120 * sRatio) });
    $('.box-pic10').css({ width: Math.round(130 * sRatio), height: Math.round(120 * sRatio) });
    $('.choose_area').css({ width: Math.round(630 * sRatio) });
    $('.choose_btn').css({ width: Math.round(161 * sRatio), height: Math.round(90 * sRatio), marginRight: Math.round(10 * sRatio) });
    $('.tool-img').css({ width: Math.round(73 * sRatio), height: Math.round(73 * sRatio), marginRight: Math.round(20 * sRatio) });

    // canvas.setHeight(  canvasHH); 
    // canvas.setWidth(  canvasWW); 
    if($('.dotbox').width()<65){
        $('.dotbox').css({top: "80%" })
        $('.ab-bb-next').css({top: "80%" })
        $('.ab-bb-pre').css({top: "80%" })
        $('.next').css({top: "80%" })
        $('.pre').css({top: "80%" })

    }else if(($('.dotbox').width()>60)){
        $('.dotbox').css({top: "85.5%" })
        $('.ab-bb-next').css({top: "85.5%" })
        $('.ab-bb-pre').css({top: "85.5%" })
        $('.next').css({top: "85.5%" })
        $('.pre').css({top: "85.5%" })
    }

    // canvas.renderAll(); 
    change_img = $("#defaultImg").css('width')
    console.log("1" + change_img)

    let scalenow = parseInt(change_img) / parseInt(width_img)
    image_q.forEach((obj) => {
        console.log(obj._element.x
        )

        obj.scaleX = obj.scaleX * scalenow

        obj.scaleY = obj.scaleY * scalenow
        obj.left = obj.left * scalenow
        obj.top = obj.top * scalenow
        //這樣才會改變控制
        obj.setCoords()
        // obj.width=  obj._element.naturalWidth* scalenow
        // obj.height=  obj._element.naturalHeigh* scalenow


    });

    canvas.discardActiveObject().renderAll()
    // canvas.discardActiveObject().renderAll()
    canvas.renderAll()
    setword()
    width_img = change_img
    // width_img = $("#defaultImg").css('width')
    if (control_btn == 4) {


        if ($('.pic_number').length >= 1) {
            let pic_length = $('.pic_number').length
            let pic_app = 8 - pic_length
            for (i = 0; i < pic_app; i++) {
                if (control_btn == 4) {
                    $('.append_box_word').append(
                        `<img id="defaultImg" style=${b4_inline_style} class="pic_number grid${pic_length + i + 1}"'  draggable>`
                    )
                } else
                    $('.append_box_word').append(

                        `<img id="defaultImg" style=${inline_style} class="pic_number grid${pic_length + i + 1}"'  draggable>`
                    )
            }
        }



        $('.append_box_word').append(`
<img id="defaultImg" style=${b4_inline_style} class="pic_number grid100" src='img/page/0.svg'  draggable>
<img id="defaultImg" style=${b4_inline_style} class="pic_number grid101" src='img/page/1.svg'  draggable>
<img id="defaultImg" style=${b4_inline_style} class="pic_number grid102" src='img/page/2.svg'  draggable>
<img id="defaultImg" style=${b4_inline_style} class="pic_number grid103" src='img/page/3.svg'  draggable>
`)
    }











}
// var height_img
var width_img = $("#defaultImg").css('width')

// var resize_change_items = function () {
//     setTimeout(function () {
//         height_img = $("#defaultImg").css('height')
//         width_img = $("#defaultImg").css('width')
//         console.log(height_img)
//         console.log(width_img)
//     }, 500)
// }

// $(window).resize(function () {
//     resize_change_items()

// })

// resize_change_items()