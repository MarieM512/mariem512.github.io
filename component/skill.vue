<script setup lang="ts">
import SkillCard from "~/component/SkillCard.vue";
import { ref, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";
const props = defineProps(["class"]);
const target = ref(null);
const { elementX, elementY } = useMouseInElement(target);
const cssVars = computed(() => ({
  "--x": `${target.value ? elementX.value : -1000}px`,
  "--y": `${target.value ? elementY.value : -1000}px`,
}));
</script>

<template>
  <div
    class="h-full w-full"
    ref="target"
    :style="cssVars"
    :class="['rounded-[15px] p-[2px] shine', props.class || '']"
  >
    <UCard class="rounded-[13px] flex h-full w-full overflow-y-auto">
      <p class="w-full flex justify-center text-2xl p-4">Compétences</p>
      <div class="flex flex-wrap justify-center gap-4 container p-2">
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
  </div>
</template>

<style scoped>
.shine {
  background-image: radial-gradient(
    100px circle at var(--x) var(--y),
    #6366f1 0,
    transparent 100%
  );
}
</style>