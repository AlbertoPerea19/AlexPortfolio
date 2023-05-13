import type { Script } from "@/types/translationTypes";
const translations: {es: Script, en: Script, it: Script} = {
en:{ // English
      heroSection:{
            title: "Hello, It's me",
            name: "Alex Perea",
            description: "An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data. While traveling around the world.",
            button: "More info",
      },
},
es:{ // Spanish
      heroSection:{
            title: "Hola, soy yo",
            name: "Alex Perea",
            description: "Un entusiasta diseñador de productos que actualmente está modelando el futuro del desarrollo de software diseñando interfaces de usuario suaves que promueven la interacción del usuario con la información y los datos. Mientras viaja por el mundo.",
            button: "Más información",
      },
},
it:{ // Italian
      heroSection:{
            title: "Ciao, sono io",
            name: "Alex Perea",
            description: "Un entusiasta designer di prodotti che attualmente sta modellando il futuro dello sviluppo del software progettando interfacce utente lisce che promuovono l'interazione dell'utente con le informazioni e i dati. Mentre viaggiare per il mondo.",
            button: "Più informazioni",
      },
},
};
export default translations;