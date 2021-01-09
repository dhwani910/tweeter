<template>
    <div>
       
        <h3>{{ tweetObject.username}}</h3>
        <p>{{ content}}</p>
        <h5>{{tweetObject.createdAt}}</h5>
        <tweet-delete v-if="isOwned" :tweetId="tweetObject.tweetId"></tweet-delete>
        <tweet-edit @update-tweet="updateTweet" v-if="isOwned" :tweetId="tweetObject.tweetId"></tweet-edit>
    </div>
</template>

<script>
import TweetDelete from "./TweetDelete.vue";
import TweetEdit from "./TweetEdit.vue";
import cookies from "vue-cookies"

export default {
    name: 'page-tweet',
    components: {
        TweetDelete,
        TweetEdit,
    },
    props: {
        tweetObject: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            isOwned: cookies.get('userId') == this.tweetObject.userId,
            content: this.tweetObject.content
        }
    },
    methods: {
        updateTweet(newContent){
            this.content = newContent;

        }
    }
    
}
</script>


<style scoped>

</style>