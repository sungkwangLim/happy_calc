<template> 
  
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">ㅁㄴㅇㄹ</router-link>
  </nav>
  <router-view/>
  
</template>

<style>
 * {margin: 0; padding: 0; box-sizing: border-box; }
  #app {max-width:920px; margin: 0 auto; width: 100%; padding: 15px;}
  h1 {margin-bottom: 50px; border: 5px solid #f00; font-size:50px; line-height:70px; text-align: center; color:#f00;}
  .inp-list {margin-top: 50px;}
  .inp-list li {list-style: none; margin-bottom: 10px;}
  .inp-list li input {width: 100%; height: 42px; padding: 10px; border: none; border-bottom: 1px solid #000;}
  .result-box {text-align: center; font-size: 16px; padding: 50px 0; font-weight: bold;}
  .result-box span {margin-left: 5px;}
  .redC {color: #f00; font-weight: bold;}
  .blueC {color: #00f;}
</style>