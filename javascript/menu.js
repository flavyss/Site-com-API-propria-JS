window.onload = () => {

    const menu = () => {

        let acao = document.querySelector('.ativa');
        let acao2 = document.querySelector('.menu_mobile ul > h2');
        let menu = document.querySelector('.menu_mobile ul');        

        acao.addEventListener('click', () => { 
            
            if(menu.classList.contains("menu")){    
                    menu.classList.remove('menu')
            }

            else{
                menu.classList.add('menu')
            }
        })

        acao2.addEventListener('click', () => {
            menu.classList.remove('menu')
        })
    }

    menu()

}