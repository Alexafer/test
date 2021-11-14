<template lang="">
  <div>
    <div class="heder-menu">
      <div class="header-block-1">
        <img class="header-img" src="@/assets/Shapes@2x.png " alt=" " />
        <p>Website Redesign</p>
        <img class="header-img-2" src="@/assets/tochky.jpg" width="20" height="20" alt="" />
      </div>
      <div class="header-block-2">
        <ul class="header-users-icons">
          <li>
            <a href=" "><img class="us-icon" src="@/assets/logo_1.jpg " alt=" " /></a>
          </li>
          <li>
            <a href=" "><img class="us-icon" src="@/assets/logo_2.jpg " alt=" " /></a>
          </li>
          <li>
            <a href=" "><img class="us-icon" src="@/assets/logo_3.jpg " alt=" " /></a>
          </li>
          <li><a class="share" href=" ">Share</a></li>
          <li class="chat">
            <a href=" "><img src="@/assets/Shape@1x.svg" alt="" />Chat</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="menu-header">
      <ul>
        <li><router-link :to="{name:'Tasks'}" active-class='activ'>Tasks</router-link></li>
        <li><a href=" ">Kanban</a></li>
        <li><li><router-link :to="{name:'Activity'}" active-class='activ'>Activity</router-link></li></li>
        <li><a href=" ">Calendar</a></li>
        <li><a href=" ">Files</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
