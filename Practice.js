
function RandomGenerator(){

    const a = Math.round(Math.random()*10);
    const id =  (a === 0 || a=== 4)? 1 : a;
    const color =  colorObject.filter( colors => colors.id === id);
    return color;
   }

   onClick={() => {
    bfsFloodFill(rowIndex, colIndex, targetColor, replacementColor);
  }}

  function handleClick(event){
    const clickedTd = event.target;
    const clickedRow = clickedTd.parentNode;
    const row = Array.from(clickedRow.parentNode.children).indexOf(clickedRow);
    const column = Array.from(clickedRow.children).indexOf(clickedTd);

    const computedStyle = window.getComputedStyle(clickedTd);
    const backgroundColor = computedStyle.backgroundColor;

    alert(row + " " + column + " " + backgroundColor);
}
