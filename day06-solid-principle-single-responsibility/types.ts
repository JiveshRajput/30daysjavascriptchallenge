interface CustomerSchema {
    customerId: string,
    name: string,
    gender: Gender,
    mobileNo: number,
    bookings?: Booking[],
}

interface Booking {
    bookingId: string,
    bookingDate: Date,
    roomId: string,
}

enum Gender {
    Male = 'MALE',
    Female = 'FEMALE'
}

export { CustomerSchema, Gender }