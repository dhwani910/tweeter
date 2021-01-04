<template>
    <div>
        <h4>{{ tweetStatus}}</h4>
        <textarea v-model="tweetContent"></textarea>
        <button @click="postTweet()">Post</button>
        
    </div>
</template>


<script>
import axios from "axios"
import cookies from "vue-cookies"
export default {
    name: 'tweet-form',
    data(){
        return{
            tweetContent: '',
            tweetStatus: "Tweet!"
        }
    },
    methods: {
        postTweet: function() {
            this.tweetStatus = "Tweeting!"
            axios.request({
                url: "https://tweeterest.ml/api/tweets",
                 headers: {
                    'Content-Type': "application/json",
                    'X-Api-Key': ""
                },
                method: "POST",
                data: {
                    loginToken: cookies.get('session'),
                    content: this.tweetContent
                }
            }).then((response) => {
                console.log(response)
                this.tweetStatus = "Tweeted!"
            }).catch((error) => {
                console.log(error)
                this.tweetStatus = "failed to Tweet!"

            })


        }
    }
    
}
</script>


<style scoped>

</style>