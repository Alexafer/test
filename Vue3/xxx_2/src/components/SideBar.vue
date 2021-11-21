<template>
<div class="menu">
  <div class="menu-logo">
    <p>PROJECTUS</p>
  </div>
  <div class="menu-user">
    <div class="user-info">
      <p class="name">{{`${user1.firstName} ${user1.lastName}`}}</p><br/>
      <p class="profesional">{{user1.position}}</p>
    </div>
    <p class="more">...</p>
  </div>
  <div class="menu-tasks">
     <div class="menu-complit-tasks" @click='openPopap'> 
      <p class="tasks tC">{{ user1.task.complitedTask }}</p><br/>
      <p class="tasks-text">Complited Tasks</p>
    </div>
    <div>
      <p class="tasks tO">{{ user1.task.openTasks }}</p><br/>
      <p class="tasks-text" @click='clickOpenTask'>Open Tasks</p>
    </div>
  </div>
  <ul class="menu-ul">
    <li class="menu-decoration">MENU</li>
    <li>Home</li>
    <li>My Tasks</li>
    <li>Notifikations<span class="num">{{ user1.notification }}</span></li>
  </ul>
</div>
      
</template>
<script lang="">
export default {
  name: 'Sidebar',
  props: {
    user1: {
    required: true
  }},
  methods: {
    openPopap() {
      if (confirm('Are you sure you want to change the number of tasks?') && this.user1.task.openTasks > 0) {
        this.$emit("calcOpenTask") 
      } else if (this.user1.task.openTasks === 0) {
        alert('У вас нет открытых заданий');
      }
    },
    clickOpenTask(){
      if (!this.user1.task.openTasks ){ 
        alert('У вас нет открытых заданий');
        return false;
      }
      this.$router.push({
        name: 'Tasks'
        })
    }
  },
};
</script>
<style lang=""></style>
