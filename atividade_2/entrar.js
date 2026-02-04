

function login() //função que verifica se deve logar ou não
{

    var nome = document.getElementById("nome").value;
    // pega oque tá escrito em nome.

    var senha = document.getElementById("senha").value;
    // pega oque tá escrito em senha


    if (nome != "gustavo" && senha != "123") // se os dois forem errados
    {
        document.getElementById("nome").value = ""
        document.getElementById("senha").value = ""
        // apaga oque ta escrito

        window.alert("nome e senha incorretos!!") // aviso 3
    }
        else
    {

        if (nome == "gustavo") // verifica se o nome ta correto
        {
            if (senha == '123') // verifica se a senha ta correta
            {
                window.location.href = "pg2.html" // faz o login
            }
            else // se a senha tiver errada
            {
                document.getElementById("nome").value = ""
                document.getElementById("senha").value = ""
                // apaga oque ta escrito

                window.alert("senha incorreta!!") // alerta erro 1
            }
        }
        else
        {
            document.getElementById("nome").value = ""
            document.getElementById("senha").value = ""
            // apaga oque ta escrito

            window.alert("nome incorreto!!") // alerta erro 2
        }
    }
}
