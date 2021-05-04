# Exercício React com Redux conquistando a galaxia
Repositório de exercício para a aula 16.2, gerenciamento de estado com Redux no React

## Antes de iniciar
Crie um fork desse repositótio, você pode utilizar esse [tutorial](https://guides.github.com/activities/forking/) para realizar o fork.

Com o fork criado clone o repositório no seu computador, e vá para a pasta do exercício:
  ```
    git clone <link-do-repositório>
    cd exercicio-redux-conquistar-a-galaxia
  ```
Instale as dependências:
  ```
    npm install
  ```
Vá para a branch master, e verifique as branchs de exercícios:
  ```
  git checkout master
  git branch
  ```
As sequintes branchs devem aparecer:
  ```
  exercise-one
  exercise-two
  exercise-three
  ```
Faça os exercícios seguindo as instruções de cada um deles.

Após completar, abra um PR no seu repositório forkado, se quiser peça um CR de algum amigo, ou mergeie com a master.

**Atenção!** Quando for criar o PR, lembre-se de indicar a branch certa!

## Iniciando os exercícios
Não se preocupe com o CSS hoje, consentre-se em entender o React-Redux.

### Exercício 1
Vá para para branch `exercise-one`
 - A store do Redux ja está criada, porém ela não está conectada com a aplicação, para isso abra o arquivo `/src/index.js` e conecte o Provider com a store;
 - O reducer já existe, mas não está ligado a aplicação, arrume isso em `/src/redux/reducer/index.js`, utilizando o rootReducer;
 - As actions não estão executando, abra o arquivo `/src/redux/actions/index.js` e adicione as action.types nos locais certos.
 - Conecte a action de lançamento do foguete com o click do botão **Decolar**.

### Exercício 2
Vá para para branch `exercise-two`
 - Acrescente ao arquivo `/src/redux/reducer/spaceReducer.js` uma lógica que a cada clique do botão **Construir Base** seja construida uma parcela da base lunar, você deve acrescentar o estado moonBase da store do redux de 10 em 10;
 - Conecte o estado de moonBase, da store do Redux e a action reponsável pelo acrescimo ao componente `/src/components/MoonMars.jsx`;
 - Faça uma lógica para quando a base estiver 100% concluída, o botão de construção seja desabilitado;
 - Lance o foguete até marte.

### Exercício 3
Vá para para branch `exercise-three`
 - Construa uma base operacional em marte, para isso utilize o reducer do arquivo `/src/redux/reducer/marsReducer.js`, lembre-se de conectá-lo ao reducer principal com auxilio do rootReducer`;
 - Traga o estado global `base` para o componente `/src/components/Mars.jsx`, e utilize o nome `base` como props;
 - Com a base pronta, você pode lançar satélites para proteger Marte de invasões, para isso utilize o estado local do componente para guardar o nome do satélite, digitado no input, que você irá lançar. Utilize componente `/src/components/Mars.jsx`;
 - Com o nome do satélite salvo no estado, elabore uma action, que irá pegar o nome do satélite e gardar em um array na store do Redux, assim poderá ser lançado varios satélites diferentes. Vincule essa action com o botão **Lançar Satélite**. Cuidado para não apagar os nomes salvos anteriormente;
 - Traga do estado global o array de nomes de satélites e salve eles em uma props de nome `satellites`.

 Marte está dominado, até onde você quer chegar?