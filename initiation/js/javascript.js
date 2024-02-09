window.addEventListener('DOMContentLoaded', function (){
    let btnAnime = document.querySelector('#anime');
    let pixelChat = document.querySelector('#chat');
    let avanClic = 'Anime le chat';
    let apreClic = 'Arrête le chat';
    btnAnime.addEventListener('click', function (element) {
        if(pixelChat.classList.contains('pixelanime')){
            pixelChat.classList.remove('pixelanime');
            btnAnime.innerText = avanClic;
        }else{
            pixelChat.classList.add('pixelanime');
            btnAnime.innerText = apreClic;
        }
        /*console.log(el);*/
    })
    /*console.log(btnAnime);
    console.log(btnAnime.classList);*/
})