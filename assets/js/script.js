document.getElementById('loadMoreBtn').addEventListener('click', function () {
  const extraRow = document.getElementById('extraRow');
  extraRow.classList.remove('d-none');
  this.style.display = 'none'; // Hide the button after clicking
});

