<template>
    <div>
        <button @click="commentDelete"><i class="fas fa-trash-alt"></i></button>
    </div>
</template>




<script>
import axios from "axios"
import cookies from "vue-cookies"
export default {
    name: 'CommentDelete',
    props: {
        commentId: Number,
    },
    methods: {
        commentDelete(){
            axios.request({
                url: "https://tweeterest.ml/api/comments",
                method: "DELETE",
                 headers: {
                    'Content-Type': "application/json",
                    'X-Api-Key': "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP"
                },
                data: {
                    loginToken: cookies.get('session'),
                    commentId: this.commentId
                }


                }).then((response) => {
                    console.log(response);

                }).catch((error) => {
                    console.log(error);

                })
        }
    }
}
</script>






<style scoped>

</style>