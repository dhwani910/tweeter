<template>
    <div>
        <button class="button is-danger" @click="deleteTweet">Delete</button>

    </div>
</template>


<script>
import axios from "axios"
import cookies from "vue-cookies"
export default {
    name: 'tweet-delete',
    props: {
        tweetId: {
            type: Number,
            required: true
        }

    },
     methods: {
        deleteTweet: function() {
           
            axios.request({
                url: "https://tweeterest.ml/api/tweets",
                 headers: {
                    'Content-Type': "application/json",
                    'X-Api-Key': "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP"
                },
                method: "DELETE",
                data: {
                    loginToken: cookies.get('session'),
                    tweetId: this.tweetId
                }
            }).then((response) => {
                console.log(response)
                
            }).catch((error) => {
                console.log(error)
               

            })


        }
    }
}
</script>

<style scoped>

</style>