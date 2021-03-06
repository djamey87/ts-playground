function zigzagTraverse(array) {
    const colMax = array[0].length-1;
      const rowMax = array.length-1;
      
      let direction = 'd'; // d / u 
      let row = 0;
      let col = 0;
      let result = [];
      
      while (!isOutOfBounds(row,col,rowMax,colMax)) {
          result.push(array[row][col]);
          
          if (direction === 'd') {
              if (col === 0 || row === rowMax) {
                  direction = 'u';
                  if (row === rowMax) {
                      col++;
                  } else {
                      row ++;
                  }
              } else {
                  row++;
                  col--;
              }
          } else {
              if (col === colMax || row === 0) {
                  direction = 'd';
                  if (col === colMax) {
                      row++;
                  } else {
                      col ++;
                  }
              } else {
                  row--;
                  col++;
              }
          }
      }
      console.log(result);
      return result;
  }
  
  const isOutOfBounds = (row, col, rowMax, colMax) => {
      return row < 0 || row > rowMax || col < 0 || col > colMax;
  }
  
export default zigzagTraverse
  