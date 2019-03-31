export function tabsGlazzing() {
    const tabsBtns     = document.querySelectorAll('.glazing_block'),
          tabs         = document.querySelectorAll('.tabs');

    function hideTabs() {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
            tabs[i].classList.remove('show');
        }
    }

    function showTab(i) {
        tabs[i].classList.add('show');
        
    }

    tabsBtns.forEach(function(item, i){
        item.addEventListener('click', function(){
            hideTabs();
            showTab(i);
        });
    }); 
    
}