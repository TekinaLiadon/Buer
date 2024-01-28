<template>
<div style="font-size: 50px">{{text}}</div>
</template>

<script setup>

import {onBeforeMount, ref} from "vue";
import eventEmitter from "@/06-shared/utils/eventEmitter";

const text = ref('1')

onBeforeMount(() => {
  eventEmitter .subscribe("editSidebar", (value)=> text.value = value);
})
</script>

<style scoped>

</style>