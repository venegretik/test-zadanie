<template>
    <h2>Персональные данные</h2>
    <form action="" class="form__parent">
        <div class="input__item">
            <label for="input_name">Имя</label>
            <custom-input type="text" id="input_name" @update:model-value="($event) => nameChange($event)" :modelValue="nameParent" placeholder="Ваше Имя"></custom-input>
            <p v-for="item in Errors.nameError" :key="item">{{ item }}</p>
        </div>
        <div class="input__item">
            <label for="input_name">Возраст</label>
            <custom-input type="number" id="input_name" @update:model-value="($event) => ageChange($event)" :modelValue="ageParent" placeholder="Ваш возраст"></custom-input>
            <p v-for="item in Errors.ageError" :key="item">{{ item }}</p>
        </div>
    </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    methods:{
        nameChange(e){
            let errorObj = {errorItem:'nameError',errorValue:'Имя слишком короткое'}
            if(e.length < 3){
                this.addErrorParent(errorObj)
            }
            else{
                this.removeErrorParent(errorObj);
            }
            this.setNameParent(e)
        },
        ageChange(e){
            let errorObj = {errorItem:'ageError',errorValue:'Возвраст слишком большой'}
            if(e.length > 2){
                this.addErrorParent(errorObj)
            }
            else{
                this.removeErrorParent(errorObj);
            }
            this.setAgeParent(e)
        },
        ...mapMutations({
            setNameParent:'formParent/setNameParent',
            setAgeParent:'formParent/setAgeParent',
            addErrorParent:'formParent/addErrorParent',
            removeErrorParent:'formParent/removeErrorParent'
        })
    },
    computed: {
        ...mapState({
            nameParent: state => state.formParent.nameParent,
            ageParent: state => state.formParent.ageParent,
            Errors: state => state.formParent.Errors
        })
    }
}
</script>

<style scoped>
.input__item {
    width: 100%;
    display: flex;
    row-gap: 5px;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #F1F1F1;
    padding: 10px;
}

.input__item input {
    width: 100%;
    border: 0px;
    font-size: 16px;
    outline: 0px;
}

.form__parent {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.input__item p{
    margin: 0px;
    color: red;
}
</style>