import { AppPage } from './page_objects/app.po';
import { LoginPage } from './page_objects/login.po';

describe('login in application', () => {
  let app: AppPage;
  let page: LoginPage;

  beforeEach(() => {
    app = new AppPage();
    page = new LoginPage();
    app.navigateTo('/login')
  });
  afterEach(() => {
    page.logout();
  })

  it('should display login inputs', () => {
    expect(page.getInput('email')).toEqual('Informe o seu endereço de e-mail');
    expect(page.getInput('password')).toEqual('Informe a senha da sua conta');
  });

  it('should authenticate', () => {
    const arrange = {
      email: "saldanha@gr1d.io",
      password: '123456'
    }
    page.setLoginData(arrange);
    page.login().then(() => {
      expect(page.getFeedbackLogin()).toEqual('Login realizado com sucesso');
    });
  });
  it('should not authenticate', () => {
    const arrange = {
      email: "saldanha@gr1d.io",
      password: '1234566'
    }
    page.setLoginData(arrange);
    page.login().then(()=>{
      expect(page.getFeedbackLogin()).toEqual('E-mail e/ou senha incorreta');
    })
  });

  it('should valid authenticate form', () => {
    const arrange = {
      email: "saldanha@",
      password: ""
    }
    page.setLoginData(arrange);
    page.unfocusFields().then(()=>{
      setTimeout(()=>{
        expect(page.getHintInput(1)).toEqual('O email fornecido é inválido');
        expect(page.getHintInput(2)).toEqual('O campo é obrigatório');
        expect(page.loginButton().getAttribute('disabled')).toEqual(true);
      }, 1000);
    })
  });
});
