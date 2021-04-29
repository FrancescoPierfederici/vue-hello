const app = new Vue(
    {
        el: `#vueContainer`,
        data:
        {
            titolo: "La parte più difficile nella vita di un programmatore è quando si da la caccia ad un bug per una settimana, si trova il codice che genera il bug, si offende l'autore del codice ed infine ci si accorge di essere l'autore del codice maledetto.",
            //immagine: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg",
            classiTitolo: "text-white background-image",
            paragrafo: "Questa frase è vera o falsa secondo te?",
            classiParagrafo: "text-center font-size",
            classiButton: "text-center2 classeButton"

        },
        methods: {
            cambioColoreRosso: function () {
                if (this.classiTitolo) {
                    this.classiTitolo = "text-red background-image"
                };
            },
            cambioColoreBlue: function () {
                if (this.classiTitolo) {
                    this.classiTitolo = "text-blue background-image"
                };

            },
            resetInputs(){
                
                this.classiTitolo ="text-white background-image";
            }
        }
    }
);