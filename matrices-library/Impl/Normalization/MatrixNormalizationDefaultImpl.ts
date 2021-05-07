import { IMatrix } from "../../Abstract/IMatrix";
import { IMatrixNormalization } from "../../Abstract/IMatrixNormalization";
import { Matrix } from "../Matrix";

export class MatrixNormalizationDefaultImpl implements IMatrixNormalization {

    public async normalize(matrix: IMatrix): Promise<IMatrix> {

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

        return new Matrix(m);

    }
} 