const url = 'https://coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com/?id=lF-jPBnZ098';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ecaea926fbmshb52c382046f917ap1d97bajsna64fcdf773a6',
        'X-RapidAPI-Host': 'coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com'
    }
};
async function video() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

video()