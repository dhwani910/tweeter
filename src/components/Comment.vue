<template>
    <div>
      <button @click="shouldShow = !shouldShow"><i class="fas fa-comment"></i></button>
      <div v-if="shouldShow">
          <div  class="comment-container">
              <comment-create :tweetId="tweetId"></comment-create>
              <button @click="showComment">show comment</button>
    
          </div>
          <div v-for="comment in comments" :key="comment.comentId">
            <p>{{comment.content}}</p>
            <comment-likes :commentId="comment.commentId"></comment-likes>
            <comment-edit  v-if="userId == comment.userId" :commentId="comment.commentId"></comment-edit>
            <comment-delete v-if="userId = comment.userId" :commentId="comment.commentId"></comment-delete>
          </div>
      </div>
        

    </div>
</template>


<script>
import axios from "axios"
import cookies from "vue-cookies"
import CommentCreate from './CommentCreate.vue'
import CommentDelete from './CommentDelete.vue'
import CommentEdit from './CommentEdit.vue'
import CommentLikes from './CommentLikes.vue';
export default {
    name: 'CommentPage',
    components: {
        CommentCreate,
        CommentDelete,
        CommentEdit,
        CommentLikes,
    },
    props: {
        tweetId: Number,
        commentId: Number,
    },
    data(){
        return {
            comments: [],
            userId: cookies.get("userId"),
            shouldShow: false,
        }
    },
    mounted(){
        this.showComment();
    },
    methods: {
        showComment(){
             axios.request({
                 url: "https://tweeterest.ml/api/comments",
                 method: "GET",
                  headers: {
                    'Content-Type': "application/json",
                    'X-Api-Key': "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP"
                },
                params: {
                    tweetId: this.tweetId
                }


                 }).then((response) => {
                     console.log(response);
                     this.comments = response.data;

                }).catch((error) => {
                    console.log(error);

                 })
        }
    }
    
   

  

   
}
</script>


<style lang="scss">

</style>