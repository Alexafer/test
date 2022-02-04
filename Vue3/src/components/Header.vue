<template lang="pug">
div
  .heder-menu
    .header-block-1
      img.header-img(src="@/assets/icons/Shapes@2x.png " alt=" ")
      p Website Redesign
      .header-img-2
    .header-block-2
      ul.header-users-icons
        li
          a(href=" ")
            img.us-icon(src="@/assets/icons/logo_1.jpg " alt=" ")
        li
          a(href=" ")
            img.us-icon(src="@/assets/icons/logo_2.jpg " alt=" ")
        li
          a(href=" ")
            img.us-icon(src="@/assets/icons/logo_3.jpg " alt=" ")
        li
          a.share(href=" ") Share
        li.chat
          a(href=" ")
            img(src="@/assets/icons/Shape@1x.svg" alt="")
            | Chat
  .menu-header
    ul
      li
        router-link(:to="{name: 'Tasks'}" active-class="activ") Tasks
      li
        router-link(:to="{name: 'Kanban'}" active-class="activ") Kanban
      li
        router-link(:to="{name: 'Activity'}" active-class="activ") Activity
      li
        router-link(:to="{name: 'Calendar'}" active-class="activ" href=" ") Calendar
      li
        router-link(:to="{name: 'Files'}" active-class="activ" href=" ") Files
</template>
<script lang="ts">
export default {
  name: 'Header',
};
</script>
<style lang=""></style>
