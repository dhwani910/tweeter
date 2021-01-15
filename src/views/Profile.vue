<template>
    <div>
       
        <profile-edit></profile-edit>
        <profile-delete></profile-delete>
        <follow-button :userId="userId"></follow-button>
         <signout-button></signout-button> 

    </div>
</template>


<script>
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
            userId: cookies.get('userId'),
        }
    }
        
}
</script>

<style scoped>

</style>