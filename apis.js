let randomDog = async function fetchARandomDog(feed) {
    let response = await fetch(feed);
    let data = await response.json();
    console.log('-----')
    while(data[0].breeds[0]==undefined)
    {
        response = await fetch(feed);
        data = await response.json();
    }
    return data;
}

export { randomDog };