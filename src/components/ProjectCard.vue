<script>
export default {
  props: {
    data: Object,
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ data.project_name }}</h5>
      <p class="card-text">
        {{ data.summary }}
      </p>
      <router-link :to="{ name: 'single-project', params: { slug: data.slug } }" class="btn btn-primary">Leggi di più</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>