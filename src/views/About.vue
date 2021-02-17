<template>
  <div class="about">
    {{ number }}
  </div>
  <ul>
    <li v-for="twoot in twoots" :key="twoot">
      <p>{{ twoot.title }}</p>
      <p>{{ twoot.tags }}</p>
      <p>{{ twoot.time }}</p>
    </li>    
  </ul>
  
  <button type="button" @click="numberAdd">add</button>
</template>
<script>
export default {
  data(){
    return {
      number : 0,
      twoots: [
        {id:1, title:"test1", tags:"#HTML #CSS #Javascript #Jquery", time: new Date('2019-06-28') },
        {id:2, title:"test2", tags:"#HTML #CSS ", time: new Date('2019-06-10') }
      ]
    }
  },
  methods : {
    numberAdd(){
      this.number++;
      console.log(this.number)
    }
  },
  mounted(){
    this.numberAdd()
  }
} 
</script>
<style scoped>
  .about {margin-top : 50px; text-align: center;}
  button {display: block; width: 100%; height: 50px;}
</style>