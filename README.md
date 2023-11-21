# Ana Beatriz - RM
# Lucas Feijó - RM99727

TechHealth 💻🏥

Projeto desenvolvido por Ana Beatriz Farah (RM97865) e Lucas Feijó (RM99727).

### Status do Projeto: Concluído 🎉

Realizado entre 18/11 e 21/11.

## Objetivo do Site

O TechHealth é uma plataforma que visa abordar questões críticas do setor de saúde, oferecendo insights, informações e soluções. O site é estruturado em:

- *Problemas do Setor de Saúde:* Análises e informações sobre os desafios enfrentados.
- *Página Inicial:* Apresentação detalhada do projeto e sua relevância.
- *Informações de Contato:* Canais para comunicação e feedback.
- *Login e Registro:* Funcionalidades para acesso aos recursos exclusivos.

## Funcionalidades

### Componente Reutilizável em Todo o Projeto
- Componente utilizado em todas as páginas para garantir consistência visual e funcional.

### Login
- Componente único para controlar o acesso, permitindo validação e autenticação dos usuários.
- Importante: o usuário não pode sair desta tela caso não consiga se autenticar.

### Registro
- Funcionalidade para registro de novos usuários com email e senha.
- Garante acesso aos recursos exclusivos após validação dos dados.

### Criação de Rotas
- Utilização do Router Provider no componente principal para criar e gerenciar rotas dos elementos.

### API-JSON e Validação
- Criação de um arquivo 'dados.json' com campos: id, nome, email e senha.
- Validação dos campos email e senha utilizando a API JSON-SERVER.
- Redirecionamento do usuário para a tela principal após validação, mantendo seus dados.

### Validação/Redirecionamento
- Apresentação do nome e email do usuário validado no cabeçalho.
- Implementação de um sistema de logout que redireciona o usuário para a tela de Login, limpando todos os dados armazenados.

## Passo a Passo para Utilizar o Site

### Registro

1. Acesse a página inicial do site.
2. Localize e clique na opção *"Registrar"*.
3. Preencha os campos obrigatórios:
   - *Email:* insira seu endereço de email.
   - *Senha:* escolha uma senha segura.
4. Após preencher os campos, clique em *"Registrar"*.

### Login

Para fazer o login você pode clicar no botão no canto superior direito e será redirecionado para a aba de Login, caso você deseje pode fazer login com os pré-estabelecidos no arquivo DATA users.json:
    "email": "lucasfeijodev@gmail.com", "password": "12345"
    "email": "biaalves@gmail.com", "password": "anabia"
Caso você queira fazer o cadastro, apenas clique no final da caixa em "registre-se" e registre seu email e senha, aonde fazendo isso você salva seu login no site, podendo repetir as instruções acima mas agora com o seu próprio login.

Com esses passos simples, você poderá registrar-se e realizar o login na plataforma para explorar suas funcionalidades.

Esperamos que o TechHealth seja uma ferramenta útil e informativa para os usuários interessados no panorama da saúde.

Para mais informações e feedback, entre em contato conosco!

