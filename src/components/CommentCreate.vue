<template>
    <div class="comment-container">
        <!-- <button @click="shouldShow = !shouldShow"><i class="fas fa-comment"></i></button> -->
        <div >
            <textarea type="text" v-model="commentContent"></textarea>
            <button @click="commentCreate"> <i class="fas fa-check"></i></button>

        </div>
        
        
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
export default {
    name: 'CommentCreate',
    data(){
        return {
            userId: cookies.get('userId'),
            commentContent: '',
            
            // shouldShow: false,
        }
    },
    props: {
        tweetId: Number,
    },
    methods: {
        commentCreate(){
            
            axios.request({
                  url: "https://tweeterest.ml/api/comments",
                 method: "POST",
                 headers: {
                    'Content-Type': "application/json",
                    'X-Api-Key': "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP"
                },
                data: {
                    loginToken: cookies.get('session'),
                    tweetId: this.tweetId,
                    content: this.commentContent
                }

                 }).then((response) => {
                     console.log(response);
                     this.commentContent = "";
                    //  alert("successfully commented!!")
                     this.shouldShow =  false;
                 }).catch((error) => {
                     console.log(error);
                     this.commentStatus = "error";

                 })
        }
    }
}
</script>

<style scoped>

</style>