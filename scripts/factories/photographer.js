function photographerFactory(data) {
    const { name, portrait, tagline, country, city, price,id} = data;

    const picture = `assets/photographers/${portrait}`;
    // Je stocke le nom du photographe pour l'afficher dans l'attribut alt de son image
    const descPicture = name;


    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("role", "image");
        img.setAttribute("src", picture);
        // Je complète l'attribut "alt" avec le nom du Photographe
        img.setAttribute("alt", descPicture);
        img.classList.add('img--rounded') 
        const h2 = document.createElement( 'h2' );
        h2.setAttribute("role", "heading")
        h2.textContent = name;
        const photographerLocation = document.createElement('h3');
        photographerLocation.classList.add("color-secondary");
        photographerLocation.setAttribute("role", "heading")
        photographerLocation.textContent = city + ', ' + country;
        let photographerTagline = document.createElement('p');
        photographerTagline.classList.add("subtitle", "mtb-sm");
        photographerTagline.textContent = tagline;
        let photographerPrice = document.createElement('p');
        photographerPrice.classList.add("text-sm", "color-tiers");
        photographerPrice.textContent = price + '€/jour';
        // Création de mon lien dans lequel je vais y ajouter l'image et le titre H2
        let photographerLink = document.createElement('a')
        photographerLink.classList.add('photographer__link')
        photographerLink.setAttribute("role", "link")
        photographerLink.setAttribute("href", "photographer.html?id="+id)
        article.appendChild(photographerLink)
        photographerLink.appendChild(img);
        photographerLink.appendChild(h2);
        article.appendChild(photographerLocation);
        article.appendChild(photographerTagline);
        article.appendChild(photographerPrice);
        return (article);
    }
    return { name, picture, tagline, country, city, price, getUserCardDOM }
}