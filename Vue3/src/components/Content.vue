<template lang="pug">
.main
  p.main-title TODAY
  ul
    div(v-for="fMessage in fMess1" :key="fMessage.id")
      li.main-li(v-if="fMessage.standart === 1")
        span.main-li-message(:class="fMessage.spanСlas")
          img(:src="require('@/assets/icons/Icon@3x.svg')" alt="")
        p.main-li-text {{ fMessage.text }}
        p.main-time {{ fMessage.time }}
      li.main-li(v-if="fMessage.standart === 2")
        span.main-li-message(:class="fMessage.spanСlas")
          img(:src="require('@/assets/icons/1.png')" alt="")
        p.main-li-text {{ fMessage.text }}
        p.main-time {{ fMessage.time }}
      li.main-li(v-if="fMessage.standart === 3")
        p.main-li-text.my-write {{ fMessage.text }}
      li.main-li(v-if="fMessage.standart === 4")
        span.main-li-message(:class="fMessage.spanСlas")
          img(:src="require('@/assets/icons/3.png')" alt="")
        p.main-li-text
          | {{ fMessage.text }}
          img(v-for="(item, index) in fMessage.collectionImg" :key="index" v-on:click="notificFunction(index)" :src="require('@/assets/icons/' + item + '.jpg')" width="100" height="100" alt=" ")
        p.main-time {{ fMessage.time }}
  div
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent ({
  name: 'Content',
  props: {
    fMess1: {
      type: Object,
      required: true
    }
  },
  methods: {
    notificFunction(index: number) {
      this.$emit('notificationIndex', index);
    },
  },
});
</script>
<style lang="scss">


.main-time {
  display: flex;
  justify-content: right;
  opacity: 0.7;
  font-family: Helvetica;
  font-size: 14px;
  color: #131313;
  text-align: right;
  line-height: 20px;
  margin-right: 30px;
}
</style>
