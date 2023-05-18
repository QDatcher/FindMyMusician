//Getting necessary elements from the HTML to the JS
var username = document.getElementById("username");
var accountInfo = document.getElementById("accountInfo");

//Event Handler to get to homepage from the account page
const homePageHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const text_content = document.querySelector('#text_content').value.trim();
    const tag = document.querySelector('#tag').value.trim();

    if(title && text_content && tag){
        //Send a GET request to the API for post data
        const response = fetch ('/models/Posts', {
            method: "POST",
            body: JSON.stringify({title, text_content, tag}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if(response.ok){
            document.location.replace('/index');
        }else{
            alert((await response).statusText);
        }
    }
} 