<template>
  <div class="map-wrap">
      <div class="map-cont">
            <div class="box box1" @click="layerPopup()">
                사우디 아라비아
                <span class="box-in">
                    <span class="box-wheel"></span>
                    <span class="box-wheel"></span>
                </span>
            </div>
      </div>
  </div>
  <div class="map-layer">
      <div class="map-layer-cont">
          사우디아라비아 컨텐츠
      </div>
      <button type="button" @click="layerPopupClose()">&times;</button>
  </div>
  <div class="map-link">
      <ul>
          <li><a href="#"  @click="goTo()">사우디로 이동</a></li>
      </ul>
  </div>
  <div class="map-preview">
      <div class="map-cont">
          <div class="pbox"></div>
      </div>
  </div>
  <!-- <div style="position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: 11; background: rgba(0,0,0,0.5);" ></div> -->
</template>

<script>
import ScrollBooster from 'scrollbooster';
import $ from "jquery";
var scr,mc,widthScreen,heightScreen,timer;
export default {
    name: 'Area',
    // created() {
    //     let recaptchaScript = document.createElement('script')
    //     recaptchaScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js')
    //     document.head.appendChild(recaptchaScript)
    // },
    methods: {
        layerPopup(){            
            $('.box.box1').addClass('active');            
             timer = setTimeout(function(){
                $('.map-layer').addClass('active');
            }, 5000);
        },
        layerPopupClose(){
            $('.map-layer').removeClass('active');
            $('.box.box1').removeClass('active');
            clearTimeout(timer)
        },
        goTo(){
            scr.scrollTo({ 
                x: mc.position().left - widthScreen/2 + mc.width() / 2 , 
                y: mc.position().top - heightScreen/2 + mc.height() / 2
            });
        },
        scrollboosters(){
            widthScreen = window.innerWidth;
            heightScreen = window.innerHeight;
            //var mp = document.querySelector(".map-cont");
            mc = $('.box.box1');
            scr = new ScrollBooster({
                viewport: document.querySelector('.map-wrap'),
                scrollMode: 'transform',
                bounce: false,
                direction : 'all',
                onUpdate : function(d){
                    
                    $('.map-preview .map-cont .pbox').css({
                        'transform' : 'translate(' +d.position.x * 0.04 + 'px , ' + d.position.y * 0.04 + 'px )'
                    });
                   
                }
            });
            scr.setPosition({
                //  x: widthScreen/2, 
                //  y: heightScreen/2,
                //  x: mc.position().left - widthScreen/2 + mc.width() / 2 , 
                //  y: mc.position().top - heightScreen/2 + mc.height() / 2
            });
        },
        jqueryFnc(){
            // var widthScreen = window.innerWidth;
            // var heightScreen = window.innerHeight;
            // var mc = $('.box.box1');
            
            // console.log(mc.width() / 2 + widthScreen/2,mc.height() / 2 + heightScreen/2);
            // scr.scrollTo({ x:  mc.position().left - widthScreen/2 + mc.width() / 2 , y: mc.position().top - heightScreen/2 + mc.height() / 2});
            var cw = $('.map-wrap .map-cont').width();
            var ch = $('.map-wrap .map-cont').height();
            
            console.log(cw * 0.04, ch * 0.04 , widthScreen , heightScreen);
            $('.map-preview .map-cont').width(cw * 0.04);
            $('.map-preview .map-cont').height(ch * 0.04);
            $('.map-preview .map-cont .pbox').width(widthScreen * 0.04 );
            $('.map-preview .map-cont .pbox').height(heightScreen * 0.04 );
            // $('.map-preview .map-cont .pbox').draggable();

            $('.map-wrap').on('touchmove',function(){
                if(!$('.map-preview').is(':visible')){
                    $('.map-preview').fadeIn(200);
                }
            });
            $('.map-wrap').on('touchend',function(){
                $('.map-preview').fadeOut(300);
                //console.log($('.map-preview').is(':visible'));
            });
        }
    },
    mounted(){
        this.scrollboosters();
        this.jqueryFnc();
    } 
}
</script>
<style>
body,html{margin: 0;padding: 0;width: 100%;height: 100%; max-height: 100vh;-webkit-touch-callout: none; overflow: hidden;}
nav {position: fixed; left: 15px; top: 15px;}
#app {max-width:none; padding: 0; width: 100%; height: 100%;  overflow: hidden;}
</style>
<style  scoped>
.map-wrap {position: relative; width: 100%; height: 100%; cursor: grab;}
.map-cont {position: absolute; width: 600vw; height: 358.5vw; touch-action: none; user-select: none; background: url("../assets/img/space.jpg") no-repeat 0 0 / cover;}
.map-cont img {width: 100%; height: 100%;}
.box {position: absolute; width: 10%;height: 13%; left: 33%; top: 36%;  background: none; border: 1px solid #f00; cursor:url(https://ani.cursors-4u.net/games/gam-16/gam1571.ani), url(https://ani.cursors-4u.net/games/gam-16/gam1571.png), default !important;}
.box .box-in {position: absolute; left: 0; bottom: 0; width: 200px; height: 50px; background: #000; transform: translate(-150%,200%); opacity: 0;}
.box .box-in .box-wheel {position: absolute; width: 30px; height: 30px; background: #fff; transform: rotate(360deg);}
.box .box-in .box-wheel:nth-of-type(1) {left: 15px; bottom: -30px;}
.box .box-in .box-wheel:nth-of-type(2) {right: 15px; bottom: -30px;}
.box.active .box-in {animation: filter 5s;}
.box.active .box-in .box-wheel {animation: wheel 2s linear infinite ; }

.map-layer {position: fixed; right: 15px; top: 15px; bottom: 15px; width: 300px; border: 1px solid #000; display: none;}
.map-layer.active {display: block;}
.map-layer .map-layer-cont {position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: #fff;}
.map-layer button {position: absolute; left: -30px; top: 0; width: 30px; height: 30px;}
.map-link {position: fixed; left: 15px; top: 15px; z-index: 1;}
.map-link li {list-style: none;}
.map-link li a {display: inline-block; color: #fff; background: #000; text-decoration: none; padding: 10px;}
.map-preview {display: block; z-index: 1;}
.map-preview .map-cont {position: fixed; left: 10px; bottom: 10px;  width: 24vw; height: 14.32vw;}
.map-preview .map-cont .pbox {position: absolute; left: 0; top: 0; width: 4vw ; height: 4vh; border: 1px solid #ff0; transition: 0.1s all;}
@keyframes filter {
	0%   {}
  50%  { transform: translate(0, 200%); opacity: 1;}
  100% { transform: translate(0, 0);}
}
@keyframes wheel {
	0%   {transform: rotate(0);}
  100% {transform: rotate(360deg);}
}

</style>
