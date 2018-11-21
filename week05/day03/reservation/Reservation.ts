import { Reservationint } from "./ReservationInterface";

export class Reservation implements Reservationint {
  private generateBookingCodeFromHere: any[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  private generateDOWFRomHere: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  protected bookingCode: string;
  protected DOW: string;
  constructor() {
    this.DOW = '';
    this.bookingCode = '';
    this.generateDOW();
    this.generateBookingCode();
  }

  generateBookingCode(): void {
    for (let i: number = 0; i < 8; i++) {
      let randNum: number = Math.floor(Math.random() * 36);
      this.bookingCode += this.generateBookingCodeFromHere[randNum];
    }
  }

  generateDOW(): void {
    const randomNum: number = Math.floor(Math.random() * 7);
    this.DOW = this.generateDOWFRomHere[randomNum];
  }

  getCodeBooking(): string {
    return this.bookingCode;
  }

  getDowBooking(): string {
    return this.DOW;
  }
}