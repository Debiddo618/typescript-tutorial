import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi','web work', 250);
// docTwo = new Payment('mario','plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice('Mario','work on the mario website', 200);
// const invTwo = new Invoice('Luigi','work on the luigi website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv =>{
//     console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    let values:[string, string, number] = [toFrom.value,details.value,amount.valueAsNumber];
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }

    list.render(doc,type.value,'end');


    console.log(
        doc
    )
})

const addUID = <T extends {name:string}>(obj:T) => {
    let uid = Math.floor(Math.random()*100);
    return {...obj,uid};
}

let docThree = addUID({name:'yoshi', age:40});
console.log(docThree.name);

interface Resource<T>{
    uid:number,
    resourceName: string;
    data:T
}