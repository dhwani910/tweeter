<template>
    <div class="comment-container">
         <h1>Comment</h1>
        <input 
            type="text"
            v-model="newComment"/>
            <button class="button is-info" @click="addComment"><i class="fas fa-comment"></i></button>
        <ul>
          <li v-for="(comment, i) in commentList" :key="i">
              <span>
                  {{i + 1}}: {{comment.text}}
              </span>
              <button class="button is-danger" @click="deleteComment">Delete</button>

          </li>
        </ul>
        <!-- <h4> {{ commentCount }}Comments </h4> -->
        

        

    </div>
</template>


<script>
export default {
    name: 'CommentPage',
    
    data() {
        return {
            
            newComment: '',
            commentList: [
                {text:  'Dont think too much'}
                ]
            
        }
    },

    // computed: {
    //     commentCount() {
    //         return this.comments.length;
    //     }
    // },

    methods: {
        addComment() {
            this.commentList.push({
                text: this.newComment,
                
            }),
            this.newComment = '';
            
        },

        isEven(n) {
            if ((n + 1) % 2 == 0) {
                return true;
            }
            return false;
        },

        deleteComment(i){
            this.commentList.splice(i, 1)

        }
    }
}
</script>


<style lang="scss">

</style>