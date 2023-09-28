export const formParent = {
    state: () => ({
        nameParent: '',
        ageParent: '',
        localName:'',
        localAge:''
    }),
    getter: {

    },
    mutations: {
        setLocalNameParent(state, name) {
            state.localName = name;
        },
        setLocalAgeParent(state, age) {
            state.localAge = age;
        },
        addToStorage(state) {
            state.nameParent = state.localName;
            state.ageParent = state.localAge;
        },
    },
    actions: {

    },
    namespaced: true
}