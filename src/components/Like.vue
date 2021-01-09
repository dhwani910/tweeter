<template>
    <div class="like">
        <button type="submit" v-text="text" @click="toggleLike">Like</button>

    </div>
</template>


<script>
export default {
    name: 'Like',
    methods: {
        toggleLike(){
            if(this.liked){
                this.unlike()
            }else{
                this.like()
            }
        },
        like(){
            this.submitted = true;
            this.liked = true;

        },
        unlike(){
            this.submitted = true;
            this.liked = false;

        },
    }
}
</script>


<style lang="scss">

</style>