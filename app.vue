<template>

  <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 h-screen w-screen gap-4 p-4">
    <div class="col-span-1 row-span-4">
      <personal-info/>
    </div>

    <div class="col-span-3 row-span-3">
      <UCard>
        <UTabs :items="items">
          <template #aboutMe="{item}">
            <about-me/>
          </template>
        </UTabs>
      </UCard>
    </div>

    <div class="col-span-3 row-span-1">
      <skill/>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutMe from "~/component/aboutMe.vue";
import PersonalInfo from "~/component/personalInfo.vue";
import Skill from "~/component/skill.vue";

const items = [{
  label: 'À propos de moi',
  icon: 'i-carbon:user',
  slot: 'aboutMe'
}, {
  label: 'Mon parcours',
  icon: 'i-carbon:3d-curve-auto-colon',
  content: 'Cet espace est en cours de développement'
}, {
  label: 'Portfolio',
  icon: 'i-carbon:application-mobile',
  content: 'Cet espace est en cours de développement'
}]
</script>