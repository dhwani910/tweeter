<template>
    <div class="container">
        <h1 @click="following">Following</h1>
        <div v-if="users.length > 0">
            <div id="following" v-for="user in users" :key="user.userId">
                <p><span>  Name: </span> {{user.username}}</p>
                <p> <span> Email: </span>  {{user.email}}</p>
                <p> <span>  Bio: </span> {{user.bio}}</p>
                <p> <span> Birthdate:  </span> {{user.birthdate}}</p>

            </div>

        </div>

    </div>
</template>



<script>
import axios from "axios"
import cookies from "vue-cookies"
export default {
    name: 'FollowingPage',
    data(){
        return {
            loginToken: cookies.get('session'),
            users: [],
            userId: cookies.get('userId'),
        }
    },
    mounted(){
        this.following();
    },
    methods: {
        following(){
            axios.request({
                url: "https://tweeterest.ml/api/followers",
                method: "GET",
                headers: {
                     'Content-Type': "application/json",
                    'X-Api-Key': "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP"
                },
                params: {
                    userId: this.userId,
                }

                }).then((response) => {
                console.log(response);
                this.users = response.data;

                }).catch((error) => {
                console.log(error);
                })
        }
    }

}
</script>



<style scoped>
#following span{
    background-color: skyblue;
}

</style>