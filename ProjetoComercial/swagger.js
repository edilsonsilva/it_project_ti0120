// importação do módulo do swagger-autogen para gerar o conteúdo da
//documentação dentro do arquivo swagger_output.json e gerar a página da doc
const swaggerAutogen = require("swagger-autogen")();

const output = "./swagger_output.json";
const endpoints = ["./endpoints_usuarios.js"];

// informações complementares da documentação
const doc = {
  info: {
    version: "1.0.0",
    title: "Projeto Comercial",
    description: "Projeto desenvolvido para estudo de FullStack",
    contact: {
      name: "Edilson Silva",
      url: "http://www.github.com/edilsonsilva",
      email: "edilson@yahoo.com.br",
    },
  },
  host: "localhost:5000/usuarios",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  tags: [
    {
      name: "Usuários",
      description: "Você pode testar as rotas dos usuário abaixo",
    },
  ],
};

swaggerAutogen(output, endpoints, doc).then(() => {
  require("./src/main/index.js");
});
