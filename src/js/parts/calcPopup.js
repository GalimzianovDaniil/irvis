export function calcPopup() {
    const calcBtns        = document.querySelectorAll('.popup_calc_btn'),
          popupClose      = document.querySelector('.popup_calc_close'),
          popup           = document.querySelector('.popup_calc');
    
    function calcTabs() {
        const balconsMini = document.querySelectorAll('.balcons_mini'),
              balconsBig  = document.querySelectorAll('.balcons_big'),
              nextCalc    = document.querySelector('.popup_calc_button');

        balconsMini.forEach(function(item, i){
            item.addEventListener('click', function(event){
                event.preventDefault();
                hideTabs();
                window.globalObj.balconType = i + 1;
                balconsBig[i].classList.add('show');
                balconsMini[i].classList.add('balcons_mini_active');
            });
        });

        nextCalc.addEventListener('click', function(){
            window.globalObj.width  = document.querySelector('#width').value;
            window.globalObj.height = document.querySelector('#height').value;
            popup.classList.remove('show');
            popup.classList.add('hidePopup');
            popupCalcEnd();
        });
        
        function popupCalcEnd() {
            const popup           = document.querySelector('.popup_calc_profile'),
                  popupClose      = document.querySelector('#popup-next_close'),
                  btnNext         = document.querySelector('.popup_calc_profile_button'),
                  typeGlassInput  = document.querySelector('#view_type'),
                  coldBtn         = document.querySelector('#checkbox_cold'),
                  warmBtn         = document.querySelector('#checkbox_warm');
            popup.classList.add('show');

            warmBtn.addEventListener('click', function(){
                coldBtn.checked = false;
            });

            coldBtn.addEventListener('click', function(){
                warmBtn.checked = false;
            });

            btnNext.addEventListener('click', function(){
                window.globalObj.typeGlass = typeGlassInput.value;
                window.globalObj.warmBtn   = warmBtn.checked;
                window.globalObj.coldBtn   = coldBtn.checked;
                popup.classList.remove('show');
                popupEnd();

                function popupEnd() {
                    const popup      = document.querySelector('.popup_calc_end'),
                          popupClose = document.querySelector('.popup_calc_end_close');
                    popup.classList.add('show');
                    
                    
                    popupClose.addEventListener('click', function(){
                        popup.classList.remove('show');
                        window.globalObj = {};
                    });
                }
            });

            popup.addEventListener('click', function(event){
                if (event.target == popupClose || event.target == popupClose.childNodes[0]){
                    popup.classList.remove('show');
                    popup.classList.add('hidePopup');
                    window.globalObj = {};
                }
            });
        }

        function hideTabs() {
            for (let i = 0; i < balconsBig.length; i++) {
                balconsBig[i].style.display = 'none';
                balconsBig[i].classList.remove('show');
                balconsMini[i].classList.remove('balcons_mini_active');
            }
        }
    }

    calcTabs();

    popup.addEventListener('click', function(event){
        if (event.target == popupClose || event.target == popupClose.childNodes[0]){
            popup.classList.remove('show');
            popup.classList.add('hidePopup');
            window.globalObj = {};
        }
    });

    calcBtns.forEach(function(item){
        item.addEventListener('click', function(){
            popup.classList.remove('hidePopup');
            popup.classList.add('show');
            window.globalObj = {};
        });
    });
}