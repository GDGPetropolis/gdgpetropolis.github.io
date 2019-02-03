<template>
    <div class="container">
        <div class="row">
            <div v-if="!IsNullOfEmpty(img)" class="col-12 text-center">
                <img v-bind:src="img" class="rounded-circle square">
            </div>
            <div v-if="!IsNullOfEmpty(name)" class="col-12 text-center">
                {{name}}
            </div>
            <div v-if="!IsNullOfEmpty(linkedin)" class="col-12">
                {{linkedin}}
            </div>
            <div v-if="!IsNullOfEmpty(github)" class="col-12">
                {{facebook}}
            </div>
            <div v-if="!IsNullOfEmpty(facebook)" class="col-12">
                {{facebook}}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ["img", "name", "linkedin", "github", "facebook"],
    components: {
    },
    methods: {
        IsNullOfEmpty(value){
            return value == undefined || value == null || value == ""
        }
    }
}
</script>

<style scoped>
.square{
    object-fit: cover;
    width:100px;
    height:100px;
}
</style>