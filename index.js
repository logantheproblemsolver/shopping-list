function itemAdd() {
    $('#js-shopping-list-form').on('submit', function (e) {
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


function checkButton() {
    $('.shopping-item-toggle').on('click', function (b) {
        b.preventDefault();
        $(this).parent().siblings('span').toggleClass("shopping-item__checked");
    });
}

function deleteButton() {
    $('.shopping-item-delete').on('click', function () {
        $(this).parent().parent().remove();
    });
}



function initialize() {
    itemAdd();
    checkButton();
    deleteButton();
}

$(initialize);