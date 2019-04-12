export default {
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters: {
        count: (state) => {
            return state.count;
        }
    }
}