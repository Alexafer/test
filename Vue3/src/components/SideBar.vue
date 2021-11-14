<template lang="">
  <div class="menu">
    <div class="m-logo">
      <p>PROJECTUS</p>
    </div>
    <div class="menu-user">
      <img class="logo-img" src="@/assets/logo.jpg" width="48" height="48" alt=" " />
      <div class="user-info">
        <p class="name">{{ `${user1.firstName} ${user1.lastName}` }}</p>
        <br />
        <p class="profesional">{{ user1.professional }}</p>
      </div>
      <img class="tochky" src="@/assets/images.png" width="20" height="20" alt="" />
    </div>
    <div class="menu-tasks">
      <div class="menu-complited-tasks" v-on:click="openPopap()">
        <p class="tasks tasks-complited">{{ user1.task.complitedTask }}</p>
        <br />
        <p class="tasks-text">Complited Tasks</p>
      </div>
      <div class="menu-open-tasks">
        <p class="tasks tasks-open">{{ user1.task.openTasks }}</p>
        <br />
        <p class="tasks-text">Open Tasks</p>
      </div>
    </div>
    <ul class="menu-ul">
      <li class="menu-decoration">MENU</li>
      <li>Home</li>
      <li>My Tasks</li>
      <li>
        Notifikations<span class="num">{{ user1.notification }}</span>
      </li>
    </ul>
  </div>
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
  },
});
</script>
<style lang="scss"></style>
