<template lang="pug">
.main
  a.main-title(href="#win2") TASKS+
  AddTask(@addNewTask="addTasks")
  ul.list_tasks
    li.main-li(v-for="(task, index) in arrayTasks" :key="task.id")
      span
        p.main-li-title
          b {{ task.title }}
        p.main-li-text1 {{ task.text }}
      p.main-time-tasks {{ task.data }}
      button(@click="arrayTasks.splice(index, 1)") Удалить
</template>
<script lang="ts">
import AddTask from '@/components/AddTask.vue';
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'Tasks',
  components: {
    AddTask,
  },
  data() {
    return {
      idx: 0,
      isActive: false,
      newTask: {
        title: '',
        text: '',
        data: '',
      },
      arrayTasks: [
        {
          title: '8 урок',
          data: '8:40 PM',
          text: 'Задание: На вкладке Tasks инициировать начальное значение списка задач при создании компонента. В момент, когда DOM уже будет доступен, пройтись по списку задач сверху вниз с использованием анимации: плавно увеличить шрифт (не более чем в полтора раза), затем вернуть в прежнее состояние. После добавления задачи добавить эффект мигания (временный) на блоке новой задачи.',
        },
        {
          title: '9 урок',
          data: '7:32 PM',
          text: 'Задание: Добавить новое свойство для задачи (status) которое может содержать текстовое значение (todo, inprogress, done). Для статуса использовать перечисления. Обновить создание задачи - по умолчанию устанавливать status = ‘todo’. На вкладке Kanban создать таблицу из 3 колонок (To Do, In Progress, Done). В каждой колонке должны находиться карточки задач с соответствующим статусом. Карточки должны содержать имя задачи и дату завершения.',
        },
      ],
    };
  },
  methods: {
    addTasks(data: {title: string; data: string; text: string}) {
      this.arrayTasks.push(data);
      return {
        newTask: {
          data: '',
          text: '',
          title: '',
        },
      };
    },
    // run() {
    //   this.idx += ({ 0: 1, [this.items.length]: -1 })[this.idx];
    // },
    // enter() {
    //   this.idx = Math.min(this.items.length, this.idx + 1);
    // },
    // leave() {
    //   this.idx = Math.max(0, this.idx - 1);
    // },
  },
  computed: {
    // fgo(){
    //   console.log(test);
    // }
  },
  mounted() {
  this.$nextTick(function () {
    // Код, который будет запущен только после
    // отрисовки всех представлений

  })
}
});
</script>
<style scoped lang="scss">
.main {
  margin: 30px auto 30px auto;
  max-width: 670px;
  background-color: #ffffff;
  padding: 30px;
}

.main-li-title {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 700px;
  // margin-left: 30px;
}
///////////////////
section {
  margin-top: -20px;
}
.main-li {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 700px;
}

.main-li-text1 {
  width: 550px;
  padding: 0px 10px 0px 10px;
  line-height: 20px;
  // margin-right: 30px;
  margin-left: 30px;
  margin-top: 0px;
}
.main-time-tasks {
  margin-top: -15px;
  margin-left: 60px;
  opacity: 0.7;
  font-family: Helvetica;
  font-size: 14px;
  color: #131313;
  text-align: right;
  line-height: 20px;
  margin-right: 30px;
}
///////////////
.list_tasks > li:nth-last-child(1) {
  font-family: 'Clip';
  font-size: 16px;
}
@keyframes blink {
  75% {
  }
  33% {
    color: #fff;
    text-shadow: 0 0 1px #fff, 0 0 2px #fff, -0.2rem 0.1rem 1rem #fff, 0.2rem 0.1rem 1rem #fff, 0 -0.5rem 2rem #fff,
      0 0.5rem 3rem #fff;
  }
  75% {
    color: green;
  }
  97% {
    color: #131313;
    text-shadow: none;
  }
}

.list_tasks > li:nth-last-child(1) * {
  animation: shine 2s forwards;
  animation: shine 0s forwards, blink 2s 0s 1;
}
/////////////////////////
// .blink2 {
//   -webkit-animation: blink2 1s linear infinite;
//   animation: blink2 1s linear infinite;
// }
// @-webkit-keyframes blink2 {
//   100% {
//     color: rgba(34, 34, 34, 0);
//   }
// }
// @keyframes blink2 {
//   100% {
//     color: rgba(34, 34, 34, 0);
//   }
// }

///////////////////////////////////////////
.list_tasks {
  padding: 0;
  list-style: none;
}
.list_tasks li {
  // padding:6px;
}
.list_tasks li:before {
  display: flex;
  padding-right: 10px;
  font-weight: bold;
  color: #77aedb;
  content: '\2606';
  transition-duration: 0.5s;
}
.list_tasks li:hover:before {
  color: #337ab7;
  content: '\2605';
}
</style>
