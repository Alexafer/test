<template>
  <div class="main">
    <p class="main-title">TODAY</p>
    <span class="center">
    <input placeholder="Назване здачи" type="text" v-model="newTask.title" required="required" />
    <input placeholder="Описание здачи" type="text" v-model="newTask.text" required="required" />
    <input placeholder="Дедлайн" type="date" v-model="newTask.time"/>
    <button @click="addTask()">Добавить</button></span>
    <ul>
      <li class="main-li" v-for="(Tasks, index) in arrayTasks" :key="Tasks.id">
        <span ><p class="main-li-title" v-bind:class="{blink: isActive}"><b>{{ Tasks.title }}</b></p>
        <p class="main-li-text1">{{ Tasks.text }}</p>
        </span>
        <p class="main-time">{{ Tasks.time }}</p>
        <button @click="arrayTasks.splice(index, 1)">Удалить</button>
      </li>
    </ul>
    <div></div>
  </div>
</template>
<script lang="">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'Tasks',
  data() {
    return {
      isActive: false,
      newTask: {
        title: '',
        text: '',
        time: ''
      },
      arrayTasks: [
        {
          title: 'Ознакомиться с основными хуками жизненного цикла компонента',
          time: '8:40 PM',
          text: 'Экземпляр Vue beforeCreate, created beforMount, mounted beforeUpdate, updated beforeUnmount, unmounted',
        },
        {
          title: 'Что такое DRY, DIE, KISS, SOLID, YAGNI',
          time: '7:32 PM',
          text: 'Термины dry, die, kiss, solid, yagni в прогаммировании. Что такое DRY, KISS, SOLID, YAGNI, DIE и в чем заключаются эти подходы',
        },
      ],
    };
  },
  methods: {
    addTask() {
      if (!this.newTask.text || !this.newTask.title) {
        return false;
      }
      this.arrayTasks.push(this.newTask);
      this.newTask = {};
      this.isActive = true;
    setTimeout(() => this.isActive = false, 2000);
    },
  },
  computed: {
    fgo(){
      console.log(test);
    }
  },
});
</script>
<style lang="scss">
.main-li-text1 {
  width: 451px;
  padding: 0px 10px 0px 10px;
  font-family: Helvetica;
  font-size: 16px;
  color: #131313;
  line-height: 20px;
  // margin-right: 30px;
  margin-left: 30px;
}
.main-li-title {
  padding: 0px 10px 0px 10px;
  font-family: Helvetica;
  font-size: 16px;
  color: #131313;
  line-height: 20px;
  margin-right: 30px;
  // margin-left: 30px;
}
.center {
  align-items: center;
  margin-left: 70px;
  margin-right: 30px;
}
.blink {
	-webkit-animation: blink 1s linear infinite; 
	animation: blink 2s linear infinite; 
	color: #131313; 
}

@-webkit-keyframes blink { 
	0% { color: #131313; }
	50% { color: #FBB; }
	100% { color: #131313; }
}

@keyframes blink {  
	0% { color: #131313; }
	50% { color: #FBB; }
	100% { color: #131313; } 
}
</style>

