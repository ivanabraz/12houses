const {API_HOST, API_KEY,} = process.env;

// YESTERDAY
export let aztroApiYesterday = {
    "async": true,
    "crossDomain": true,
    "method": "POST",
    "headers": {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST
    }
};

// TODAY
export let aztroApiToday = {
    "async": true,
    "crossDomain": true,
    "method": "POST",
    "headers": {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST
    }
};

// TOMORROW
export let aztroApiTomorrow = {
    "async": true,
    "crossDomain": true,
    "method": "POST",
    "headers": {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST
    }
};