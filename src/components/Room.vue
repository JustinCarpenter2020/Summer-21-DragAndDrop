<template>
  <div class="Rooms col-6 py-2 text-center">
    <div class="row justify-content-center">
      <div class="col-3 text-light bg-info rounded-pill p-1">
        {{ roomProp.name }}
      </div>
    </div>
    <div class=" row space-evenly mt-3">
      <item v-for="item in state.items" :key="item.id" :room-id="roomProp.id" :item-prop="item" />
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Item from './Item.vue'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  components: { Item },
  props: { roomProp: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      items: computed(() => AppState.rooms[props.roomProp.id].items)
    })
    return {
      state,
      MoveItem() {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Rooms {
  height: 30vh;
  background-color: white;
  border: 1px;
  border-style: solid;
  border-color: black;
}

</style>
