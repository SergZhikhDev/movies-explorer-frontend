const validation_params = {
    regex: {
        name: /^[a-zа-яё-\s]$/,
        email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
        password:/^[a-zA-Z\d]{5,8}$/
    },
    messages: {
        name: 'Имя может состоять только из букв, пробелов и "-"',
        email: 'Неправильный формат e-mail',
    }
}

const validation_config = {
    user_data: {
        inputs: ['name', 'email'],
        regex: {
            name: validation_params.regex.name,
            email: validation_params.regex.email,
        },
        messages: {
            name: validation_params.messages.name,
            email: validation_params.messages.email,
        }
    },

    login: {
        inputs: ['email'], 
        regex: {
            email: validation_params.regex.email,
        },
        messages: {
            email: validation_params.messages.email,
        }
    }
}
const configName = { isEmpty: true, isName:true, minLength: 3, maxLength: 8 };
const configEmail = { isEmpty: true, isEmail: true };
const configPassword = { isEmpty: true, minLength: 5, maxLength: 12 };

const messages = {
    not_found: 'Ничего не найдено',
    error: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
}

const attention_messages = {
    done: {
        upd_profile: 'Данные профиля успешно обновлены!'
    },

    error: {
        upd_profile: 'Не удалось обновить данные профиля!',
        delete_movie: 'Не удалось удалить фильм!',
        add_movie: 'Не удалось добавить фильм!',
       get_user: 'Произошла ошибка!'
    }
}


const count = {
    narrow_screen: {
        add: 2,
        start: 5
    },
    normal_screen: {
        add: 2,
        start: 8
    },
    wide_screen: {
        add: 3,
        start: 12
    },
}

const breackpoint = {
    two: 1000,
    one: 700
}

const base_url = 'https://api.nomoreparties.co'

const short_movie = 40




export { messages, 
    base_url,
     count,
      short_movie,
      breackpoint,
       attention_messages,
        validation_params,
         validation_config,
         configName,
         configEmail,
         configPassword, }