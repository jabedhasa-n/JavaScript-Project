

let txt ="My name is jabed.I love Js";

// let pattern=/love|jabed|My/;
let pattern=/Love|Jabed|my/;

console.log(pattern.test(txt));


txt ="I love You";
pattern=/I love You/;

console.log(pattern.test(txt));


txt ="Ami love You";
pattern=/(I|ami) love You/;

console.log(pattern.test(txt));

txt ="JavaScript";
pattern=/^J.vaScript$/;

console.log(pattern.test(txt));

txt ="JavaScript";
pattern=/^J[a-z]vaScript$/;

console.log(pattern.test(txt));

txt ="J@vaScript";
pattern=/^J[a-zA-Z@]vaScript$/;

console.log(pattern.test(txt));


txt ="J@afavaScript";
pattern=/^J[a-zA-Z@]{2,3}vaScript$/;

console.log(pattern.test(txt));

txt ="J@vaScript";
pattern=/^J[a-zA-Z@]vaScript$/;

console.log(pattern.test(txt));


txt ="JavaScript";
pattern=/^J[a-zA-Z@]*vaScript$/;

console.log(pattern.test(txt));


txt ="J#vaScript";
pattern=/^J[^a-zA-Z@]*vaScript$/;

console.log(pattern.test(txt));


