<template>
  <div>
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
          <DashboardNavbar
            direction="vertical"
            class="my-2 !mt-10 text-black"
            :value="currentTab"
            @active-item="getActiveItem"
          />
        </div>
      </v-navigation-drawer>
    </div>
    <v-tabs-window v-model="currentTab" class="!mr-70">
      <v-tabs-window-item value="dashboard" class="mt-4 px-5">
        <DashboardTabsMain />
      </v-tabs-window-item>
      <v-tabs-window-item value="ticket" class="mt-4 px-5">
        <DashboardTabsTicket />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup>
const currentTab = ref("dashboard");
const getActiveItem=(i)=>{
  currentTab.value=i
}
// const activeTab = ref("ticket");
// watch(currentTab, (newX) => {
//   activeTab.value = newX;
// });
</script>

<style></style>
