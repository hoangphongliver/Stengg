const Menu = {
    megaMenu: ()=>{
        var li = document.querySelectorAll('.drop-2 > li');
        for(let i=0 ; i < li.length ; i++){
            li[i].onmouseover = ()=>{
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                li[i].classList.add("active");
                li[i].classList.remove("active");
            }
        
        }
    },
    saveActive: ()=>{
        (function ($) {
            "use strict";
            $("ul.drop-2 > li").on("mouseenter", function() {	
                $(this).addClass("active");
                $(this).prevAll().removeClass("active");
                $(this).nextAll().removeClass("active");
            });
        })(jQuery);
    }
}
export default Menu;