<script>
  import axios from "axios";
  export default {
    name: "SingleProject",
    data() {
      return {
        project: null,
      };
    },
    created() {
      axios
        .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
        .then((response) => {
          this.project = response.data;
        })
        .catch((err) => {
          console.log(err);
          this.$router.push({ name: "page-404" });
        });
    },
  };
</script>

<template>
  <div v-if="project">
    <h1>{{ project.project_name }}</h1>
    <p>{{ project.summary }}</p>
  </div>
</template>
  
<style lang="scss" scoped></style>