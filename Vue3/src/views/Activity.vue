<template>
  <div class="main">
    <p class="main-title">TODAY</p>
    <ul>
      <div v-for="fMessage in fMess1" :key="fMessage.id">
        <li class="main-li" v-if="fMessage.standart === 1">
          <span class="main-li-message" :class="fMessage.spanСlas"
            ><img :src="require('@/assets/Icon@3x.svg')" alt=""
          /></span>
          <p class="main-li-text">{{ fMessage.text }}</p>
          <p class="main-time">{{ fMessage.time }}</p>
        </li>
        <li class="main-li" v-if="fMessage.standart === 2">
          <span class="main-li-message" :class="fMessage.spanСlas"
            ><img :src="require('@/assets/1.png')" alt=""
          /></span>
          <p class="main-li-text">{{ fMessage.text }}</p>
          <p class="main-time">{{ fMessage.time }}</p>
        </li>
        <li class="main-li" v-if="fMessage.standart === 3">
          <p class="main-li-text my-write">{{ fMessage.text }}</p>
        </li>
        <li class="main-li" v-if="fMessage.standart === 4">
          <span class="main-li-message" :class="fMessage.spanСlas"
            ><img :src="require('@/assets/3.png')" alt=""
          /></span>
          <p class="main-li-text">
            {{ fMessage.text }}
            <img
              v-for="(item, index) in fMessage.collectionImg"
              :key="index"
              v-on:click="notificFunction(index)"
              :src="require('@/assets/' + item + '.jpg')"
              width="100"
              height="100"
              alt=" "
            />
          </p>
          <p class="main-time">{{ fMessage.time }}</p>
        </li>
      </div>
    </ul>
    <div></div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent ({
  name: 'Content',
  props: {
    fMess1: {
      type: Array,
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
<style lang=""></style>
