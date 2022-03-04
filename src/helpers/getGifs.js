//Los helpers son funciones que no tienen que estar en mis componentes, ejemplo el getGifs.

const api_key = 'lZIXzn8fUAb6DqCsDivzCoqRhTPVRFtI';

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${api_key}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( (img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });
    //console.log(gifs);
    
    return gifs;
}