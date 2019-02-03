<template>
    <div class="container">
        <div class="row justify-content-center">
            <div v-for="coordinator in coordinators" class="col-sm-5 col-md-2" :key="coordinator.id">
                <coordinator 
                    v-bind:img="coordinator.img"
                    v-bind:name="coordinator.name"
                    v-bind:facebook="coordinator.facebook"
                    v-bind:linkedin="coordinator.linkedin"
                    v-bind:github="coordinator.github"/>
            </div> 
        </div>
    </div>
</template>

<script>
import Coordinator from '~/components/Coordinator.vue'

export default {
    components: {
        Coordinator
    },
    data() {
        return {
            coordinators: [
                {
                    id: 1,
                    img: "https://scontent.fsdu10-1.fna.fbcdn.net/v/t1.0-9/14390971_1477523225597841_521441822950869859_n.jpg?_nc_cat=100&_nc_ht=scontent.fsdu10-1.fna&oh=96d914e023fb27b5870255bab275f319&oe=5CFCDD84",
                    name: "Daiane Barizon",
                    linkedin: "linkedin",
                    github: "github",
                    facebook: "facebook"
                },
                {
                    id: 2,
                    img: "https://scontent.fsdu10-1.fna.fbcdn.net/v/t1.0-9/37604986_1753046648114321_3061139675667234816_n.jpg?_nc_cat=101&_nc_ht=scontent.fsdu10-1.fna&oh=7631c039866d5ec3c1bbdfee80d76bf1&oe=5CE94476",
                    name: "Johnathan Fercher",
                    linkedin: "linkedin",
                    github: "github",
                    facebook: "facebook"
                },
                {
                    id: 3,
                    img: "https://scontent.fsdu10-1.fna.fbcdn.net/v/t1.0-9/49897186_2093951280666693_8615187028310491136_n.jpg?_nc_cat=110&_nc_ht=scontent.fsdu10-1.fna&oh=c6b1e4c8665c88d2120a47b173170fc1&oe=5CFBDEC4",
                    name: "Ana Luiza Fontes",
                    linkedin: "linkedin",
                    github: "github",
                    facebook: "facebook"
                },
                {
                    id: 4,
                    img: "https://scontent.fsdu10-1.fna.fbcdn.net/v/t1.0-9/12938098_1025637010845300_6823832123668145588_n.jpg?_nc_cat=110&_nc_ht=scontent.fsdu10-1.fna&oh=0e9c8530ce91f38f4c876a76f5774c74&oe=5CEDF894",
                    name: "Lucas Borsatto",
                    linkedin: "linkedin",
                    github: "github",
                    facebook: "facebook"
                },
                {
                    id: 5,
                    img: "https://pps.whatsapp.net/v/t61.11540-24/47036055_257225694969875_1834221824490078208_n.jpg?oe=5C5B1F4C&oh=81e02619841d5a6b1d3ba66eaef4e091",
                    name: "Arthos",
                    linkedin: "linkedin",
                    github: "github",
                    facebook: "facebook"
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>