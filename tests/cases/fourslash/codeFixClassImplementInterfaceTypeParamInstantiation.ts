/// <reference path='fourslash.ts' />

//// interface I<T> {
////    x: T;
//// }
////
//// class C implements I {[|  |]}

verify.rangeAfterCodeFix(`
    x: any;
`);