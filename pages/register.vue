<template>
  <div class="default-layout">
    <h1>به پنل مدیریت کیومن خوش آمدید</h1>
    <v-btn
      @click="showAlert({  type:'success' })"
      >Show Alert</v-btn
    >
    <v-btn
      @click="showAlert({  type:'warning' })"
      >Show Alert</v-btn
    >
    <v-btn
      @click="showAlert({  type:'error' })"
      >Show Alert</v-btn
    >
  </div>
</template>

<script setup>
const { showAlert } = useAlert();
</script>

<style></style>
