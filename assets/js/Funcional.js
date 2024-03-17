
const image = document.getElementById('main-banner');

const $ = document.getElementById.bind(document);
/* Atribuindo document.getElementById.bind(document) na variavel $  se torna possivel deixar o codigo mais limpo usando apenas $  */

function Jogo1() {
    
    //mudança de banner
    var str1 = "url('./assets/img/horizonchase_banner.png')";
    $("main-banner").style.backgroundImage = str1;
    $("Jogo1").className = "card-banner active";
    $("Jogo2").className = "card-banner";
    $("Jogo3").className = "card-banner";
    $("Jogo4").className = "card-banner";

    //detalhes
    genero = $("genero");
    genero.innerHTML = "CORRIDA";
    titulo = $("titulo");
    descricao = $("descricao");
    descricao.innerHTML = "Emocionante jogo de corrida arcade, inspirado nos jogos de corrida clássicos superdivertidos e diretos dos anos 90.";

    //preços
    precoold = $("preco-old");
    precoold.innerHTML = "49,90";
    preco = $("preco");
    preco.innerHTML = "25,90";

    //botão 
    linkbutton = $("linkbutton");
    $("linkbutton").href="horizon-chase.html"; 


  };

function Jogo2() {

    var str1 = "url('./assets/img/kaze_banner.png')"
    $("main-banner").style.backgroundImage = str1
    $("Jogo1").className = "card-banner";
    $("Jogo2").className = "card-banner active";
    $("Jogo3").className = "card-banner";
    $("Jogo4").className = "card-banner";

    genero = $("genero");
    genero.innerHTML = "AVENTURA";
    titulo = $("titulo");
    titulo.innerHTML = "Kaze and the Wild Masks";
    descricao = $("descricao");
    descricao.innerHTML = "DESCRIÇÃO KAZE DESCRIÇÃO KAZE DESCRIÇÃO KAZE DESCRIÇÃO KAZE DESCRIÇÃO KAZE ";

    precoold = $("preco-old");
    precoold.innerHTML = "69,90";
    preco = $("preco");
    preco.innerHTML = "40,00";

    linkbutton = $("linkbutton");
    $("linkbutton").href="#"; 
    
  };

function Jogo3(){
    var str1 = "url('./assets/img/dandy_banner.png')"
    $("main-banner").style.backgroundImage = str1
    $("Jogo1").className = "card-banner";
    $("Jogo2").className = "card-banner";
    $("Jogo3").className = "card-banner active";
    $("Jogo4").className = "card-banner";

    genero = $("genero");
    genero.innerHTML = "AVENTURA";
    titulo = $("titulo");
    titulo.innerHTML = "Dandy Ace";
    descricao = $("descricao");
    descricao.innerHTML = "DESCRIÇÃO DANDY ACE DESCRIÇÃO DANDY ACE DESCRIÇÃO DANDY ACE DESCRIÇÃO DANDY ACE DESCRIÇÃO DANDY ACE";
    
    precoold = $("preco-old");
    precoold.innerHTML = "34,00";
    preco = $("preco");
    preco.innerHTML = "5,90";

    linkbutton = $("linkbutton");
    $("linkbutton").href="#"; 
  };

function Jogo4() {
    var str1 = "url('./assets/img/dodgeball_banner.png')"
    $("main-banner").style.backgroundImage = str1
    $("Jogo1").className = "card-banner";
    $("Jogo2").className = "card-banner";
    $("Jogo3").className = "card-banner";
    $("Jogo4").className = "card-banner active";

    genero = $("genero");
    genero.innerHTML = "AÇÃO";
    titulo = $("titulo");
    titulo.innerHTML = "Dodgeball Academia";
    descricao = $("descricao");
    descricao.innerHTML = "DODGEBALL DESCRIÇÃO DODGEBALL DESCRIÇÃO DODGEBALL DESCRIÇÃO DODGEBALL DESCRIÇÃO DODGEBALL DESCRIÇÃODODGEBALL DESCRIÇÃO";
    
    precoold = $("preco-old");
    precoold.innerHTML = "120,00";
    preco = $("preco");
    preco.innerHTML = "80,90";

    linkbutton = $("linkbutton");
    $("linkbutton").href="#"; 
  };


