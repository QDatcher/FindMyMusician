//Getting necessary elements from the HTML to the JS
var username = document.getElementById("username");
var accountInfo = document.getElementById("accountInfo");

//TODO: get the database information and query the correct account information (username) (location,bio,links) then append
//Referencing most recent student mini project 

const accountHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const first_Name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const bio = document.querySelector('#bio').value.trim()

}