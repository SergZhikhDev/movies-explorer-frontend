

const regex = {
  name: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
  password: /^[a-zA-Z\d]{5,8}$/,
};

const config = {
  name: { isEmpty: true, isName: true, minLength: 3, maxLength: 8 },
  email: { isEmpty: true, isEmail: true },
  password: { isEmpty: true, minLength: 5, maxLength: 12 },
};
const reports = {
  errorMessages: {
    emptyError: `Это  обязательное для заполнения поле`,
    minLengthError: `Минимальное количество символов поля-`,
    maxLengthError: `Максимальное количество символов поля-`,
    nameError: `'Имя может состоять только из букв, пробелов и "-"'`,
    emailError: `Неправильный формат e-mail`,
    passwordError: `Пароль должен состоять из буквб цифр`,
  },
  apiMessages: {
    not_found: "Ничего не найдено",
    error:
      "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
  },

  attentionMessages: {
    done: {
      upd_profile: "Данные профиля успешно обновлены!",
    },

    error: {
      upd_profile: "Не удалось обновить данные профиля!",
      delete_movie: "Не удалось удалить фильм!",
      add_movie: "Не удалось добавить фильм!",
      get_user: "Произошла ошибка!",
    },
  },
};

const count = {
  narrow_screen: {
    add: 2,
    start: 5,
  },
  normal_screen: {
    add: 2,
    start: 8,
  },
  wide_screen: {
    add: 3,
    start: 12,
  },
};

const breackpoint = {
  two: 1000,
  one: 700,
};

const base_url = "https://api.nomoreparties.co";

const short_movie = 40;

export {
  reports,
  base_url,
  count,
  short_movie,
  breackpoint,
  regex,
  config,
};














