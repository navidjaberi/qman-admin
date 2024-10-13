<template>
  <label class="custom-label flex p-2">
    <div
      class="shadow w-5 h-5 p-1 flex justify-center items-center mr-2 rounded-md"
      :class="[checked ? 'bg-primary-main' : 'bg-white']"
    >
      <input
        type="checkbox"
        class="hidden"
        checked
        v-model="props.checked"
        :value="props.value"
      />
      <Icon
        class="hidden text-white text-black pointer-events-none"
        name="solar:check-circle-outline"
        size="1.5rem"
      >
      </Icon>
    </div>
  </label>
</template>

<script setup>
const props = defineProps({
  value: String,
  checked:Boolean
});
</script>

<style>
.custom-label input:checked + svg {
  display: block !important;
}
</style>
