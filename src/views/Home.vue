<template>
  <div>
    <ul class="inp-list">
        <li><input type="number" v-model="avg.money1" placeholder="기존 매입가"></li>
        <li><input type="number" v-model="avg.amount1" placeholder="기존 매입 수량"></li>
        <li><input type="number" v-model="avg.money2" placeholder="추가 매입가"></li>
        <li><input type="number" v-model="avg.amount2" placeholder="추가 매입 수량"></li>
    </ul>
    <div class="result-box">예상 단가 : {{ avgFnc }}</div>
    <ul class="inp-list">
        <li><input type="number" v-model="pdc.money1" placeholder="기존 매입가"></li>
        <li><input type="number" v-model="pdc.amount1" placeholder="기존 매입 수량"></li>
        <li><input type="number" v-model="pdc.money2" placeholder="매도 희망가"></li>
    </ul>
    <div class="result-box">평가손익가 : {{ pdcFncTxt  }} <span :class="[{ redC : pdcPer > 0 },{ blueC : pdcPer < 0 }]"> {{ pdcPerTxt }} </span></div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
  //  HelloWorld
  },
  data(){
    return {
      avg : {
          money1 :'',
          money2 :'',
          amount1 :'',
          amount2 :'',
          re : ''
      },
      pdc : {
          money1 :'',
          money2 :'',
          amount1 :'',
          re : this.pdcFnc,
          per : this.pdcPer
      },
      message : "ddf",
      toggle: this.enter
    }
  },
  computed : {
      avgFnc : function(){
          var m1 = Number(this.avg.money1);
          var m2 = Number(this.avg.money2);
          var a1 = Number(this.avg.amount1);
          var a2 = Number(this.avg.amount2);
          var re = 0;

          if( m1=='' || m2=='' || a1=='' || a2==''){
              re =' '
              return re
          } else {
              re = ((m1 * a1)  + (m2 * a2)) / (a1 + a2);
              re = parseInt(re);
          }
          return re;
      },
      pdcFnc : function(){
          var tax1 = 0.00015; //수수료
          var tax2 = 0.0025; //세금
          var tax3 = 0;
          var m1 = Number(this.pdc.money1);
          var m2 = Number(this.pdc.money2);
          var a1 = Number(this.pdc.amount1);
          var re = 0;
          if( m1=='' || m2=='' || a1==''){
              re = ''
          } else {
              tax3 = Math.round((m1 * a1) * tax1) + Math.round((m2 * a1) * tax1) + Math.round((m2 * a1) * tax2);
              re = Math.round ((m2 * a1) - (m1 * a1) - tax3 );
          }
          return re;
      },
      pdcPer : function(){
          var m1 = Number(this.pdc.money1);
          var a1 = Number(this.pdc.amount1);
          var per = 0;
          var re = this.pdcFnc;
          if( m1=='' || a1=='' || re==''){
              per = '';
          } else {
              per = ( re / Math.round(m1 * a1) ) * 100;
              per = per.toFixed(2);
          }
          return per
      },
      pdcFncTxt :function (){
        var txt = this.pdcFnc;
        if(txt == ''){
            txt == ''
        } else {
            txt = '₩ ' + txt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return txt
      },
      pdcPerTxt : function(){
        var txt = this.pdcPer;
        if(txt == ''){
            txt == ''
        } else {
            txt =  txt + '%'
        }
        return txt
      }
  },
  methods : {
      enter : function(){
          console.log('a');
      },
      
  }
}
</script>