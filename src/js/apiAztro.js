require('dotenv').config();

// YESTERDAY
export let aztroApiYesterday = {
    "async": true,
    "crossDomain": true,
    "method": "POST",
    "headers": {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_HOST
    }
};

// TODAY
export let aztroApiToday = {
    "async": true,
    "crossDomain": true,
    "method": "POST",
    "headers": {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_HOST
    }
};

// TOMORROW
export let aztroApiTomorrow = {
    "async": true,
    "crossDomain": true,
    "method": "POST",
    "headers": {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_HOST
    }
};