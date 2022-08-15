//Verificar a categoria de cada objeto e executar a funcao
// de acordo com a categoria
for(let i = 0;i < products.length;i++)
{
   switch (products[i].category)
   {
       case "Frutas":
            ListarFrutas(products[i].title,products[i].category,products[i].price,products[i].image,products[i].imageDescription)
            break;
        case "Bebidas":
            ListarBebidas(products[i].title,products[i].category,products[i].price,products[i].image,products[i].imageDescription)
            break;
        case "Higiene":
            ListarHigiene(products[i].title,products[i].category,products[i].price,products[i].image,products[i].imageDescription)
            break;
   }
}
function ListarFrutas(nome,categoria,preco,imagem,alt)
{
    const ul = document.querySelectorAll("ul")[0]
    const li = document.createElement("li")
    const img = document.createElement("img")
    const main = document.createElement("main")
    const h1 = document.createElement("h1")
    const h5 = document.createElement("h5")
    const strong = document.createElement("strong")
    li.classList.add("product")
    img.classList.add("product-img")
    main.classList.add("product-main")
    h1.classList.add("product-title")
    h5.classList.add("product-category")
    strong.classList.add("product-price")
    img.src = imagem
    img.alt = alt
    img.title = nome
    h1.innerText = nome
    h5.innerText = categoria
    strong.innerText = preco
    main.append(h1,h5,strong)
    li.append(img,main)
    ul.appendChild(li)
}
function ListarBebidas(nome,categoria,preco,imagem,alt)
{
    const ul = document.querySelectorAll("ul")[1]
    const li = document.createElement("li")
    const img = document.createElement("img")
    const main = document.createElement("main")
    const h1 = document.createElement("h1")
    const h5 = document.createElement("h5")
    const strong = document.createElement("strong")
    li.classList.add("product")
    img.classList.add("product-img")
    main.classList.add("product-main")
    h1.classList.add("product-title")
    h5.classList.add("product-category")
    strong.classList.add("product-price")
    h1.innerText = nome
    h5.innerText = categoria
    strong.innerText = preco
    img.src = imagem
    img.alt = alt
    img.title = nome
    main.append(h1,h5,strong)
    li.append(img,main)
    ul.appendChild(li)
    
}
function ListarHigiene(nome,categoria,preco,imagem,alt)
{
    const ul = document.querySelectorAll("ul")[2]
    const li = document.createElement("li")
    const img = document.createElement("img")
    const main = document.createElement("main")
    const h1 = document.createElement("h1")
    const h5 = document.createElement("h5")
    const strong = document.createElement("strong")
    li.classList.add("product")
    img.classList.add("product-img")
    main.classList.add("product-main")
    h1.classList.add("product-title")
    h5.classList.add("product-category")
    strong.classList.add("product-price")
    h1.innerText = nome
    h5.innerText = categoria
    strong.innerText = preco
    img.src = imagem
    img.alt = alt
    img.title = nome
    main.append(h1,h5,strong)
    li.append(img,main)
    ul.appendChild(li)
}