document.getElementById('one').addEventListener('click', function() {
    document.getElementById('section2').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('two').addEventListener('click', function() {
    document.getElementById('section3').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('three').addEventListener('click', function() {
    document.getElementById('section1').scrollIntoView({
        behavior: 'smooth'
    });
});

