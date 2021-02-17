<template>
    <li class="todo-item">
        <div class="todo-item__left">
            <div class="todo-item__label" v-if="!editing"><input type="checkbox" v-model="completed" @change="doneEdit"> <span @dblclick="editTodo" :class="{completed : completed}">{{ title }}</span> , {{ id }}</div>
            <div class="todo-itme__edit" v-else><input type="text" v-model="title" @blur="doneEdit" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" v-focus></div>            
        </div>
        <button type="button" class="remove-item" @click="removeTodo(index)">
            &times;
        </button>
    </li>
</template>

<script>
export default {
    naem : 'todo-item',
    data(){
        return {
            id : this.todo.id,
            title: this.todo.title,
            completed: this.todo.completed,
            editing: this.todo.editing,
            beforeEditCache:''
        }
    },
    props:{
        todo:{
            type: Object,
            required: true
        },
        index:{
            type: Number,
            required: true
        }
    },
    methods:{
        removeTodo(index){
            this.$emit('removedTodo',index)
        },
        editTodo(){
            this.beforeEditCache = this.title,
            this.editing = true
        },
        doneEdit(){
            this.editing = false;
            this.$emit('finishedEdit', {
                index : this.index,
                tood:{
                    id: this.id,
                    title: this.title,
                    completed: this.completed,
                    editing: this.editing
                }
            })
        },
        cancelEdit(){
            this.title = this.beforeEditCache;
            this.editing = false;
        },
    }
}
</script>

<style>

</style>