export interface HasFormatter {
    format():string;
}

// interface  allow us to enforce a certain structure of a class or object
interface IsPerson {
    name: string;
    age: number;
    speak(a:string):void;
    spend(a:number):number;
}

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string):void{
        console.log(text);
    },
    spend(amount:number){
        console.log("I spent", amount);
        return amount;
    }
}
const greetPerson = (person:IsPerson) =>{
    console.log('hello', person.name);
}
greetPerson(me);
console.log(me);