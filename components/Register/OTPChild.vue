<template>
  <div style="display: flex; align-items: center">
    <input
      data-test="single-input"
      :type="inputTypeValue"
      :inputmode="inputmode"
      :placeholder="placeholder"
      :disabled="isDisabled"
      ref="input"
      min="0"
      max="9"
      maxlength="1"
      pattern="[0-9]"
      v-model="model"
      class="otp-input"
      :class="[inputClasses, conditionalClass, { 'is-complete': model }]"
      @input="handleOnChange"
      @keydown="handleOnKeyDown"
      @paste="handleOnPaste"
      @focus="handleOnFocus"
      @blur="handleOnBlur"
    />
    <span v-if="!isLastChild && separator">
      <span v-html="separator"></span>
    </span>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "SingleOtpInput",
  props: {
    inputType: {
      type: String as PropType<
        "number" | "tel" | "letter-numeric" | "password"
      >,
      validator: (value: string) =>
        ["number", "tel", "letter-numeric", "password"].includes(value),
      default: "tel",
    },
    inputmode: {
      type: String as PropType<
        | "none"
        | "text"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | "search"
        /**
         * Specify that a standard HTML element should behave like a defined custom built-in element
         * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
         */
      >,
      default: "numeric",
    },
    value: {
      type: [String, Number],
    },
    separator: {
      type: String,
    },
    focus: {
      type: Boolean,
    },
    inputClasses: {
      type: [String, Array] as PropType<string[] | string>,
    },
    conditionalClass: {
      type: String,
    },
    shouldAutoFocus: {
      type: Boolean,
    },
    isLastChild: {
      type: Boolean,
    },
    placeholder: {
      type: String,
    },
    isDisabled: {
      type: Boolean,
    },
  },
  emits: ["on-change", "on-keydown", "on-paste", "on-focus", "on-blur"],
  setup(props, { emit }) {
    const model = ref(props.value || "");
    const input = ref<HTMLInputElement | null>(null) as Ref<HTMLInputElement>;

    const handleOnChange = () => {
      model.value = model.value.toString();
      if (model.value.length > 1) {
        model.value = model.value.slice(0, 1);
      }
      return emit("on-change", model.value);
    };

    const isCodeLetter = (charCode: number) => charCode >= 65 && charCode <= 90;
    const isCodeNumeric = (charCode: number) =>
      (charCode >= 48 && charCode <= 57) || (charCode >= 96 && charCode <= 105);
    // numeric keys and numpad keys

    const handleOnKeyDown = (event: KeyboardEvent) => {
      if (props.isDisabled) {
        event.preventDefault();
      }
      // Only allow characters 0-9, DEL, Backspace, Enter, Right and Left Arrows, and Pasting
      const keyEvent = event || window.event;
      const charCode = keyEvent.which ? keyEvent.which : keyEvent.keyCode;
      if (
        isCodeNumeric(charCode) ||
        (props.inputType === "letter-numeric" && isCodeLetter(charCode)) ||
        [8, 9, 13, 37, 39, 46, 86].includes(charCode)
      ) {
        emit("on-keydown", event);
      } else {
        keyEvent.preventDefault();
      }
    };

    const handleOnPaste = (event: ClipboardEvent) => emit("on-paste", event);

    const handleOnFocus = () => {
      input.value.select();
      return emit("on-focus");
    };

    const handleOnBlur = () => emit("on-blur");

    watch(
      () => props.value,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          model.value = newValue as string | number;
        }
      }
    );
    watch(
      () => props.focus,
      (newFocusValue, oldFocusValue) => {
        // Check if focusedInput changed
        // Prevent calling function if input already in focus
        if (oldFocusValue !== newFocusValue && input.value && props.focus) {
          input.value.focus();
          input.value.select();
        }
      }
    );

    onMounted(() => {
      if (input.value && props.focus && props.shouldAutoFocus) {
        input.value.focus();
        input.value.select();
      }
    });

    return {
      handleOnChange,
      handleOnKeyDown,
      handleOnPaste,
      handleOnFocus,
      handleOnBlur,
      input,
      model,
      inputTypeValue:
        props.inputType === "letter-numeric" ? "text" : props.inputType,
    };
  },
});
</script>

<style scoped>
.otp-input {
  width: 45px;
  height: 45px;
  background-color: white;
  margin: 0 5px;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid #99bbff;
  text-align: center;
}
.otp-input:focus {
  border: 2px solid #083EAF!important;
outline:none!important;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
