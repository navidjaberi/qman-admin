<template>
  <div>
    <v-navigation-drawer
      location="right"
      :elevation="5"
      class="!fixed"
      :width="264"
      permanent
    >
      <div class="h-[75%]">
        <div class="w-full text-center py-3 mt-2">
          <v-img src="/dashboard-logo.png" width="70" class="mx-auto"></v-img>
        </div>
        <DashboardNavbar direction="vertical" class="my-2 !mt-10 text-black" />
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup></script>

<style></style>
