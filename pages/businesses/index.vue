<template>
  <base-layout title="کسب و کارها" />
  <div class="mt-20 px-7">
    <BaseTable title="کسب و کارهای درحال همکاری باما" class="my-6 relative">
      <div
        class="grid grid-cols-4 text-center px-6 py-5 text-gray-400 justify-center "
      >
        <p>شناسه مجموعه</p>
        <p>نام مجموعه</p>
        <p>وضعیت اشتراک</p>
        <p>شهر</p>
      </div>
      <v-divider thickness="2" class="mx-6" />
      <div class="min-h-[500px] pb-26">
        <div
          class="grid grid-cols-4 text-center px-6 py-1 mt-4 place-items-center"
          v-for="i in businesses"
        >
          <p>{{ i.businessId }}</p>
          <p>{{ i.name }}</p>
          <div class="bg-[#FFDAE1] w-24 rounded-md">
            <p class="font-regular py-1 text-error-dark">{{ i.status }}</p>
          </div>
          <div class="flex gap-5 place-self-end ml-13">
            <p>{{ i.city }}</p>
            <v-btn
              variant="outlined"
              color="primary-main"
              class="w-5 !mx-auto"
              size="small"
              @click="businessView(i.businessId)"
            >
              <Icon name="solar:eye-outline" size="1.5rem"></Icon>
            </v-btn>
          </div>
        </div>
        <div class="text-center absolute w-full bottom-0 mx-auto">
          <v-container>
            <v-row justify="center">
              <v-col cols="5">
                <v-container class="max-width !text-xs">
                  <v-pagination
                    v-model="page"
                    :length="15"
                    class="my-4 !text-xs"
                    size="small"
                    variant="text"
                  ></v-pagination>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </BaseTable>
  </div>
</template>
<script setup>
const router = useRouter();
const page = ref(1);
const businesses = ref([
  {
    businessId: 9787,
    name: "کافه جابری",
    status: "دارای اشتراک",
    city: "کرج",
  },
  {
    businessId: 9787,
    name: "کافه جابری",
    status: "دارای اشتراک",
    city: "کرج",
  },
  {
    businessId: 9787,
    name: "کافه جابری",
    status: "دارای اشتراک",
    city: "کرج",
  },
  {
    businessId: 9787,
    name: "کافه جابری",
    status: "منقضی شده",
    city: "کرج",
  },
  {
    businessId: 9787,
    name: "کافه جابری",
    status: "منقضی شده",
    city: "کرج",
  },
]);
const businessView = (i) => {
  router.push(`/businesses/${i}`);
};
</script>
<style></style>
