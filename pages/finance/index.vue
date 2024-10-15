<template>
  <base-layout title="تراکنش های مالی" />
  <div class="mt-20 px-8 mb-8">
    <div
      class="border-1 border-gray-200 bg-white border-solid rounded-lg flex justify-between align-center py-2 px-5"
    >
      <div>
        <div class="flex gap-3 align-center">
          <BaseBtn text="امروز" class="!px-4 !font-normal"></BaseBtn>
          <div class="text-center">
            <v-menu
              v-model="filter"
              :close-on-content-click="false"
              location="bottom end"
              transition="scale-transition"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  variant="outlined"
                  color="primary-main"
                  class="!h-8 !font-normal"
                  v-bind="props"
                  append-icon="mdi-chevron-down"
                >
                  {{ toggle }}
                </v-btn>
              </template>

              <v-btn-toggle
                v-model="toggle"
                class="!flex-col !h-auto !border-1 border-solid !border-gray-300"
                divided
                selected-class="bg-primary-main"
              >
                <v-btn class="py-2 !font-thin" size="small" value="سالانه"
                  >سالانه</v-btn
                >
                <v-divider></v-divider>
                <v-btn class="py-2 !font-thin" size="small" value="ماهانه"
                  >ماهانه</v-btn
                >
                <v-divider></v-divider>
                <v-btn class="py-2 !font-thin" size="small" value="روزانه"
                  >روزانه</v-btn
                >
              </v-btn-toggle>
            </v-menu>
          </div>
          <v-btn
            variant="outlined"
            color="secondary-main"
            class="!h-8 !font-normal"
            append-icon="mdi-chevron-down"
          >
          {{  dayInNumber + "" + month + "" + year }}
          </v-btn>
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
                  class="!h-8"
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
    </div>
    <BaseTable title="پرداختی کسب و کارها" class="mt-4 relative">
      <div
        class="grid grid-cols-7 text-center px-6 py-5 text-gray-400 justify-center"
      >
        <p>شناسه مجموعه</p>
        <p>نام مجموعه</p>
        <p>وضعیت پرداخت</p>
        <p>مبلغ</p>
        <p>زمان پرداخت</p>
        <p>مدت اشتراک</p>
        <p>شماره رهگیری</p>
      </div>
      <v-divider thickness="2" class="mx-6" />
      <div class="min-h-[500px] pb-26">

      <div
        class="grid grid-cols-7 text-center px-6 py-4 place-items-center"
        v-for="i in tickets"
        :key="i.ticketId"
      >
        <p>{{ i.cafeId }}</p>
        <p>{{ i.name }}</p>
        <div class="bg-success-light w-full rounded-md">
          <p class="font-regular py-1 text-success-dark">{{ i.status }}</p>
        </div>
        <p>{{ i.payment }}</p>
        <p>{{ i.time }}</p>
        <p>{{ i.membership }}</p>
        <p>{{ i.interception }}</p>
      </div>
      <div class="text-center absolute w-full bottom-0 mx-auto">
        <v-container>
          <v-row justify="center">
            <v-col cols="5">
              <v-container class="max-width !text-xs">
                <v-pagination
                  v-model="page"
                  :length="15"
                  class="my-2 !text-xs"
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
const {  dayInNumber, month, year } = useShared().getCurrentDate();

const menu = ref(false);
const filter = ref(false);
const toggle = ref("روزانه");
const tickets = ref([
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "موفق",
    payment: "۱۲،۰۰۰،۰۰۰",
    time: "۱۴:۳۳",
    membership: "۲ ماهه",
    interception: 989652652654,
  },
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "موفق",
    payment: "۱۲،۰۰۰،۰۰۰",
    time: "۱۴:۳۳",
    membership: "۲ ماهه",
    interception: 989652652655,
  },
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "موفق",
    payment: "۱۲،۰۰۰،۰۰۰",
    time: "۱۴:۳۳",
    membership: "۲ ماهه",
    interception: 989652652656,
  },
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "موفق",
    payment: "۱۲،۰۰۰،۰۰۰",
    time: "۱۴:۳۳",
    membership: "۲ ماهه",
    interception: 989652652657,
  },
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "موفق",
    payment: "۱۲،۰۰۰،۰۰۰",
    time: "۱۴:۳۳",
    membership: "۲ ماهه",
    interception: 989652652658,
  },
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "موفق",
    payment: "۱۲،۰۰۰،۰۰۰",
    time: "۱۴:۳۳",
    membership: "۲ ماهه",
    interception: 989652652659,
  },
]);
</script>

<style></style>
