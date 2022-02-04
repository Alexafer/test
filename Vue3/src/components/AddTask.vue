<template>
  <div class="dm-overlay" id="win2">
    <div class="dm-table">
      <div class="dm-cell">
        <div class="dm-modal green">
          <a class="close" href="#close"></a>
          <section>
            <span class="input input--ruri">
              <input
                class="input__field input__field--ruri"
                id="input-26"
                type="text"
                v-model="newTask.title"
                required=""
              />
              <label class="input__label input__label--ruri" for="input-26"
                ><span class="input__label-content input__label-content--ruri">Тема задания</span></label
              ></span
            ><span class="input input--ruri">
              <input
                class="input__field input__field--ruri"
                id="input-27"
                type="text"
                v-model="newTask.text"
                required=""
              />
              <label class="input__label input__label--ruri" for="input-27"
                ><span class="input__label-content input__label-content--ruri">Описание</span></label
              ></span
            ><span class="input input--ruri">
              <input
                class="input__field input__field--ruri"
                id="input-28"
                min="2022-01-10"
                type="date"
                v-model="newTask.data"
              />
              <label class="input__label input__label--ruri" for="input-28"
                ><span class="input__label-content input__label-content--ruri">.</span></label
              ></span
            >
            <button class="butn_add" v-on:click="addTask">Добавить</button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  // emits: ['addTask']
  data() {
    return {
      newTask: {
        data: '',
        text: '',
        title: '',
        status: 'todo',
      },
    };
  },
  methods: {
    addTask() {
      if (!this.newTask.text || !this.newTask.title || !this.newTask.data) {
        return false;
      }

      this.$emit(
        'addNewTask',
        {
          data: this.newTask.data,
          text: this.newTask.text,
          title: this.newTask.title,
        },
        (this.newTask.data = ''),
        (this.newTask.text = ''),
        (this.newTask.title = ''),
      );
    },
  },
});
</script>
<style lang="scss">
//////////////////////
.butn_add,
.butn_add a {
  margin-top: 10px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  border: none;
  // font-family: 'Comfortaa', cursive;
  color: rgba(100, 41, 48, 0.5);
  font-size: 20px;
  border-radius: 4px;
  // box-shadow: inset 0px 3px 5px rgba(255,255,255,0.5), 0px 0px 10px rgba(0,0,0,0.15);
  background: rgb(2, 0, 36);
  background: linear-gradient(45deg, rgba(27, 180, 141, 0.2) 19%, rgba(27, 180, 141, 0) 21%);
  background-size: 150%;
  background-position: right;
  transition: 1s;
}
.butn_add a {
  text-decoration: none;
}

.butn_add:hover,
.main-title:hover {
  background-position: left;
  color: rgba(27, 180, 141, 0.5);
  box-shadow: inset 0px 3px 5px rgba(255, 255, 255, 1), 0px 0px 10px rgba(0, 0, 0, 0.25);
}

.butn_add:focus {
  outline: none;
}
/////////////
//Modal
code {
  background: #eee;
  padding: 1px 7px;
  border-radius: 3px;
  font-size: 0.9em;
  color: #555;
}
/* блок кнопок демо */

.btn-block {
  margin: 100px auto;
  width: 80%;
  text-align: center;
}

/* Стили модального окна и содержания 
-------------------------------------------------------------------------------*/

/* слой затемнения */

.dm-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.15);
  display: none;
  overflow: auto;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
/* активируем модальное окно */

.dm-overlay:target {
  display: block;
  -webkit-animation: fade 0.6s;
  -moz-animation: fade 0.6s;
  animation: fade 0.6s;
}
/* блочная таблица */

.dm-table {
  display: table;
  width: 100%;
  height: 100%;
}
/* ячейка блочной таблицы */

.dm-cell {
  display: table-cell;
  padding: 0 1em;
  vertical-align: middle;
  text-align: center;
}
/* модальный блок */

.dm-modal {
  display: inline-block;
  padding: 20px;
  width: 730px;
  background: #fff;
  -webkit-box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.22), 0px 19px 60px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.22), 0px 19px 60px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.22), 0px 19px 60px rgba(0, 0, 0, 0.3);
  color: #cfd8dc;
  text-align: left;
}
/* изображения в модальном окне */

.dm-modal img {
  width: 100%;
  height: auto;
}
/* миниатюры изображений */

.pl-right {
  width: 25%;
  height: auto;
}
/* миниатюра справа */

.pl-right {
  float: right;
  margin: 5px 0 5px 15px;
}
/* миниатюра слева */
/* встраиваемое видео в модальном окне */
/* рисуем кнопарь закрытия */

.close {
  z-index: 9999;
  float: right;
  width: 30px;
  height: 30px;
  color: #cfd8dc;
  text-align: center;
  text-decoration: none;
  line-height: 26px;
  cursor: pointer;
}
.close:after {
  display: block;
  border: 2px solid #cfd8dc;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  content: 'X';
  -webkit-transition: all 0.6s;
  -moz-transition: all 0.6s;
  transition: all 0.6s;
  -webkit-transform: scale(0.85);
  -moz-transform: scale(0.85);
  -ms-transform: scale(0.85);
  transform: scale(0.85);
}
/* кнопка закрытия при наведении */

.close:hover:after {
  border-color: #fff;
  color: #fff;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
/* варианты фонвой заливки модального блока */

.green {
  // background: #388e3c !important;
}
/* движуха при появлении блоков с содержанием */

@-moz-keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
////////////////////////////////////////////
.input {
  position: relative;
  z-index: 1;
  display: inline-block;
  margin: 1em;
  max-width: 150px;
  width: calc(100% - 2em);
  vertical-align: top;
}

.input__field {
  position: relative;
  display: block;
  float: right;
  padding: 0.8em;
  width: 60%;
  border: none;
  border-radius: 0;
  background: #f0f0f0;
  color: #aaa;
  font-weight: 400;
  // font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-appearance: none; /* for box shadows to show on iOS */
}

.input__field:focus {
  outline: none;
}

.input__label {
  display: inline-block;
  float: right;
  padding: 0 1em;
  width: 40%;
  color: #696969;
  font-weight: bold;
  font-size: 70.25%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.input__label-content {
  position: relative;
  display: block;
  padding: 1.6em 0;
  width: 100%;
}

/* Ruri */
.input__field--ruri {
  width: 90%;
  background: transparent;
  // padding: -20px 0;
  // padding-left: 20px;
  margin-bottom: 5px;
  color: #000;
}

.input__label--ruri {
  width: 100%;
  position: absolute;
  text-align: left;
  font-size: 1em;
  padding: 10px 0 5px;
  pointer-events: none;
}

.input__label--ruri::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  background: #7d7d7d;
  left: 0;
  top: 100%;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition: -webkit-transform 0.3s, background-color 0.3s;
  transition: transform 0.3s, background-color 0.3s;
}

.input__label-content--ruri {
  padding: 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transition: -webkit-transform 0.3s, color 0.3s;
  transition: transform 0.3s, color 0.3s;
}

.input__field--ruri:focus + .input__label--ruri::after,
.input--filled .input__label--ruri::after {
  background: #a3d39c;
  -webkit-transform: scale3d(1, 0.25, 1);
  transform: scale3d(1, 0.25, 1);
}

.input__field--ruri:focus + .input__label--ruri .input__label-content--ruri,
.input--filled .input__label--ruri .input__label-content--ruri {
  color: #a3d39c;
  -webkit-transform: translate3d(0, 2em, 0) scale3d(0.655, 0.655, 1);
  transform: translate3d(0, 2em, 0) scale3d(0.655, 0.655, 1);
}
</style>

function define(classie: { // full names hasClass: { (arg0: any, arg1: any): any; (elem: any, c: any): any; (elem: any,
c: any): boolean; }; addClass: { (elem: any, c: any): void; (elem: any, c: any): void; }; removeClass: { (elem: any, c:
any): void; (elem: any, c: any): void; }; toggleClass: (elem: any, c: any) => void; // short names has: { (arg0: any,
arg1: any): any; (elem: any, c: any): any; (elem: any, c: any): boolean; }; add: { (elem: any, c: any): void; (elem:
any, c: any): void; }; remove: { (elem: any, c: any): void; (elem: any, c: any): void; }; toggle: (elem: any, c: any) =>
void; }) { throw new Error('Function not implemented.'); } function define(classie: { // full names hasClass: { (arg0:
any, arg1: any): any; (elem: any, c: any): any; (elem: any, c: any): boolean; }; addClass: { (elem: any, c: any): void;
(elem: any, c: any): void; }; removeClass: { (elem: any, c: any): void; (elem: any, c: any): void; }; toggleClass:
(elem: any, c: any) => void; // short names has: { (arg0: any, arg1: any): any; (elem: any, c: any): any; (elem: any, c:
any): boolean; }; add: { (elem: any, c: any): void; (elem: any, c: any): void; }; remove: { (elem: any, c: any): void;
(elem: any, c: any): void; }; toggle: (elem: any, c: any) => void; }) { throw new Error('Function not implemented.'); }
function define(classie: { // full names hasClass: { (arg0: any, arg1: any): any; (elem: any, c: any): any; (elem: any,
c: any): boolean; }; addClass: { (elem: any, c: any): void; (elem: any, c: any): void; }; removeClass: { (elem: any, c:
any): void; (elem: any, c: any): void; }; toggleClass: (elem: any, c: any) => void; // short names has: { (arg0: any,
arg1: any): any; (elem: any, c: any): any; (elem: any, c: any): boolean; }; add: { (elem: any, c: any): void; (elem:
any, c: any): void; }; remove: { (elem: any, c: any): void; (elem: any, c: any): void; }; toggle: (elem: any, c: any) =>
void; }) { throw new Error('Function not implemented.'); } function define(classie: { // full names hasClass: { (arg0:
any, arg1: any): any; (elem: any, c: any): any; (elem: any, c: any): boolean; }; addClass: { (elem: any, c: any): void;
(elem: any, c: any): void; }; removeClass: { (elem: any, c: any): void; (elem: any, c: any): void; }; toggleClass:
(elem: any, c: any) => void; // short names has: { (arg0: any, arg1: any): any; (elem: any, c: any): any; (elem: any, c:
any): boolean; }; add: { (elem: any, c: any): void; (elem: any, c: any): void; }; remove: { (elem: any, c: any): void;
(elem: any, c: any): void; }; toggle: (elem: any, c: any) => void; }) { throw new Error('Function not implemented.'); }
