import { IMatrixOperator } from "../../Abstract/IMatrixOperator";
import { IMatrix } from "../../Abstract/IMatrix";
import { Matrix } from "../Matrix";

export class MatrixSumOperator implements IMatrixOperator {

    ////////////////////////////////////////////////////////////////////////////////////
    //         
    //  Cij =  Aij + Bij
    //
    ////////////////////////////////////////////////////////////////////////////////////    
    public async operate(left: IMatrix, right: any): Promise<IMatrix> {
        var lm = left.toArray();
        var rm = right.toArray();
        var result = [];

        for (var i = 0; i < lm.length; i++) {
            var row = [];
            for (var j = 0; j < lm.length; j++) {
                var value = lm[i][j] + rm[i][j];
                row.push(value);
            }
            result.push(row);
        }
        return new Matrix(result);
    }
}