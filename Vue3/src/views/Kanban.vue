<template lang="pug">
//- .main
//-   coming-soon
//-     template(#c2="")
//-       | Code the proected
//-     template(#c1="")
//-       | Code the proected
.container
  // MAIN SECTION
  main
    // KANBAN BOARD STARTS
    .main__kanban
      // 1st board
      .droppable(v-for="category in kanbanList" :key="category.id" @drop="onDrop($event, category.type)" @dragover.prevent="" @dragenter.prevent="")
        .board__header.board__style
          i.fas.fa-dot-circle
          span(v-html="category.title")
          i.fas.fa-ellipsis-h
          span(v-if="category.add")
            AddTask(@addNewTask="addTasks")
        .draggable(v-for="item in category.tasks" @dragstart="onDragStart($event, item)")
          .board__boxes.board__style(draggable="true")
            .image-wrapper
              img(v-if="item.background" :src="item.background")
            ul.board__boxes__sections
              li(v-for="(color, index) in item.colors" :key="index" :style="'--section-color:' + color")
            p {{ item.text }}
            .board__boxes__info
              i.fas.fa-paperclip
              span {{ item.number }}
              img(v-for="(image, index) in item.images" :key="index" :src="image")
        button.add__card
          i.fas.fa-plus
          | Add To du
</template>
<script lang="ts">
// import File from "@/script.js"
import AddTask from '@/components/AddTask.vue';
import {defineComponent, ref, computed, reactive} from 'vue';
import ComingSoon from '@/components/ComingSoon.vue';
export default defineComponent({
  name: 'Kanban',
  components: {ComingSoon, AddTask},
  setup() {
    const items = reactive([
      {
        id: 1,
        number: 3,
        title: 'task 1',
        text: 'Step 1 - UX Map',
        status: 'todo',
        colors: ['#df8395', '#fe9734', '#ffd169', '#311f7d'],
        date: '2021-12-09 14:23',
        background: 'https://source.unsplash.com/BMO_9hKVPbU',
        images: [
          'https://source.unsplash.com/a5dEsN-I30I',
          'https://source.unsplash.com/YTg9850sIsc',
          'https://source.unsplash.com/-W8Bv-IsNWg',
          'https://source.unsplash.com/kbjIOft9Dbg',
        ],
      },
      {
        id: 2,
        number: 5,
        title: 'task 2',
        text: 'Step 2 - Desiging the extracted maps as wireframe and presenting the entire wireframe design to the customer',
        status: 'todo',
        background: '',
        date: '2021-12-09 14:24',
        images: [
          'https://source.unsplash.com/a5dEsN-I30I',
          'https://source.unsplash.com/YTg9850sIsc',
          'https://source.unsplash.com/-W8Bv-IsNWg',
          'https://source.unsplash.com/kbjIOft9Dbg',
        ],
      },
      {
        id: 3,
        number: 12,
        title: 'task 3',
        text: 'Step 3 - Understand',
        status: 'todo',
        colors: ['#df8395', '#fe9734', '#ffd169', '#311f7d'],
        date: '2021-12-09 14:26',
        background: '',
        images: [
          'https://source.unsplash.com/a5dEsN-I30I',
          'https://source.unsplash.com/YTg9850sIsc',
          'https://source.unsplash.com/-W8Bv-IsNWg',
          'https://source.unsplash.com/kbjIOft9Dbg',
        ],
      },
      {
        id: 4,
        number: 13,
        title: 'task 1',
        text: 'Construction Website',
        status: 'inprogress',
        date: '2021-12-09 14:23',
        background: '',
        images: [
          'https://source.unsplash.com/a5dEsN-I30I',
          'https://source.unsplash.com/YTg9850sIsc',
          'https://source.unsplash.com/-W8Bv-IsNWg',
          'https://source.unsplash.com/kbjIOft9Dbg',
        ],
      },
      {
        id: 5,
        number: 3,
        title: 'task 2',
        text: 'Foodie Food App',
        status: 'inprogress',
        date: '2021-12-09 14:24',
        background: '',
        images: [
          'https://source.unsplash.com/a5dEsN-I30I',
          'https://source.unsplash.com/YTg9850sIsc',
          'https://source.unsplash.com/-W8Bv-IsNWg',
          'https://source.unsplash.com/kbjIOft9Dbg',
        ],
      },
      {
        id: 6,
        number: 2,
        title: 'task 3',
        text: 'Create CV Builder',
        status: 'inprogress',
        date: '2021-12-09 14:26',
        background: '',
        images: [
          'https://source.unsplash.com/a5dEsN-I30I',
          'https://source.unsplash.com/YTg9850sIsc',
          'https://source.unsplash.com/-W8Bv-IsNWg',
          'https://source.unsplash.com/kbjIOft9Dbg',
        ],
      },
      {
        id: 7,
        number: 7,
        title: 'task 1',
        text: 'User Persona',
        status: 'done',
        date: '2021-12-09 14:23',
        background: '',
        images: [
          'require("@/assets/icons/photo-1594196270020-2792c806e7c6.jfif")',
          'https://source.unsplash.com/YTg9850sIsc',
          'https://source.unsplash.com/-W8Bv-IsNWg',
          'https://source.unsplash.com/kbjIOft9Dbg',
        ],
      },
      {
        id: 8,
        number: 3,
        title: 'task 2',
        text: 'UX Rules',
        status: 'done',
        date: '2021-12-09 14:24',
        background: '',
        images: [
          'https://source.unsplash.com/a5dEsN-I30I',
          'https://source.unsplash.com/YTg9850sIsc',
          'https://source.unsplash.com/-W8Bv-IsNWg',
          'https://source.unsplash.com/kbjIOft9Dbg',
        ],
      },
      {
        id: 9,
        number: 5,
        title: 'task 3',
        text: 'UX Test - Get through all the scenarios for the projects and make sure it meets a11y principle .',
        status: 'done',
        date: '2021-12-09 14:26',
        background: '',
        images: [
          'https://source.unsplash.com/a5dEsN-I30I',
          'https://source.unsplash.com/YTg9850sIsc',
          'https://source.unsplash.com/-W8Bv-IsNWg',
          'https://source.unsplash.com/kbjIOft9Dbg',
        ],
      },
    ]);
    const categories = [
      {
        id: 0,
        title: '<a href="#win2" class="main-title1">To du list</a> ',
        type: 'todo',
        add: 'true',
      },
      {
        id: 1,
        title: 'Active list',
        type: 'inprogress',
      },
      {
        id: 2,
        title: 'Done list',
        type: 'done',
      },
    ];
    function onDragStart(event: DragEvent, item: { id: { toString: () => string; }; }) {
      const {dataTransfer} = event;
      if (dataTransfer) {
        dataTransfer.dropEffect = 'move';
        dataTransfer.effectAllowed = 'move';
        dataTransfer.setData('itemId', item.id.toString());
      }
    }
    function onDrop(e: DragEvent, newStatus: string) {
      if ( newStatus == 'todo' || newStatus == 'inprogress' ) {
        return false;
      }

      const {dataTransfer} = e;
      if (dataTransfer) {
        const itemId = parseInt(dataTransfer.getData('itemId'));
        items.forEach((item) => {
          if (item.id === itemId) {
            item.status = newStatus;
          }
        });
      }
    }

    const imageTask = {
      '1': 'https://source.unsplash.com/a5dEsN-I30I',
      '2': 'https://source.unsplash.com/YTg9850sIsc',
      '3': 'https://source.unsplash.com/-W8Bv-IsNWg',
      '4': 'https://source.unsplash.com/kbjIOft9Dbg',
    };
    const kanbanList = computed(() => {
      return categories.map((category) => {
        return {
          ...category,
          tasks: items.filter((item) => item.status === category.type),
        };
      });
    });
    return {
      kanbanList,
      items,
      categories,
      onDragStart,
      onDrop,
      imageTask,
    };
  },
  methods: {
    addTasks(data: { id: number; number: number; title: string; text: string; status: string; colors: string[]; date: string; background: string; images: string[]; }|{ id: number; number: number; title: string; text: string; status: string; background: string; date: string; images: string[]; colors?: undefined; }) {
      this.items.push(data);
      // console.log(this.items)
      // console.log(data);
      return {
        newTask: {
          time: '',
          text: '',
          title: '',
        },
      };
    },
  },
});
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
:root {
  --white: #002035;
  --purple: #311f7d;
  --pink: #df8395;
  --orange: #fe9734;
  --yellow: #ffd169;
  --grey: #e8ecf2;
  --light-grey: #f5f7fa;
  --dark-grey: #b3bac3;
  --text-grey-color: #606263;
  /* --main-grid-rows: 80px 120px minmax(600px, calc(100vh - 200px)); */
}
/*--------------------------------------*/
.container main,
.board__style,
.board__boxes__sections {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  font-family: 'Roboto Condensed', sans-serif;
}

.container {
  height: 100%;
  margin: 20px 0px;
}
/*-----------------MAIN SECTION---------------------*/

main .main__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
}
main .main__header > div {
  color: var(--dark-grey);
}
main .main__header > div > * {
  margin-left: 20px;
  cursor: pointer;
}
main .main__header > div .fa-bell {
  position: relative;
}
main .main__header > div .fa-bell::after {
  content: '';
  position: absolute;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background: var(--pink);
}
main .main__kanban__info {
  background: var(--light-grey);
  padding: 0px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
main .main__kanban__info > img {
  border-radius: 50%;
  margin-right: 5px;
}
main .main__kanban__info > button {
  color: var(--text-grey-color);
  border: 0px;
  outline: 0px;
  cursor: pointer;
  background: var(--grey);
  padding: 6px 15px;
  border-radius: 18px;
  border: 1px solid var(--grey);
  transition: all 0.3s ease-in-out;
}
main .main__kanban__info > button:first-of-type {
  margin-right: auto;
  margin-left: 10px;
}
main .main__kanban__info > button:hover {
  background: var(--white);
  border-color: var(--text-grey-color);
}
main .main__kanban {
  background: var(--light-grey);
  padding: 0px 25px;
  height: 100%;
  display: flex;
  // flex-direction: row;
  // align-items: flex-start;
  // justify-content: flex-start;
  // overflow-x: auto;
  // scrollbar-width: none;
}
main .main__kanban::-webkit-scrollbar {
  width: 0px;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: just make scrollbar invisible */
}
main .main__kanban::after {
  content: '';
  padding-right: 25px;
  height: 100%;
}
main .main__kanban .droppable {
  flex: 0 0 280px;
  margin-right: 20px;
  height: 100%;
}
main .main__kanban .draggable {
  min-height: calc(100% - 120px);
  max-height: calc(100% - 120px);
  overflow-y: auto;
  scrollbar-width: none;
}
main .main__kanban .draggable::-webkit-scrollbar {
  width: 0px;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: just make scrollbar invisible */
}
main .main__kanban .board__header {
  user-select: none;
  margin-bottom: 30px;
  padding: 0px 15px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
main .main__kanban .board__header > span {
  margin-right: auto;
  margin-left: 10px;
  color: var(--text-grey-color);
}
main .main__kanban .board__header > i {
  font-size: 9px;
  color: var(--text-grey-color);
}
main .main__kanban .board__header .fa-ellipsis-h {
  cursor: pointer;
}
main .main__kanban .board__boxes {
  user-select: none;
  margin-bottom: 15px;
  cursor: move;
  padding: 20px;
}
main .main__kanban .board__boxes > .image-wrapper {
  margin: -20px -20px 10px -20px;
}
main .main__kanban .board__boxes p {
  font-size: 14px;
  color: var(--text-grey-color);
  margin-bottom: 30px;
  line-height: 28px;
}
main .main__kanban .board__boxes__sections {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}
main .main__kanban .board__boxes__sections > * {
  height: 4px;
  width: 20px;
  border-radius: 10px;
  background: var(--section-color);
  margin-right: 4px;
}
main .main__kanban .board__boxes__info {
  display: flex;
  flex-direction: row;
  align-items: center;
}
main .main__kanban .board__boxes__info i,
main .main__kanban .board__boxes__info span {
  color: var(--dark-grey);
  font-size: 12px;
}
main .main__kanban .board__boxes__info span {
  margin-left: 10px;
  margin-right: auto;
}
main .main__kanban .board__boxes__info img {
  border-radius: 50%;
  margin-left: 5px;
}
main .main__kanban .board .add__card {
  background: transparent;
  cursor: pointer;
  border: 0;
  outline: 0;
  color: var(--text-grey-color);
  margin-top: 10px;
}
main .main__kanban .board__style {
  background: var(--white);
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}
.board__boxes__info img {
  width: 30px;
  height: 30px;
}
.image-wrapper img {
  height: 100px;
  width: 100%;
}
</style>