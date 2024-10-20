<template>
  <v-list density="compact" class="-mr-4 h-full !mx-4">
    <v-list-item
      :to="item.tab"
      v-for="(item, index) in items"
      :key="item.id"
      :value="item.value"
      class="w-full mb-3 !text-gray-500 !rounded-md"
      active-class="!bg-primary-main !text-white"
      :height="44"
      :active="route.path.includes(item.tab)"
      @click="activeItemClick(item.value)"
    >
      <template #prepend>
        <Icon :name="item.icon" size="1.5rem" class="ml-3" />
      </template>
      <template #title>
        <p class="text-[13px] !font-bold">
          {{ item.title }}
        </p>
      </template>
    </v-list-item>
    <div class="h-[30%] flex align-end">
      <v-list-item class="!text-red-500 rounded-lg w-11/12 mb-3" :height="44">
        <template #prepend>
          <Icon name="ic:baseline-log-out" size="1.5rem" class="mr-5" />
        </template>
        <template #title>
          <p class="text-[13px] font-semibold mx-2">خروج</p>
        </template>
      </v-list-item>
    </div>
  </v-list>
</template>
<script setup lang="ts">
interface Items {
  title: string;
  id: number;
  icon: string;
  tab: string;
  value: string;
}
const props = defineProps({
  value: String,
});

const emit = defineEmits(["activeItem"]);
const route = useRoute();

const items = ref<Items[]>([
  {
    title: "پیشخوان",
    id: 1,
    tab: "/dashboard",
    icon: "icon-park-outline:all-application",
    value: "dashboard",
  },
  {
    title: "تیکت",
    id: 2,
    tab: "/ticket",
    icon: "fluent:chat-bubbles-question-32-regular",
    value: "ticket",
  },
  {
    title: "تراکنش های مالی",
    id: 3,
    tab: "/finance",
    icon: "solar:wallet-money-outline",
    value: "",
  },
  {
    title: "مدیران",
    id: 8,
    tab: "/admins",
    icon: "solar:shield-user-outline",
    value: "",
  },
  {
    title: "نظرات",
    id: 7,
    tab: "/comments",
    icon: "solar:clipboard-text-outline",
    value: "",
  },
  { title: "کسب و کارها", id: 5, tab: "/businesses", icon: "ph:buildings", value: "" },
  {
    title: "ارتباط سریع",
    id: 9,
    tab: "/contact",
    icon: "solar:phone-calling-outline",
    value: "",
  },
  {
    title: "حساب کاربری",
    id: 6,
    tab: "/user",
    icon: "solar:user-linear",
    value: "",
  },
]);
const activeItemClick = (val: string) => {
  emit("activeItem", val);
};
</script>

<style></style>
