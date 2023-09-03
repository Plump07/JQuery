$(document).ready(function() {

    $(".btn-success").click(function(){
        $('h1').html("Ciências da natureza");
        $('article p').html("Em Química, ligações, modelos e estruturas atômicas, propriedades periódicas. Em Física, estudamos termologia, dilatação, calorimetria, gases ideais e movimento. Em Biologia, estudamos organização celular, ecologia e suas relações, ODS da ONU e transformações energéticas.");
      });

    $(".btn-primary").click(function(){
        $('h1').html("Ciências Humanas");
        $('article p').html("Estudamos teorias das necessidades, sistema capitalista,  meio técnico-científico-informacional, revolução industrial, obsolescência, ODS e produção e consumo.");
      });

    $(".btn-danger").click(function(){
        $('h1').html("Matemática");
        $('article p').html("Estudamos funções, equações, métodos de resolução, propriedades, logaritmos e geogebra.");
      });

    $(".btn-secondary").click(function(){
        $('h1').html("Linguagens");
        $('article p').html("Em Português, estudamos literatura, mitos e preconceitos linguísticos, tipologia, gêneros, entrevista, notícia, crônica e uso dos porquês. Em Inglês, pronomes, pronomes objetivos, possessivos, palavras comuns nas linguagens HTML e CSS e tecnologia da comunicação e informação. Educação Física, estudamos ginástica, dança, brincadeira e esportes.");
      });

    $(".btn-info").click(function(){
      $('h1').html("PV");
      $('article p').html("Estudamos soft skills, CHAve, currículos, técnicas de estudo e cronogramas.");
      });
    
    $(".btn-dark").click(function(){
      $('h1').html("PP");
      $('article p').html("Estudamos memorando, bilhete e carta, currículos, empregos e entrevista, aplicativos office, aplicativos de organização, abertura de empresas.");
      });

    $(".btn-warning").click(function(){
        $('h1').html("Técnico Profissional");
        $('article p').html("Estudamos a história da computação, navegadores, VSCode, HTML, CSS, tabelas, pseudo-classes e pseudo-elementos, repositórios, formulários e frameworks, Javascript, JQuery.");
    });
})