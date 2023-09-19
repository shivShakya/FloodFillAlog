import React,{useState} from 'react';
import './App.css';

function App() {

  const initialTableData = [
      [ "#00188f", "#fff100","#fff100",  "#bad80a","#00bcf2","#ec008c" ,"#bad80a","#ff8c00" ,"#e81123", "#fff100"],
      [ "#00188f", "#fff100","#fff100",  "#bad80a","#00bcf2","#ec008c" ,"#bad80a","#ff8c00" ,"#e81123", "#fff100"],
      [ "#fff100",  "#68217a","#fff100",  "#68217a","#68217a","#ec008c" ,"#bad80a","#ff8c00" ,"#e81123", "#fff100"],
      [  "#68217a",  "#68217a","#fff100",  "#68217a","#68217a","#ec008c" ,"#bad80a","#e81123" ,"#e81123", "#fff100"],
      [ "#ec008c", "#fff100","#fff100",  "#bad80a","#00bcf2","#ec008c" ,"#bad80a","#ff8c00" ,"#bad80a", "#fff100"],
      [ "#ec008c", "#fff100","#fff100",  "#bad80a","#00bcf2","#ec008c" ,"#bad80a","#ff8c00" ,"#bad80a", "#fff100"],
      [ "#ec008c",  "#009e49","#fff100",  "#bad80a","#00bcf2","#ec008c" ,"#bad80a","#ff8c00" ,"#bad80a", "#fff100"],
      [ "#ec008c", "#009e49","#fff100",  "#bad80a","#00bcf2", "#009e49" ,"#bad80a","#ff8c00" ,"#e81123", "#fff100"],
      [ "#fff100", "#009e49" ,"#009e49",  "#00188f","#00188f","#ec008c" ,"#bad80a","#ff8c00" ,"#e81123", "#fff100"],
      [ "#fff100", "#fff100","#fff100",  "#00188f","#00188f","#ec008c" ,"#bad80a","#ff8c00" ,"#e81123", "#fff100"],

  ]


  const [tableData , setTableData] = useState(initialTableData);
  const [selectedColor , setSelectedColor] = useState('');
  const [state ,setState] = useState('');

  console.log(selectedColor);

  const colorObject = [
    "#fff100",
    "#ff8c00",
    "#e81123",
    "#ec008c",
    "#68217a",
    "#00188f",
    "#00bcf2",
     "#00b294",
     "#009e49",
     "#bad80a",
  ]

  function dfsFloodFill(row, col, cell, selectedColor) {
    const n = tableData.length;
    const m = tableData[0].length;

    const newTableData = tableData.map((row) => [...row]);
  
    const stack = [{ row, col }];
  
    while (stack.length > 0) {
      const { row, col } = stack.pop();
  
      if (row < 0 ||row >= n ||col < 0 ||col >= m ||newTableData[row][col] !== cell ||newTableData[row][col] === selectedColor) {
        continue;
      }
  
      newTableData[row][col] = selectedColor;
  
      stack.push({ row: row + 1, col });
      stack.push({ row: row - 1, col });
      stack.push({ row, col: col + 1 });
      stack.push({ row, col: col - 1 });
    }
  
    setTableData(newTableData);
  }
  

  return (
    <div className="App"> 
       <div>
              <h1>Assignment - Flood Fill algorithm</h1>
              <h3>When the user selects a color from the available colors and then clicks on any of the cells, all the connected cells with the same color should update to the newly selected color.</h3>
              <b>Instructions</b> :
              <h3>1. choose the color from color palette</h3>
              <h3>2. Paste it on your desired cell</h3>
       </div>

      <div className='color-box'>
         <div className='state'>{state}</div>
          <div className='Chooser'>
                        {
                               colorObject.map(color => {
                                 return  <div style={{backgroundColor : color}} onClick={ ()=> {setSelectedColor(color); setState(color + " is selected"); setTimeout(()=> {setState("")},1000)}} className='box'></div>                       
                               })
                        }           
          </div>
          <table className='table'>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td  key={colIndex} className='box'  onClick={() => {dfsFloodFill(rowIndex, colIndex, cell, selectedColor); console.log('pasted')}} style={{ backgroundColor: cell }}>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      <h1 className='thank'>Thank you</h1>
      <h2 className='thank'>- Shivam Shakya</h2>
    </div>
  );
}

export default App;
