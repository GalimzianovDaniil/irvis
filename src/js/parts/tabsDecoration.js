export function tabsDecoration() {
    const tabsBtns     = document.querySelectorAll('.decoration_btns'),
          tabs         = document.querySelectorAll('.tabsDecoration');

    function hideTabs() {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
            tabs[i].classList.remove('show');
            tabsBtns[i].classList.remove('after_click');
        }
    }

    function showTab(i) {
        tabs[i].classList.add('show');
        tabsBtns[i].classList.add('after_click');
    }

    tabsBtns.forEach(function(item, i){
        item.addEventListener('click', function(){
            hideTabs();
            showTab(i);
        });
    }); 
}