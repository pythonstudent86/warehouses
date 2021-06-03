const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', event => {
  localStorage.clear();
  document.location.reload();
});
