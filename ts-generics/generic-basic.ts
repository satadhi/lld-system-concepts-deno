// generic functions types 

function getFirstValue<ElementsType>(arr: ElementsType[]):ElementsType {
    return arr[0];
}
const inputVar = [1,2,3,4]
const a = getFirstValue(inputVar)
console.log(a);

const inputVar2 = ["abvc", "xyz"]
const b = getFirstValue(inputVar2)
console.log(b);


// basically if you hover for on the functions usage you can see that 
// functions defination changes dynamically depending on its usage this is what
// the usage of generics are