const Header = {
    showButton: ()=>{
        var btn = document.querySelector('.nav-mobile-icon');
        var showMenu = document.querySelector('.nav-mobile');
        var li = document.querySelectorAll('.nav-mobile > ul > li');
        var next = document.querySelectorAll('li .next');
        var menu_lv2 = document.querySelectorAll('.menu-mobile-lv2');
        var prev = document.querySelectorAll('.go-back > .fa-arrow-left');
        var btn_next = document.querySelector('.btn-next > .fa-arrow-right');
        var wrap =document.querySelector('.wrap');
        console.log(next);
        
        btn.onclick = ()=>{
            btn.classList.toggle('rotate-menu');
            showMenu.classList.toggle('show-up');
            wrap.classList.toggle('wrapOverlay');
        }
        wrap.onclick = ()=>{
            btn.classList.remove('rotate-menu');
            showMenu.classList.remove('show-up');
            wrap.classList.remove('wrapOverlay');
        }
        for(let i=0 ; i< next.length ; i++){
            next[i].onclick = ()=>{
                menu_lv2[i].classList.toggle('show-menu-lv2');
            }
            prev[i].onclick = ()=>{
                menu_lv2[i].classList.remove('show-menu-lv2');
                menu_lv2[i].classList.toggle('hide-menu-lv2');
            }
        }
        btn_next.onclick = () =>{
            showMenu.classList.toggle('hide-menu');
            wrap.classList.remove('wrapOverlay');
            btn.classList.remove('rotate-menu');
        }
    //    for(let i=0 ; i<li.length ; i++){
    //     li[i].onclick =() =>{
    //         menu_lv2.style.width = '310px';
    //         menu_lv2.style.transition = '.4s';
    //     }
    //    }
    }
}
export default Header;