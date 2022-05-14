$(document).ready(onReady);

function onReady() {
    console.log('so ready! 🎈');

$(document).on('click', '#submit-employee-btn', onSubmit);
$(document).on('click', '.delete-btn', onDelete);

}//end onReady

let employees = [];
let rowNumber =0;
function onSubmit() {
    // VV checks for empty fields and alerts if any are missing
    if ($('#first-name').val(), $('#last-name').val(), $('#employee-id').val(), $('#annual-salary').val() === '' ) {
        alert('Please fill out all required fields')
    }
    else {
        for ( let empl of employees ) {
            if ( empl.emplID === $('#employee-id').val()) {
                alert('That Employee ID is already in use');
                return;
            }
        }
    
        console.log('in onSubmit')
        $('#employee-table').append(`
            <tr class="row${rowNumber}">
                <td>${$('#first-name').val()}</td>
                <td>${$('#last-name').val()}</td>
                <td class="employee-id">${$('#employee-id').val()}</td>
                <td>${$('#employee-title').val()}</td>
                <td>$${Number($('#annual-salary').val()).toLocaleString('en')}</td>
                <td>
                    <button class="delete-btn">
                        Delete
                    </button>
                </td>
            </tr>  
        `);
        rowNumber ++;
            let employee = {
            firstName: $('#first-name').val(),
            lastName: $('#last-name').val(),
            emplID: $('#employee-id').val(),
            emplTitle: $('#employee-title').val(),
            annualSalary: $('#annual-salary').val()
    }
    employees.push(employee);

    $('#first-name').val(''), $('#last-name').val(''), $('#employee-id').val(''),$('#employee-title').val(''), $('#annual-salary').val('');
    $('#first-name').select(); //selects first name field for next entry
    }
   calculateMonthlyCost();
}// end onSubmit

let annualCost =0;

function calculateMonthlyCost() {
    annualCost = 0;
    for (let empl of employees) {
        annualCost += Number(empl.annualSalary);
    }
    monthlyCost = annualCost / 12;
    $('.totalCostBox').empty();
    $('.totalCostBox').append(`<h4>Total Monthly Cost: $${Number(monthlyCost).toLocaleString('en', { minimumFractionDigits: 2 })}</h4>`);
    return annualCost;
}// end calculateMonthlyCost

let itemToBeRemoved;
function onDelete() {
    console.log('in onDelete')
    itemToBeRemoved = $(this).val;
    $(this).parent().parent().empty();
    
    // for (let empl of employees) {
    //      if ( empl.)
    // }
    return itemToBeRemoved;
    calculateMonthlyCost();
}// end onDelete


// function updateRowColors() {
//     $('tr:even ')
// }