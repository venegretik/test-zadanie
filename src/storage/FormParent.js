export const formParent = {
    state: () => ({
        nameParent:'',
        ageParent:'',
        Errors:{
            nameError:[],
            ageError:[]
        }
    }),
    getter: {

    },
    mutations:{
        setNameParent(state, name){
            state.nameParent = name;
        },
        setAgeParent(state, age){
            state.ageParent = age;
        },
        addErrorParent(state, errorObj){
            let errorArrayItem = state.Errors[errorObj.errorItem].filter( (item) => item == errorObj.errorValue);
            if(errorArrayItem.length == 0)
            state.Errors[errorObj.errorItem].push(errorObj.errorValue);
        },
        removeErrorParent(state, errorObj){
            state.Errors[errorObj.errorItem] = state.Errors[errorObj.errorItem].filter( (item) => item !== errorObj.errorValue);
        }
    },
    actions:{
        
    },
    namespaced: true
}