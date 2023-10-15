
/* eslint-disable */
export const formChildren = {
    state: () => ({
        LocalChildrenArray: [],
        MainChildrenArray: [],
        successAddedData: false
    }),
    getter: {

    },
    mutations: {
        setItemChildren(state, itemObject) {
            let index = state.LocalChildrenArray.findIndex((item) => item.id === itemObject.id)
            if (index !== -1) {
                state.LocalChildrenArray[index] = itemObject;
            }
        },
        addNewChildren(state, itemObject) {
            if (state.LocalChildrenArray.length < 5) {
                state.LocalChildrenArray.push({
                    id: Date.now(),
                    ...itemObject
                });
            }
        },
        addToStorage(state) {
            state.MainChildrenArray = state.LocalChildrenArray
        },
        checkValidValue(state) {
            let errorsLocalChildrenArray = state.LocalChildrenArray.filter(el => !el.nameText || !el.ageText || el.nameText.length < 3 || el.ageText.length > 3);
            
            if (errorsLocalChildrenArray.length > 0) {
                console.log(errorsLocalChildrenArray);
                state.successAddedData = false;
                state.LocalChildrenArray.forEach(el => {
                    if (!el.nameText)
                        el.errorNameText = "Заполните поля";
                    if (!el.ageText)
                        el.errorAgeText = "Заполните поля";
                    if (el.nameText.length < 3)
                        el.errorNameText = "Слишком короткое имя";
                    if (el.ageText.length > 3)
                        el.errorAgeText = "Неправильный возвраст";
                });
            }
            else {
                state.LocalChildrenArray.forEach(el => {
                    if (el.nameText)
                        el.errorNameText = "";
                    if (el.ageText)
                        el.errorNameText = "";
                });
            }
        },
        deleteChildren(state, itemObject) {
            state.LocalChildrenArray = state.LocalChildrenArray.filter((item) => item.id !== itemObject.id)
        },
        setSuccessAddedData(state, data) {
            state.successAddedData = data
        }
    },
    actions: {

    },
    namespaced: true
}