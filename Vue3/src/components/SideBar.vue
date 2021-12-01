<template lang="pug">
.menu
  .m-logo
    p PROJECTUS
  .menu-user
    img.logo-img(src="@/assets/logo.jpg" width="48" height="48" alt=" ")
    .user-info
      p.name {{ `${user1.firstName} ${user1.lastName}` }}
      br
      p.profesional {{ user1.position }}
    img.tochky(src="@/assets/images.png" width="20" height="20" alt="")
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
<script lang="">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'SadeBar',
  props: {
    user1: {
      required: true,
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
    clickOpenTask(){
      if (!this.user1.task.openTasks ){ 
        alert("You don't have open task");
        return false;
      }
      this.$router.push({
        name: 'Tasks'
        })
    }
  },
});
</script>
<style lang="scss"></style>
