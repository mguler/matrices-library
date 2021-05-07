export { MatrixInversionBareissImpl } from "./Impl/Inversion/MatrixInversionBareissImpl";
export { IMatrix } from "./Abstract/IMatrix";
export  { Matrix } from "./Impl/Matrix";
export  { MatrixMultiplyOperator } from "./Impl/Operators/MatrixMultiplyOperator";
export { IMatrixOperator } from "./Abstract/IMatrixOperator";
export { MatrixSumOperator } from "./Impl/Operators/MatrixSumOperator";
export { MatrixSubtractOperator } from "./Impl/Operators/MatrixSubtractOperator";
export { MatrixNormalizationDefaultImpl } from "./Impl/Normalization/MatrixNormalizationDefaultImpl";
export { IMatrixNormalization } from "./Abstract/IMatrixNormalization";



//var m = [
//    [0, 3, 0, 2, 0, 0, 0, 0, 3, 0],
//    [3, 0, 0, 0, 0, 0, 0, 0, 0, 2],
//    [4, 1, 0, 2, 1, 3, 1, 2, 3, 2],
//    [4, 1, 4, 0, 1, 2, 0, 1, 0, 0],
//    [3, 2, 3, 1, 0, 3, 0, 2, 0, 0],
//    [4, 1, 4, 4, 0, 0, 0, 1, 1, 3],
//    [3, 0, 0, 0, 0, 2, 0, 0, 0, 0],
//    [3, 0, 4, 3, 2, 3, 1, 0, 0, 0],
//    [4, 3, 2, 0, 0, 1, 0, 0, 0, 2],
//    [2, 1, 0, 0, 0, 0, 0, 0, 3, 0]];


//var normalizer: IMatrixNormalization = new MatrixNormalizationDefaultImpl();

//var f = async () => {
//    var normalized = await normalizer.normalize(new Matrix(m));
//    var identical = normalized.createIdentical();

//    var result = await normalized.multiply(await (await identical.substract(normalized)).inverse());


//    //var result = await identical.substract(normalized);
//    //result = await result.inverse();
//    //result = await normalized.multiply(result);
//    console.log(result.toString());
//};
//f();



//var multiplier: IMatrixOperator = new MatrixSubtractOperator();
//var a =
//    [[1, 31, 12],
//    [2, 4, 1],
//    [5, 5, 3]];

//var b = [
//    [5, 9, 8],
//    [0, 7, 3],
//    [8, 6, 55]];

//var am = new Matrix(a);
//var bm = new Matrix(b);

//var f = async () => {
//    var c = (await multiplier.operate(am, bm));

//    console.log(c.toString());
//};

//f();

//var inversion = new MatrixInversionBareissImpl();
//var m = [
//    [1, 3, 5, 2, 3, 4, 1, 5, 6, 3],
//    [2, 0, 2, 2, 0, 4, 6, 1, 1, 7],
//    [0, 2, 5, 1, 1, 0, 2, 3, 7, 1],
//    [6, 8, 8, 3, 2, 4, 4, 2, 0, 0],
//    [1, 4, 1, 4, 3, 3, 7, 5, 1, 5],
//    [3, 8, 4, 2, 2, 6, 2, 8, 2, 3],
//    [3, 3, 5, 5, 4, 3, 6, 3, 3, 8],
//    [8, 6, 9, 0, 7, 8, 2, 4, 7, 1],
//    [5, 7, 8, 4, 2, 2, 7, 3, 2, 4],
//    [4, 0, 0, 6, 3, 7, 0, 2, 0, 3]
//];

//var matrix: IMatrix = new Matrix(m);
//var result = matrix.inverse();

//console.log(result.toString());