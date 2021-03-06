// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("ERROR!", err)
//     })

//Axios is a promise based HTTP client for the browser and Node.js. 
//Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
//It can be used in plain JavaScript or with a library such as Vue or React.


const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("ERROR!", e)
    }
}

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

const getDadJoke = async () => {
    try{
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/',config)
        return res.data.joke;
    } catch (e){
        return "NO JOKES AVAILABLE! SORRY :("
    }
}


button.addEventListener('click', addNewJoke)

// Advantages of using Axios over the native Fetch API include:

// Request and response interception
// Streamlined error handling
// Protection against XSRF
// Support for upload progress
// Response timeout
// The ability to cancel requests
// Support for older browsers
// Automatic JSON data transformation
