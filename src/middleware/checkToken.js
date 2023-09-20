import store from '@/store'; // Путь к вашему хранилищу Vuex

export default function(to, from, next) {
    const accessToken = store.state.userToken;

    if (!accessToken) {
        // Если токен отсутствует, перенаправляем на страницу аутентификации
        next({ name: 'login' });
    } else {
        // Здесь вы можете добавить дополнительную проверку срока действия токена
        next();
    }

    function decodeToken(token) {
        try {
            const tokenPayload = token.split('.')[1];
            const base64 = tokenPayload.replace('-', '+').replace('_', '/');
            return JSON.parse(atob(base64));
        } catch (error) {
            return null;
        }
    }
}