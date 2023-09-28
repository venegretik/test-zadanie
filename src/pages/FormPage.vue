<template>
    <div class="form__container">
        <FormParent />
        <FormAddChildren />
    </div>
</template>

<script>
import FormAddChildren from '@/components/FormAddChildren.vue';
import FormParent from '@/components/FormParent.vue';
export default {
    components: {
        FormAddChildren,
        FormParent
    }
}
</script>

<style scoped>
.form__container {
    max-width: 616px;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    font-family: 'Montserrat', sans-serif;
}
</style>