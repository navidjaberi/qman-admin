export const useFormRules = (required?: boolean) => {
  return {
    text: [
      (value: string) => {
        if (value?.length >= 0) return true;
        return "فیلد را پر کنید";
      },
    ],
    phoneOrEmail: [
      (value: string) => {
        if (value) {
          const isValidNumeric =
            value.length === 11 &&
            /^[0-9-]+$/.test(value) &&
            /^09\d{9}$/.test(value);
          const isValidPersian =
            /^[۰-۹-]+$/.test(value) && /^۰۹[۰-۹]{9}$/.test(value);
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return (
            isValidNumeric ||
            isValidPersian ||
            pattern.test(value) ||
            "فرمت صحیح نیست"
          );
        } else {
          return "فیلد را پر کنید"; // or return an error message if required
        }
      },
    ],
    radio: [(value: any) => !!value || "فیلد را پر کنید"],
  };
};
