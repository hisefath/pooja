console.log("hey im working");

// Particles by Zed Dash https://codepen.io/z-/pen/bpxgWZ
const initparticles = () => leaves();

const rnd = (m, n) => {
    return Math.floor(Math.random() * (parseInt(n) - parseInt(m) + 1)) + parseInt(m);
}

const leaves = () => {
    $('.tree').each(function() {
        let count = ($(this).width() / 20) * 5;
        for (let i = 0; i <= count; i++) {
            let size = (rnd(60, 120) / 10);
            $(this).append(`<span class="particle" style="left:${rnd(-70, 70)}px;width:${size}px;height:${size}px;animation-delay:${(rnd(0, 30) / 10)}s;"></span>`);
        }
    });
}

$(document).ready(function() {
    // we call the function
    initparticles();
});