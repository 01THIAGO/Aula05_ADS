$(document).ready(
    function(){
        alert("Página carregou");
    }
);

$('#bt_inicio').click(
    function(){
        alert("Você clicou no início");
    }
);

$('#bt_sobre').click(
    function(){
        $('#corpo').load("paginas/index.html");
    }
);

$('#bt_cadastro').click(
    function(){
        $('#corpo').load("paginas/index.html");
    }
);