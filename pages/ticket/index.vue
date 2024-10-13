<template>
  <base-layout title="تیکت" />
  <div class="mt-8 px-7">
    <div
      class="border-1 border-gray-200 bg-white border-solid rounded-lg flex justify-between align-center py-2 px-5"
    >
      <div>
        <div class="flex gap-10 align-center">
          <v-checkbox label="انتخاب همه" hide-details class="text-gray-600" />
          <div class="text-center">
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              location="bottom end"
              transition="scale-transition"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  variant="outlined"
                  color="primary-main"
                  class="!h-11 !w-8"
                  size="small"
                  v-bind="props"
                >
                  <Icon name="solar:filter-outline" size="1.5rem"></Icon>
                </v-btn>
              </template>

              <v-card
                max-width="300"
                width="200"
                color="#EFF2FF"
                class="!text-sm pa-3"
                flat
              >
                <div class="flex justify-between align-center">
                  <p>فیلتر بر اساس:</p>
                  <div
                    class="border-[1.5px] border-solid !border-error-dark size-6 flex justify-center align-center rounded-md"
                  >
                    <Icon
                      name="solar:close-circle-linear"
                      size="1.2rem"
                      class="text-error-dark"
                      @click="menu = false"
                    />
                  </div>
                </div>
                <v-form class="mt-5">
                  <div>
                    <v-select
                      label="انتخاب کنید"
                      variant="outlined"
                      density="compact"
                      :items="['نام مجموعه', 'تاریخ', 'وضعیت']"
                      color="#979797"
                      class="!text-[#979797]"
                      hide-details
                    ></v-select>
                  </div>
                  <div class="mt-5">
                    <v-text-field
                      label="چیزی بنویسید ..."
                      variant="outlined"
                      density="compact"
                      color="#979797"
                      class="!text-[#979797]"
                      hide-details
                    ></v-text-field>
                  </div>
                  <BaseBtn text="جستجو" class="mt-5" />
                </v-form>
              </v-card>
            </v-menu>
          </div>
        </div>
      </div>
      <div>
        <v-btn
          variant="outlined"
          color="error-main"
          class="!h-11 !w-8"
          size="small"
        >
          <Icon name="solar:trash-bin-trash-outline" size="1.5rem"></Icon>
        </v-btn>
      </div>
    </div>
    <BaseTable title="تیکت های دریافتی" class="my-6">
      <div
        class="grid grid-cols-8 text-center px-6 py-5 text-gray-400 justify-center"
      >
        <p class="col-start-2">شناسه مجموعه</p>
        <p>نام مجموعه</p>
        <p>وضعیت</p>
        <p>تاریخ</p>
        <p>ساعت</p>
        <p>شناسه تیکت</p>
      </div>
      <v-divider thickness="2" class="mx-6" />
      <div
        class="grid grid-cols-8 text-center px-6 py-1 mt-4 place-items-center"
        v-for="i in ticket"
        :key="i.ticketId"
      >
        <v-checkbox hide-details class="text-gray-600" />
        <p>{{ i.cafeId }}</p>
        <p>{{ i.name }}</p>
        <div class="bg-[#FFDAE1] w-full rounded-md">
          <p class="font-regular py-1 text-error-dark">{{ i.status }}</p>
        </div>
        <p>{{ i.date }}</p>
        <p>{{ i.time }}</p>
        <p>{{ i.ticketId }}</p>
        <v-btn
          variant="outlined"
          color="primary-main"
          class="w-5 !mx-auto"
          size="small"
          @click="ticketView(i.ticketId)"
        >
          <Icon name="solar:eye-outline" size="1.5rem"></Icon>
        </v-btn>
      </div>
      <div class="text-center">
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
    </BaseTable>
  </div>
</template>
<script setup lang="ts">
import { useTicketStore } from "~/store/ticket";
const { getTickets } = useTicketStore();
const router = useRouter();
const page = ref(1);
const ticket = computed(() => {
  return getTickets;
});
const menu = ref(false);
const ticketView = (i: number) => {
  router.push(`/ticket/${i}`);
};
</script>
<style></style>
