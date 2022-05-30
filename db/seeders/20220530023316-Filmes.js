'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Filmes", [
      {
        nome: "Homem-Aranha: Sem Volta para Casa",
        sinopse: "Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as consequências da sua identidade como o herói mais querido do mundo após ter sido revelada pela reportagem do Clarim Diário, com uma gravação feita por Mysterio (Jake Gyllenhaal) no filme anterior. Incapaz de separar sua vida normal das aventuras de ser um super-herói, além de ter sua reputação arruinada por acharem que foi ele quem matou Mysterio e pondo em risco seus entes mais queridos, Parker pede ao Doutor Estranho (Benedict Cumberbatch) para que todos esqueçam sua verdadeira identidade. Entretanto, o feitiço não sai como planejado e a situação torna-se ainda mais perigosa quando vilões de outras versões de Homem-Aranha de outro universos acabam indo para seu mundo. Agora, Peter não só deter vilões de suas outras versões e fazer com que eles voltem para seu universo original, mas também aprender que, com grandes poderes vem grandes responsabilidades como herói.",
        nota: 5,
        imagemUrl: "https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg",
        imagem: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Vingadores: Guerra Infinita",
        sinopse: "Em Vingadores: Guerra Infinita, Thanos (Josh Brolin) enfim chega à Terra, disposto a reunir as Joias do Infinito. Para enfrentá-lo, os Vingadores precisam unir forças com os Guardiões da Galáxia, ao mesmo tempo em que lidam com desavenças entre alguns de seus integrantes.",
        nota: 4,
        imagemUrl: "https://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg",
        imagem: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Piratas do Caribe: A Vingança de Salazar",
        sinopse: "Em Piratas do Caribe: A Vingança de Salazar, o capitão Jack Sparrow (Johnny Depp) terá que lidar com o novo capitão Salazar (Javier Bardem) que lidera um exército de piratas fantasmas assassinos. Salazar está disposto a matar todos os piratas existentes na face da Terra e, para escapar, Sparrow precisa encontrar o Tridente de Poseidon, que dá ao seu dono o poder de controlar o mar.",
        nota: 4,
        imagemUrl: "https://br.web.img2.acsta.net/c_310_420/pictures/17/03/02/16/02/262397.jpg",
        imagem: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Soul",
        sinopse: "Em Soul, duas perguntas se destacam: Você já se perguntou de onde vêm sua paixão, seus sonhos e seus interesses? O que é que faz de você... Você? Joe Gardner é um professor de música do ensino médio que sempre sonhou em ser músico de jazz. Mas quando, finalmente, tem a chance de impressionar outros músicos durante um ensaio aberto, sofre um acidente que faz com que sua alma seja separada de seu corpo e transportada para um centro no qual as almas se desenvolvem e ganham paixões antes de serem enviadas para um recém-nascido. Joe deve trabalhar com 22, uma das almas em treinamento, que tem uma visão obscura da vida depois de ficar presa por anos no centro evitando seguir para a Terra.",
        nota: 5,
        imagemUrl: "https://br.web.img3.acsta.net/pictures/20/10/09/10/12/0923276.jpg",
        imagem: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Top Gun: Maverick",
        sinopse: "Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete 'Maverick' Mitchell está de volta, rompendo os limites como um piloto de testes corajoso. No mundo contemporâneo das guerras tecnológicas, Maverick enfrenta drones e prova que o fator humano ainda é essencial.",
        nota: 3,
        imagemUrl: "https://johto.legiaodosherois.com.br/wp-content/uploads/2022/05/legiao_fEMlSVQgvjpB.jpg",
        imagem: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "MIB: Homens de Preto Internacional",
        sinopse: "Quando criança, Molly (Tessa Thompson) presenciou a abordagem de dois agentes do MIB aos seus pais, apagando a memória deles acerca da súbita aparição de um ser extraterrestre. Como estava escondida, a garota não foi atingida pela ação. Obcecada pelos mistérios do universo, ela cresceu com o sonho de ingressar no MIB. Após muita pesquisa, ela consegue descobrir a sede da agência e lá se candidata a uma vaga, sendo aceita por O (Emma Thompson). Ainda em experiência, e agora renomeada como agente M, ela é enviada a Londres para investigar algo estranho que tem ocorrido na agência local. É quando conhece o agente H (Chris Hemsworth), de grande renome pelos seus feitos no passado mas uma certa arrogância e displicência na execução do trabalho.",
        nota: 4,
        imagemUrl: "https://br.web.img2.acsta.net/c_310_420/pictures/19/04/25/22/31/3513181.jpg",
        imagem: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Filmes', null, {});
  }
};
