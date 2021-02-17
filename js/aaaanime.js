var logoSt0 = document.querySelectorAll( "#logo_01 .st0")
// console.log(logoSt0);
for (var i = 0; i < logoSt0.length; i++) {
    logoSt0[i].addEventListener('mouseover',function (e) {
        e.preventDefault();
        for (var j = 0; j < logoSt0.length; j++) {
            logoSt0[j].classList.add('overStroke');
        }
    });
    logoSt0[i].addEventListener('mouseout', function (e) {
        e.preventDefault();
        for (var j = 0; j < logoSt0.length; j++) {
            logoSt0[j].classList.remove('overStroke');
        }
    })
}

// var logoAnime = function(){
    anime({
            targets:"#logo_01 .st0",
            duration: 4000,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeOutBounce',
            delay: function(el, i) { return i * 250 },
            direction: 'letterTime',
            // loop: true
        });
    
// }
// var path1 = document.querySelector('.st1');
// var path2 = document.querySelector('.st2');
// var path3 = document.querySelector('.st3');
// var path4 = document.querySelector('.st4');
// var path5 = document.querySelector('.st5');
// console.log(path1.getTotalLength(),path2.getTotalLength(),path3.getTotalLength(),path4.getTotalLength(),path5.getTotalLength());