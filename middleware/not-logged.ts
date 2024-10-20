import { useRegister } from "~/store/register";
export default defineNuxtRouteMiddleware((to, from) => {
  const store = useRegister();
  if (!store.isLoggedInGet  ) {
    return navigateTo("/register");
  }
});
