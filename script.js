const one = document.getElementById("one");
one.addEventListener('click', function() {
    const body = document.querySelector('body');
    const toggle = document.getElementById('circle');
    body.classList.remove('active1');
    body.classList.remove('active2');
    toggle.style.left = '0px';
});

const two = document.getElementById("two");
two.addEventListener('click', function() {
    const body = document.querySelector('body');
    const toggle = document.getElementById('circle');
    body.classList.add('active1');
    body.classList.remove('active2');
    toggle.style.left = '25px';
});

const three = document.getElementById("three");
three.addEventListener('click', function() {
    const body = document.querySelector('body');
    const toggle = document.getElementById('circle');
    body.classList.add('active2');
    body.classList.remove('active1');
    toggle.style.left = '51px';
});

function del() {
    const value = document.getElementById('screen').value;
    document.getElementById('screen').value = value.substr(0, value.length-1);
};