<template>
  <button type="button" class="button is-danger" @click="logout">
    Sign Out
  </button>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "signout-button",
  methods: {
    logout() {
      axios
        .request({
          url: "https://tweeterest.ml/api/login",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cwf0BgQG78QiAVS0Km4lkrDo9jRy3asglOkDFQspIIpEP",
          },
          data: {
            loginToken: cookies.get("session"),
          },
        })
        .then((response) => {
          console.log(response);
          cookies.remove("session");
          cookies.remove("userId");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>