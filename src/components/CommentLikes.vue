<template>
  <div class="like-container">
    <button @click="likeComment(commentId)" v-if="isLiked == false">
      <i class="fas fa-thumbs-up"></i>
    </button>
    <button @click="unlikeComment" v-else-if="isLiked == true">
      <i class="fas fa-thumbs-down"></i>
    </button>
    <span>Likes: {{ commentLikesAmount }}</span>
  </div>
</template>


<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "CommentLikes",
  data() {
    return {
      commentLikesNum: [],
      isLiked: false,
      commentLikesAmount: 0,
    };
  },
  props: {
    commentId: Number,
  },
  mounted() {
    this.getCommentLikes();
  },
  methods: {
    likeComment(commentId) {
      (this.isLiked = true),
        axios
          .request({
            url: "https://tweeterest.ml/api/comment-likes",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP",
            },
            data: {
              loginToken: cookies.get("session"),
              commentId: this.commentId,
            },
          })
          .then((response) => {
            console.log(response);
            this.commentLikesAmount++;
          })
          .catch((error) => {
            console.log(error);
          });
    },
    getCommentLikes() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP",
          },
          params: {
            commentId: this.commentId,
          },
        })
        .then((response) => {
          console.log(response);
          this.commentLikesNum = response.data;
          this.commentLikesAmount = this.commentLikesNum.length;

          let currentUser = cookies.get("userId");
          for (let i = 0; i < this.commentLikesNum.length; i++) {
            if (currentUser == this.commentLikesNum[i].userId) {
              this.isLiked = true;
              return;
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    unlikeComment() {
      (this.isLiked = false),
        axios
          .request({
            url: "https://tweeterest.ml/api/comment-likes",
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP",
            },
            data: {
              loginToken: cookies.get("session"),
              commentId: this.commentId,
            },
          })
          .then((response) => {
            console.log(response);
            this.commentLikesAmount--;
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
};
</script>


<style scoped>
</style>