/*
$('.shopping-item-toggle').on('click', function () {
   $('.shopping-item').addClass('shopping-item__checked');
}
)

$('.shopping-item-delete').on('click', function() {
    $('shopping-item').remove();
    return ('The delete button ran!');
}
)*/
function itemAdd() {
    $('#js-shopping-list-form').on('submit', function(e) {
       // when text is submitted then add it to the list//
        e.preventDefault();

        let item = $('#shopping-list-entry').val();

        let element = `<li>
                        <span class="shopping-item">${item}</span>
                        <div class="shopping-item-controls">
                        <button class="shopping-item-toggle">
                            <span class="button-label">check</span>
                        </button>
                        <button class="shopping-item-delete">
                            <span class="button-label">delete</span>
                        </button>
                        </div>
                    </li>`;

      $('.shopping-list').append(element);

      $('#shopping-list-entry').val("");

    });
}


function initialize() {
    itemAdd();
}

$(initialize);