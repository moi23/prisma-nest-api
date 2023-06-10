# Prisma

(Afim de estudos)
npx prisma db pull // gera um schema.prisma baseado no banco de dados que já existe

1. npx prisma migrate dev --name initDefinirNomeMigration // Cria um ponto de história da criação/evolução do banco de dados
2. npx prisma generate // gera as tipagens do prisma no projeto para poder usar.
3. npx prisma db push // atualiza a base de dados baseada no arquivo schema.prisma

(Afim de estudos)
npx prisma studio // irá rodar um sgbd para acessar os dados de forma visual.

---

# Nest

1. nest generate module nome // Gera um arquivo de módulo, para criar as outras lógicas.
2. nest generate controller nome // Gera um arquivo de controller, para definir as rotas, partindo de decorators.
3. nest generate service nome // Gera um arquivo de service, para definir a lógica que o controller irá chamar.

4. nest generate res nome // Gera um combo de logica para o que nós precisamos

---

1. Implements, define a tipagem é a mesma coisa que o interface Iprops {...} você está setando que essa classe poderá usar aqueles atributos

2. Repositories/Repository
   É a camada responsável por fornecer para nós todos os métodos que trabalha com o dado diretamente no banco de dados.
   (Ela geralmente é consumida pelo Service)
   Um dos pontos muito defendendidos para sempre utilizar, desta forma é que nele é onde fica a lógica separada responsável por realizar a interação com o ORM, no caso hoje estamos utilizando Prisma, mas se amanhã ou depois saia um outro ORM, ou quisermos mudar para typeorm, só seria necessário alterar os métodos de interação no Banco nas camadas de Repositoryes
