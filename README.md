# Executando a aplicação

1. Instale o [Node.js](https://nodejs.org/en/) que inclui o [Node Package Manager](https://www.npmjs.com/get-npm)
2. Instale o [Angular CLI](https://github.com/angular/angular-cli) globalmente (versão 14.2.3).
    - npm install -g @angular/cli
3. Execute a api [SohaLoginApi](https://github.com/lucasfogliarini/sohalogin-api) em modo debug
    - Verifique se está rodando na no endereço `https://localhost:7040`
4. Execute a aplicação
    - cd soha-login
    - npm start ou ng serve
5. Navegue no endereço `http://localhost:4200/`.

# O que foi feito para os Critérios de Aceite

### CA1
Nada de especial foi feito, testei a aplicação em diferentes resoluções e não apresentou nenhum problema.

### CA2
Utilizei a diretiva disabled usando o método hasValues() para habilitar o botão apenas quando existir valor em email e password
<button [disabled]="!account.hasValues()"

### CA3
1. Adicionei o texto "(obrigatório)" no placeholder dos inputs email e password
2. Validei a obrigatoriedade na api e pode ser visto no [teste unitário](https://github.com/lucasfogliarini/sohalogin-api/blob/master/SohaLogin.Tests/AccountServiceTests.cs#L16)

### CA4
Validei o e-mail na api e pode ser visto no [teste unitário](https://github.com/lucasfogliarini/sohalogin-api/blob/master/SohaLogin.Tests/AccountServiceTests.cs#L33)

### CA5
Validei a senha na api e pode ser visto no [teste unitário](https://github.com/lucasfogliarini/sohalogin-api/blob/master/SohaLogin.Tests/AccountServiceTests.cs#L50)

### CA6
Use as credenciais para testar esse CA:  
email: soha@soha.com  
passord: soha  
Após a autenticação no método authenticate, o usuário é redirecionado para a página /home com os botões 'Deslogar' e 'Voltar ao Login'

### CA7
Adicionei o toster info "Processando" em todas as requisições (método request do sohalogin-api.service.ts)

### CA8
Foi utilizado os módulos MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule do Material Design

### CA9
A implementação do CA9 pode ser vista no método authenticate do login.component.ts

### CA10
1. Tente logar na aplicação com a API parada, uma mensagem "API está inacessível (https://localhost:7040/)" deve aparecer.
   O tratamento foi feito no método request do sohalogin-api.service.ts

2. Tente logar na aplicação com a API rodando, com uma credencial aleatória, uma mensagem "Credenciais inválidas." deve aparecer
   O tratamento foi feito na api

# Tecnologias

- [Angular Material](https://material.angular.io/)
    - Componentes em Material Design para Angular
- [ngx-toastr](https://www.npmjs.com/package/ngx-toastr)
    - Um componente para enviar notificações para o usuário, uma mensagem de alerta leve e facilmente personalizável.
