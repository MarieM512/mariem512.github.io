<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 h-screen w-screen gap-4 rounded-[15px] p-[2px] shine rounded-[13px] p-4"
  >
    <div class="col-span-2 md:col-span-1 row-span-4">
      <personal />
    </div>

    <div class="col-span-2 row-span-2 flex flex-wrap">
      <skill />
    </div>

    <div
      class="col-span-2 row-span-2"
    >
      <portfolio />
    </div>
  </div>
</template>

<script setup lang="ts">
import Personal from "~/component/personal.vue";
import Skill from "~/component/skill.vue";
import Portfolio from "~/component/portfolio.vue";
</script>

<style scoped></style>
