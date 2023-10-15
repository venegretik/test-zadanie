<template>
    <div class="previewContainer">
        <h3>Персональные данные</h3>
        <b v-if="nameParent && ageParent">{{ nameParent }}, {{ declinationsAge }}</b>
        <b class="errors" v-if="!nameParent || !ageParent">Заполните все поля!</b>
        <div class="children__preview">
            <p>Дети</p>
            <div class="children__preview__list" v-if="MainChildrenArray.length > 0">
                <div class="children__preview__item" v-for="item in MainChildrenArray" :key="item">
                    <b v-if="item.nameText && item.ageText">{{ item.nameText }}, {{ item.ageText }} лет</b>
                    <p class="errors" v-if="!item.nameText || !item.ageText">Заполните все поля!</p>
                </div>
            </div>
            <div v-else>
                <b class="errors" v-if="!nameParent || !ageParent">Вы не сохранили список детей!</b>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    methods: {
        declacate(number, titles){
            let cases = [2, 0, 1, 1, 1, 2];
            return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
        }
    },
    computed: {
        ...mapState({
            nameParent: state => state.formParent.nameParent,
            ageParent: state => state.formParent.ageParent,
            MainChildrenArray: state => state.formChildren.MainChildrenArray
        }),
        declinationsAge() {
            const count = this.ageParent;
            const title = this.declacate(count, [' год', ' года', ' лет'])
            const age = count + title
            return age
        }
    }
}
</script>

<style scoped>
.children__preview__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.children__preview__item {
    padding: 10px 20px;
    background: #F1F1F1;
    margin-top: 10px;
}

.errors {
    color: red;
}

.previewContainer {
    max-width: 616px;
    font-family: 'Montserrat', sans-serif;
    margin: 0px auto;
}
</style>