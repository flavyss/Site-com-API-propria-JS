window.onload = () => {

    //Setando a função para mostrar os carros de acordo com o digitado no search
    const chamaCar = () => {

        //separando as variveis necessarias
        let carro = document.querySelector('.carro')
        let searchh = document.querySelector("input[name=busca]")
        let form = document.querySelector("form")
        
        form.addEventListener('submit', (e) => {
            let searchval = searchh.value.toUpperCase().replace(/ /g, "")

            if(searchval in tabela){
                carro.innerHTML = `

                <div class="container">
                
                    <h1>`+ tabela[searchval].Nome +` <span class="fecha"><i class="fa-solid fa-xmark"></i></span></h1>

                    <img src="`+ tabela[searchval].foto +`">
            
                    <p><span class="l">Lugares:</span> <span class="r">`+ tabela[searchval].Lugares +`</span></p>
                    <p><span class="l">Maleiro:</span> <span class="r"> `+ tabela[searchval].Maleiro + `</span></p>
                    <p><span class="l">Cambio:</span> <span class="r">` + tabela[searchval].Cambio+ `</span></p>
                    <p><span class="l">Quilometragem:</span> <span class="r">`+ tabela[searchval].Quilometragem +`</span></p>
                    <p><span class="l">Direção:</span> <span class="r">`+ tabela[searchval].Direção +`</span></p>
                    <p><span class="l">Travas:</span> <span class="r">`+ tabela[searchval].Travas +`</span></p>
                    <p><span class="l">Ar-condicionado:</span> <span class="r">`+ tabela[searchval].Arcondicionado +`</span></p>
                    <p><span class="l">Multimidia:</span> <span class="r">`+ tabela[searchval].Multimidia +`</span></p>
                    <p><span class="l">Radio:</span> <span class="r">`+ tabela[searchval].Radio +`</span></p>
                    <p><span class="l">Marca:</span> <span class="r">`+ tabela[searchval].marca +`</span></p>
                    <p><span class="l">Valor:</span> <span class="r">`+ tabela[searchval].Valor +`</span></p>

                    <button value='`+ tabela[searchval].Nome +`'>
                        <a href="carroPresent.html">Comprar</a>
                    </button>

                </container>

                `
            }

            else{
                carro.innerHTML = '<h1>Lamento, carro não encontrado tente outro carro ou verifique a escrita</h1>'
                e.preventDefault()
            }

            let fecha = document.querySelector(".fecha")

            fecha.addEventListener("click", () => {
                document.location.reload(true);
            })

            e.preventDefault()
        })
    }

    chamaCar()


    //setando função para validar os carros do banner que estão na home

    const valida = () => {

        let car = document.querySelectorAll('.carros-wraper a')

        car.forEach((item, index) => {

            let find = car[index].className

            car[index].addEventListener("click", (e) => {
                console.log(tabela[find].Nome + ' ' + tabela[find].Lugares +' '+ tabela[find].Maleiro)
                
                e.preventDefault()
            })
        })
    }

    valida()


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