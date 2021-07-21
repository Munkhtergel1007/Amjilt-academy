const matrice = (matriceA, matriceB) => {
  let result = Array.from({ length: matriceA.length }, () => []);

  for (let i = 0; i < matriceA.length; i++) {
    for (let j = 0; j < matriceA.length; j++) {
      result[i].push(2 * matriceA[i][j] + matriceB[i][j]);
    }
  }

  return result;
};

const multipleMatrices = (matriceA, matriceB, matriceC) => {
  let multiple = Array.from({ length: matriceA.length }, () => []);
  let result = Array.from({ length: matriceA.length }, () => []);

  for (let i = 0; i < matriceA.length; i++) {
    for (let j = 0; j < matriceB[j].length; j++) {
      let sum = 0;
      for (let k = 0; k < matriceA[i].length; k++) {
        sum += matriceA[i][k] * matriceB[k][j];
      }
      multiple[i].push(sum);
    }
  }
  for (let o = 0; o < multiple.length; o++) {
    for (let p = 0; p < multiple[o].length; p++) {
      result[o].push(multiple[o][p] + matriceC[o][p]);
    }
  }
  return result;
};

function matrice2nd(matriceA) {
  return matriceA[0][0] * matriceA[1][1] - matriceA[0][1] * matriceA[1][0];
}

function matrice3rd(matriceA) {
  let max = 0;
  let selector;
  for (let i = 0; i < matriceA.length; i++) {
    let counter = 0;
    let counter1 = 0;
    var a;
    for (let j = 0; j < matriceA.length; j++) {
      if (matriceA[i][j] === 0) {
        counter++;
      } else {
        if (matriceA[j][i] === 0) {
          counter1++;
        }
      }
    }
    let temp = counter;
    counter = Math.max(counter, counter1);

    if (counter > max) {
      max = counter;
      selector = i;
      if (temp > counter1) a = true;
      else a = false;
    }
  }
  if (a === true) {
    return `${selector} mur`;
  } else return `${selector} bagana`;
}

function determine(matrix) {
  let hemjees = matrix.length;

  if (hemjees === 1) return matrix[0][0];

  if (hemjees === 2)
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

  let result = 0;

  for (let i = 0; i < hemjees; i++) {
    result += matrix[0][i] * helper(matrix, i);
  }

  return result;
}

function helper(matrix, column) {
  let subMatrix = [];
  let hemjes = matrix.length;
  let subIndex = 0;

  for (let j = 1; j < hemjes; j++) {
    subMatrix[subIndex] = [];

    for (let k = 0; k < hemjes; k++) {
      if (k !== column) {
        subMatrix[subIndex].push(matrix[j][k]);
      }
    }

    subIndex++;
  }
  return (column % 2 ? -1 : 1) * determine(subMatrix);
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let a = this.root;

      while (true) {
        if (value < a.value) {
          if (!a.left) {
            a.left = newNode;
            return this;
          } else {
            a = a.left;
          }
        } else if (!a.rigth){
            a.rigth = newNode;
            return this;
            } else {    
                a = a.rigth; 
            }
        }
    }
    return undefined;
  }

  find (num) {
      if (this.root === null) {
          return undefined;
      } 
      
      if (this.root.value === num) {
          return this.root;
      } else {
          let a = this.root;
        while (true) {
            if (value < a.value) {
              if (!a.left) {
                return undefined;
              } else {
                a = a.left;
              }
            } else if (!a.rigth){
                a.rigth = newNode;
                return this;
                } else {    
                    a = a.rigth; 
                }
            } 
      }

  
  }
}

let bst = new BST();
bst.insert(11);
bst.insert(10);
bst.insert(12);
bst.insert(7);
bst.insert(56);


