<template lang="pug">
div
  h2 Content Created
  slot(name="C1")
  slot(name="C2")
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'ComingSoon',
});
</script>
<style lang="scss">
// @import '@/assets/styles/styles.scss';

</style>
