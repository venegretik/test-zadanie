<template>
    <div class="modal__container" :class="[{ modalActive: successAddedData }]">
        <div class="modal__main">
            <b>Данные успешно добавлены!</b>
            <div @click="setSuccessAddedData(false)" class="closeModal">&times;</div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {

        }
    },
    methods:{
        ...mapMutations({
            setSuccessAddedData: 'formChildren/setSuccessAddedData',
        }),
    },
    computed:{
        ...mapState({
            successAddedData: state => state.formChildren.successAddedData,
        })
    }
}
</script>

<style>
.modal__container {
    position: fixed;
    left: 0px;
    top: 0px;
    font-family: 'Montserrat', sans-serif;
    right: 0px;
    z-index: -1;
    opacity: 0;
    background-color:rgba(0, 0, 0, .5);
    bottom: 0px;
}
.modalActive{
    opacity: 1;
    z-index: 2;
}
.modal__main {
    max-width: 400px;
    width: 100%;
    position: absolute;
    top: 50%;
    font-size:18px;
    left: 50%;
    transform: translate(-50%,-50%);
    max-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #fff;
}
.closeModal{
    position: fixed;
    right: 10px;
    font-size: 28px;
    top: 10px;
}
</style>