<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <main-title class="text-centered" v-bind:title="title"/>
                <wrap-calendar/>
            </div>
        </div>
    </div>
</template>

<script>
import MainTitle from '~/components/MainTitle.vue'
import WrapCalendar from '~/components/WrapCalendar.vue'

export default {
    components: {
        MainTitle,
        WrapCalendar
    },
    data() {
        return {
            title: "Calendário 2019"
        }
    }
}
</script>

<style scoped>
div {
    border: solid red 1px;
}
</style>
