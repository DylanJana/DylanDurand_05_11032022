function photographerFactory(data) {
    const { name, portrait, tagline, country, city, price,id} = data;

    const picture = `assets/photographers/${portrait}`;
    // Je stocke le nom du photographe pour l'afficher dans l'attribut alt de son image
    const descPicture = name;


    function getUserCardDOM() {
       
    }
    return { name, picture, tagline, country, city, price, getUserCardDOM }
}