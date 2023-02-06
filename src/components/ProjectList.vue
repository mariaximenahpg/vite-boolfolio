<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
export default {
  name: "ProjectList",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
      this.projects = response.data;
    });
  },
};
</script>

<template>
  <section class="container">
    <h2>Lista Progetti</h2>
    <div>
        <div class="row">
            <div class="col-6" v-for="project in projects">
              <ProjectCard :data="project" />
            </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>