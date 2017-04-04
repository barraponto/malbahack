Malbahack
=========

Malbahack é uma engenharia reversa do Glosário do Malba
(http://www.glosario.malba.org.ar/), usando tecnologias livres para incentivar
o re-uso em outros contextos.

Este projeto é realizado dentro do contexto do projeto "A História da \*rte!",
para permitir expor a desigualdade eurocêntrica nos museus e no estudo da
história da arte como um todo.

Como contribuir com novos artigos
---------------------------------

Na pasta `data` tem diversos arquivos em markdown, basta criar um novo arquivo
seguindo o mesmo formato. Note que no topo há meta-dados (informações sobre o
arquivo) que fazem referência a imagens na pasta `images`. Siga o modelo e
copie as imagens pra pasta certa. É possível escrever tudo direto no Github.

Ou mande por email para barraponto+malbahack@gmail.com que eu resolvo.


Como instalar
-------------

Assumindo que você tenha clonado ou baixado este repositório, instale as dependências usando npm:

    npm install

Com as dependências instaladas, basta rodar um comando para produzir os arquivos finais:

    npm run build

Se você quiser trabalhar no projeto, é melhor usar o modo de desenvolvimento:

    npm run start

