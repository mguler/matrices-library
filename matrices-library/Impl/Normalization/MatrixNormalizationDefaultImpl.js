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
exports.MatrixNormalizationDefaultImpl = void 0;
const Matrix_1 = require("../Matrix");
class MatrixNormalizationDefaultImpl {
    normalize(matrix) {
        return __awaiter(this, void 0, void 0, function* () {
            var m = matrix.toArray();
            var max = 0;
            for (var i = 0; i < m.length; i++) {
                var rt = 0;
                for (var j = 0; j < m.length; j++) {
                    rt += m[i][j];
                }
                if (rt > max) {
                    max = rt;
                }
            }
            for (var j = 0; j < m.length; j++) {
                var ct = 0;
                for (var i = 0; i < m.length; i++) {
                    ct += m[i][j];
                }
                if (ct > max) {
                    max = ct;
                }
            }
            for (var i = 0; i < m.length; i++) {
                var rt = 0;
                for (var j = 0; j < m.length; j++) {
                    m[i][j] = m[i][j] / max;
                }
            }
            return new Matrix_1.Matrix(m);
        });
    }
}
exports.MatrixNormalizationDefaultImpl = MatrixNormalizationDefaultImpl;
//# sourceMappingURL=MatrixNormalizationDefaultImpl.js.map