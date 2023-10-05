// const URL_BASE = 'https://miniback-books-app.onrender.com/';
const URL_BASE = 'http://localhost:3000/';

const endpoints = {
    library: `${URL_BASE}library`,
    users: `${URL_BASE}users`,
    user: (email, password)=>`${URL_BASE}users?email=${email}&&password=${password}`

}

export default endpoints;