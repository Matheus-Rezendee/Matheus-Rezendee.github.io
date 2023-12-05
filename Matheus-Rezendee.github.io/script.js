document.addEventListener('DOMContentLoaded', () =>{


   // Seleciona todos os links do menu
   const menuLinks = document.querySelectorAll('.wrapper ul li a');

   // Adiciona um evento de clique a cada link
   menuLinks.forEach(link => {
       link.addEventListener('click', () => {
           // Desmarca o checkbox (fecha o menu)
           document.getElementById('active').checked = false;
       });
   });

    new TypeIt('.nome', {
        speed: 100,
        loop: true,
    })
    .type('Mathe', { delay: 200})
    .type('<strong style="color: #415D43;">UX</strong>', { delay: 500})
    .delete(2)
    .type('<strong style="color: #415D43;">UI</strong>', { delay: 500})
    .delete(2)
    .type('us Rezende')
    .pause(3000)
    .go();
});


  function submitForm(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    alert(nome + ' ' + email + ' ' + mensagem);

}