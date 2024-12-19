<script setup lang="ts">
import SkillCard from "~/component/SkillCard.vue";
</script>

<template>
    <UCard class="flex h-full w-full overflow-y-auto">
      <p class="w-full flex justify-center text-2xl p-4">Compétences</p>
      <div class="flex flex-wrap justify-center gap-4 container">
        <SkillCard class="col" name="Swift"></SkillCard>
        <SkillCard name="Kotlin"></SkillCard>
        <SkillCard name="Flutter"></SkillCard>
        <SkillCard name="Angular"></SkillCard>
        <SkillCard name="React"></SkillCard>
        <SkillCard name="Vue"></SkillCard>
        <SkillCard name="Java"></SkillCard>
        <SkillCard name="Lua"></SkillCard>
      </div>
    </UCard>
</template>

<style scoped>

</style>