
/* eslint-disable */
export const formChildren = {
    state: () => ({
        LocalChildrenArray: [],
        MainChildrenArray:[],
        successAddedData:false
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
            if(state.LocalChildrenArray.length < 5){
                state.LocalChildrenArray.push({
                    id: Date.now(),
                    ...itemObject
                });
            }
        },
        addToStorage(state){
            state.MainChildrenArray = state.LocalChildrenArray
        },
        deleteChildren(state, itemObject) {
            state.LocalChildrenArray = state.LocalChildrenArray.filter((item) => item.id !== itemObject.id)
        },
        setSuccessAddedData(state, data){
            state.successAddedData = data
        }
    },
    actions: {

    },
    namespaced: true
}