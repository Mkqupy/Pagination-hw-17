const apiKey = '44054282-6cdd109fd9f30672a8d996ede';
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.getElementById('loadMore');
let page = 1;

function fetchImages(page) {
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=editor%27s%20choice&image_type=photo&page=${page}&per_page=20`)
        .then(response => response.json())
        .then(data => {
            data.hits.forEach(hit => {
                const img = document.createElement('img');
                img.src = hit.webformatURL;
                gallery.appendChild(img);
            });
        });
}

fetchImages(page);

loadMoreButton.addEventListener('click', () => {
    page++;
    fetchImages(page);
});
