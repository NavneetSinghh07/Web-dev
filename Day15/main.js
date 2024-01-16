// Global scope
let globalVariable = 'I am global';

document.getElementById('clickButton').addEventListener('click', function() {
  // Function scope
  let localVariable = 'I am local';

  // Accessing variables from different scopes
  let result = `Global: ${globalVariable}, Local: ${localVariable}`;
  
  // Displaying the result
  document.getElementById('result').textContent = result;

  console.log(localVariable);
});
