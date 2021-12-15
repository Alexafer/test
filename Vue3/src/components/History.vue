<template lang="">
    <div class="container">
        <h4>History</h4>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import { mapState } from 'vuex';
export default defineComponent ({
    computed: {
        ...mapState(["History"])
    }
})
</script>
<style lang="">
    
</style>