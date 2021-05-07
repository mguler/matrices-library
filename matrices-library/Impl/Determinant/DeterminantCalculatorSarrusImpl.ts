////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// This determinant calculator uses Sarrus Method
//
// Algorithm;
//
// For implement sarrus method we need to imagine our 3x3 matrix has 2 additional rows same as first two rows. After that 
// we should extract sum of multiplication of diagonal's values from sum of multiplication of reverse diagonal's values  <-- ?????????
//
// Sample Matrix;               
//                           -       -  
//      -       -            | 5 3 5 |
//      | 5 3 5 |            | 2 0 2 |
// A =  | 2 0 2 |    -->     | 0 2 5 |  --> 5 * 0 * 5 + 2 * 2 * 5 + 0 * 3 * 2 - 5 * 0 * 0 + 2 * 2 * 5 + 5 * 3 * 2 = 20 - 50 = -30     
//      | 0 2 5 |            | 5 3 5 |
//      -       -            | 2 0 2 |
//                           -       -   
// 
// following pattern shows us how code calculates the determinant by using sarrus method. Iteration works left to right and for each iteration
// another iteration works for both i,j and get multiplication of items in a diagonal form
//           
//      -             -                 -             -                 \
//      | [5]  3   5  |                 |  5   3  [5] |                  |   
//      |  2  [0]  2  | = 5 * 0 * 5 -   |  2  [0]  2  | = 5 * 0 * 0 = 0  | 
//      |  0   2  [5] |                 | [0]  2   5  |                  |   
//      -             -                 -             -                  |   
//                                                                       |                           
//      -             -                 -             -                  |   
//      |  5  [3]  5  |                 |  5  [3]  5  |                   \
//      |  2   0  [2] | = 3 * 2 * 0 -   | [2]  0   2  | = 3 * 2 * 5 = -30  \  0 + -30 + 0 = -30
//      | [0]  2   5  |                 |  0   2  [5] |                    /
//      -             -                 -             -                   /
//                                                                       |  
//                                                                       |   
//      -             -                 -             -                  | 
//      |  5   3  [5] |                 | [5]  3   5  |                  |
//      | [2]  0   2  | = 5 * 2 * 2 -   |  2   0  [2] | = 5 * 2 * 2 = 0  |
//      |  0  [2]  5  |                 |  0  [2]  5  |                  | 
//      -             -                 -             -                 /
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { IMatrix } from "../../Abstract/IMatrix";
import { IDeterminantCalculator } from "../../Abstract/IDeterminantCalculator";


export class DeterminantCalculatorSarrusImpl implements IDeterminantCalculator {

    public calculate(matrix: IMatrix): number {

        if (matrix.height != 3 || matrix.width != 3) {
            throw new Error("Matrix dimensions must be 3x3");
        }

        var result = 0;
        var m = matrix.toArray();
        for (var x = 0; x < 2; x++) {
            var total = 1;
            var reverseTotal = 1;
            for (var y = 0, x2 = x; y < 3; x2++, y++) {
                total *= m[y][x2 % 3];
                reverseTotal *= m[y][2 - (x2 % 3)];
            }
            result += total - reverseTotal;
        }
        return result;
    }
}