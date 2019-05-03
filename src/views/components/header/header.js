const Header = {
    showButton: ()=>{
        var btn = document.querySelector('.nav-mobile-icon');
        btn.onclick = ()=>{
            btn.classList.toggle('rotate-menu');
        }
    }
}
export default Header;