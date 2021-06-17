import { AppState } from '../AppState'

class ItemService {
  PrepToMove(item, roomId) {
    item.oldRoomId = roomId
    AppState.tempItem = item
    console.log(AppState.tempItem)
  }

  MoveItem(newRoomId) {
    const oldRoomIndex = AppState.rooms.findIndex(room => room.id === AppState.tempItem.oldRoomId)
    const newRoom = AppState.rooms.find(room => room.id === newRoomId)
    AppState.rooms[oldRoomIndex].items = AppState.rooms[oldRoomIndex].items.filter(item => item.id !== AppState.tempItem.id)
    newRoom.items.push(AppState.tempItem)
  }
}

export const itemService = new ItemService()
