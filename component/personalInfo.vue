<script setup lang="ts">

</script>

<template>
  <UCard class="flex h-full w-full">
    <UAvatar
        class="flex justify-center pb-2 w-full"
        size="3xl"
        src="https://avatars.githubusercontent.com/u/118732275?s=400&u=ec69f293cb78dffbc8005d153a77df53f1925cd3&v=4"
        alt="Avatar"
    />
    <p class="flex justify-center">Marie Metay</p>
    <div class="flex justify-center pb-4">
      <UBadge color="white" variant="solid">Développeuse mobile</UBadge>
    </div>

    <p>
      Développeuse mobile passionnée, experte en <strong>iOS</strong>, <strong>Android</strong> et <strong>Flutter</strong>.
    </p>

    <div class="flex gap-2 items-center">
      <UIcon name="i-carbon:email" class="w-5 h-5" />
      <a href="mailto:mariemetay.pro@gmail.com?subject=Contact via mariem512.github.io" class="underline">mariemetay.pro@gmail.com</a>
    </div>

    <div class="flex gap-2 items-center py-2">
      <UIcon name="i-carbon:phone" class="w-5 h-5" />
      <p>07 78 55 83 45</p>
    </div>

    <div class="flex gap-2 items-center">
      <UIcon name="i-carbon:location" class="w-5 h-5" />
      <p>Nantes</p>
    </div>

    <div>

      <p>
        Adepte du <strong>pixel perfect</strong>.
      </p>
      <p>
        Je crois fermement que <strong>l'apprentissage continu est la clé de la réussite</strong>.
        Chaque jour est une opportunité d'explorer de nouvelles technologies, de perfectionner mes compétences
        et de relever de nouveaux défis.
      </p>
      <p>
        Ma mission ? <strong>Créer des solutions mobiles élégantes, robustes et parfaitement adaptées aux besoins des utilisateurs.</strong> 🌟
      </p>
    </div>

    <UDivider class="p-2" label="Réseaux sociaux" />

    <div class="flex justify-center">
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
  </UCard>

</template>

<style scoped>

</style>