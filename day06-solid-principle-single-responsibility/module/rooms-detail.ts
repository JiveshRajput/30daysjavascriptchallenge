export class Rooms {

    constructor(rooms) {
        this.rooms = rooms;
    }

    availableRooms() {
        return this.rooms.filter((room) => room.isBooked === false);
    }

    bookRoom(roomId, customerId) {
        return this.rooms
    }

}