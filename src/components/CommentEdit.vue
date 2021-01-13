<template>
    <div>
        
         <button @click="shouldShow = !shouldShow" class="button is-primary"><i class="fas fa-pen">comment</i></button>
        <div v-if="shouldShow">
            <textarea v-model="editedCommentContent"></textarea>
            <button @click="editComment()" class="button is-info"><i class="fas fa-check"></i></button>

        </div>

    </div>
</template>


<script>
import axios from "axios"
import cookies from "vue-cookies"
export default {
    name: 'CommentEdit',
    data(){
        return {
            loginToken: cookies.get('session'),
            editedCommentContent: '',
            shouldShow: false,
        }
    },
    props: {
        commentId: Number
    },
    methods: {
        editComment(){
            axios.request({
                url: "https://tweeterest.ml/api/comments",
                method: 'PATCH',
                  headers: {
                    'Content-Type': "application/json",
                    'X-Api-Key': "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP"
                },
                data: {
                    loginToken: cookies.get('session'),
                    commentId: this.commentId,
                    content: this.editedCommentContent,
                }

                }).then((response) => {
                    console.log(response);
                    this.shouldShow = false;
                    alert('edited');

                }).catch((error) => {
                    console.log(error)

                })
        }
    }
}
</script>


<style scoped>

</style>