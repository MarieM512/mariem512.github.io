<template>

  <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 h-screen w-screen gap-4 p-4">
    <div class="col-span-1 row-span-4">
      <personal-info/>
    </div>

    <div class="col-span-3 row-span-2">
      <skill/>
    </div>

    <div class="col-span-3 row-span-2">
      <portfolio/>
    </div>

  </div>
</template>

<script setup lang="ts">
import PersonalInfo from "~/component/personalInfo.vue";
import Skill from "~/component/skill.vue";
import Portfolio from "~/component/portfolio.vue";
</script>