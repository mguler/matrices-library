"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
const DeterminantCalculatorBareissImpl_1 = require("./Determinant/DeterminantCalculatorBareissImpl");
const MatrixInversionBareissImpl_1 = require("./Inversion/MatrixInversionBareissImpl");
const MatrixTranspozeDefaultImpl_1 = require("./Transpoze/MatrixTranspozeDefaultImpl");
const MatrixSerializerDefaultImpl_1 = require("./Serialization/MatrixSerializerDefaultImpl");
const MatrixFactoryDefaultImpl_1 = require("./Factory/MatrixFactoryDefaultImpl");
const MatrixSumOperator_1 = require("./Operators/MatrixSumOperator");
const MatrixMultiplyOperator_1 = require("./Operators/MatrixMultiplyOperator");
const MatrixNormalizationDefaultImpl_1 = require("./Normalization/MatrixNormalizationDefaultImpl");
const MatrixSubtractOperator_1 = require("./Operators/MatrixSubtractOperator");
class Matrix {
    constructor(array) {
        this._determinantCalculator = new DeterminantCalculatorBareissImpl_1.DeterminantCalculatorBareissImpl();
        this._matrixInversion = new MatrixInversionBareissImpl_1.MatrixInversionBareissImpl();
        this._matrixTranspoze = new MatrixTranspozeDefaultImpl_1.MatrixTranspozeDefaultImpl();
        this._matrixNormalize = new MatrixNormalizationDefaultImpl_1.MatrixNormalizationDefaultImpl();
        this._matrixSerializer = new MatrixSerializerDefaultImpl_1.MatrixSerializerDefaultImpl();
        this._matrixFactory = new MatrixFactoryDefaultImpl_1.MatrixFactoryDefaultImpl();
        this._matrixSumOperator = new MatrixSumOperator_1.MatrixSumOperator();
        this._matrixSubtractOperator = new MatrixSubtractOperator_1.MatrixSubtractOperator();
        this._matrixMultiplyOperator = new MatrixMultiplyOperator_1.MatrixMultiplyOperator();
        this._matrix = array;
    }
    get height() { return this._matrix.length; }
    get width() { return this._matrix.length; }
    inverse() {
        var inverted = this._matrixInversion.inverse(this);
        return inverted;
    }
    transpoze() {
        var transpozed = this._matrixTranspoze.transpoze(this);
        return transpozed;
    }
    normalize() {
        return __awaiter(this, void 0, void 0, function* () {
            var normalized = yield this._matrixNormalize.normalize(this);
            return normalized;
        });
    }
    determinant() {
        var determinant = this._determinantCalculator.calculate(this);
        return determinant;
    }
    createIdentical() {
        var identical = this._matrixFactory.createIdentical(this._matrix.length);
        return identical;
    }
    toArray() {
        return this._matrix;
    }
    toString() {
        var serialized = this._matrixSerializer.serialize(this);
        return serialized;
    }
    substract(matrix) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = this._matrixSubtractOperator.operate(this, matrix);
            return result;
        });
    }
    add(matrix) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield this._matrixSumOperator.operate(this, matrix);
            return result;
        });
    }
    multiply(matrix) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = this._matrixMultiplyOperator.operate(this, matrix);
            return result;
        });
    }
}
exports.Matrix = Matrix;
//# sourceMappingURL=Matrix.js.map