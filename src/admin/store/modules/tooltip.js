export default {
	namespaced: true,
	state: {
		shown: false,
		message: 'Сообщение успешно отправлено',
		type: 'success'
	},
	mutations: {
		SET_VISIBILITY(state, payload) {
			state.shown = payload;
		},
		SET_MESSAGE(state, payload) {
			state.message = payload;
		},
		SET_TYPE(state, payload) {
			state.type = payload;
		},
		SHOW_TOOLTIP(state, { type, message }) {
			state.shown = true;
			state.message = message;
			state.type = type;
		}
	},
	actions: {
		showTooltip(context, payload) {
			context.commit("SET_VISIBILITY", true);
			context.commit("SET_TYPE", payload.type);
			context.commit("SET_MESSAGE", payload.message);
		},
		visibility(context, payload) {
			context.commit('VISIBILITY');
		},
		closeTooltip(context, payload) {
			context.commit("SET_VISIBILITY", false);
		}
	},
	getters: {}
};