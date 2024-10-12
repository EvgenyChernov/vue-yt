const ERRORS_CODES: { [key: string]: string } = {
  INVALID_LOGIN_CREDENTIALS: 'Не верный логин или пароль',
  auth: "Доступ запрещен"
}

export function error(code: string): string {
  return ERRORS_CODES[code] ? ERRORS_CODES[code] : 'Неизвестная ошибка';
}
