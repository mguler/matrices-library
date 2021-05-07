"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrixTranspozeDefaultImpl = void 0;
const Matrix_1 = require("../Matrix");
class MatrixTranspozeDefaultImpl {
    transpoze(matrix) {
        var result = [];
        var m = matrix.toArray();
        for (var x = 0; x < m.length; x++) {
            var row = [];
            for (var y = 0; y < m.length; y++) {
                var currentValue = m[y][x];
                row.push(currentValue);
            }
            result.push(row);
        }
        return new Matrix_1.Matrix(result);
    }
}
exports.MatrixTranspozeDefaultImpl = MatrixTranspozeDefaultImpl;
//# sourceMappingURL=MatrixTranspozeDefaultImpl.js.map