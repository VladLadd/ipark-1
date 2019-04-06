import axios from "axios";

export default {
    namespaced: true,
    state: {
        cards: null,
        card: null,
        notification: {
            state: false,
            message: null
        },
    },
    getters: {
        cards(state) {
            return state.cards;
        },
        card(state) {
            return state.card;
        },
        notification(state) {
            return state.notification;
        },
    },
    mutations: {
        setCards(state, data) {
            state.cards = data;
        },
        setCard(state, id) {
            state.card = state.cards.find(item => item.cardTypeObjid === id);
        },
        setNotification(state, message) {
            state.notification.state = !state.notification.state;
            state.notification.message = message;
        },
        deleteCard(state, id) {
            const indexToRemove = state.cards.findIndex(item => item.cardTypeObjid === id);
            state.cards = state.cards.slice(indexToRemove, 1);
        },
    },
    actions: {
        async setCards(context) {
            const {data} = await axios.get(`${process.env.VUE_APP_HOST}/cardType/get`, {
                headers: {
                    'Authorization': 'Basic YWRtaW46YWRtaW4='
                }
            });
            context.commit('setCards', data);
        },
        saveCard(context, payload) {
            axios.post(`${process.env.VUE_APP_HOST}/cardType/save`, payload,{
                headers: {
                    'Authorization': 'Basic YWRtaW46YWRtaW4=',
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                context.commit('setNotification', 'Успешно сохранено');
                setTimeout(() => {
                    context.commit('setNotification', 'Успешно сохранено');
                }, 4000);

                context.dispatch('setCards');
            });
        },
        deleteCard(context, payload) {
            const data = {
                cardTypeObjid: payload
            };

            axios.post(`${process.env.VUE_APP_HOST}/cardType/delete`, data,{
                headers: {
                    'Authorization': 'Basic YWRtaW46YWRtaW4=',
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                context.commit('deleteCard', payload);
                context.commit('setNotification', 'Успешно удалено');
                setTimeout(() => {
                    context.commit('setNotification', 'Успешно удалено');
                }, 4000);

                context.dispatch('setCards');
            });
        },
    }
}