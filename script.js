$(document).ready(onReady);

function onReady() {
    console.log('so ready! 🎈');

$(document).on('click', '#submit-employee-btn', onSubmit);
$(document).on('click', '.delete-btn', onDelete);

}

let Employees = [];

function onSubmit() {
    
    console.log('in onSubmit')
    $('#employee-table').append(`
        <tr>
            <td>${$('#first-name').val()}</td>
            <td>${$('#last-name').val()}</td>
            <td>${$('#employee-id').val()}</td>
            <td>${$('#annual-salary').val()}</td>
            <td>
                <button class="delete-btn">
                    Delete
                </button>
            </td>
        </tr>  
    `);

    let employee = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        emplID: $('#employee-id').val(),
        annualSalary: $('#annual-salary').val()
    }
    Employees.push(employee);

    $('#first-name').val(''), $('#last-name').val(''), $('#employee-id').val(''), $('#annual-salary').val('');
}// end onSubmit


function calculateMonthlyCost() {
    let annualCost =0;
    for (let empl of employees) {
        annualCost += empl.annualSalary;
    }
}


function onDelete() {
    console.log('in onDelete')
    $(this).parent().parent().empty();

}// end onDelete
