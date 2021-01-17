<template>
    <div>
       <button @click="getUser"> Profile </button>
       <div >
         <p>{{user.username}}</p>
         <p>{{user.email}}</p>
         <p>{{user.bio}}</p>
         <p>{{user.birthdate}}</p>
       </div>
           
       <!-- <div v-if="shouldShow = !shouldShow"> -->
          <profile-edit></profile-edit>
          <profile-delete></profile-delete>
       <!-- </div> -->
        <follow-button :userId="userId"></follow-button>
         <signout-button></signout-button> 

    </div>
</template>


<script>
import axios from "axios"
import cookies from "vue-cookies"
import FollowButton from '../components/FollowButton.vue'
import ProfileDelete from '../components/ProfileDelete.vue'
import ProfileEdit from '../components/ProfileEdit.vue'
import SignoutButton from '../components/Signout.vue'

export default {
    name: 'UserProfile',
    components: {
        ProfileEdit,
        ProfileDelete,
        SignoutButton,
        FollowButton,
    },
    
    data(){
        return {
            user: {
                // username: {},
                // email: {},
                // bio: {},
                // birthdate: {}

            },
            userId: cookies.get('userId'),
        }
    },
    
    methods: {
         getUser: function(){
            axios.request({
                url: "https://tweeterest.ml/api/users",
                method: "GET",
                  headers: {
                    'Content-Type': "application/json",
                    'X-Api-Key': "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP"
                },
                params: {
                    userId: this.userId,
                }
            
                
            }).then((response) => {
                console.log(response)
                this.user = response.data[0];

            }).catch((error) => {
                console.log(error)

            });

        },
    }
        
}
</script>

<style scoped>

</style>