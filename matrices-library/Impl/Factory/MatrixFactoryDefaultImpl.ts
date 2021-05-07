import { IMatrixFactory } from "../../Abstract/IMatrixFactory";
import { Matrix } from "../Matrix";

export class MatrixFactoryDefaultImpl implements IMatrixFactory {
    public createIdentical(size: number): any {
        var identicalMatrix = [];
        for (var y = 0; y < size; y++) {
            var row = [];
            for (var x = 0; x < size; x++) {
                if (x == y) {
                    row.push(1);
                } else {
                    row.push(0);
                }
            }
            identicalMatrix.push(row);
        }
        return new Matrix(identicalMatrix);
    }
}
