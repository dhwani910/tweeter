<template>
    <div>
        <h1>feed page</h1>
        
         <tweet-form></tweet-form> 
        <button @click="getTweets">Refresh Tweets</button>
        <div v-for="tweet in tweets" :key="tweet.tweetId">
            <tweet-card :tweetObject="tweet"></tweet-card>
        </div>
            
            <!-- <signout-button></signout-button> --> 
            <!-- <comment-page></comment-page> -->
            
              <!-- <div v-for="user in users" :key="user.userId"></div>
            <users-page :userObject="user"></users-page>
            <button @click="getUsres">Get Users</button> -->

        
        
        
    </div>
</template>



<script>
import axios from "axios"
import TweetForm from "../components/TweetForm.vue";
import TweetCard from "../components/Tweet.vue";
// import SignoutButton from "../components/Signout";
// import CommentPage from "../components/Comment.vue";
// import UsersPage from "../components/Users.vue"


export default {
    name: 'feed-page',
    data() {
        return {
            tweets: [],
            // users: [],
        }
    },
    components: {
        TweetForm,
        TweetCard,
        // SignoutButton,
        // CommentPage,
        // UsersPage,
       
      
    },
    //  methods: {
    //     getUsers: function(){
    //         axios.request({
    //             url: "https://tweeterest.ml/api/users",
    //             method: "GET",
    //              headers: {
    //                 'Content-Type': "application/json",
    //                 'X-Api-Key': "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP"
    //             },
    //         }).then((response) => {
    //             console.log(response)
    //             this.users = response.data

    //         }).catch((error) => {
    //             console.log(error)

    //         });

    //     }
    // },
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
                    'X-Api-Key': "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP"
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