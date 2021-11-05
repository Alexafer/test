<template lang="pug">
.pagess
  .menu
    .m-logo
      p PROJECTUS
    .menu-user
      img.logo-img(src="./assets/logo.jpg" width="48" height="48" alt=" ")
      .user-info
        p.name Jean Gonsales
        br
        p.profesional Product Owner
      img.tochky(src="./assets/images.png" width="20" height="20" alt="")
    .menu-tasks
      .menu-complited-tasks(v-on:click="openPopap()")
        p.tasks.tasks-complited {{compliTask}}
        br
        p.tasks-text Complited Tasks
      .menu-open-tasks
        p.tasks.tasks-open {{openTasks}}
        br
        p.tasks-text Open Tasks
    ul.menu-ul
      li.menu-decoration MENU
      li Home
      li My Tasks
      li
        | Notifikations
        span.num {{notification}}
  .header
    .heder-menu
      .header-block-1
        img.header-img(src="./assets/Shapes@2x.png " alt=" ")
        p Website Redesign
        img.header-img-2(src="./assets/tochky.jpg" width="20" height="20" alt="")
      .header-block-2
        ul.header-users-icons
          li
            a(href=" ")
              img.us-icon(src="./assets/logo_1.jpg " alt=" ")
          li
            a(href=" ")
              img.us-icon(src="./assets/logo_2.jpg " alt=" ")
          li
            a(href=" ")
              img.us-icon(src="./assets/logo_3.jpg " alt=" ")
          li
            a.share(href=" ") Share
          li.chat
            a(href=" ")
              img(src="./assets/Shape@1x.svg" alt="")
              | Chat
    .menu-header
      ul
        li
          a(href=" ") Tasks
        li
          a(href=" ") Kanban
        li
          a.activ(href=" ") Activity
        li
          a(href=" ") Calendar
        li
          a(href=" ") Files
    .main
      p.main-title TODAY
      ul
        li.main-li
          span.main-li-message.color-send
            img(src="./assets/Icon@3x.svg" alt=" ")
          p.main-li-text
            | quam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo.
          p.main-time 8:40 PM
        li.main-li
          span.main-li-message.color_mess
            img(src="./assets/1.png" width="12" height="11" alt=" ")
          p.main-li-text olestiae delectus sequi quos aliquid aperiam nemo.
          p.main-time 7:32 PM
        li.main-li
          p.main-li-text.my-write
            | atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo.
        li.main-li
          span.main-li-message.color_upload
            img(src="./assets/3.png" alt=" ")
          p.main-li-text.my-upload
            | quisquam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo.
            img(v-for="(item, index) in collectionImg" :key="index" v-on:click="notificFunction(index)" :src="imgFunction(item)" width="100" height="100" alt=" ")
          p.main-time 8:40 PM
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'App',
    data() {
        return {
           compliTask: 372,
           openTasks: 11,
           collectionImg: ["image_1", "image_2", "image_3", "image_4"],
           notification: 3,
           message: [
             {id: 1, class: 'main-li-text', title: 'quam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo.'},
             {id: 2, title: 'olestiae delectus sequi quos aliquid aperiam nemo.'},
             {id: 3, title: 'atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo.'},
             {id: 4, title: 'quisquam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo. '}
           ]
        }
    },
    methods: {
        openPopap(){
            if (this.openTasks === 0) {
                alert("You don't have open task");
            }
            else if (confirm('Are you sure you want to change the number of tasks?') && this.openTasks > 0){
                this.compliTask = this.compliTask + 1
                this.openTasks = this.openTasks - 1;
            }
        },
        imgFunction(numImage){
            return require('./assets/' + numImage + '.jpg');
        },
        notificFunction(numNotif){
            this.notification = numNotif;
        }
    }
})
</script>
<style lang="scss">
@import "style.scss";
</style>
