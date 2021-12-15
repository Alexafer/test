<template lang="">
  <div class="pagess">
    <SideBar :user1="user" @calcOpenTask="taskUpdate" />
    <div class="header">
      <Header></Header>
      <router-view :fMess1="fMessages" @notificationIndex="notificationIn"></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import {IUser} from '@/types/user';
import SideBar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'Layout',
  components: {
    SideBar,
    Header,
    Content,
  },
  data() {
    return {
      user: {
        firstName: 'Jean',
        lastName: 'Gonsales',
        position: 'Product Owner',
        notification: 3,
        task: {
          complitedTask: 372,
          openTasks: 11,
        },
      } as IUser,
      fMessages: [
        {
          standart: 1,
          spanСlas: 'color-send',
          time: '8:40 PM',
          text: 'quam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiamnemo.',
        },
        {
          standart: 2,
          spanСlas: 'color_mess',
          time: '7:32 PM',
          text: 'olestiae delectus sequi quos aliquid aperiam nemo.',
        },
        {
          standart: 3,
          text: 'atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquid aperiam nemo.',
        },
        {
          standart: 4,
          spanСlas: 'color_upload',
          time: '8:52 PM',
          text: 'quisquam dicta, corporis atque amet iure veritatis, repellat, molestiae delectus sequi quos aliquidaperiam nemo.',
          collectionImg: ['image_1', 'image_2', 'image_3', 'image_4'],
        },
      ],
    };
  },
  methods: {
    taskUpdate() {
      //   alert('heir')
      this.user.task.complitedTask = this.user.task.complitedTask + 1;
      this.user.task.openTasks = this.user.task.openTasks - 1;
    },
    notificationIn(e: number) {
      this.user.notification = e;
    },
  },
});
</script>
<style lang="scss"></style>
