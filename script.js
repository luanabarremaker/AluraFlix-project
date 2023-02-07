var  listaFilmesFav  =  [
  "https://br.web.img3.acsta.net/pictures/16/11/21/15/29/457312.jpg" ,
  "https://img.elo7.com.br/product/zoom/2A1A4BF/big-poster-filme-joker-coringa-joaquin-phoenix-lo02-90x60-cm-poster.jpg" ,
  "https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg" ,
  "https://upload.wikimedia.org/wikipedia/pt/0/00/Iron_Man_poster.jpg" ,
  "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg" ,
  "https://br.web.img2.acsta.net/pictures/210/473/21047331_201310071632457.jpg" ,
  "https://br.web.img2.acsta.net/pictures/17/02/24/16/32/482058.jpg" ,
  "https://br.web.img2.acsta.net/medias/nmedia/18/92/21/86/20416349.jpg" ,
  "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg" ,
  "https://cdn.culturagenial.com/imagens/ilha-do-medo-cartaz-cke.jpg" ,
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/95/96/20122166.jpg"
] ;
var  listaNomes  =  [
  "Até o Último Homem" ,
  "Coringa" ,
  "O Batman - 2022" ,
  "Homem de Ferro - 2008" ,
  "Matrix - 1999" ,
  "Jogos Vorazes: Em Chamas" ,
  "Fragmentado" ,
  "O Lado Bom da Vida" ,
  "Interestelar" ,
  "Ilha do Medo" ,
  "Clube da Luta"
] ;
var  listaTrailers  =  [
  "https://youtu.be/4s4UCxCv_OE" ,
  "https://youtu.be/jfVTJm9NilA" ,
  "https://youtu.be/HJv4LQxbVEA" ,
  "https://youtu.be/xXAdp_KJ-0A" ,
  "https://youtu.be/2KnZac176Hs" ,
  "https://youtu.be/cKyrXQSsSl4" ,
  "https://youtu.be/7scx2clLzUM" ,
  "https://youtu.be/h2xb_rkbAU8" ,
  "https://youtu.be/2LqzF5WauAw" ,
  "https://youtu.be/y3dalJDGmt0" ,
  "https://youtu.be/Fs0-4NLSO2Y"
] ;

var  listaInicial  =  documento . getElementById ( "listaFilmes" ) ;
for  ( i  =  0 ;  i  <  listaFilmesFav . length ;  i ++ )  {
  listaInicial . innerHTML  +=  `<a href= " ${ listaTrailers [ i ] } " target="blank"><img src=" ${ listaFilmesFav [ i ] } "> ${ listaNomes [ i ] } </a>` ;
}

function  adicionarFilme ( )  {
  var  filmesFav  =  document . getElementById ( "filme" ) . valor ;
  var  nomeFilme  =  document . getElementById ( "nome" ) . valor ;
  var  trailerFilme  =  document . getElementById ( "trailer" ) . valor ;

  se  (
    filmesFav . endsWith ( "jpg" )  ||
    filmesFav . endsWith ( "jpeg" )  ||
    filmesFav . endsWith ( "png" )  ||
    filmesFav . terminaCom ( "svg" )
  )  {
    documento . getElementById ( "mensagemDeErro" ) . innerHTML  =  "" ;
    listaFilmesFav . push ( filmesFav ) ;
    listaNomes . push ( nomeFilme ) ;
    listaTrailers . push ( trailerFilme ) ;

    limpaCampos ( ) ;
    recargaFilmes ( ) ;
  }  senão  {
    documento . getElementById ( "mensagemDeErro" ) . HTML interno  =
      "Enderço de imagem inválido." ;
    limpaCampos ( ) ;
  }
}

função  recargaFilmes ( )  {
  var  elementoListaFilmes  =  document . getElementById ( "listaFilmes" ) ;
  elementoListaFilmes . innerHTML  =  "" ;
  for  ( i  =  0 ;  i  <  listaFilmesFav . length ;  i ++ )  {
    elementoListaFilmes . innerHTML  +=  `a href=" ${ listaTrailers [ i ] } " target="blank"><img src" ${ listaFilmesFav [ i ] } " "> ${ listaNomes [ i ] } </a>` ;
  }
}

function  limpaCampos ( )  {
  documento . getElementById ( "filme" ) . valor  =  "" ;
  documento . getElementById ( "nome" ) . valor  =  "" ;
  documento . getElementById ( "trailer" ) . valor  =  "" ;
}

function  removeFilme ( )  {
  var  nomeFilmes  =  document . getElementById ( "nome" ) . valor ;
  var  posição = listaNomes  . indexOf ( nomeFilmes ) ; 
  var  elementoListaFilmes  =  document . getElementById ( "listaFilmes" ) ;
  if  ( posição  ==  - 1 )  {
    alert ( "O filme não pôde ser encontrado." ) ;
  }  senão  {
    listaFilmesFav . sclice ( posição ,  1 ) ;
    listaNomes . fatia ( posição ,  1 ) ;
    listaTrailers . fatia ( posição ,  1 ) ;
    documento . getElementById ( "nome" ) . valor  =  "" ;

    elementoListaFilmes . innerHTML  =  "" ;
    for  ( i  =  0 ;  i  <  listaFilmesFav . length ;  i ++ )  {
      elementoListaFilmes . innerHTML  +=  `<a href=" ${ listaTrailers [ i ] } " target="blank"><img src=" ${ listaFilmesFav [ i ] } "> ${ listaNomes [ i ] } </a>` ;
    }
  }
}
