// login-form.ts
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { computed, watch } from "vue";

export function useLoginForm() {
  const { handleSubmit, isSubmitting, submitCount } = useForm();
  const MIN_LENGTH = 6;

  // Поле email
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Пожалуйста введите Email")
      .email("Необходимо ввести корректный email")
  );

  const isTooManyAttempts = computed(() => submitCount.value >= 3);
  watch(isTooManyAttempts, (value) => {
    if (value) {
      setTimeout(() => (submitCount.value = 0), 1500);
    }
  });

  // Поле пароля
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    "password",
    yup.string().trim().min(MIN_LENGTH, `Пароль не может быть меньше ${MIN_LENGTH} символов`)
  );

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  return {
    email,
    eError,
    eBlur,
    password,
    pError,
    pBlur,
    isSubmitting,
    isTooManyAttempts,
    onSubmit,
  };
}
