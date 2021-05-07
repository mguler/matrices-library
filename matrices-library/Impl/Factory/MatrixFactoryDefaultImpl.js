"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrixFactoryDefaultImpl = void 0;
const Matrix_1 = require("../Matrix");
class MatrixFactoryDefaultImpl {
    createIdentical(size) {
        var identicalMatrix = [];
        for (var y = 0; y < size; y++) {
            var row = [];
            for (var x = 0; x < size; x++) {
                if (x == y) {
                    row.push(1);
                }
                else {
                    row.push(0);
                }
            }
            identicalMatrix.push(row);
        }
        return new Matrix_1.Matrix(identicalMatrix);
    }
}
exports.MatrixFactoryDefaultImpl = MatrixFactoryDefaultImpl;
//# sourceMappingURL=MatrixFactoryDefaultImpl.js.map