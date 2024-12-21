<script setup lang="ts">

</script>

<template>
  <UCard class="h-full w-full flex overflow-hidden overflow-y-auto">
   <div class="h-full flex flex-col justify-between">
      <div style="text-align: justify;">
        <UAvatar
            class="flex justify-center w-full"
            size="3xl"
            src="https://avatars.githubusercontent.com/u/118732275?s=400&u=ec69f293cb78dffbc8005d153a77df53f1925cd3&v=4"
            alt="Avatar"
        />

        <p class="flex justify-center py-2 text-2xl">Marie Metay</p>

        <div class="flex justify-center p-1">
          <UBadge color="white" class="p-2">Développeuse mobile</UBadge>
        </div>

        <div class="flex justify-center p-1 gap-2">
          <UBadge color="purple" class="p-2"> iOS</UBadge>
          <UBadge color="purple" class="p-2">👾 Android</UBadge>
        </div>

        <p class="text-justify py-2">
          Je transforme chaque idée en une expérience utilisateur fluide et captivante, avec une attention minutieuse au
          pixel perfect pour une esthétique impeccable. Convaincue que l’apprentissage continu est la clé du succès,
          j’explore chaque jour de nouvelles technologies pour relever de nouveaux défis.
        </p>

        <p class="text-justify py-2">
          Ma mission ? <strong>Créer des solutions mobiles élégantes, robustes et parfaitement adaptées aux besoins des
          utilisateurs.</strong> 🌟
        </p>
      </div>

     <div class="w-full p-4">

       <UDivider class="p-2" label="Contactez-moi"/>

       <a href="mailto:mariemetay.pro@gmail.com?subject=Contact via mariem512.github.io" class="py-2">✉️
         mariemetay.pro@gmail.com</a>

       <p class="py-2">📱 07 78 55 83 45</p>

       <UDivider class="p-2" label="Réseaux sociaux"/>

       <div class="flex justify-center mt-auto">
         <UButton
             icon="i-simple-icons-github"
             size="sm"
             color="black"
             variant="link"
             onclick="window.open('https://github.com/MarieM512')"
         />

         <UButton
             icon="i-simple-icons:linkedin"
             size="sm"
             color="black"
             variant="link"
             onclick="window.open('https://linkedin.com/in/marie-metay-b8952b197/')"
         />
       </div>
      </div>
    </div>
  </UCard>
</template>

<style scoped>

</style>