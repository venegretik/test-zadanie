<template>
    <div class="row__title">
        <h2>Дети (макс. 5)</h2>
        <custom-button class="add__children" v-if="LocalChildrenArray.length < 5" @click="addNewChildrenClick(itemObject)"><b>+</b>Добавить
            ребенка</custom-button>
    </div>
    <form class="form__parent">
        <div class="input__row" v-for="item in LocalChildrenArray" :key="item">
            <div class="input__item">
                <label for="input_name">Имя</label>
                <custom-input type="text" placeholder="Ваше Имя" @update:model-value="($event) => setName($event, item)"
                    :modelValue="item.nameText" id="input_name" />
            </div>
            <div class="input__item">
                <label for="input_age">Возраст</label>
                <custom-input type="number" id="input_age" placeholder="Ваш возраст"
                    @update:model-value="($event) => setAge($event, item)" :modelValue="item.ageText"></custom-input>
            </div>
            <p @click="deleteChildren(item)">Удалить</p>
        </div>
        <custom-button type="button" v-if="LocalChildrenArray.length > 0" class="save__data" @click="clickAddStorage">Сохранить</custom-button>
    </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {};
    },
    methods: {
        clickAddStorage(){
            this.addToStorage()
            this.setSuccessAddedData(true)
        },
        setName(e, item) {
            item.nameText = e;
            let object = item;
            this.setItemChildren(object);
        },
        setAge(e, item) {
            item.ageText = e;
            let object = item;
            this.setItemChildren(object);
        },
        addNewChildrenClick() {
            this.addNewChildren({
                nameText: '',
                ageText: ''
            });
        },
        ...mapMutations({
            setItemChildren: 'formChildren/setItemChildren',
            addNewChildren: 'formChildren/addNewChildren',
            deleteChildren: 'formChildren/deleteChildren',
            addToStorage: 'formChildren/addToStorage',
            setSuccessAddedData:'formChildren/setSuccessAddedData'
        }),
    },
    computed: {
        ...mapState({
            LocalChildrenArray: state => state.formChildren.LocalChildrenArray,
        })
    }
}
</script>

<style>
.input__row {
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.input__row p {
    color: #01A7FD;
    display: inline-flex;
    cursor: pointer;
    margin-left: auto;
}

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
    width: 100%;
    flex-direction: column;
    row-gap: 10px;
}

.row__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.add__children {
    padding: 10px 20px;
    display: flex;
    column-gap: 10px;
    align-items: center;
    color: #01A7FD;
    border-radius: 100px;
    border: 2px solid #01A7FD;
    background: #fff;
}

.add__children b {
    font-size: 24px;
}

.save__data{
    max-width: 118px;
    width: 100%;
    background: #01A7FD;
    color: #fff;
    cursor: pointer;
    border: 0px;
    border-radius: 100px;
    height: 44px;
}
</style>