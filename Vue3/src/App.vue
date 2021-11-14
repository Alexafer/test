<template>
  <div>
    <Layout />
  </div>
</template>
<script lang="ts">
import Layout from '@/components/Layout.vue';
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    Layout,
  },
});
</script>
<style lang="scss">
@import 'style.scss';
</style>
