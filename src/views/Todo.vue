<template>
  <div>
      <input type="text" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo()">
  </div>
  <ul>
      <todo-item v-for="(todo, index) in todoFiltered" 
        :key="todo" :todo="todo" :index="index"
        @removedTodo="removeTodo"
        @finishedEdit="finishEdit"
      >
          <!-- <div class="todo-item__left">
              <div class="todo-item__label" v-if="!todo.editing"><input type="checkbox" v-model="todo.completed"> <span @dblclick="editTodo(todo)" :class="{completed : todo.completed}">{{ todo.title }}</span> , {{ todo.id }}</div>
              <div class="todo-itme__edit" v-else><input type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus></div>            
          </div>
          <button type="button" class="remove-item" @click="removeTodo(index)">
              &times;
          </button> -->
      </todo-item>
  </ul>
  <div class="extra-container">
      <div><label><input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos()"> Checking all</label></div>
      <div>{{ remaining }} 남았습니다.</div>
  </div>
  <div class="extra-container">
      <div>
          <button type="button" :class="{ active : filter == 'all' }" @click="filter = 'all'">All</button>
          <button type="button" :class="{ active : filter == 'active' }"  @click="filter = 'active'">Active</button>
          <button type="button" :class="{ active : filter == 'completed' }"  @click="filter = 'completed'">Completed</button>
      </div>
  </div>
  <div class="extra-container">
      <transition name="fade">
      <div>
          <button type="button" v-if="showClearCompletedButton" @click="clearCompleted()">Clear Completed</button>
      </div>
      </transition>
  </div>
  <div class="text-box">
      Todo list goes here
  </div>
  <div>
      {{ newTodo }}
  </div>
    <transition name="fade" mode="in-out">
        <button type="button" v-if="showClearCompletedButton" @click="clearCompleted()">Clear Completed</button>
    </transition>

    <div>
        <ul>
            <li
                v-for="(l, i) in lotto"
                :key="i"
            > {{ l }} </li>
        </ul>
        <button @click="lottoNumber()">asdf</button>
    </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'
export default {
  components: { TodoItem },
    name:'Todo',
    data(){
        return{
            beforeEditCache : '',
            newTodo:'',
            filter:'all',
            lotto:[],
            todos:[
                {
                    id:1,
                    title:'Finish Vue Screencast',
                    completed:false,
                    editing: false,
                },
                {
                    id:2,
                    title:'Take over world',
                    completed:false,
                    editing: false,
                },
            ]
        }
    },
    directives:{
        focus:{
            inserted:function(el){
                el.focus()
            }
        }
    },
    computed:{
        remaining(){
            return this.todos.filter(t => !t.completed).length
        },
        anyRemaining(){
            return this.remaining != 0
        },
        todoFiltered(){
            if(this.filter == 'all'){
                return this.todos
            } else if (this.filter == 'active') {
                return this.todos.filter(t => !t.completed)
            } else if (this.filter == 'completed') {
                return this.todos.filter(t => t.completed)
            }
            return this.todos
        },
        showClearCompletedButton(){
            return this.todos.filter(t=>t.completed).length > 0
        },
    },   
    methods:{
        addTodo(){
            this.todos.push({
                id: this.todos.length + 1,
                title: this.newTodo,
                completed: false
            });
            //this.idForTodo ++;
            this.newTodo = '';
        },
        removeTodo(index){
            this.todos.splice(index,1)
        },
        editTodo(t){
            this.beforeEditCache = t.title;
            t.editing = true;            
        },
        doneEdit(t){
            t.editing = false;
        },
        cancelEdit(t){
            t.title = this.beforeEditCache;
            t.editing = false;
        },
        checkAllTodos(){
            this.todos.forEach((t)=>
                t.completed = event.target.checked                
            )
            console.log(event.target.checked );
        },
        clearCompleted(){
            this.todos = this.todos.filter(t => !t.completed);
        },
        finishEdit(data){
            this.todos.splice(data.index,1,data.todo)
        },
        lottoNumber(){
            // const lottoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
            let numbers = [];
            for(var i=1; i<=6; i++){
                let random = Math.floor(Math.random()* 10);
                numbers.push(random);
                numbers.splice(random,1);
                console.log(numbers)
            }
        }
    }
}
</script>

<style scoped>
    input[type="text"] {width: 100%; padding: 10px 18px; font-size: 18px; margin-bottom: 16px;}
    .text-box {margin-top:100px; text-align:center}
    .todo-item {margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; font-size: 16px;}
    .completed {text-decoration:line-through; color: gray;}

    .extra-container {border-top: 1px solid #ddd; padding-top: 20px; margin-top: 20px; display: flex; align-items: center; justify-content: space-between; font-size: 14px;}
    button {transition: opacity .5s;}
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>