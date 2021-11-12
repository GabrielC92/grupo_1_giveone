const formSearch = document.getElementById('form-search');
const search = document.getElementById('search');

window.addEventListener('load', () => {
    console.log("search.js success!");
    formSearch.addEventListener('submit', e => {
        e.preventDefault();
        let errorSearch = false;
        if (!search.value) {
            errorSearch = true;
        }
        if (search.value.trim().length < 3) {
            errorSearch = true;
        }
        if (!errorSearch) {
            formSearch.submit()
        }
    })
})