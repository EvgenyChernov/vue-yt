import {createPinia} from "pinia";
import {useUserStore} from "@/store/userStore";

const pinia = createPinia();
export {useUserStore};
export default pinia;