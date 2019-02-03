<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <main-title class="text-centered" v-bind:title="title"/>
                <people/>
            </div>
        </div>
    </div>
</template>

<script>
import MainTitle from '~/components/MainTitle.vue'
import People from '~/components/People.vue'

export default {
    components: {
        MainTitle,
        People
    },
    data() {
        return {
            title: "Coordenadores"
        }
    }
}
</script>

<style scoped>
div {
    border: solid red 1px;
}
</style>