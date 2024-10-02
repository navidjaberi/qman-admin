import { defineStore } from "pinia";

export const useRegister = defineStore("register", () => {
  const isLoggedIn = ref(false);
  const isLoggedInGet = computed(() => {
    return isLoggedIn.value;
  });
  const login=()=>{
    isLoggedIn.value=true
  }
  const logout=()=>{
    isLoggedIn.value=false
  }
  // const tokenCookie = useCookie("userToken");
  // const idCookie = useCookie("userId");
  // const PhoneNumber = ref<string>("");
  // const accessToken = ref<null | string>(null);
  // const userId = ref<null | string>(null);
  // const PhoneNumberGet = computed((): string => {
  //   return PhoneNumber.value;
  // });
  // //check the cookie for token existing
  // const accessTokenGet = computed((): string | null => {
  //   if (tokenCookie.value) {
  //     accessToken.value = tokenCookie.value;
  //   }
  //   return accessToken.value;
  // });
  // //check the cookie for user ID existing
  // const userIdGet = computed((): string | null => {
  //   if (idCookie.value) {
  //     userId.value = idCookie.value;
  //   }
  //   return userId.value;
  // });
  // Return the properties and functions for external use
  // return { PhoneNumber, PhoneNumberGet, accessToken, accessTokenGet, userId, userIdGet };
  return { isLoggedIn, isLoggedInGet,login,logout };
});
