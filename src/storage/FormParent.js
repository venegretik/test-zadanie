export const formParent = {
    state: () => ({
        nameParent: '',
        ageParent: '',
        localName: '',
        localAge: '',
        errorObject: {
            errorLocalName: '',
            errorLocalAge: ''
        }
    }),
    getter: {

    },
    mutations: {
        setLocalNameParent(state, name) {
            state.localName = name;
            if (name.length < 4) {
                state.errorObject.errorLocalName = 'Имя слишком короткое';
            }
            else {
                state.errorObject.errorLocalName = '';
            }
        },
        setLocalAgeParent(state, age) {
            state.localAge = age;
            if (age.length > 2)
                state.errorObject.errorLocalAge = 'Некорректный возвраст';
            else if (Number(state.localAge) <= 18)
                state.errorObject.errorLocalAge = "Возвраст не корректный";
            else
                state.errorObject.errorLocalAge = '';
        },
        addToStorage(state) {
            state.nameParent = state.localName;
            state.ageParent = state.localAge;
        },
        setErrorLocalAge(state, error) {
            state.errorObject.errorLocalAge = error
        },
        setErrorLocalName(state, error) {
            state.errorObject.errorLocalName = error
        },
    },
    actions: {

    },
    namespaced: true
}