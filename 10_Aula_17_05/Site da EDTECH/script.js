

function mudarFoto() {
    var novaFoto = "<img style='width: 484px; height: 234px;' src='banner02.png'><br></button><button type='button'onclick='mudarFoto3()'><</button><button type='button'onclick='mudarFoto2()'>></button>";
    document.getElementById("foto").innerHTML = novaFoto;
}

function mudarFoto2(){
    var novaFoto = "<img style='width: 484px; height: 234px;' src='banner03.png'><br><button type='button'onclick='mudarFoto()'><</button><button type='button'onclick='mudarFoto3()'>></button>";
    document.getElementById("foto").innerHTML = novaFoto;
}

function mudarFoto3(){
    var novaFoto = "<img style='width: 484px; height: 234px;' src='banner01.png'><br><button type='button'onclick='mudarFoto()'><</button><button type='button'onclick='mudarFoto()'>></button>";
    document.getElementById("foto").innerHTML = novaFoto;
}

function mudarTema(){
    var novoTema = "<link rel='stylesheet' href='style2.css'><button type='button'onclick='mudarTema3()'>Mudar tema</button>";
    document.getElementById("tema1").innerHTML = novoTema;
}

function mudarTema2(){
    var novoTema = "<link rel='stylesheet' href='style1.css'><button type='button'onclick='mudarTema()'>Mudar tema</button>";
    document.getElementById("tema1").innerHTML = novoTema;
}

function mudarTema3(){
    var novoTema = "<link rel='stylesheet' href='style3.css'><button type='button'onclick='mudarTema2()'>Mudar tema</button>";
    document.getElementById("tema1").innerHTML = novoTema;
}

function loginBox(){
    var novoLogin = "<ol style='padding:10px;'><h3>Login</h3><li>e-mail: <input placeholder='e-mail'type='email'size='10'></li><li style='padding-bottom: 10px;'>senha:<input type='password'placeholder='senha' size='10'></li><li class='butt2'><a href='#'>Esqueci minha senha</a></li><li class='butt2'><a href='#'>Criar Conta</a></li><li><button type='button'onclick='enviarLogin()'>enviar</button></li></ol>";
    document.getElementById("login").innerHTML = novoLogin;

}

function enviarLogin(){
    var novoLogin = " ";
    document.getElementById("login").innerHTML = novoLogin;
}