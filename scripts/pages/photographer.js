const id = window.location.search.split('id=')[1];
console.log(id)
class App {
    constructor() {
        this.photographHeader = document.querySelector('.photograph-header')
        this.photographsApi = new PhotographApi('/data/photographers.json')
    }

    async main() {
        const photographers = await this.photographsApi.getPhotographers()
        photographers
            .map(photographer => new Photograph(photographer) )
            .forEach(photographer => {
                console.log(photographer)
                const Template = new  PhotographTemplate(photographer)
                this.photographHeader.appendChild(Template.createTemplatePhotograph())
            });
    }
}

class PhotographTemplate {
    constructor(photographer) {
        this.photographer = photographer;
    }


    createTemplatePhotograph() {
        const photographHeaderContainer = document.createElement('div');
        photographHeaderContainer.classList.add('photographer-header__content','row-has--columns', 'd-flex', 'justify-content--space-between', 'align-items--center', 'w-100')
        const templatePhotograph = `
        <!-- Je crée une div afin de faire de la mise en page avec flexbox-->
            <div class="column">
                <h1 class="photograph-header__title color-primary title-xxl w-100" role="heading">${this.photographer.name}</h1>
                <p class="photographer-location title-md color-secondary">${this.photographer.location}</p>
                <p class="photographer-tagline color-tiers mtb-md">${this.photographer.tagline}</p>
            </div>
          <div class="column">
            <button class="contact_button" onclick="displayModal()" role="button" alt="Contact Me">Contactez-moi</button>
          </div>
          <div class="column">
            <img class="img--rounded"
            src="${this.photographer.portrait}" 
            alt="${this.photographer.name}"
            />
          </div>
        `
        photographHeaderContainer.innerHTML = templatePhotograph
        return photographHeaderContainer
    }
}

const app = new App()
app.main()