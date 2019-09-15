//$(':submit').on('click', function() {
    //when text is submitted then add it to the list//
    


$('.shopping-item-toggle').on('click', function () {
   $('.shopping-item').addClass('.shopping-item__checked');
}
)

$('.shopping-item-delete').on('click', function() {
    $('shopping-item').remove();
    return ('The delete button ran!');
}
)