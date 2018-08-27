let $bullet = document.querySelectorAll('.bullet');
let $bulletIsActive = document.querySelector('.bullet.-isActive');
let $cardIsActive = document.querySelector('.card.-isActive');


/*for(let index = 0;  index < $bullet.length; index++) {
  $bullet[index].addEventListener('click', function () {
    $bulletIsActive.classList.remove('-isActive');
    this.classList.add('-isActive');
    $bulletIsActive = this;
  });
}*/

console.log($cardIsActive);

$bullet.forEach(function(item) {
  item.addEventListener('click', function () {
    $bulletIsActive.classList.remove('-isActive');
    this.classList.add('-isActive');
    $bulletIsActive = this;

    $cardIsActive.classList.remove('-isActive');
    let $idCard = this.querySelector('a').getAttribute('href');
    let $targetCard = document.querySelector($idCard);
    $targetCard.classList.add('-isActive');
    $cardIsActive = $targetCard;
  });
});



