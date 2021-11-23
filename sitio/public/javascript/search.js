const formSearch = document.getElementById('form-search');
const search = document.getElementById('search');

window.addEventListener('load', () => {
    console.log("search.js success!");
    formSearch.addEventListener('submit', e => {
        e.preventDefault();
        
        if (search.value.trim() !== "") {
            formSearch.submit();
        }
    })
})