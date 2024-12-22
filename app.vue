<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 h-screen w-screen gap-4 p-4"
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

    <!-- <div
      class="col-span-2 row-span-2 flex"
      ref="target"
      :style="cssVars"
      :class="['rounded-[15px] p-[2px] shine', props.class || '']"
    >
      <div
        class="rounded-[13px] w-full h-full bg-gradient-to-b from-neutral-800/50 to-neutral-950/50 bg-neutral-950/80"
      >
        <portfolio />
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import Personal from "~/component/personal.vue";
import Skill from "~/component/skill.vue";
import Portfolio from "~/component/portfolio.vue";
</script>

<style scoped></style>
