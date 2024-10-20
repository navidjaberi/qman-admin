<script setup>
import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();
const currentTab = ref("dashboard");
const drawer = ref(null);
const getActiveItem = (i) => {
  currentTab.value = i;
};
</script>
<template>
  <div class="layout-default min-h-100vh">
    <BaseAlert />
    <v-app class="!bg-[#F1F1F1]">
      <div>
        <v-btn
          icon="mdi-menu"
          class="mr-4 mt-4 lg:!hidden"
          @click="drawer = !drawer"
          mode="primary"
          variant="outlined"
          rounded="lg"
        ></v-btn>
        <v-navigation-drawer
          location="right"
          :elevation="5"
          class="!fixed"
          :width="264"
          :permanent="mdAndUp"
          v-model="drawer"
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
              class="my-2 !mt-5 text-black"
              :value="currentTab"
              @active-item="getActiveItem"
            />
          </div>
        </v-navigation-drawer>
      </div>
      <div class=" mt-5 px-4" :class="{ 'mr-74': mdAndUp }">
        <slot />
      </div>
    </v-app>
  </div>
</template>

<style lang="scss"></style>
