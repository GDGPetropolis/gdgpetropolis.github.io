<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <main-title v-bind:title="title"/>
            </div>
        </div>
    </div>
</template>

<script>
import MainTitle from '~/components/MainTitle.vue'

export default {
    components: {
        MainTitle
    },
    data() {
        return {
            title: "Área Instituicional"
        }
    }
}
</script>

<style scoped>
div {
    border: solid red 1px;
}
</style>
