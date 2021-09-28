<template>
  <div class="loading" v-if="isLoading">
    <h3>Loading ...</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>
<style lang="sass" scoped>
.loading {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: rgba(224, 255, 255);
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
