export function zoomImg() {
    const imgsSrc = document.querySelectorAll('.zoom_img'),
          imgs    = document.querySelectorAll('.preview_img');

    imgs.forEach(function(item, i){
        item.addEventListener('click', function(event){
            let bigImg = document.createElement('img'),
                wrapImg = document.createElement('div');
            bigImg.setAttribute('src', imgsSrc[i].getAttribute('href'));
            bigImg.classList.add('big_photo');
            wrapImg.classList.add('wrap_img');
            wrapImg.appendChild(bigImg);
            document.body.appendChild(wrapImg);
            wrapImg.addEventListener('click', function(event){
                if (event.target != bigImg) {
                    wrapImg.removeChild(bigImg);
                    document.body.removeChild(wrapImg);
                }
            });
        });
    });
}