<template>
    <div class="row__title">
        <h2>Дети (макс. 5)</h2>
        <custom-button class="add__children" v-if="LocalChildrenArray.length < 5"
            @click="addNewChildrenClick(itemObject)"><b>+</b>Добавить
            ребенка</custom-button>
    </div>
    <form class="form__parent">
        <div class="input__row" v-for="item in LocalChildrenArray" :key="item">
            <div>
                <div class="input__item">
                    <label for="input_name">Имя</label>
                    <custom-input type="text" placeholder="Ваше Имя" @update:model-value="($event) => setName($event, item)"
                        :modelValue="item.nameText" id="input_name" />
                </div>
                <p class="error"> {{ item.errorNameText }} </p>
            </div>
            <div>
                <div class="input__item">
                    <label for="input_age">Возраст</label>
                    <custom-input type="number" id="input_age" placeholder="Ваш возраст"
                        @update:model-value="($event) => setAge($event, item)" :modelValue="item.ageText"></custom-input>
                </div>
                <p class="error">{{ item.errorAgeText }}</p>
            </div>
            <p @click="deleteChildren(item)">Удалить</p>
        </div>
        <custom-button type="button" class="save__data" @click="() => {
            clickButton()
        }">Сохранить</custom-button>
    </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {};
    },
    methods: {
        clickAddStorage() {
            console.log("check");
            this.setSuccessAddedData(true);
            this.checkValidValue();
            if (this.successAddedData) {
                this.addToStorageChildren();
                this.addToStorageParent();
            }
        },
        clickButton() {
            if (!this.errorObject.errorLocalName && !this.errorObject.errorLocalAge && this.localName && this.localAge)
                this.clickAddStorage();
            else {
                console.log("check");
                this.checkValidValue();
                if (!this.localName)
                    this.setErrorLocalName("Поле не может быть пустым");
                if (!this.localAge)
                    this.setErrorLocalAge("Поле не может быть пустым");
            }
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
                nameText: "",
                ageText: "",
                errorNameText: "",
                errorAgeText: ""
            });
        },
        ...mapMutations({
            setItemChildren: 'formChildren/setItemChildren',
            addNewChildren: 'formChildren/addNewChildren',
            deleteChildren: 'formChildren/deleteChildren',
            setErrorLocalName: 'formParent/setErrorLocalName',
            setErrorLocalAge: 'formParent/setErrorLocalAge',
            addToStorageChildren: 'formChildren/addToStorage',
            addToStorageParent: 'formParent/addToStorage',
            checkValidValue: 'formChildren/checkValidValue',
            setSuccessAddedData: 'formChildren/setSuccessAddedData'
        }),
    },
    computed: {
        ...mapState({
            LocalChildrenArray: state => state.formChildren.LocalChildrenArray,
            localName: state => state.formParent.localName,
            localAge: state => state.formParent.localAge,
            successAddedData: state => state.formChildren.successAddedData,
            errorObject: state => state.formParent.errorObject
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
    cursor: pointer;
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

.save__data {
    max-width: 118px;
    width: 100%;
    background: #01A7FD;
    color: #fff;
    cursor: pointer;
    border: 0px;
    border-radius: 100px;
    height: 44px;
}

.error {
    color: red !important;
    margin-left: 0px !important;
    margin: 0px;
    margin-top: 5px;
    cursor: default !important;
}
</style>