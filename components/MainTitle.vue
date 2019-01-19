<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>{{title}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
// import MainTitle from '~/components/MainTitle.vue'

export default {
    props: [
        "title"
    ],
    components: {
        // MainTitle
    },
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
</style>
