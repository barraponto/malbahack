<script>
  export default {
    name: 'About',
    data() {
      return {};
    },
  };
</script>

<template>
  <main class="about">
    <router-view class="about-detail"></router-view>
    <article class="about-text">
      <h1>A História da *rte[1]</h1>

      <p>O projeto A HISTÓRIA DA *RTE é uma
      <router-link :to="{name: 'about-item', params: {id: 'constatacao'}}">constatação</router-link>.
      Apresenta dados quantitativos sobre todos os artistas encontrados em 11
      livros utilizados em cursos de graduação de Artes Visuais no Brasil. Com o
      intuito de mensurar o cenário excludente da História da Arte oficial
      estudada no país, esses dados são disponibilizados em um panfleto e neste
      site. A intenção é fornecer dados concretos para que outros pesquisadores,
      artistas, educadores e interessados reivindiquem outras leituras para a
      História ou mesmo uma transformação radical do campo.</p>

      <p>O projeto nasceu quando um dos
      <router-link :to="{name: 'about-item', params: {id: 'ficha-tecnica'}}">integrantes</router-link>
        do projeto, o artista Bruno
      Moreschi, começou a ministrar uma disciplina de História da Arte na
      Unicamp. A bibliografia prevista para o curso não abordava as produções
      realizadas por mulheres, africanos e seus descendentes na diáspora e
      artistas nascidos na América Latina. Que história é essa que aprendemos e
      estamos ensinando aos alunos? Objetivando quantificar os aspectos já
      consolidados na narrativa da História da Arte, Bruno e os pesquisadores
      Amália dos Santos e Gabriel Pereira iniciaram A HISTÓRIA DA *RTE, projeto
      premiado e financiado pelo programa Rumos Itaú Cultural (2016-2017) e com
      produção da Agência Bólide formada por Laura Maringoni, Marcela Amaral e
      Mônica Novaes Esmanhotto.</p>

      <p>A pesquisa teve início com a listagem, em formato de tabela, de todos
      os artistas encontrados nos 11 livros de História da Arte e as seguintes
      informações: anos de nascimento e morte; onde nasceu, trabalhou e morreu;
      gênero; raça; técnica principal utilizada. A partir da análise desses
      dados, observou-se que de um total de 2444 artistas, apenas 214 são
      mulheres, 21 são negros, 645 são não europeus. Dos 645 não europeus,
      apenas 305 são não norte-americanos. 1567 são pintores.</p>

      <p>Os dados das tabelas foram a base para a produção de um material de
      apoio impresso em formato de panfleto, semelhante àqueles encontrados na
      entrada de museus e centros culturais. Desenvolvido pelo pesquisador
      visual Guilherme Falcão, ele apresenta textos, gráficos e mapas que
      mostram os principais dados encontrados. Os mapas foram elaborados por
      Amália em parceria com Pedro Vada, especializado em cartogramas, com o
      objetivo de exibir de forma geográfica como a História da Arte é
      eurocêntrica.</p>

      <p>Com tiragem de XXX mil exemplares em português e XX mil em inglês, o
      material será distribuído gratuitamente ao longo de 2017 na entrada de
      museus do Brasil e de outros países selecionados pela equipe. Esta ação de
      distribuição problematiza o papel das instituições culturais que são,
      assim como os livros pesquisados, responsáveis pelo cenário restrito da
      História da Arte. O que os diretores e curadores dos museus tem a dizer
      sobre isso? Que ações concretas estão sendo tomadas para que os acervos
      que coordenam deixem de ignorar as produções artísticas de negros,
      mulheres, indígenas e não europeus?</p>

      <p>Outro desdobramento do projeto é este site, desenvolvido pelo hacker
      Capi Etheriel. Além de disponibilizar as tabelas e os livros, apresenta
      textos que discutem a metodologia e os processos de criação com o intuito
      de mostrar as incertezas do projeto e as diferentes opiniões possíveis
      para alguns assuntos. Esses textos, assim como os publicados no panfleto,
      tiveram acompanhamento crítico da pesquisadora Ananda Carvalho. O projeto
      também contou com um conselho composto pelas professoras Caroline Cotta de
      Mello Freitas, Claudia Mattos Avolese e Vera Lúcia Benedito. Com o
      objetivo de não criar uma fala autoritária, optamos por utilizar notas de
      rodapé (no caso do panfleto) e paratextos (no caso do site). O site
      compartilha também outras reflexões desenvolvidas por Bruno como a
      listagens das palavras mais repetidas nos livros e a criação coletiva de
      novas categorias para as imagens de obras que ilustram suas páginas.
      Espera-se que esta plataforma seja também um espaço para receber novas
      problematizações apresentadas por outras pessoas sobre o tema.</p>

      <p>A HISTÓRIA DA *RTE é um projeto que tem forte influência das novas
      leituras para a História da Arte como as de Arthur Danto, Hans Belting,
      Didi-Huberman, etc. publicadas desde os anos 1980 e que vem ganhando
      espaço nas universidades brasileiras na última década. Considerando que
      essas discussões restringem-se a poucos grupos, em geral no âmbito
      acadêmico de cursos de pós-graduação, este projeto procura oferecer dados
      para que elas também ocorram em públicos mais amplos.</p>

      <p>Boa Visita!</p>
    </article>
  </main>
</template>

<style>
  .about {
    display: flex;
    padding: 1em;
    font-size: 1.33em;
    font-family: 'Cabin', sans-serif;
    line-height: 1.33em;
    letter-spacing: 0.033em;

    & h1 {
      text-transform: uppercase;
      font-size: 1.33em;
    }

    & .about-detail,
    & .about-text {
      flex-basis: 20em;
    }

    & .about-detail {
      flex-grow: 2;
      margin-right: 2em;
    }

    & .about-text {
      flex-grow: 5;
    }
  }
</style>
