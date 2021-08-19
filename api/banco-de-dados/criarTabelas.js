const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor')

ModeloTabela
  .sync()
  .then(() => {
    console.log('tabela criada com sucesso')
  })
  .catch(console.log)
