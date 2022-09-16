# PROJETO DAS EMOÇOES #
## Sobre ##
Aplicação para pessoas compartilharem suas emoções em tempo real com seu amigos. 

## Status ##
O projeto ainda esta no inicio mas algumas features ja foram pensadas apara o começo 
imediato. 

## Features ##
### Back-end ###
    [x] - banco de dados.

    [x] - Registar usuario.

    [x] - Acessar com um Usuario.

    [ ] - Adcionar emoções a um usuario.

    [ ] - enviar soliçitação de amizade.

    [ ] - aceitar solicitação de amizade.

    [ ] - recusar solisitação de amizade.

### Front-end ###
    [ ] - Figma

    [ ] - LandingPage

    [ ] - Login

    [ ] - Registro


### Rotas e metodos ###

*Register* - para registrar um usuario é preciso 
fazer um POST na rota /register e deve possuir os seguintes campos.

Requisição:

    ex:
    {
	    "username": "alex",
        "mail": "alex@mail.com",
        "password": "26987288"
    }

Returno da requisição:

    {
	    "body": {
		    "username": "alex",
		    "mail": "alexx@mail.com",
		    "password": "$2a$10$0nIuNNN/VGGVmblh1y6yf.jAVUtOdCBws/8a4EyqrhUQQI6lu0d5y"
	    },
	    "emotions": [],
	    "friends": [],
	    "errors": [],
	    "user": {
		    "username": "alex",
		    "mail": "alexx@mail.com",
		    "password": "$2a$10$0nIuNNN/VGGVmblh1y6yf.jAVUtOdCBws/8a4EyqrhUQQI6lu0d5y",
		    "friends": [],
		    "emotions": [],
		    "_id": "630fa478f6398535d4fc105b",
		    "__v": 0
	    }
    }

os email são validados, porem as senha so são validadas a quantidade
de caracteres. 
caso queira fazer uma confirmação de senha isso pode ser feito no front.

*login* - Para conectar um usuario é preciso fazer um POST na rota 
/login e deve possuir o seguinte corpo. 

Requisição:

    ex:
    {
        "mail": "alex@mail.com",
        "password": "26987288"
    }

Returno da requisição:

    "user": {
		    "username": "alex",
		    "mail": "alexx@mail.com",
		    "password": "$2a$10$0nIuNNN/VGGVmblh1y6yf.jAVUtOdCBws/8a4EyqrhUQQI6lu0d5y",
		    "friends": [],
		    "emotions": [],
		    "_id": "630fa478f6398535d4fc105b",
		    "__v": 0
	}
