<template lang="pug">
.main
  coming-soon
    template(#c2="")
      | Code the proected
    template(#c1="")
      | Code the proected
</template>
<script lang="ts">
import ComingSoon from '@/components/ComingSoon.vue';
export default ({
  name: 'Files',
  components: { ComingSoon }
});
</script>
<style lang="">
  
</style>