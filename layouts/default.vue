<script setup>
const currentTab = ref("dashboard");
const getActiveItem = (i) => {
  currentTab.value = i;
};
</script>

<template>
  <div class="layout-default min-h-100vh">
    <BaseAlert />
    <v-app class="!bg-[#F1F1F1]">
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
              <v-img
                src="/dashboard-logo.png"
                width="70"
                class="mx-auto"
              ></v-img>
            </div>
            <NavbarNav
              direction="vertical"
              class="my-2 !mt-10 text-black"
              :value="currentTab"
              @active-item="getActiveItem"
            />
          </div>
        </v-navigation-drawer>
      </div>
      <div class="mr-74 mt-5">
        <slot />
      </div>
    </v-app>
  </div>
</template>

<style lang="scss"></style>
