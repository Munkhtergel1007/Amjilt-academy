const gridItem = document.querySelectorAll('.grid-item')
const button = document.querySelector('#button4')
const section2 = document.querySelector('.section2')

gridItem.forEach(function(grid, index){
  grid.addEventListener('click' , function(){
    
     if (index != 3) {
      section2.insertAdjacentHTML(
        'beforeend',
        `
          <p>${gridItem[index].value}</p>
        `
      )
     }
  })
})

button.addEventListener('click', function(){
   section2.children[section2.childElementCount - 1].remove();
})

gridItem[33].addEventListener('click', function(){
  let a = section2.children[0].innerHTML;
  let b = [];
  let c = [];
  for (let i = 1; i < section2.childElementCount - 1; i ++) {
    if (parseInt(section2.children[i].innerHTML) < 10) {
      a = a.concat(section2.children[i].innerHTML);
    } else{
      c.push(section2.children[i].innerHTML);
      b.push(a);
      a = section2.children[i + 1].innerHTML;
      i ++;
    }
  }
  b.push(a);
  console.log (c);
  console.log(b);

  let sum = parseInt (b[0]);
  let j = 0;
  for (i = 1; i < b.length; i ++) {
    if (c[j] == "+") {
      sum = sum +  parseInt(b[i]);
    }
    if (c[j] == "-") {
      sum = sum - parseInt(b[i]);
    }
    if (c[j] == "*") {
      sum = sum  * parseInt(b[i]);
    }
    if (c[j] == "/") {
      sum = sum  / parseInt(b[i]);
    }
    j ++;
  }


  section2.insertAdjacentHTML(
    'beforeend',
    `
      <p>${sum}</p>
    `
  )

  return a;
}) 



