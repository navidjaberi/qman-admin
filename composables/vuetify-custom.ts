export const useVuetifyCustom = () => {
  const vuetifyConfig = (state: any) => ({
    props: {
      "error-messages": state.errors,
    },
  });
  return { vuetifyConfig };
};
