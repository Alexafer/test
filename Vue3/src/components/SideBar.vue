<template lang="pug">
.menu
  .m-logo
    p PROJECTUS
    form#demo-b
      input.pos(placeholder="" type="search")
  .menu-user
    img.logo-img(src="@/assets/icons/logo.jpg" width="48" height="48" alt=" ")
    .user-info
      p.name {{ `${user1.firstName} ${user1.lastName}` }}
      br
      p.profesional {{ user1.position }}{{ $store.state.counter }}
    span.tochky
  .menu-tasks
    .menu-complited-tasks(v-on:click="openPopap()")
      p.tasks.tasks-complited {{ user1.task.complitedTask }}
      br
      p.tasks-text Complited Tasks
    .menu-open-tasks(@click="clickOpenTask()")
      p.tasks.tasks-open {{ user1.task.openTasks }}
      br
      p.tasks-text Open Tasks
  ul.menu-ul
    li.menu-decoration MENU
    li Home
    li My Tasks
    li
      | Notifikations
      span.num {{ user1.notification }}
</template>
<script lang="ts">
import {defineComponent} from 'vue';
// import { mapState } from 'vuex';
export default defineComponent({
  name: 'SadeBar',
  props: {
    user1: {
      required: true,
      type: Object,
    },
  },
  methods: {
    openPopap() {
      if (this.user1.task.openTasks === 0) {
        alert("You don't have open task");
      } else if (confirm('Are you sure you want to change the number of tasks?') && this.user1.task.openTasks > 0) {
        this.$emit('calcOpenTask');
      }
    },
    clickOpenTask() {
      if (!this.user1.task.openTasks) {
        alert("You don't have open task");
        return false;
      }
      this.$router.push({
        name: 'Tasks',
      });
    },
  },
  // computed: {
  //   ...mapState(["counter", "counter2"])
  // }
});
</script>
<style lang="scss">
.pos {
  margin-right: -20px;
  float: right;
}
input {
  outline: none;
}
input[type='search'] {
  -webkit-appearance: textfield;
  box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
  /* remove the search and cancel icon */
}

/* search input field */
input[type='search'] {
  background: url('~@/assets/icons/Search@3x.svg') no-repeat 11px center;
  // background-color: $red;
  border: none;
  padding: 9px 10px 9px 32px;
  width: 55px;
  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
// input[type='search']:focus {
//   width: 130px;
//   background-color: #fff;
//   border-color: #6dcff6;

//   -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
//   -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
//   box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
// }

/* placeholder */
input:-moz-placeholder {
  color: #999;
}
input::-webkit-input-placeholder {
  color: #999;
}
#demo-b {
  width: 80px;
  // outline: 1px solid red;
}

#demo-b input[type='search'] {
  width: 18px;
  padding-left: 10px;
  color: transparent;
  cursor: pointer;
}
#demo-b input[type='search']:hover {
  background-color: #202020;
}
#demo-b input[type='search']:focus {
  width: 210px;
  padding-left: 32px;
  color: #acacac;
  background-color: #202020;
  cursor: auto;
}
#demo-b input:-moz-placeholder {
  color: transparent;
}
#demo-b input::-webkit-input-placeholder {
  color: transparent;
}
</style>
