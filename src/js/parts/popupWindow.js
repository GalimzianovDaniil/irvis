export function popupWindow() {
    let   popup         = document.querySelector('.popup_engineer');
    const popupCloseBtn = document.querySelector('#close'),
          popupOpenBtn  = document.querySelector('.popup_engineer_btn');   

    popup.addEventListener('click', function(event){
        if (event.target == popup || event.target == popupCloseBtn || event.target == popupCloseBtn.childNodes[0]){
            popup.style.display = 'none';
        }
    });

    popupOpenBtn.addEventListener('click', function(){
        popup.style.display = 'block';
    });
}