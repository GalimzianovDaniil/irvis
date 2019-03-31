export function formsInit() {
    const forms = document.querySelectorAll('.form');
    
    for (let i = 0; i < forms.length; i++) {
        formInit(forms[i]);
    }

    function formInit(form) {
        const formInput = form.querySelectorAll('.form-control')[1],
              submitBtn = form.querySelector('button');
        let   oldInput  = formInput.value;

        formInput.addEventListener('keyup', function(event){
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

            sendData(form)
                .then(() => messageBlock.textContent = 'Спасибо!')
                .catch(() => messageBlock.textContent = 'Что-то пошло не так...');
        });
    }

    function sendData(form) {
        return new Promise(function(resolve, reject){
            let request  = new XMLHttpRequest(),
                formData = new FormData(form);

            console.log(formData);
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.send(formData);
            
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