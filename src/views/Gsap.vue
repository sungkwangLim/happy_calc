<template>
  <div class="gsap-wrap">
    <div class="gbox orange"></div>
    <div class="gbox grey"></div>
    
    <div class="drag"></div>
    <div class="gsap-cont"></div>
    <div class="gsap-cont">
      <div class="gbox green"></div>
      <div class="gimg">

      </div>
    </div>
    
  </div>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 
export default {
    name :'Gsap',

    methods : {
        gsapFnc(){
            gsap.to(".gbox", {duration: 2, x: 300,stagger:0.5,});
            gsap.to(".green", {
              duration: 3, rotation: 360, scale: 1.5, background:"#ff00ff",
              y:"random(-100, 100, 5)",
              ease: "elastic",
              yoyo:true

            });

            Draggable.create(".drag", {
              //type:"y",
              bounds: document.getElementById('app'),
              inertia: true,
              onClick: function() {
                  console.log("clicked");
              },
              onDragEnd: function() {
                  console.log("drag ended");
              }
          });
        },
        gsapScroll(){
          // gsap.to(".green",{
          //   scrollTrigger:{
          //     trggier:"#app",
          //     start:"top 80%",
          //     end:"bottom 20%",
          //     markers:true,
          //     toggleAction:"restart pause reverse pause",
          //   },
          //   x:400,
          //   rotation:360,
          //   duration:3
          // })
          // const tl = gsap.timeline({
          //   scrollTrigger : {
          //     trggier : '.gimg',
          //     start:"1000px 80%",
          //     end:"1500px 20%",0
          //     markers: true,
          //     scrub: 0.5
          //   }
          // })
          gsap.to(".green", {
            xPercent:500, 
            scale:2, 
            duration: 1,
            scrollTrigger: {
              trigger : ".green",
              start : "top center",
              markers: true,
            }
          })
          gsap.to(".gimg", {
            backgroundSize:"115% 115%", 
            duration: 1,
            scrollTrigger: {
              trigger : ".gimg",
              start : "top center",
              end : "bottom center",
              scrub: 1,
              markers: true,
            },
            ease: "power2.Out",
          })
        }
    },
    mounted(){ 
        //this.gsapFnc();
        this.gsapScroll();
    }
}
const calculator = {
  plus : function (a,b) {
    return a + b
  },
  minus : function (a,b) {
    console.log(this.plus(a,111));
    console.log(this.multiply(a,111));
    console.log(this.divide(a,111));
    console.log(this.remainder(a,111));
    console.log(this.power(a,3));
    return a - b
  },
  multiply: function (a,b){
    return a * b
  },
  divide : function(a,b) {
    return a / b
  },
  remainder : function(a,b) {
    return a % b
  },
  power : function(a,b){
    return a ** b
  }
};
console.log(calculator.minus(4,6))
// console.log(document)
</script>
<style scoped>
#app{padding: 0;}
</style>
<style  scoped>
.gsap-wrap {
  height: 10000px;
}
.gsap-cont {
  height: 100vh;
}
.gbox {
  display: block;
  width:50px;
  height:50px;
  position:relative;
  border-radius:6px;
  margin-top:4px;
  line-height:50px;
  text-align:center;
  color:#333;
}
.green{
  position: relative;
  background-color:#6fb936;
  transform: translate(0,5px);
}

.orange {
  background-color:#f38630;
}
.grey {
  background-color:#989898;
}

.drag {
  display: block;
  width:50px;
  height:50px;
  position:relative;
  border-radius:6px;
  margin-top:4px;
  line-height:50px;
  text-align:center;
  background-color:#073283;
}
.gimg {
  width: 100%;
  height: 36.43vw;
  background:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/56901/1a-small.jpg') no-repeat center center / 100% 100%;
}
</style>