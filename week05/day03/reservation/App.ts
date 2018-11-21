import { Reservation } from "./Reservation";

function initializeArray(): Reservation[] {
  let ResArray: Reservation[] = [];
  ResArray.push(new Reservation);
  ResArray.push(new Reservation);
  ResArray.push(new Reservation);
  ResArray.push(new Reservation);
  ResArray.push(new Reservation);
  ResArray.push(new Reservation);
  ResArray.push(new Reservation);
  ResArray.push(new Reservation);
  return ResArray;
}

let reservationList: Reservation[] = initializeArray();
reservationList.forEach(e => {
  console.log(`Booking#  ${e.getCodeBooking()}  for  ${e.getDowBooking()}`);
});
