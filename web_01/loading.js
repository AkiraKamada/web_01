const loading = document.querySelector('.loading');

window.addEventListener('load', () => {
    setTimeout(function() {
        loading.classList.add('loaded');
    }, 1500);
});

document.getElementById('story').addEventListener('mouseover', function() {
    const sp = document.getElementById('story');
    sp.classList.add('story1');
});