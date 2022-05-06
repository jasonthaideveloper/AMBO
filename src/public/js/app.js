let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let footer = document.querySelector("footer");
let content = document.querySelector(".content");
const tgmenu = document.getElementById('tgmenu');
const user = document.getElementById('user');

document.onclick = function (e) {
    if (e.target.id !== 'tgmenu') {
        user.classList.remove('active');
    }
}

tgmenu.onclick = function () {
    user.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function (event) {
    $(document).ready(function () {
        $('#customer-table').DataTable();
        
    });

    $('#customer-table').dataTable({
        "scrollY": "1000px",
        "scrollCollapse": true,
        "paging": true
    });
})