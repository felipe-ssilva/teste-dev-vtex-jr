## Teste o APP em produção
[Acessar](https://wonderful-jepsen-cd4139.netlify.app/)

## Extensões do VSCode necessárias

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

## Bibliotecas necessárias

- Yarn
- Node

## Instruções para executar em ambiente de desenvolvimento

Você deve executar, em ordem:
- yarn install
- yarn start

## Scripts disponíveis

No diretório do projeto, você pode executar:

### `yarn start`

Inicia o APP em modo de desenvolvimento
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

A página recarrega caso edite alguma coisa.\
Você também pode ver erros no console.

### `yarn test`

Inicia o executor de teste no modo interativo.\

### `yarn build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.
A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
O APP está pronto para ser implantado!