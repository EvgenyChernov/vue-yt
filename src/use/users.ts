import {useFetch} from "@/use/fetch";
import {Ref, ref} from "vue";

type UsableUsers = Promise<{ users: Ref<User[] | undefined> }>

interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

export async function useUsers(): UsableUsers {
  const loading: Ref<boolean> = ref<boolean>(false);
  const {response: users, request} = useFetch<User[]>('https://jsonplaceholder.typicode.com/users/')

  if (!loading.value) {
    await request()
    loading.value = true
  }
  return {users};
}