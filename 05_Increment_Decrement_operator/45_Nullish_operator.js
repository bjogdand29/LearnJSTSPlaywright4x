let Amul = null;
let val = Amul ?? 'Nandini Dairy';
console.log(val);

let api_Response = null;
let api_Data = api_Response ?? "{}";
console.log(api_Data);

let api_Response1 = "Balaji";
let api_Data1 = api_Response1 ?? "{}";
console.log(api_Data1);


let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);