// Content Factory
//
//
//

const yearsContent = [{ year: null, album: null, artist: null, linkAlbum: null, pictureAlbum: null, dataList: [""], songslist: [{ title: "", url: "" }] }];
let yearSelected = 0;

for (let i = 0; i < 26; i++) {
    let year;
    switch (i) {
        case 0:
            year = "1990-1995"
            break;
        case 1:
            year = "1996-2000"
            break;
        default:
            year = 1999 + i
            break;
    }
    yearsContent.push({ year, artist: null, linkAlbum: null, pictureAlbum: null, dataList: [] })
}

yearsContent.shift();

function Content(index, album, artist, picture, link, data, songList) {
    yearsContent[index].artist = artist
    yearsContent[index].album = album
    yearsContent[index].pictureAlbum = picture
    yearsContent[index].linkAlbum = link
    yearsContent[index].dataList = data
    yearsContent[index].songslist = songList
}

Content(0, "El Poder del General", "El General", "general.jpg", "https://music.youtube.com/playlist?list=OLAK5uy_kqq5iQinOos_xjq6Nv2VcsGVpV10HuHRU",
    [
        `En las barriadas rurales de Panamá, surgieron los primeros sonidos que luego influyeron en el
reggaeton.Sin embargo, fue en Puerto Rico donde el género realmente despegó y comenzó a ganar
popularidad.`,
        `A pesar de su origen latino, el reggaeton también creció en las calles de Nueva York, gracias a
la presencia de comunidades hispanohablantes en la ciudad. Allí, jugaban con diferentes géneros
y mezclaban sonidos que se fusionaron hasta llegar a lo que conocemos hoy.`
    ], [
    { title: "Te ves bien buena- El General", url: "" },
    { title: "So Persígueme- Daddy Yankee", url: "" },
    { title: "Enfermo de amor- Nando Boom", url: "" },
    { title: "Donde mi no vengas-Daddy Yankee", url: "" },
    { title: "La gente sabe- Maicol y Manuel", url: "" },
    { title: "Cierra los ojos Baby Rasta y Gringo", url: "" },
    { title: "Donde Estan-Big Boy", url: "" },
    { title: "Mi Funeral-Daddy Yankee", url: "" },
    { title: "Jala Gatillo-LasGuanabanas", url: "" },
    { title: "Muchos quieren tumbarme-Ivy Queen", url: "" }
])

Content(1, "El Cartel: Los intocables" , "Daddy Yankee y otros" , "cartel.jpg" , "https://www.youtube.com/playlist?list=PLky05cGhlPQMuT8-mQqMdayCdbeirHdd8" ,
    [
        'Durante este período, artistas como Daddy Yankee, Don Omar, Ivy Queen, Nicky Jam, Wisin & Yandel y otros empezaron a crear música que combinaba el reggae con ritmos de hip-hop y dancehall, mejor conocido como dembow. Otros artistas pioneros incluyen a DJ Negro, DJ Playero y DJ Joe, quienes crearon mezclas de reggae en español y rap en inglés.' ,
        'Una de las claves para el éxito del reguetón fue la temprana adaptación del género a la revolución digital. A finales de la década de 1990, la música se volvió cada vez más accesible a raíz de la popularización de internet y de la piratería musical4.' ,
        'Su evolución en los años finales de la década de 1990 tuvo mucha significación para el género. Durante este tiempo, el reggaetón experimentó un aumento masivo en popularidad en todo el mundo, con artistas como Daddy Yankee, Don Omar y Tego Calderón liderando el movimiento.'
    ], [
    {title: "Tengo una punto 40- Baby Rasta y Gringo" , url: "" },
    {title: "Mi nombre es eddie- Eddie Dee" , url: "" },
    {title: "Muévela- julio Voltio" , url: "" },
    {title: "Mataron a un Inocente- Héctor y Tito" , url: "" },
    {title: "Casanova- Nicky Jam" , url: "" },
    {title: "Stylee canta para usted- Alberto Stylee" , url: "" },
    {title: "Vamos a detonar- Wisin y Yandel" , url: "" },
    {title: "Calibre de más poder- Daddy Yankee" , url: "" },
    {title: "Gerla- Wisin y Yandel" , url: "" },
    {title: "Para la chica- Big Boy" , url: "" },
])

Content(2, "Haciendo escante" , "Nicky Jam" , "escante.jpg" , "https://rateyourmusic.com/release/album/nicky-jam/haciendo-escante" ,
    [
        'En este año empezó a llamarse masivamente reguetón o perreo, consolidándose el primero. De esta manera, deja de emplearse el término UnderGround para referirse a este género musical, el doble sentido que ya existía se mantuvo pero también se producía música más limpia para una mayor audiencia y así se exportará con facilidad fuera de la isla.' ,
        'Muchos de los álbumes, así como artistas que comenzaron a salir en este año introdujeron nuevas recetas a la variada mezcla que era el reguetón creando nuevos estilos y nuevas rimas al género en crecimiento que se estaba masificando gracias al desarrollo del propio Internet'
    ], [
    {title: "Tu cuerpo en la cama- Nicky Jam" , url: ""},
    {title: "Pégate-  Wisin y Yandel" , url: ""},
    {title: "Rockera- Wisin y Yandel" , url: ""},
    {title: "En busca de ti- Wisin y Yandel" , url: ""},
    {title: "Mango Piña- Nicky Jam" , url: ""},
    {title: "Yo se que a ti te gusta- Daddy Yankee" , url: ""},
    {title: "Desesperau- Nicky Jam" , url: ""},
    {title: "En la cama- Nicky Jam" , url: ""},
    {title: "Vamos a perrear- Nicky Jam" , url: ""},
    {title: "Eres tu- Nicky Jam" , url: ""},
])

Content(3, "El Abeyarde" , "Tego Calderon" , "abayarde.jpg" , "https://music.apple.com/es/album/el-abayarde/535880568" ,
    [
        'El año 2002 fue un punto de inflexión para el reguetón, ya que ganó reconocimiento general y comenzó a dominar las ondas radiales1. Durante este tiempo, el reguetón comenzó a incorporar elementos de hip-hop, R&B y música electrónica, lo que aumentó su atractivo y versatilidad.' ,
        'El reguetón comenzó a ser reconocido como un género musical importante en la industria de la música y artistas como Tego Calderón y Daddy Yankee lanzaron álbumes que tuvieron un gran impacto en la escena del reguetón.'

    ], [
    {title: "Latigazo- Daddy Yankee" , url: ""},
    {title: "Son las doce- Daddy Yankee" , url: ""},
    {title: "Al natural- Teo Calderon" , url: ""},
    {title: "Pa' que retozen- Teo Calderon" , url: ""},
    {title: "Mencionando tu nombre- Plan B" , url: ""},
    {title: " Regae rockeao- Wisin y Yandel" , url: ""},
    {title: "Báilalo como tu quieras- Teo Calderon" , url: ""},
    {title: "Déjala- Don Omar" , url: ""},
    {title: "Guatauba- Plan B" , url: ""},
    {title: "Se enciende la disco- Don Omar" , url: ""},
])



// Document Factory
// 
//
// 

function CreateTimeLineContent() {
    const linetime = document.querySelector("#timeline");
    yearsContent.forEach((e, i) => {
        let contentYear = document.createElement("div");
        contentYear.addEventListener("click", () => {
            yearSelected = i
            ContentFactory()
        })
        contentYear.className = "spacetime"
        contentYear.innerHTML = `<div>${e.year}</div><div></div>`
        linetime.append(contentYear);
    });
}
CreateTimeLineContent();

function CreateContent(album, artist, link, picture, dataList) {
    const content = document.querySelector("#content");
    content.innerHTML = ""
    const artistSession = document.createElement("div");
    artistSession.innerHTML = `
    <img alt="album" src="./assets/albums/${picture}">
    <div>
        <h3>Álbum más escuchado: "<span style="color: rgb(97, 30, 160); text-decoration: underline;">${album} - ${artist}</span>"</h2>
        <a href="${link}">Escucharlo aqui</a>
    </div>`
    const dataSession = document.createElement("div");

    dataSession.innerHTML = `
    <h3>
        Datos Curiosos:
    </h3>
    <div>
        ${dataList.map(e => `<p>${e}</p>`).join("")}
    </div>`

    content.append(artistSession)
    content.append(dataSession)
}
function CreateSongList(list) {
    const songList = document.querySelector("#songslist")
    songList.innerHTML = ""
    const header = document.createElement("h3")
    header.innerHTML = "Canciones más escuchadas:"
    songList.append(header);
    list.forEach((e, i) => {
        let element = document.createElement("a")
        element.href = e.url
        element.innerHTML = `${i + 1}- ${e.title}`
        songList.append(element)
    })
}
function ContentFactory() {
    let content = yearsContent[yearSelected];
    CreateContent(content.album, content.artist, content.linkAlbum, content.pictureAlbum, content.dataList);
    CreateSongList(content.songslist)
}
ContentFactory()