import { HasFormatter } from "../interfaces/HasFormatter";
// classes
export class Invoice implements HasFormatter {
    constructor(
        public client: string,
        private details: string,
        public amount :number
    ){
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}