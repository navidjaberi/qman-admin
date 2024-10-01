<script setup>


// import app version
import { version } from "../package.json";
console.warn(
  `%c App Version: ${version}`,
  "color: #fff; background: #007bff; padding: 5px 10px; border-radius: 5px;"
);
</script>
<template>
<BaseAlert/>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
