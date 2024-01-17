document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelector('form');
    const photo = document.querySelector('.images');
    const searchInput = document.querySelector('.search');
    const key = 'pxzg1CziUJ63ABH6htWqFelJwSJzoiWOpqzHaIIjgYvgMsikGIyB3oJ2'

    forms.addEventListener('submit', function (e) {
        e.preventDefault();
        const search = searchInput.value.trim();
        searchPhotos(search)
        console.log(search);
    });

    async function searchPhotos(term) {
        photo.innerHTML = "";

        const link = `https://api.pexels.com/v1/search?query=${term}&per_page=20`

        const response = await fetch(link, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: key
            }
        })
        const data = await response.json();

        console.log(data.photos);
        data.photos.forEach(imageData => {
            const image = document.createElement('img');
            image.classList.add('jsphoto');
            image.src = imageData.src.large;
            photo.appendChild(image);
        });
    }
});
