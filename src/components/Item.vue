<template>
  <div class="col-1">
    <div class="item shadow">
      <img :src="itemProp.url" alt="img" />
    </div>
  </div>
</template>

<script>
export default {
  props: { itemProp: { type: Object, required: true }, roomId: { type: Number, required: true } },
  setup(props) {
    return {
      PrepToMove() {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 5vh;
  width: 4vw;
  background-color: white;
  border-radius: 5px;
  border: 1px;
  border-style: solid;
  border-color: rgb(95, 95, 95);
}
</style>
