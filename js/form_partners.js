const scriptURL = 'https://script.google.com/macros/s/AKfycbwob2SMJ39PQzCeR6a5RTSXplSjRMT09qidgvINhuL-zTe6EvxQyX7Dn3P1JvN7ME_7/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML=""
                },2000)
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });