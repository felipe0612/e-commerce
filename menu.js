// Função JS para toggle menu 
  
  // Obtém a referência do elemento com o ID "MenuItems"
  var MenuItems = document.getElementById("MenuItems");

  // Define a altura máxima do estilo do elemento MenuItems como "0px"
  MenuItems.style.maxHeight = "0px";

  // Define uma função chamada menutoggle
  function menutoggle() {
    // Verifica se a altura máxima do estilo do elemento MenuItems é "0px"
    if (MenuItems.style.maxHeight == "0px") {
      // Se for "0px", define a altura máxima do estilo do elemento MenuItems como "200px"
      MenuItems.style.maxHeight = "200px";
    } else {
      // Caso contrário, se não for "0px", define a altura máxima do estilo do elemento MenuItems como "0px"
      MenuItems.style.maxHeight = "0px";
    }
  }

// ________________________________________________________________________________________________________________
//   JS para toggle Form (Troca no formulário)

      // Obtém a referência do elemento com o ID "LoginForm"
      var LoginForm = document.getElementById("LoginForm");

      // Obtém a referência do elemento com o ID "RegForm"
      var RegForm = document.getElementById("RegForm");

      // Obtém a referência do elemento com o ID "Indicator"
      var Indicator = document.getElementById("Indicator");

      // Define uma função chamada register
      function register() {
        // Define a propriedade transform do estilo do elemento RegForm como "translateX(0px)"
        RegForm.style.transform = "translateX(0px)";

        // Define a propriedade transform do estilo do elemento LoginForm como "translateX(0px)"
        LoginForm.style.transform = "translateX(0px)";

        // Define a propriedade transform do estilo do elemento Indicator como "translateX(100px)"
        Indicator.style.transform = "translateX(100px)";
      }

      // Define uma função chamada login
      function login() {
        // Define a propriedade transform do estilo do elemento RegForm como "translateX(300px)"
        RegForm.style.transform = "translateX(300px)";

        // Define a propriedade transform do estilo do elemento LoginForm como "translateX(300px)"
        LoginForm.style.transform = "translateX(300px)";

        // Define a propriedade transform do estilo do elemento Indicator como "translateX(0px)"
        Indicator.style.transform = "translateX(0px)";
      }

// ________________________________________________________________________________________________________________
//   JS para Galeria de Produtos (Troca as imagens quando se clica Página: Produtos-detalhes)
  
      // Obtém a referência do elemento com o ID "ProductImg"
      var ProductImg = document.getElementById("ProductImg");

      // Obtém uma coleção de elementos com a classe "SmallImg"
      var SmallImg = document.getElementsByClassName("SmallImg");

      // Define um manipulador de eventos para o clique no primeiro elemento da coleção SmallImg
      SmallImg[0].onclick = function() {
        // Define a imagem de origem (src) do elemento ProductImg como a imagem de origem (src) do primeiro elemento da coleção SmallImg
        ProductImg.src = SmallImg[0].src;
      }

      // Define um manipulador de eventos para o clique no segundo elemento da coleção SmallImg
      SmallImg[1].onclick = function() {
        // Define a imagem de origem (src) do elemento ProductImg como a imagem de origem (src) do segundo elemento da coleção SmallImg
        ProductImg.src = SmallImg[1].src;
      }

      // Define um manipulador de eventos para o clique no terceiro elemento da coleção SmallImg
      SmallImg[2].onclick = function() {
        // Define a imagem de origem (src) do elemento ProductImg como a imagem de origem (src) do terceiro elemento da coleção SmallImg
        ProductImg.src = SmallImg[2].src;
      }

      // Define um manipulador de eventos para o clique no quarto elemento da coleção SmallImg
      SmallImg[3].onclick = function() {
        // Define a imagem de origem (src) do elemento ProductImg como a imagem de origem (src) do quarto elemento da coleção SmallImg
        ProductImg.src = SmallImg[3].src;
      }