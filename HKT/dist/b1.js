"use strict";
let globalId = 0;
function generateId() {
    globalId += 1;
    return globalId;
}
class Passenger {
    constructor(id, name, passportNumber) {
        this.passengerId = id;
        this.name = name;
        this.passportNumber = passportNumber;
    }
    getDetails() {
        return `ID: ${this.passengerId} | ${this.name} | Passport: ${this.passportNumber}`;
    }
}
class Flight {
    constructor(flightNumber, origin, destination, departureTime, capacity, baseFare) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.capacity = capacity;
        this.bookedSeats = 0;
        this.baseFare = baseFare;
    }
    bookSeat() {
        if (!this.isFull())
            this.bookedSeats++;
    }
    isFull() {
        return this.bookedSeats >= this.capacity;
    }
    getDetails() {
        return `Flight ${this.flightNumber} | ${this.origin} -> ${this.destination} | Time: ${this.departureTime.toLocaleString()} | Seats: ${this.bookedSeats}/${this.capacity} | Fare: ${this.baseFare}`;
    }
}
class DomesticFlight extends Flight {
    calculateBaggageFee(weight) {
        return weight * 50000;
    }
}
class InternationalFlight extends Flight {
    calculateBaggageFee(weight) {
        return weight * 10 * 25000;
    }
}
class Booking {
    constructor(id, passenger, flight, numberOfTickets, baggageWeight) {
        this.bookingId = id;
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        const ticketsCost = numberOfTickets * flight.baseFare;
        const baggageFee = flight.calculateBaggageFee(baggageWeight);
        this.totalCost = ticketsCost + baggageFee;
    }
    getDetails() {
        return `Booking #${this.bookingId} | Passenger: ${this.passenger.name} | Flight: ${this.flight.flightNumber} | Tickets: ${this.numberOfTickets} | Total: ${this.totalCost.toLocaleString()} VND`;
    }
}
class AirlineManager {
    constructor() {
        this.flights = [];
        this.passengers = [];
        this.bookings = [];
    }
    addPassenger(name, passport) {
        const id = generateId();
        const p = new Passenger(id, name, passport);
        this.passengers.push(p);
        alert("Thêm hành khách thành công");
        return p;
    }
    addFlight(type, flightNumber, origin, destination, time, capacity, fare) {
        let flight;
        if (type === 1) {
            flight = new DomesticFlight(flightNumber, origin, destination, time, capacity, fare);
        }
        else if (type === 2) {
            flight = new InternationalFlight(flightNumber, origin, destination, time, capacity, fare);
        }
        else
            return null;
        this.flights.push(flight);
        alert("Thêm chuyến bay thành công");
        return flight;
    }
    createBooking(passengerId, flightNumber, tickets, baggage) {
        const passenger = this.passengers.find(p => p.passengerId === passengerId);
        const flight = this.flights.find(f => f.flightNumber === flightNumber);
        if (!passenger || !flight) {
            alert("Không tìm thấy hành khách hoặc chuyến bay");
            return null;
        }
        if (flight.bookedSeats + tickets > flight.capacity) {
            alert("Chuyến bay đã đầy");
            return null;
        }
        for (let i = 0; i < tickets; i++)
            flight.bookSeat();
        const id = generateId();
        const booking = new Booking(id, passenger, flight, tickets, baggage);
        this.bookings.push(booking);
        alert("Đặt vé thành công");
        return booking;
    }
    cancelBooking(id) {
        const booking = this.bookings.find(b => b.bookingId === id);
        if (!booking) {
            alert("Không tìm thấy booking");
            return;
        }
        booking.flight.bookedSeats = Math.max(0, booking.flight.bookedSeats - booking.numberOfTickets);
        this.bookings = this.bookings.filter(b => b.bookingId !== id);
        alert("Hủy vé thành công");
    }
    listAvailableFlights(origin, destination) {
        const list = this.flights.filter(f => f.origin === origin && f.destination === destination && !f.isFull());
        if (list.length === 0)
            alert("Không có chuyến phù hợp");
        else
            alert(list.map(f => f.getDetails()).join("\n"));
    }
    listBookingsByPassenger(passengerId) {
        const list = this.bookings.filter(b => b.passenger.passengerId === passengerId);
        if (list.length === 0)
            alert("Hành khách chưa có booking");
        else
            alert(list.map(b => b.getDetails()).join("\n"));
    }
    calculateTotalRevenue() {
        const total = this.bookings.reduce((s, b) => s + b.totalCost, 0);
        alert("Tổng doanh thu: " + total.toLocaleString() + " VND");
    }
    countFlightsByType() {
        const result = this.flights.reduce((acc, f) => {
            if (f instanceof DomesticFlight)
                acc.domestic++;
            else if (f instanceof InternationalFlight)
                acc.international++;
            return acc;
        }, { domestic: 0, international: 0 });
        alert(`Nội địa: ${result.domestic}, Quốc tế: ${result.international}`);
    }
    updateFlightTime(flightNumber, newTime) {
        const f = this.flights.find(fl => fl.flightNumber === flightNumber);
        if (!f) {
            alert("Không tìm thấy chuyến bay");
            return;
        }
        f.departureTime = newTime;
        alert("Cập nhật giờ bay thành công");
    }
    getFlightPassengerList(flightNumber) {
        const list = this.bookings.filter(b => b.flight.flightNumber === flightNumber).map(b => b.passenger.getDetails());
        if (list.length === 0)
            alert("Chưa có hành khách nào");
        else
            alert(list.join("\n"));
    }
}
const printMenu = () => {
    const choice = Number(prompt(`========= MENU =========\n1. Thêm hành khách\n2. Thêm chuyến bay\n3. Đặt vé\n4. Hủy booking\n5. Danh sách chuyến bay còn trống\n6. Danh sách vé theo hành khách\n7. Tổng doanh thu\n8. Đếm số chuyến bay\n9. Cập nhật giờ bay\n10. Danh sách hành khách của chuyến\n11. Thoát`));
    return choice;
};
const manager = new AirlineManager();
let choice = 0;
while (choice !== 11) {
    choice = printMenu();
    switch (choice) {
        case 1: {
            const name = String(prompt("Nhập tên hành khách:"));
            const pass = String(prompt("Nhập passport:"));
            const p = manager.addPassenger(name, pass);
            alert(p.getDetails());
            break;
        }
        case 2: {
            const type = Number(prompt("Loại chuyến: 1.Nội địa 2.Quốc tế"));
            const code = String(prompt("Nhập số hiệu chuyến:"));
            const ori = String(prompt("Nhập nơi đi:"));
            const des = String(prompt("Nhập nơi đến:"));
            const time = new Date(String(prompt("Nhập giờ khởi hành (yyyy-mm-dd hh:mm):")));
            const cap = Number(prompt("Nhập sức chứa:"));
            const fare = Number(prompt("Nhập giá vé:"));
            const f = manager.addFlight(type, code, ori, des, time, cap, fare);
            if (f)
                alert(f.getDetails());
            break;
        }
        case 3: {
            const pid = Number(prompt("Nhập ID hành khách:"));
            const code = String(prompt("Nhập số hiệu chuyến:"));
            const t = Number(prompt("Nhập số vé:"));
            const bag = Number(prompt("Nhập số kg hành lý:"));
            const b = manager.createBooking(pid, code, t, bag);
            if (b)
                alert(b.getDetails());
            break;
        }
        case 4: {
            const id = Number(prompt("Nhập ID booking muốn hủy:"));
            manager.cancelBooking(id);
            break;
        }
        case 5: {
            const ori = String(prompt("Nơi đi:"));
            const des = String(prompt("Nơi đến:"));
            manager.listAvailableFlights(ori, des);
            break;
        }
        case 6: {
            const id = Number(prompt("Nhập ID hành khách:"));
            manager.listBookingsByPassenger(id);
            break;
        }
        case 7: {
            manager.calculateTotalRevenue();
            break;
        }
        case 8: {
            manager.countFlightsByType();
            break;
        }
        case 9: {
            const code = String(prompt("Nhập số hiệu chuyến:"));
            const time = new Date(String(prompt("Nhập giờ mới:")));
            manager.updateFlightTime(code, time);
            break;
        }
        case 10: {
            const code = String(prompt("Nhập số hiệu chuyến:"));
            manager.getFlightPassengerList(code);
            break;
        }
        case 11: {
            alert("Thoát chương trình");
            break;
        }
        default: alert("Lựa chọn không hợp lệ");
    }
}
