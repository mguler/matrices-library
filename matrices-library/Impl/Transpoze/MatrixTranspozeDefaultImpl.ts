import { IMatrix } from "../../Abstract/IMatrix";
import { IMatrixTranspoze } from "../../Abstract/IMatrixTranspoze";
import { Matrix } from "../Matrix";

export class MatrixTranspozeDefaultImpl implements IMatrixTranspoze {
    transpoze(matrix: IMatrix): IMatrix {
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
        return new Matrix(result);
    }
}