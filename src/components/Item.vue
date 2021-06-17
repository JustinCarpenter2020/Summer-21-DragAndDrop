<template>
  <div class="col-1" @dragstart="PrepToMove">
    <div class="item shadow">
      <img :src="itemProp.url" alt="img" />
    </div>
  </div>
</template>

<script>
import { itemService } from '../services/ItemService'
export default {
  props: { itemProp: { type: Object, required: true }, roomId: { type: Number, required: true } },
  setup(props) {
    return {
      PrepToMove() {
        itemService.PrepToMove(props.itemProp, props.roomId)
        // console.log('item to move', props.itemProp.name)
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
