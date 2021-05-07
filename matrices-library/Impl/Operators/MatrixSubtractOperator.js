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
exports.MatrixSubtractOperator = void 0;
const Matrix_1 = require("../Matrix");
class MatrixSubtractOperator {
    ////////////////////////////////////////////////////////////////////////////////////
    //         
    //  Cij =  Aij + Bij
    //
    ////////////////////////////////////////////////////////////////////////////////////    
    operate(left, right) {
        return __awaiter(this, void 0, void 0, function* () {
            var lm = left.toArray();
            var rm = right.toArray();
            var result = [];
            for (var i = 0; i < lm.length; i++) {
                var row = [];
                for (var j = 0; j < lm.length; j++) {
                    var value = lm[i][j] - rm[i][j];
                    row.push(value);
                }
                result.push(row);
            }
            return new Matrix_1.Matrix(result);
        });
    }
}
exports.MatrixSubtractOperator = MatrixSubtractOperator;
//# sourceMappingURL=MatrixSubtractOperator.js.map