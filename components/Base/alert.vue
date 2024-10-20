<template>
  <div>
    <v-snackbar
      v-model="showAlertVar"
      :timeout="alert.timeout"
      position="fixed"
      content-class="top-0 !bottom-unset border-2 !border-success-dark border-solid"
      :content-class="[alertProperty.color]"
      class="!w-4/5 mx-auto"
      variant="flat"
      flat
      height="72px"
    >
      <div class="flex align-center gap-4">
        <div
          class="border-[1.5px] border-solid size-8 flex justify-center align-center rounded-full"
          :class="[alertProperty.border]"
        >
          <Icon
            :name="alertProperty.icon"
            size="1.3rem"
            :class="[alertProperty.text]"
            @click="hideAlert()"
          />
        </div>
        <p class="font-bold">{{ alertProperty.message }}</p>
      </div>
      <template v-slot:actions>
        <div
          class="border-[1.5px] border-solid size-8 flex justify-center align-center rounded-md"
          :class="[alertProperty.border]"
        >
          <Icon
            name="solar:close-circle-linear"
            size="1.5rem"
            :class="[alertProperty.text]"
            @click="hideAlert()"
          />
        </div>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
const { alert, hideAlert, showAlertVar } = useAlert();
const alertProperty = computed(() => {
  if (alert.value.type === 'success') {
    return {
      color: "!bg-success-light",
      border: "!border-success-dark",
      text: "!text-success-dark",
      icon: "solar:check-circle-outline",
      message: "با موفقیت انجام شد.",
    };
  } else if (alert.value.type == "warning") {
    return {
      color: "!bg-warning-light",
      border: "!border-warning-dark",
      text: "!text-warning-dark",
      icon: "ph:warning-circle",
      message: "مشکلی رخ داده است! لطفاً اطلاعات را بررسی کنید.",
    };
  } else if (alert.value.type == "error") {
    return {
      color: "!bg-error-light",
      border: "!border-error-dark",
      text: "!text-error-dark",
      icon: "solar:close-circle-linear",
      message: "درخواست شما ثبت نگردید! لطفاً دوباره تلاش کنید.",
    };
  }
});
</script>

<style></style>
