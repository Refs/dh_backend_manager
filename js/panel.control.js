var selectedLiStore = [];

// var textString = '';

$(document).click(function (event) {
    if ( ! $('.filterPanel').hasClass('hide')) {
        $('.filterPanel').addClass('hide');
    }  
})

$('#inputControlPanel').click(
    function(event) {
        $('.filterPanel').toggleClass('hide');
        event.stopPropagation(); 
    }
)

$('.ulWrap').on('click','li',(event)=>{
    
    var selectedLi$ = $(event.currentTarget);
    selectedLi$.toggleClass('li-selected');
    iterator(); 
    $('#inputControlPanel').val('');
    $('#inputControlPanel').val(generatorInputText());
    event.stopPropagation(); 
})


//  when li's state change, triger the iterator function , then push the li which have class `li-selected` into a Array;

function iterator() {
    selectedLiStore =[];
    $('.ulWrap li').each(
        function (index) {
            if ($(this).hasClass('li-selected')) {
                // alert(111);
               selectedLiStore.push($(this));
            }  
        }
    )
}


function generatorInputText () {
    var textString = '';
    $.each(selectedLiStore, function(index, value) {
        textString += value.text() + '#'
    })
    return textString;
}



