window.onload = () => {

    const formlogin = () => {

        let form = document.querySelector('.loginForm')
        let boton = document.querySelectorAll('.boton')

        form.addEventListener('submit', (e) => {
            alert('Seja bem vindo, Obrigado por Preencher os campos, Quando o Backend Estiver Pronto ele Será Valido, Você Será Avisado')
        })

        boton.forEach((item,index) => {
            boton[index].addEventListener('click', () => {
                alert('esta função ainda está em desenvolvimento')
            })
        })
    }

    formlogin()
}
