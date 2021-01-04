<template>
    <div>
        
        <tweet-form></tweet-form>
        <button @click="getTweets">Refresh Tweets</button>
        <div v-for="tweet in tweets" :key="tweet.tweetId">
            <page-tweet :tweetObject="tweet"></page-tweet>
            <signout-button></signout-button>

        </div>
        
        
    </div>
</template>



<script>
import axios from "axios"
import TweetForm from "../components/TweetForm.vue";
import PageTweet from "../components/Tweet.vue";
import SignoutButton from "../components/Signout";



export default {
    name: 'feed-page',
    data() {
        return {
            tweets: []
        }
    },
    components: {
        TweetForm,
        PageTweet,
        SignoutButton,
       
      
    },
    mounted: function(){
        this.getTweets();

    },
    methods: {
        getTweets: function(){
            axios.request({
                url: "https://tweeterest.ml/api/tweets",
                method: "GET",
                 headers: {
                    'Content-Type': "application/json",
                    'X-Api-Key': ""
                },
            }).then((response) => {
                console.log(response)
                this.tweets = response.data

            }).catch((error) => {
                console.log(error)

            });

        }
    }
    
}
</script>

<style scoped>

</style>