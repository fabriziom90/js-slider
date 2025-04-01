const pics = [
    {
      image: 'img/01.jpg',
      title: 'Svezia',
      text: 'Scandinavia\'s blend of nature and innovation.',
    }, 
    {
      image: 'img/02.jpg',
      title: 'Norvegia',
      text: 'Fjords, mountains, and coastal charm in Nordic splendor.',
    }, 
    {
      image: 'img/03.jpg',
      title: 'Alaska',
      text: 'Untamed wilderness and rugged beauty in the Last Frontier.',
    }, 
    {
      image: 'img/04.jpg',
      title: 'Gran Canyon',
      text: 'Nature\'s masterpiece, a colorful tapestry of cliffs.',
    }, 
    {
      image: 'img/05.jpg',
      title: "Skyrim",
      text: 'Epic Nordic fantasy with dragons and ancient magic.',
    }
  ];

// definizione della funzione che crea la singola immagine
  const createImage = (galleryImage) => {
    // destrutturiamo il parametro passato nelle sue proprietà
    const { image, title, text } = galleryImage;

    // credo l'html dell'immagine da inserire
    let img = `<figure>
                    <img src="./${image}" alt="">
                    <figcaption>
                        <h2>${title}</h2>
                        <h3>${text}</h3>
                    </figcaption>
                </figure>`;

    return img;

  }

//   definizione della funzione che va a ciclare l'array ed a creare le immagini a partire da questo nell'html
const renderImages = (array) => {

    // creo la variabile vuota che mi servirà per contenere tutte le immagini
    let images = '';
    // recupero la gallery dal dom
    const gallery = document.querySelector('.gallery');

    // ciclo l'array
    for(let i=0; i<array.length; i++){
        images += createImage(array[i]);
    }

    gallery.innerHTML = images;
}

renderImages(pics);