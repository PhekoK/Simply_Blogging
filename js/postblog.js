var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }
        resetForm();
    }
}

function validate() {
    isValid = true;
    if(document.getElementById('selBlogTitle').value == '' && document.getElementById('selBlogContent').value == ''){
        isValid = false;
        document.getElementById('ValidationError').classList.remove('hide');
    } else{
        if(!document.getElementById('ValidationError').classList.contains('hide')) {
            document.getElementById('ValidationError').classList.add('hide')
        }
    }
    return isValid;
}

function submitBlogPost(data){
    var table = document.getElementById('post_id').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.selBlogTitle;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.selCategory;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.selPhoto;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.selDate;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.selBlogContent;
    cell6 = newRow.insertCell(5)
    cell6.innerHTML = `<a class="btn btn-sm btn-secondary" onClick="onDelete(this)">Delete</a>
    <a class="btn btn-sm btn-secondary" onClick="onEdit(this)">Edit</a>`;
    resetForm();

}

function onEdit(row) {
    selectedRow = row.parentElement.parentElement;
    document.getElementById('selBlogTitle').value = selectedRow.cells[0].innerHTML;
    document.getElementById('selCategory').value = selectedRow.cells[1].innerHTML;
    document.getElementById('selPhoto').value = selectedRow.cells[2].innerHTML;
    document.getElementById('selDate').value = selectedRow.cells[3].innerHTML;
    document.getElementById('selBlogContent').value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.selBlogTitle;
    selectedRow.cells[1].innerHTML = formData.selCategory;
    selectedRow.cells[2].innerHTML = formData.selPhoto;
    selectedRow.cells[3].innerHTML = formData.selDate;
    selectedRow.cells[4].innerHTML = formData.selBlogContent;

}

function onDelete(row) {
    if (confirm('Are you sure to delete this record? ')) {
        var currentRow = row.parentElement.parentElement;
        document.getElementById('post_id').deleteRow(currentRow.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById('selBlogTitle').value = "";
    document.getElementById('selCategory').value = "";
    document.getElementById('selPhoto').value = "";
    document.getElementById('selDate').value = "";
    document.getElementById('selBlogContent').value = "";
    selectedRow = null;
}

function readFormData() {
    var formData = {};
    formData["selBlogTitle"] = document.getElementById('selBlogTitle').value;
    formData["selCategory"] = document.getElementById('selCategory').value;
    formData["selPhoto"] = document.getElementById('selPhoto').value;
    formData["selDate"] = document.getElementById('selDate').value;
    formData['selBlogContent'] = document.getElementById('selBlogContent').value;
    return formData;
}

