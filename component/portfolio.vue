<script setup lang="ts">
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
    <UCard
      class="rounded-[13px] flex h-full w-full justify-center overflow-y-auto"
    >
      <p class="flex justify-center text-2xl p-4">Portfolio</p>

      <div class="flex flex-wrap justify-center gap-4 container p-2">
        <UCard>
          <div class="p-4 flex flex-col justify-center gap-2">
            <USkeleton class="h-20 w-20" />
            <p class="text-center">CatBreeds</p>
            <UBadge color="purple" class="gap-2 p-2 justify-center">
              <UIcon name="i-simple-icons-apple" />
              <p>iOS</p>
            </UBadge>
          </div>
        </UCard>
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
