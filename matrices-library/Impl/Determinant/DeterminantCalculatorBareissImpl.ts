////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// This determinant calculator uses Bareiss Algorithm 
//
// Algorithm;
//
// Sample Matrix;               Formula ;
//                              
//     B-           -                                                                   i = row index
//      | 5 3 5 2 3 |                    a(i2,j2) * a(i,j) - a(i,j2) * a(i2,j)          j = col index
//      | 2 0 2 2 0 |           a(i,j) = -------------------------------------          i2 = row index for BC diagonal
// A  = | 0 2 5 1 1 |                               a(i2 - 1,j2 - 1)                    j2 = col index for BC diagonal
//      | 6 8 8 3 2 |                                       |
//      | 1 4 1 4 3 |                                       --> pivot value , for first iteration of the process ( i2 = 1 ) this value must be set to 1
//      -           -C
//                         
//
// We use four variables for accessing two different vectors in the matrix during process. First couple of variables are i and j.these are for iterating each item in the 
// matrix. i2 and j2 variables are only for accessing values on BC diagonal. Algorithm processes every item of the A matrix for each iteration of i2,j2 except the 
// values of the line which has same index value of i2,j2 
//
// Processing 5x5 matrix:
//                                                                                                              
//          1 2 3 4 5                                                                                                            1  2  3  4  5
//       B-           -                                                                                                       B-               -    once equation applied 
//      1 | 5 3 5 2 3 |      for i=2*,j=1,i2=1,j2=1             (i2,j2)     (i,j)    (i,j2)         (i2,j)                   1 | 5  3  5  2  3 |    each value of A 
//      2 | 2 0 2 2 0 |                                         (1 ,1)<-    (2,1)    (2,1)       -> (1,1)                    2 | 0 -6  0  6 -6 |    it will transform 
// A  = 3 | 0 2 5 1 1 |      equation should be;                       5  *   2    -   2    *   5                       A1 = 3 | 0 10 25  5  5 |    into A1 
//      4 | 6 8 8 3 2 |                             a(2,1) =    --------------------------------------------- = 0            4 | 0 22 10  3 -8 |
//      5 | 1 4 1 4 3 |                                                             1                                        5 | 0 17  0 18 12 |
//        -           -C                                                                                                       -               -C
//
// * When i=i2 algorithm will pass the line and keep processing the next line, that's why it showns i=2 for first iteration of the operation 
//
//  Below shows transformation of the A matrix step by step for every iteration of process (each value of i2,j2)
//  * Lines marked with a * will not be processed at the iteration
//
//        [ITERATION 1]                     [ITERATION 2]                          [ITERATION  3]
//
//      p = 1, i2 = 1, j2 = 1      p = 5 = A(i2-1,j2-1), i2 = 2, j2 = 2      p = -6 = A1(i2-1,j2-1), i2 = 3, j2 = 3
//
//          1 2 3 4 5                        1  2  3  4  5                         1  2   3   4  5                        
//       B-           -                   B-               -                   B-                  -
//      1 |*5 3 5 2 3 |                  1 | 5  3  5  2  3 |                  1 | -6  0  -6  -6  0 |
//      2 | 2 0 2 2 0 |                  2 |*0 -6  0  6 -6 |                  2 |  0 -6   0   6 -6 |
// A  = 3 | 0 2 5 1 1 |     ---->   A1 = 3 | 0 10 25  5  5 |     ---->   A2 = 3 | *0  0 -30 -18  6 |
//      4 | 6 8 8 3 2 |                  4 | 0 22 10  3 -8 |                  4 |  0  0 -12 -30 36 |
//      5 | 1 4 1 4 3 |                  5 | 0 17  0 18 12 |                  5 |  0  0   0 -42  6 |
//        -           -C                   -               -C                   -                  -C
// 
//
//            [ITERATION 4]                                      [ITERATION  5]                                         [RESULT]
//
//       p = -30 = A2(i2-1,j2-1)                            p = -114 = A3(i2-1,j2-1)                         
//          i2 = 4, j2 = 4                                       i2 = 5, j2 = 5
//
//            1   2   3    4    5                           1    2     3     4     5                            1      2      3     4     5
//       B-                       -                   B-                             -                   B-                                 -
//      1 | -30   0   0  -12   -6 |                  1 | -114    0     0     0   -90 |                  1 | -1062      0      0     0     0 |
//      2 |   0 -30   0   30  -30 |                  2 |    0 -114     0     0    54 |                  2 |     0  -1062      0     0     0 |
// A3 = 3 |   0   0 -30  -18    6 |     ---->   A4 = 3 |    0    0  -114     0   -78 |     ---->   A5 = 3 |     0      0  -1062     0     0 |
//      4 |  *0   0   0 -114  168 |                  4 |    0    0     0  -114   168 |                  4 |     0      0      0  -1062    0 |
//      5 |   0   0   0 -210   30 |                  5 |   *0    0     0     0 -1062 |                  5 |     0      0      0     0 -1062 |
//        -                       -C                   -                             -C                   -                                 -C
//
// Finally we should have following;
//
//          1 2 3 4 5
//       B-           -        
//      1 | 5 3 5 2 3 |        
//      2 | 2 0 2 2 0 |               
// A =  3 | 0 2 5 1 1 | = -1062
//      4 | 6 8 8 3 2 |                 
//      5 | 1 4 1 4 3 |                 
//        -           -C                
//
//  Pseudo Code;
//
//  for(i2,j2 = 0;i2,j2<a.length;i2,j2++){
//      
//      if i2 = 0 then p = 1
//      else p = a[i2-1,j2-1]
//      
//      for (i = 0; i < a.length; i++){
//
//          if i=i2 then continue (for next value of i)
//
//          for(j=0;j<a.length;j++){              
//        
//              a[i,j] = a[i2,j2] * a[i,j] - a[i,j2] * a[i2,j] / p
//          
//          }
//      }
//  }
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { IDeterminantCalculator } from "../../Abstract/IDeterminantCalculator";
import { IMatrix } from "../../Abstract/IMatrix";

export class DeterminantCalculatorBareissImpl implements IDeterminantCalculator {

    public calculate(matrix: IMatrix): number {

        var m = matrix.toArray();

        var next = [];
        for (var y = 0, x = 0; y < m.length; x++, y++) {
            var previousPivot = pivot;
            if (y == 0) {
                previousPivot = 1;
            } else {
                previousPivot = pivot;
            }

            console.log(m);
            console.log(pivot);

            for (var y2 = 0; y2 < m.length; y2++) {

                if (y2 == y) {
                    next.push(m[y2]);
                    continue;
                }
                var row = [];

                for (var x2 = 0; x2 < m.length; x2++) {

                    var pivot = m[y][x];
                    var currentValue = m[y2][x2];
                    var rowValue = m[y2][x];
                    var colValue = m[y][x2];

                    var result = (pivot * currentValue - rowValue * colValue) / previousPivot;
                    row.push(result);
                }
                next.push(row);
            }
            m = next;
            next = [];
        }
        console.log(m);
        return m[m.length - 1][m.length - 1];
    }
}