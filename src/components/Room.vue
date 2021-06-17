<template>
  <div dropzone="zone" @dragover.prevent @drop.prevent="MoveItem" class="Rooms col-6 py-2 text-center">
    <div class="row justify-content-center">
      <div class="col-3 text-light bg-info rounded-pill p-1">
        {{ roomProp.name }}
      </div>
    </div>
    <transition-group name="item" tag="div" class=" row space-evenly mt-3">
      <item v-for="item in state.items" @draggable="true" :key="item.id" :room-id="roomProp.id" :item-prop="item" />
    </transition-group>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Item from './Item.vue'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { itemService } from '../services/ItemService'
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
        console.log('moving item', props.roomProp.id)
        itemService.MoveItem(props.roomProp.id)
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

//NOTE slide transition

// .item-enter-active,
// .item-leave-active {
//   transition: all 0.5s ease;
// }

// .item-enter-from,
// .item-leave-to {
//   transform: translate(0px, -3vh);
//   opacity: 0;
// }

// .item-enter-active {
//   transition: all .3s ease;
// }
// .item-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .item-enter, .item-fade-leave-to{
//   transform: translateX(10px);
//   opacity: 0;
// }

//NOTE bounce effect

// .item-enter-active {
//   animation: bounce-in .5s;
// }
// .item-leave-active {
//   animation: bounce-in .5s reverse;
// }
// @keyframes bounce-in {
//   0% {
//     transform: scale(0);
//   }
//   50% {
//     transform: scale(1.5);
//   }
//   100% {
//     transform: scale(1);
//   }
// }

//NOTE fade
//   .item-enter-active, .item-leave-active {
//   transition: opacity .3s ease;
// }
// .item-enter, .item-leave-to
// /* .component-fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }

</style>
