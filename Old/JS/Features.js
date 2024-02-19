fetch('https://raw.githubusercontent.com/HttpAnimation/FYC-Rewrite-V2/main/Features.md')
.then(response => response.text())
.then(data => {
  document.querySelector('md-block').innerHTML = data;
})
.catch(error => console.error('Erorr getting the mark down file:', error));