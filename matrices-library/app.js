"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatrixInversionBareissImpl_1 = require("./Impl/Inversion/MatrixInversionBareissImpl");
Object.defineProperty(exports, "MatrixInversionBareissImpl", { enumerable: true, get: function () { return MatrixInversionBareissImpl_1.MatrixInversionBareissImpl; } });
var Matrix_1 = require("./Impl/Matrix");
Object.defineProperty(exports, "Matrix", { enumerable: true, get: function () { return Matrix_1.Matrix; } });
var MatrixMultiplyOperator_1 = require("./Impl/Operators/MatrixMultiplyOperator");
Object.defineProperty(exports, "MatrixMultiplyOperator", { enumerable: true, get: function () { return MatrixMultiplyOperator_1.MatrixMultiplyOperator; } });
var MatrixSumOperator_1 = require("./Impl/Operators/MatrixSumOperator");
Object.defineProperty(exports, "MatrixSumOperator", { enumerable: true, get: function () { return MatrixSumOperator_1.MatrixSumOperator; } });
var MatrixSubtractOperator_1 = require("./Impl/Operators/MatrixSubtractOperator");
Object.defineProperty(exports, "MatrixSubtractOperator", { enumerable: true, get: function () { return MatrixSubtractOperator_1.MatrixSubtractOperator; } });
var MatrixNormalizationDefaultImpl_1 = require("./Impl/Normalization/MatrixNormalizationDefaultImpl");
Object.defineProperty(exports, "MatrixNormalizationDefaultImpl", { enumerable: true, get: function () { return MatrixNormalizationDefaultImpl_1.MatrixNormalizationDefaultImpl; } });
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
//# sourceMappingURL=app.js.map