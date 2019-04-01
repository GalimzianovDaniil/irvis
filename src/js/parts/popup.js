export function popup() {
    const links      = document.getElementsByClassName('phone_link'),
          popupClose = document.querySelector('#close_popup'),
          popup      = document.querySelector('.popup');

    popup.addEventListener('click', function(event){
        if (event.target == popup || event.target == popupClose || event.target == popupClose.childNodes[0]){
            popup.style.display = 'none';
        }
    });
        
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(){
            popup.style.display = 'block';
        });
    }

    setTimeout(function(){
        popup.style.display = 'block';
    }, 60000);
}