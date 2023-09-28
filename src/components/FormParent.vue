<template>
    <h2>Персональные данные</h2>
    <form action="" class="form__parent">
        <div class="input__item">
            <label for="input_name">Имя</label>
            <custom-input type="text" id="input_name" @update:model-value="($event) => nameChange($event)" :modelValue="localName" placeholder="Ваше Имя"></custom-input>
        </div>
        <div class="input__item">
            <label for="input_name">Возраст</label>
            <custom-input type="number" id="input_name" @update:model-value="($event) => ageChange($event)" :modelValue="localAge" placeholder="Ваш возраст"></custom-input>
        </div>
    </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data(){
        return{
        }
    },
    methods:{
        nameChange(e){
            this.setLocalNameParent(e)
        },
        ageChange(e){
            this.setLocalAgeParent(e)
        },
        ...mapMutations({
            setLocalNameParent:'formParent/setLocalNameParent',
            setLocalAgeParent:'formParent/setLocalAgeParent'
        })
    },
    computed:{
        ...mapState({
            localName: state => state.formParent.localName,
            localAge: state => state.formParent.localAge
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