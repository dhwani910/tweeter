<template>
    <div>
        <button @click="shouldShow = !shouldShow" class="button is-primary"><i class="fas fa-pen">Tweet</i></button>
        <div v-if="shouldShow">
            <textarea v-model="tweetContent"></textarea>
            <button @click="editTweet()" class="button is-info"><i class="fas fa-check"></i></button>

        </div>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
export default {
    name: 'TweetEdit',
    data() {
        return {
            shouldShow: false,
            tweetContent: "",
        }

    },
    props: {
        tweetId: {
            type: Number,
            required: true
        }
    },
    methods: {
        editTweet(){
            axios.request({
                url: "https://tweeterest.ml/api/tweets",
                method: "PATCH",
                 headers: {
                    'Content-Type': "application/json",
                    'X-Api-Key': "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP"
                },
                data: {
                    loginToken: cookies.get("session"),
                    tweetId: this.tweetId,
                    content: this.tweetContent,
                }

            }).then((response) => {
                console.log(response)
                this.$emit('update-tweet', this.tweetContent)
                this.shouldShow = false;

            }).catch((error) => {
                 console.log(error)

            })

        }
    }
}
</script>


<style scoped>

</style>