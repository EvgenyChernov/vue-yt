import {createPinia} from "pinia";
import {useUserStore} from "@/store/userStore";
import {useAuthStore} from "@/store/authStore";

const pinia = createPinia();
export {
  useUserStore,
  useAuthStore
};

export default pinia;