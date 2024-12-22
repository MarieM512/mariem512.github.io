<script setup lang="ts"></script>

<template>
  <UCard class="flex h-full w-full justify-center overflow-y-auto">
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
</template>

<style scoped></style>
