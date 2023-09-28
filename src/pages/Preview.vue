<template>
    <div class="previewContainer">
        <h3>Персональные данные</h3>
        <b v-if="nameParent && ageParent">{{ nameParent }}, {{ ageParent }} лет</b>
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

    },
    computed: {
        ...mapState({
            nameParent: state => state.formParent.nameParent,
            ageParent: state => state.formParent.ageParent,
            MainChildrenArray: state => state.formChildren.MainChildrenArray
        })
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