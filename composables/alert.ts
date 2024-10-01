export const useAlert = () => {
  const showAlertVar = useState("show", () => false);

  // state
  const alert = useState("alert", () => ({
    type: '',
    timeout: 10000,
  }));

  //actions
  const showAlert = ({
    type = '',
    timeout = 3000,
  }: {
    type?: string;
    timeout?: number;
  }) => {
    showAlertVar.value = true;
    alert.value = {
      type,
      timeout,
    };
  };
  const hideAlert = () => {
    showAlertVar.value = false;
  };
  return {
    alert,
    showAlert,
    hideAlert,
    showAlertVar,
  };
};
