export function formsInit() {
    const forms = document.querySelectorAll('.form');
    
    for (let i = 0; i < forms.length; i++) {
        formInit(forms[i]);
    }

    function formInit(form) {
        const formInput = form.querySelectorAll('.form-control')[1];
        let   oldInput  = formInput.value,
              userDataObject = null;

        formInput.addEventListener('keyup', function(){
            if (/[\D]/.test(this.value)) {
                this.value = oldInput;
                oldInput = this.value;
            } else {
                oldInput = this.value;
            }
        });

        form.addEventListener('submit', function(event){
            const messageBlock = document.createElement('div');

            form.appendChild(messageBlock);
            event.preventDefault();


            if (form.classList.contains('form_with_obj')) {
                userDataObject = window.globalObj;
            } 

            sendData(form, userDataObject)
                .then(() => messageBlock.textContent = 'Спасибо!')
                .catch(() => messageBlock.textContent = 'Что-то пошло не так...');
        });
    }

    function sendData(form, userDataObject) {
        return new Promise(function(resolve, reject){
            let request  = new XMLHttpRequest(),
                formData = new FormData(form),
                formObj  = {};

            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            formData.forEach(function(value, key) {
                formObj[key] = value;
            });

            formObj.userData = userDataObject;

            console.log(formObj);

            window.globalObj = {};
            request.send(JSON.stringify(formObj));
            
            request.addEventListener('readystatechange', function(){
                if (request.status == 200) {
                    resolve();
                } else {
                    reject();
                }
            });

        });
        
    }
}