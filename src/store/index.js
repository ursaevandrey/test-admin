import {createStore} from "vuex";
import axios from "axios";

export default createStore({
    state: {
        hideConfigButton: false,
        isPinned: true,
        showConfig: false,
        sidebarType: "bg-gradient-info",
        isRTL: false,
        color: "dark",
        isNavFixed: false,
        isAbsolute: false,
        showNavs: true,
        showSidenav: true,
        showNavbar: true,
        showFooter: true,
        showMain: true,
        isDarkMode: false,
        navbarFixed:
            "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
        absolute: "position-absolute px-4 mx-0 w-100 z-index-2",
        userToken: "test",
        user: {
            token: localStorage.getItem('user-token') || '',
            name: localStorage.getItem('user-name') || '',
        },
    },
    mutations: {
        toggleConfigurator(state) {
            state.showConfig = !state.showConfig;
        },
        navbarMinimize(state) {
            const sidenav_show = document.querySelector(".g-sidenav-show");

            if (sidenav_show.classList.contains("g-sidenav-pinned")) {
                sidenav_show.classList.remove("g-sidenav-pinned");
                state.isPinned = true;
            } else {
                sidenav_show.classList.add("g-sidenav-pinned");
                state.isPinned = false;
            }
        },
        navbarFixed(state) {
            if (state.isNavFixed === false) {
                state.isNavFixed = true;
            } else {
                state.isNavFixed = false;
            }
        },
        toggleEveryDisplay(state) {
            state.showNavbar = !state.showNavbar;
            state.showSidenav = !state.showSidenav;
            state.showFooter = !state.showFooter;
        },
        toggleHideConfig(state) {
            state.hideConfigButton = !state.hideConfigButton;
        },
        color(state, payload) {
            state.color = payload;
        },
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        setColor({commit}, payload) {
            commit("color", payload);
        },

        login({commit}, authData) {
            localStorage.setItem("user-token", "user-token-data");
            localStorage.setItem("user-name", "user-name-data: " + authData.username + " " + authData.password);

            console.log(authData);
            axios.post("http://localhost:9082/v1/client/auth", {
                "login": authData.username,
                "password": authData.password
            }, {headers: {'Content-Type': 'application/json'}})
                .then(response => {
                    console.log('Успешный ответ:', response.data);
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                });

            commit("setUser", {
                token: "user-token",
                name: "user-name" + authData.username + " " + authData.password,
            });
        }
    },
    getters: {},
});
