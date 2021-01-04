<template>
    <button type="button" class="button is-danger" @click="logout">Sign Out</button>
</template>

<script>
export default {
    name: 'signout-button',
    methods: {
        logout: function(){
            cookies.remove('session');
            this.$router.push('/signup')
        },
    }
}
</script>