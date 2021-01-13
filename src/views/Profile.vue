<template>
    <div>
       
        <profile-edit></profile-edit>
        <profile-delete></profile-delete>
         <signout-button></signout-button> 

    </div>
</template>


<script>
import ProfileDelete from '../components/ProfileDelete.vue'
import ProfileEdit from '../components/ProfileEdit.vue'
import SignoutButton from '../components/Signout.vue'

export default {
    name: 'UserProfile',
    components: {
        ProfileEdit,
        ProfileDelete,
        SignoutButton,
    }
        
}
</script>

<style scoped>

</style>