const $mainExpand = window.document.querySelector('.main-expand');
const $mainExpandSubtitle = $mainExpand.querySelector('.subtitle');
const $mainCard = window.document.querySelector('.main-card');


$mainExpand.addEventListener('click', function () {
  if ($mainCard.classList.contains('-isActive')) {
    $mainCard.classList.remove('-isActive');
    $mainExpandSubtitle.textContent = "Ver grande"
  } else {
    $mainCard.classList.add('-isActive');
    $mainExpandSubtitle.textContent = "Ver pequeno";
  }
});





