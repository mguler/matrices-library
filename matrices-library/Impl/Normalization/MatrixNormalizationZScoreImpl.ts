import { IMatrix } from "../../Abstract/IMatrix";
import { IMatrixNormalization } from "../../Abstract/IMatrixNormalization";
import { Matrix } from "../Matrix";

export class MatrixNormalizationZScoreImpl implements IMatrixNormalization {
    
    public async normalize(matrix: IMatrix): Promise<IMatrix> {
        var m = matrix.toArray();

        //j column i row 
        for (var j = 0; j < m.length; j++) {
            var �, s;
            for (var i = 0; i < m.length; i++) {
                � += m[i][j] / m.length;
            }

            for (var i = 0; i < m.length; i++) {
                s += Math.sqrt(Math.pow(m[i][j] - �, 2) / m.length - 1); 
            }

        }
        return new Matrix(m);
    }
} 