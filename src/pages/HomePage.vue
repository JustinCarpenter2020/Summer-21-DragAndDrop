<template>
  <div class="home container-fluid p-5">
    <div class="row">
      <Room v-for="room in state.rooms" :room-prop="room" :key="room._id" />
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      rooms: computed(() => AppState.rooms)
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: teal;
  margin: auto;
}
</style>
