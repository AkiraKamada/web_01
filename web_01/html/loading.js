window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}
document.getElementById('story').addEventListener('mouseover', function() {
    const sp = document.getElementById('story');
    sp.classList.add('story1');
});