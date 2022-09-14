let div =  document.createElement('div');

document.write(div.innerHTML = "Sejam Bem vindos")

console.log(div)

let titulo = document.createElement('h1')
console.log(titulo.innerHTML)
titulo.innerHTML = 'JAVA SCRIPT';

document.write(` pessoal, vamos estudar:
    ${titulo.innerHTML} Estudar
`)



let p = document.createElement('p')
p.className="paragrafo";

p.innerHTML = "Vamos aprender Java Script ";
document.write(p.innerHTML)


console.log(p.innerHTML)
console.log(p)


let imagem = document.createElement('img')
imagem.src = 'https://blog.agroline.com.br/wp-content/uploads/2017/08/pelo-de-cachorro-0-1200x900.jpg'
console.log(imagem);



let versa = document.createElement('p')
versa.innerHTML = "versa";

document.getElementById('nissan').appendChild(versa)

let sentra = document.createElement('p')
sentra.innerHTML = "sentra";

document.getElementById('nissan').appendChild(sentra)

document.write(sentra.innerHTML)