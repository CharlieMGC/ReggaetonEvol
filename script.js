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
    { title: "Te ves bien buena- El General", url: "https://www.youtube.com/watch?v=DQ_2Jpsbvio" },
    { title: "So Persígueme- Daddy Yankee", url: "https://www.youtube.com/watch?v=AYQzN2xVslA" },
    { title: "Enfermo de amor- Nando Boom", url: "https://www.youtube.com/watch?v=L6H8O3HMT6I" },
    { title: "Donde mi no vengas-Daddy Yankee", url: "https://www.youtube.com/watch?v=1KxAIUBf4Yk" },
    { title: "La gente sabe- Maicol y Manuel", url: "https://www.youtube.com/watch?v=VuoaGGWDhBw" },
    { title: "Cierra los ojos Baby Rasta y Gringo", url: "https://www.youtube.com/watch?v=K1RCgnj4J9I" },
    { title: "Donde Estan-Big Boy", url: "https://www.youtube.com/watch?v=Hf6PAbokHTg" },
    { title: "Mi Funeral-Daddy Yankee", url: "https://www.youtube.com/watch?v=7_cRc1kDrTI" },
    { title: "Jala Gatillo-LasGuanabanas", url: "https://www.youtube.com/watch?v=JVd2jYh0nsA" },
    { title: "Muchos quieren tumbarme-Ivy Queen", url: "https://www.youtube.com/watch?v=rKF9j-e567U" }
])

Content(1, "El Cartel: Los intocables" , "Daddy Yankee y otros" , "cartel.jpg" , "https://www.youtube.com/playlist?list=PLky05cGhlPQMuT8-mQqMdayCdbeirHdd8" ,
    [
        'Durante este período, artistas como Daddy Yankee, Don Omar, Ivy Queen, Nicky Jam, Wisin & Yandel y otros empezaron a crear música que combinaba el reggae con ritmos de hip-hop y dancehall, mejor conocido como dembow. Otros artistas pioneros incluyen a DJ Negro, DJ Playero y DJ Joe, quienes crearon mezclas de reggae en español y rap en inglés.' ,
        'Una de las claves para el éxito del reguetón fue la temprana adaptación del género a la revolución digital. A finales de la década de 1990, la música se volvió cada vez más accesible a raíz de la popularización de internet y de la piratería musical.' ,
        'Su evolución en los años finales de la década de 1990 tuvo mucha significación para el género. Durante este tiempo, el reggaetón experimentó un aumento masivo en popularidad en todo el mundo, con artistas como Daddy Yankee, Don Omar y Tego Calderón liderando el movimiento.'
    ], [
    {title: "Tengo una punto 40- Baby Rasta y Gringo" , url: "https://www.youtube.com/watch?v=Ym71nQ61C5o" },
    {title: "Mi nombre es eddie- Eddie Dee" , url: "https://www.youtube.com/watch?v=RYGM7NnuDIo" },
    {title: "Muévela- julio Voltio" , url: "https://www.youtube.com/watch?v=zuXt4Xvbf_g" },
    {title: "Mataron a un Inocente- Héctor y Tito" , url: "https://www.youtube.com/watch?v=nPhKpxEV0wo" },
    {title: "Un casanova- Nicky Jam" , url: "https://www.youtube.com/watch?v=D0BtM6-yaF8" },
    {title: "Stylee canta para usted- Alberto Stylee" , url: "https://www.youtube.com/watch?v=qVIfyfLOfaE" },
    {title: "Vamos a detonar- Wisin y Yandel" , url: "https://www.youtube.com/watch?v=WHMp4Id10P8" },
    {title: "Calibre de más poder- Daddy Yankee" , url: "https://www.youtube.com/watch?v=Jv0V6cNz2K8" },
    {title: "Gerla- Wisin y Yandel" , url: "https://www.youtube.com/watch?v=t63JDLwi_GA" },
    {title: "Para la chica- Big Boy" , url: "https://www.youtube.com/watch?v=ovwT0X0BErs" },
])

Content(2, "Haciendo escante" , "Nicky Jam" , "escante.jpg" , "https://rateyourmusic.com/release/album/nicky-jam/haciendo-escante" ,
    [
        'En este año empezó a llamarse masivamente reguetón o perreo, consolidándose el primero. De esta manera, deja de emplearse el término UnderGround para referirse a este género musical, el doble sentido que ya existía se mantuvo pero también se producía música más limpia para una mayor audiencia y así se exportará con facilidad fuera de la isla.' ,
        'Muchos de los álbumes, así como artistas que comenzaron a salir en este año introdujeron nuevas recetas a la variada mezcla que era el reguetón creando nuevos estilos y nuevas rimas al género en crecimiento que se estaba masificando gracias al desarrollo del propio Internet.'
    ], [
    {title: "Tu cuerpo en la cama- Nicky Jam" , url: "https://www.youtube.com/watch?v=wANgjUW3Sbw"},
    {title: "Pégate-  Wisin y Yandel" , url: "https://www.youtube.com/watch?v=MN1DI_F8pec"},
    {title: "Rockera- Wisin y Yandel" , url: "https://www.youtube.com/watch?v=OxXAwXRrjSs"},
    {title: "En busca de ti- Wisin y Yandel" , url: "https://www.youtube.com/watch?v=3lcfDlaf3z8"},
    {title: "Mango Piña- Nicky Jam" , url: "https://www.youtube.com/watch?v=zc0hD7kFqyA"},
    {title: "Yo se que a ti te gusta- Daddy Yankee" , url: "https://www.youtube.com/watch?v=1PJb4xLARaY"},
    {title: "Desesperau- Nicky Jam" , url: "https://www.youtube.com/watch?v=dHQ11r0oFL8"},
    {title: "En la cama- Nicky Jam" , url: "https://www.youtube.com/watch?v=dWd-Nnbto-A"},
    {title: "Vamos a perrear- Nicky Jam" , url: "https://www.youtube.com/watch?v=t9CwQJZsRjE"},
    {title: "Eres tu- Nicky Jam" , url: "https://www.youtube.com/watch?v=gJHs-nbVF2A"},
])

Content(3, "El Abeyarde" , "Tego Calderon" , "abayarde.jpg" , "https://music.apple.com/es/album/el-abayarde/535880568" ,
    [
        'El año 2002 fue un punto de inflexión para el reguetón, ya que ganó reconocimiento general y comenzó a dominar las ondas radiales. Durante este tiempo, el reguetón comenzó a incorporar elementos de hip-hop, R&B y música electrónica, lo que aumentó su atractivo y versatilidad.' ,
        'El reguetón comenzó a ser reconocido como un género musical importante en la industria de la música y artistas como Tego Calderón y Daddy Yankee lanzaron álbumes que tuvieron un gran impacto en la escena del reguetón.'

    ], [
    {title: "Latigazo- Daddy Yankee" , url: "https://www.youtube.com/watch?v=n9grX7lz-ag"},
    {title: "Son las doce- Daddy Yankee" , url: "https://www.youtube.com/watch?v=HzcnksT7XTc"},
    {title: "Al natural- Tego Calderon" , url: "https://www.youtube.com/watch?v=14GYuPpPVzg"},
    {title: "Pa' que retozen- Tego Calderon" , url: "https://www.youtube.com/watch?v=ZPcE6gneWCI"},
    {title: "Mencionando tu nombre- Plan B" , url: "https://www.youtube.com/watch?v=YsTYVDvmDvs"},
    {title: " Regae rockeao- Wisin y Yandel" , url: "https://www.youtube.com/watch?v=auF9bHModa0"},
    {title: "Báilalo como tu quieras- Tego Calderon" , url: "https://www.youtube.com/watch?v=Xu6w8FkhMUY"},
    {title: "Déjala- Don Omar" , url: "https://www.youtube.com/watch?v=yHAGMJ0sYRc"},
    {title: "Guatauba- Plan B" , url: "https://www.youtube.com/watch?v=rM35aZ3vZ5w"},
    {title: "Se enciende la disco- Don Omar" , url: "https://www.youtube.com/watch?v=TOrF3HYVxBs"},
])

Content(4, "The Last Don" , "Don Omar" , "don.jpg" , "https://music.apple.com/mx/album/the-last-don/1467968644" ,
    [
        'En el año 2003, el reguetón comenzó a recibir críticas por el alto contenido sexual de sus letras y bailes. Algunos críticos argumentaban que el género ofrecía una imagen negativa de la mujer.' ,
        'Algunos artistas, como Aleks Syntek, expresaron su descontento con el reguetón. Syntek lo llamó “música hecha por simios” y "pornografía auditiva".'
    ], [
        {title: "Dile- Don Omar" , url: "https://www.youtube.com/watch?v=zODmu06pqvg"},
        {title: "Dale Don dale- Don Omar" , url: "https://www.youtube.com/watch?v=MswTV_3mWlk"},
        {title: "Aventura- Wisin y Yandel" , url: "https://www.youtube.com/watch?v=IEVwKK-w7mk"},
        {title: "Say jo- Yandel" , url: "https://www.youtube.com/watch?v=wW0wUFUwVv0"},
        {title: "Segurosqui- Daddy Yankee" , url: "https://www.youtube.com/watch?v=D8FSuA1hS7c"},
        {title: "Métele sazón- Tego Claderón" , url: "https://www.youtube.com/watch?v=48c7Y_MUHWQ"},
        {title: "Aquí está tu caldo- Daddy Yankee" , url: "https://www.youtube.com/watch?v=A2EIzgw3afc"},
        {title: "Solo te llamé- Plan B" , url: "https://www.youtube.com/watch?v=AQ9kHSm_x00"},
        {title: "Que vas a hacer- Zion & Lennox" , url: "https://www.youtube.com/watch?v=NonueJk2fyw"},
        {title: "Se activaron los pistoleros- Wisin y Yandel" , url: "https://www.youtube.com/watch?v=xQWNd1jlUos"},
])

Content(5, "Barrio Fino" , "Daddy Yankee" , "fino.jpg" , "https://www.youtube.com/playlist?list=PLtjecRADkOTmXuJqSw4TSnweinpSi7Hfc" , 
    [
        'Uno de los temas responsables por su expansión fue “Gasolina”, de Daddy Yankee, que se convirtió en un éxito global en 2004.' ,
        'En los inicios, hubo varios esfuerzos por censurar el género bajo la excusa de que el reguetón era inmoral y sus canciones promovían valores negativos y eran inapropiadas, especialmente para los jóvenes.'
    ], [
        {title: "No Me Dejes Solo - Wisin y Yandel", url: "https://www.youtube.com/watch?v=oKQNLMdx5eo"},
        {title: "Gasolina - Daddy Yankee", url: "https://www.youtube.com/watch?v=CCF1_jI8Prk"},
        {title: "Lo Que Pasó, Pasó - Daddy Yankee", url: "https://www.youtube.com/watch?v=hVD5kOAy-Yo"},
        {title: "Salud y Vida - Daddy Yankee", url: "https://www.youtube.com/watch?v=dJNgPMssRZ0"},
        {title: "Baila Morena - Hector y Tito", url: "https://www.youtube.com/watch?v=A88mIXAITVA"},
        {title: "Yo Voy - Zion & Lennox", url: "https://www.youtube.com/watch?v=oGgeJka3L6s"},
        {title: "Vive Contigo - Nicky Jam", url: "https://www.youtube.com/watch?v=NYhADx_rbLI"},
        {title: "Vamos Pa La Calle - Hector El Father", url: "https://www.youtube.com/watch?v=RUHrowjT_bE"},
        {title: "Ven Bailalo - Angel & Khriz", url: "https://www.youtube.com/watch?v=LxUikOs_qSc"},
        {title: "Pobre Diabla - Don Omar", url: "https://www.youtube.com/watch?v=_Zila5rLu74"}
])

Content(6, "Pa'l Mundo" , "Wisin y Yandel" , "palmundo.jpg" , "https://www.deezer.com/mx/album/259182" ,
    [
        'El reguetón en 2005 se caracterizó por una mayor diversidad en las letras de las canciones, abordando temas como la autonomía y el empoderamiento femenino.' ,
        'Este cambio no sólo enriqueció la diversidad musical del reguetón, sino que también contribuyó a desafiar las normas culturales y de género preexistentes en la industria musical.' ,
        'Por segundo año consecutivo, el reguetón se impuso en el 2005 como el ritmo tropical de mayor explosión musical.'
    ], [
        {title: "Rakata - Wisin y Yandel", url: "https://www.youtube.com/watch?v=pKsB8WYXmIE"},
        {title: "Castigo - Hector El Father", url: "https://www.youtube.com/watch?v=2PcLVpNP4Jw"},
        {title: "Mayor Que Yo - Wisin y Yandel", url: "https://www.youtube.com/watch?v=dTlXIbgVuc0"},
        {title: "Rompe - Daddy Yankee", url: "https://www.youtube.com/watch?v=_PvdrueQ_Ms"},
        {title: "Noche de Sexo - Wisin y Yandel", url: "https://www.youtube.com/watch?v=5V_A9NXSRTw"},
        {title: "Ella y Yo - Aventura", url: "https://www.youtube.com/watch?v=75hvub0nVBY"},
        {title: "Bandolero - Don Omar", url: "https://www.youtube.com/watch?v=Qjorp3Ke62c"},
        {title: "Sacala - Hector El Father", url: "https://www.youtube.com/watch?v=c8Zw8QyIVWM"},
        {title: "El Telefono - Wisin y Yandel", url: "https://www.youtube.com/watch?v=tFYksUwUp2A"},
        {title: "Calor - Hector El Father", url: "https://www.youtube.com/watch?v=soYo9WZlX9w"}
])

Content(7, "King of Kings" , "Don Omar" , "kings.jpg" , "https://www.youtube.com/playlist?list=PL8uehVB81yy5KLbLeSWp9QF1JYYbXNXdn" ,
    [
        'El reguetón continuó su expansión global, con artistas como Daddy Yankee, Don Omar, Wisin & Yandel, y Tego Calderón ganando reconocimiento internacional.' ,
        'En 2006, se lanzaron varios álbumes de reguetón que tuvieron un gran impacto en la industria musical. Un ejemplo es el álbum “2006 Año De Exitos: Reggaeton”, una compilación de varios artistas.' ,
        'Al igual que en años anteriores, el reguetón continuó recibiendo críticas por el alto contenido sexual de sus letras y bailes.',
    ], [
        {title: "Noche de Entierro - Wisin y Yandel", url: "https://www.youtube.com/watch?v=Kr7TtYgCbmk"},
        {title: "Alocate - Zion", url: "https://www.youtube.com/watch?v=TA-ZCU-NZgc"},
        {title: "Salio El Sol - Don Omar", url: "https://www.youtube.com/watch?v=Z-3su2ov8Vg"},
        {title: "Pegao - Wisin y Yandel", url: "https://www.youtube.com/watch?v=vS8_MxGQ-N0"},
        {title: "Yo Te Quiero - Wisin y Yandel", url: "https://www.youtube.com/watch?v=HtPjZj03FhI"},
        {title: "Frikitona - Plan B", url: "https://www.youtube.com/watch?v=w1PAui9SGf4"},
        {title: "Me Quiere Besar - Alexis y Fido", url: "https://www.youtube.com/watch?v=nkU2AvD1ipk"},
        {title: "Rumor de Guerra - Hector El Father", url: "https://www.youtube.com/watch?v=Vg1qsCyeh-I"},
        {title: "Pam Pam - Wisin y Yandel", url: "https://www.youtube.com/watch?v=ZoVCM5iUaL0"},
        {title: "Con Ella Me Quedaré - Zion", url: "https://www.youtube.com/watch?v=5VE6YmbfsYE"}
])

Content(8, "El Cartel: Big Boss" , "Daddy Yankee" , "bigboss.jpg" , "https://www.deezer.com/mx/album/259082812" , 
    [
        'El día mundial del Reggaeton fue establecido el 15 de septiembre del 2007, en este día se reconoce la importancia y el impacto cultural del género en la música contemporánea. Fue la fecha adoptada debido a un exitoso concierto que tuvo lugar en el estadio Hiram Bithorn de San Juan, en Puerto Rico, la cuna del reggaeton.' ,
        'Urban Box Office publicó una compilación doble llamada Reggaetón Niños, en la que un grupo de menores coverea grandes éxitos del género (Rakata, Oye Mi Canto) pero con letras modificadas para que fueran aptas para menores de edad.'
    ], [
        {title: "Ella Me Levantó - Daddy Yankee", url: "https://www.youtube.com/watch?v=Eje9VIHgEsU"},
        {title: "Ahora Es - Wisin y Yandel", url: "https://www.youtube.com/watch?v=Gk_asGADGaA"},
        {title: "No Te Veo - Jowell y Randy", url: "https://www.youtube.com/watch?v=LKWrLmbsZ0k"},
        {title: "Tradicional a Lo Bravo - Tego Calderón", url: "https://www.youtube.com/watch?v=PKqbDosdgRs"},
        {title: "Tra - Tito El Bambino", url: "https://www.youtube.com/watch?v=IB26aqeT5Sw"},
        {title: "Amor de Pobre - Zion", url: "https://www.youtube.com/watch?v=dLV05Er73cc"},
        {title: "Perdóname - La Factoría", url: "https://www.youtube.com/watch?v=-D5JjA8OKBc"},
        {title: "Sexy Movimiento - Wisin y Yandel", url: "https://www.youtube.com/watch?v=yfCZGk8eCUk"},
        {title: "Quizás Remix - Tony Dize", url: "https://www.youtube.com/watch?v=gRXEtxkpXpw"},
        {title: "5 Letras - Alexis y Fido", url: "https://www.youtube.com/watch?v=OK-yFyj-og8"}
])

Content(9, "Talento de barrio" , "Daddy Yankee" , "talento.jpg" , "https://open.spotify.com/intl-es/album/7JeWY0pvC27pCgn5eiSeV6" , 
    [
        'El reguetón comenzó a ser adoptado y reinterpretado por la comunidad LGBTTTIQ+, lo que contribuyó a la diversidad y evolución del género.' , 
        'En este año Daddy Yankee crea el álbum Talento de Barrio que es la banda sonora de la película del mismo nombre, protagonizada por él mismo.'
    ], [
        { title: "Somos de Calle- Daddy Yankee", url: "https://www.youtube.com/watch?v=HMRyk9TrlU4" },
        { title: "Pose- Daddy Yankee", url: "https://www.youtube.com/watch?v=ZSuBKPYrMAE" },
        { title: "Llamada de Emergencia- Daddy Yankee", url: "https://www.youtube.com/watch?v=NkUO0sSEOgM" },
        { title: "¿Qué Tengo Que Hacer?- Daddy Yankee", url: "https://www.youtube.com/watch?v=uHgnebZ_jYo" },
        { title: "Me Estás Tentando- Wisin y Yandel", url: "https://www.youtube.com/watch?v=r7GBGZ004vQ" },
        { title: "Te Amo- Makano", url: "https://www.youtube.com/watch?v=V0eWmFEoJ14" },
        { title: "Abusadora- Wisin y Yandel", url: "https://www.youtube.com/watch?v=YUXH2DqVOC8" },
        { title: "Tuve un Sueño- Plan B", url: "https://www.youtube.com/watch?v=R_19nEdQKJg" },
        { title: "¿Para Qué Volver?- Arcángel", url: "https://www.youtube.com/watch?v=__cDkwgzFRk" },
        { title: "Déjame Entrar- Makano", url: "https://www.youtube.com/watch?v=XAN9m2ZxvEM" }
])

Content(10, "IDon" , "Don Omar" , "idon.jpg" , "https://open.spotify.com/intl-es/album/20Jf4Vb1V3MMv1QI1cKNNI" , 
    [
        'El año 2009 fue un año importante para el reguetón, especialmente en Colombia. Durante este año, el género se consolidó como el preferido por los jóvenes. Fue en esta temporada que las emisoras de pop de la época le abrieron la puerta al llamado “género urbano” y empezaron a darle espacios importantes a artistas que sonaban tímidamente, pero que la gente empezó a pedir con desespero.' , 
        'En Colombia ya se conocía la propuesta de los reyes del reggaetón: Daddy Yankee, Don Omar, Tego Calderón y Wisin & Yandel. Sus temas sonaban en algunas emisoras y en las discotecas todo el mundo coreaba sus canciones, pero fue para esta época que las propuestas de reggaetón colombiano, especialmente paisa, empezó a conquistar a las diferentes audiencias.' ,
        'Fue así como conocimos a J Balvin y Reykon, dos de los pioneros del género en Colombia, quienes llevaron el reggaetón antioqueño a estancias internacionales.'
    ], [
        {title: "Besos Mojados - Wisin y Yandel", url: "https://www.youtube.com/watch?v=1zpAqdd8tyw"},
        {title: "Prrrum - Cosculluela", url: "https://www.youtube.com/watch?v=GtHbvt5jU3M"},
        {title: "Mi Cama Huele a Ti - Tito El Bambino", url: "https://www.youtube.com/watch?v=8YKGlV6VGuA"},
        {title: "Sexy Robótica - Don Omar", url: "https://www.youtube.com/watch?v=AZJEseRTzag"},
        {title: "Under - Tito El Bambino", url: "https://www.youtube.com/watch?v=xjqQQAdF5Bs"},
        {title: "Virtual Diva - Don Omar", url: "https://www.youtube.com/watch?v=vRBgZ4aMPio"},
        {title: "Por Un Segundo - Aventura", url: "https://www.youtube.com/watch?v=GHLVjriwzFg"},
        {title: "Na Na Nau Remix - Cosculluela", url: "https://www.youtube.com/watch?v=3i_QMSvIyeY"},
        {title: "El Ritmo No Perdona - Daddy Yankee", url: "https://www.youtube.com/watch?v=aaomZjmdSUQ"},
        {title: "Puesto Pa Ti - Gadiel", url: "https://www.youtube.com/watch?v=lVZ4U8ZsQhY"}
])

Content(11, "House of Pleasure" , "Plan B" , "house.jpg" , "https://open.spotify.com/intl-es/album/4s9iYsrtBIvkZn5AEbUbl0" , 
    [
        'Durante la década de 2010, el reguetón experimentó una expansión significativa, llegando a nuevas audiencias en todo el mundo. Artistas como J Balvin y Maluma comenzaron a crear música de reguetón, y el auge de los servicios de streaming de música como Spotify hizo que el reguetón fuera más accesible para los oyentes en todo el mundo.' , 
        'El reguetón también tuvo un impacto cultural significativo. Por ejemplo, el álbum “Real G 4 Life” de Ñengo Flow se convirtió en un mantra para los latinos criados en el barrio en todo el mundo. Este álbum es ahora uno de los más influyentes en la historia de la música latina, no solo en el rap y el reguetón.'
    ], [
        {title: "Si No Le Contesto - Plan B", url: "https://www.youtube.com/watch?v=adyZO3E63Gg"},
        {title: "Es Un Secreto - Plan B", url: "https://www.youtube.com/watch?v=fsUP-KYPI98"},
        {title: "Loco - Jowell y Randy", url: "https://www.youtube.com/watch?v=OKOM-m71gtc"},
        {title: "Hasta Abajo - Don Omar", url: "https://www.youtube.com/watch?v=SMM1WhmlQzI"},
        {title: "Taboo - Don Omar", url: "https://www.youtube.com/watch?v=lRWqYR3e7xE"},
        {title: "Danza Kuduro - Don Omar", url: "https://www.youtube.com/watch?v=7zp1TbLFPp8"},
        {title: "Cuando Cuando Es - J King y Maximan", url: "https://www.youtube.com/watch?v=MqNJvHYqKFY"},
        {title: "La Despedida - Daddy Yankee", url: "https://www.youtube.com/watch?v=DWBjvNIJagg"},
        {title: "Te Iré a Buscar - Farruko", url: "https://www.youtube.com/watch?v=1ehXj3KY3Bg"},
        {title: "Estoy Enamorado - Wisin y Yandel", url: "https://www.youtube.com/watch?v=whBcmlaSLJM"}
])

Content(12, "Otro Nivel de Música" , "J. Álvarez" , "nivel.jpg" , "https://open.spotify.com/intl-es/album/69SdZPwHXhMlwGSlAUXPAI?si=x9C1qcFiTt-9ePkiK4DwEA&nd=1&dlsi=85ada942e478475b" , 
    [
        'El reguetón continuó expandiéndose y ganando popularidad en todo el mundo. Artistas como Rosalía, Luis Fonsi, Reik, Shakira y Maná incursionaron en este género, lo que ayudó a multiplicar sus reproducciones.' ,
        'Reggaetoneros como Nicky Jam, J Balvin, y Maluma lograron llegar a espacios insospechados.' ,
        'El reguetón, a través de sus letras, promovía la cosificación de la mujer y la masculinidad tóxica, lo que repercutía en cómo los jóvenes concebían las relaciones y la sexualidad.'
    ], [
        {title: "Energía - Alexis y Fido", url: "https://www.youtube.com/watch?v=HzZGVPZaZWw"},
        {title: "Camuflaje - Alexis y Fido", url: "https://www.youtube.com/watch?v=KB-i6BTLcKo"},
        {title: "Aprovecha - Nova y Jory", url: "https://www.youtube.com/watch?v=q3g17Dewwt0"},
        {title: "Llama Al Sol - Tito El Bambino", url: "https://www.youtube.com/watch?v=WKU3QkzVW2k"},
        {title: "Junto Al Amanecer - J Alvarez", url: "https://www.youtube.com/watch?v=fMiq-utP6SY"},
        {title: "Haciéndote El Amor - Ñengo Flow", url: "https://www.youtube.com/watch?v=R7fQ5EwOfGM"},
        {title: "No Piensas En Mí - Cosculluela", url: "https://www.youtube.com/watch?v=-qIi8K8j0vk"},
        {title: "No Dice Na - Ñengo Flow", url: "https://www.youtube.com/watch?v=bUqiGgaLT3A"},
        {title: "Zun Zun Rompiendo Caderas - Wisin y Yandel", url: "https://www.youtube.com/watch?v=cjcTMfqLo04"},
        {title: "Sexo, Sudor y Calor - J Alvarez", url: "https://www.youtube.com/watch?v=fcjJKkVrlmc"}
])

Content(13, "El imperio Nazza" , "Varios artistas" , "nazza.jpg" , "https://open.spotify.com/intl-es/album/7A8VuUfwz8fekplklqluD2" , 
    [
        'El reguetón ha sido criticado por contener mensajes de violencia y rivalidad, por normalizar el consumo de drogas y sustancias psicoactivas, por cosificar y sexualizar a la mujer, así como por promover una visión hedonista y vacía. Sin embargo, también se reconoce que brinda opciones de empleo y constituye una oportunidad para que jóvenes que viven en entornos desfavorecidos sigan los pasos de otros artistas y alcancen el éxito.' ,
        'Un estudio realizado por Jesús Martín-Fernández, compositor y neurocirujano, encontró que el reguetón activa significativamente los ganglios basales del cerebro, neuronas que se relacionan con el movimiento y con el circuito del placer y la recompensa.'
    ], [
        {title: "La Fórmula Sigue - Zion y Lennox", url: "https://www.youtube.com/watch?v=Iz3Sj6r2JPQ"},
        {title: "Se Cree Mala - Plan B", url: "https://www.youtube.com/watch?v=9nEXiqpJu10"},
        {title: "Te Dijeron - Plan B", url: "https://www.youtube.com/watch?v=UnhIVf7OlwM"},
        {title: "Algo Me Gusta De Ti - Wisin y Yandel", url: "https://www.youtube.com/watch?v=3rgwIp6D3ow"},
        {title: "Follow The Leader - Wisin y Yandel", url: "https://www.youtube.com/watch?v=Xmap94TcDNs"},
        {title: "Obsesión - Maluma", url: "https://www.youtube.com/watch?v=8Z9Hc8G_a6U"},
        {title: "El Amante - J Alvarez", url: "https://www.youtube.com/watch?v=YY33oEDtJv0"},
        {title: "Limbo - Daddy Yankee", url: "https://www.youtube.com/watch?v=6BTjG-dhf5s"},
        {title: "Zumba - Don Omar", url: "https://www.youtube.com/watch?v=AAKuxyGgPo4"},
        {title: "No Sigue Modas - Don Omar", url: "https://www.youtube.com/watch?v=0zPjfX8PiGw"}
])

Content(14, "La Familia" , "J Balvin" , "familia.jpg" , "https://open.spotify.com/intl-es/album/0eaYHx42IseJf6jfxKi2Nr" , 
    [
        'Muchos artistas de reguetón comenzaron a cambiar su imagen y sonido para atraer a una audiencia más amplia. Esto incluyó la incorporación de elementos de pop, electrónica y otros géneros en su música.' ,
        'El reguetón se convirtió en una influencia importante en la cultura pop. Artistas de otros géneros comenzaron a incorporar elementos de reguetón en su música, lo que ayudó a popularizar aún más el género.' ,
        'El reguetón comenzó a recibir reconocimiento internacional en 2013. Artistas de reguetón fueron invitados a actuar en grandes eventos y festivales de música en todo el mundo.'
    ], [
        {title: "6 AM - J Balvin", url: "https://www.youtube.com/watch?v=u3QiDCAil0o"},
        {title: "Yo Te Lo Dije - J Balvin", url: "https://www.youtube.com/watch?v=-l9FX_H7DPo"},
        {title: "Prendan Los Motores - Jowell y Randy", url: "https://www.youtube.com/watch?v=6_tOCH6H9oM"},
        {title: "Ay Vamos - J Balvin", url: "https://www.youtube.com/watch?v=TapXs54Ah3E"},
        {title: "Hasta Abajo - Yandel", url: "https://www.youtube.com/watch?v=vMHdvd3XEyU"},
        {title: "Déjate Amar - Yandel", url: "https://www.youtube.com/watch?v=BVFX7rjgBO8"},
        {title: "Moviendo Caderas - Yandel", url: "https://www.youtube.com/watch?v=hsOrZAnQTgc"},
        {title: "Besas Tan Bien - Farruko", url: "https://www.youtube.com/watch?v=E-kkX2UuBcg"},
        {title: "A Beber - Nicky Jam", url: "https://www.youtube.com/watch?v=7T_09ueky2o"},
        {title: "La Familia - J Balvin", url: "https://www.youtube.com/watch?v=8BgPXrBAdoQ"}
])

Content(15, "Love y Sex" , "Plan B" , "lovesex.jpg" , "https://www.deezer.com/mx/album/8627654" , 
    [
        'Colaboraciones internacionales: El reguetón vio un aumento en las colaboraciones internacionales, con artistas de otros géneros musicales uniéndose a reggaetoneros para crear éxitos globales.' ,
        'Canciones como “Adrenalina” de Wisin, Jennifer Lopez y Ricky Martin se convirtieron en éxitos virales, impulsando la popularidad del reguetón en las plataformas de redes sociales y servicios de streaming.' ,
        'El reguetón comenzó a ser más reconocido en premiaciones de música, obteniendo nominaciones y premios que antes no se consideraban para el género.'
    ], [
        {title: "Choca - Plan B", url: "https://www.youtube.com/watch?v=tTez58ePZlY"},
        {title: "Fanática Sensual - Plan B", url: "https://www.youtube.com/watch?v=L7LtJCYpSbQ"},
        {title: "Mi Vecinita - Plan B", url: "https://www.youtube.com/watch?v=6BTWYxW96ao"},
        {title: "Candy - Plan B", url: "https://www.youtube.com/watch?v=k8nxe6UE1gY"},
        {title: "Adrenalina - Ricky Martin", url: "https://www.youtube.com/watch?v=0pVUZ4HAxSA"},
        {title: "Que Viva la Vida - Wisin", url: "https://www.youtube.com/watch?v=xeBmvHG4P1U"},
        {title: "Salgo - Farruko", url: "https://www.youtube.com/watch?v=jqXXnPNiQSs"},
        {title: "Lejos de Aquí - Farruko", url: "https://www.youtube.com/watch?v=UacF-Z4bRpY"},
        {title: "Travesuras - Nicky Jam", url: "https://www.youtube.com/watch?v=OxxggwHFj7M"},
        {title: "Si No Te Tengo - Farruko", url: "https://www.youtube.com/watch?v=QGS2rh9juhQ"}
])

Content(16, "Pretty Boy, Dirty Boy" , "Maluma" , "predirty.jpg" , "https://open.spotify.com/intl-es/album/3PomvFR694SrCSZzDWMWV7" , 
    [
        'El reguetón también enfrentó algunas controversias en 2015. Por ejemplo, hubo críticas sobre la representación de las mujeres en las letras y videos de reguetón8910. En 2015, se lanzó una campaña muy exitosa, llamada “Piénsalo - no dejes que la música te degrade”, que tradujo el lenguaje horrendo de varias canciones en imágenes que representan el significado de este discurso.' ,
        'En los Premios Billboard de la Música Latina 2015, J Balvin ganó el premio al Artista del Año1. Además, Don Omar, una figura clave del reguetón, recibió varios reconocimientos en 2015.'
    ], [
        {title: "Sígueme y Te Sigo - Daddy Yankee", url: "https://www.youtube.com/watch?v=EfF9EE6ZR5E"},
        {title: "El Perdón - Enrique Iglesias", url: "https://www.youtube.com/watch?v=mpmfbLSQRZw"},
        {title: "Nota de Amor - Wisin", url: "https://www.youtube.com/watch?v=wZRWpr1G1Qw"},
        {title: "Me Voy Enamorando - Chino y Nacho", url: "https://www.youtube.com/watch?v=0yr75-gxVtM"},
        {title: "Borro Cassette - Maluma", url: "https://www.youtube.com/watch?v=Xk0wdDTTPA0"},
        {title: "Nacimos Para Morir - Anuel AA", url: "https://www.youtube.com/watch?v=NsOHFQSdt78"},
        {title: "Ginza - J Balvin", url: "https://www.youtube.com/watch?v=zZjSX01P5dE"},
        {title: "Sunset - Farruko", url: "https://www.youtube.com/watch?v=xyckaqTNwKY"},
        {title: "Ganas de Ti - Zion y Lennox", url: "https://www.youtube.com/watch?v=h4UyCZUrCoU"},
        {title: "Encantadora - Yandel", url: "https://www.youtube.com/watch?v=F877bV0Ai3E"}
])

Content(17, "Energía" , "J Balvin " , "energia.jpg" , "https://open.spotify.com/intl-es/album/4cGc9Eeb3Gjff2Aq5ILLEf" ,
    [
        'En 2016, hubo una creciente campaña en Facebook contra el reguetón, un género musical latino que fusiona el hip hop y el reggae dancehall. La campaña, titulada “Usa la razón — que la música no degrade tu condición”, utilizó imágenes impactantes para ilustrar las letras perturbadoras de las canciones de reguetón populares, que suelen ser violentas, lascivas y degradantes para las mujeres.' ,
        'Algunos artistas de reguetón comenzaron a ganar reconocimiento en 2016. Por ejemplo, el cantante y compositor estadounidense de reggaeton Nicky Jam abrió el doble CD con “Hasta el Amanecer”, el tema que se hizo viral con la interpretación casera de Cristiano Ronaldo y su hijo.'
    ], [
        {title: "Hasta el Amanecer - Nicky Jam", url: "https://www.youtube.com/watch?v=kkx-7fsiWgg"},
        {title: "Me Reclama - Ozuna", url: "https://www.youtube.com/watch?v=fKLg3fFFX18"},
        {title: "Andas en Mi Cabeza - Chino y Nacho", url: "https://www.youtube.com/watch?v=AMTAQ-AJS4Y"},
        {title: "No Pasa de Moda - Tego Calderón", url: "https://www.youtube.com/watch?v=saKxuLyDPgc"},
        {title: "El Perdedor - Maluma", url: "https://www.youtube.com/watch?v=PJniSb91tvo"},
        {title: "Un Bellaqueo - Ozuna", url: "https://www.youtube.com/watch?v=IdBdp208MOc"},
        {title: "Shaky Shaky - Daddy Yankee", url: "https://www.youtube.com/watch?v=aKuivabiOns"},
        {title: "Dile Que Tú Me Quieres - Ozuna", url: "https://www.youtube.com/watch?v=WAcnWtZjDWE"},
        {title: "Vente Pa' Ca - Ricky Martin", url: "https://www.youtube.com/watch?v=iOe6dI2JhgU"},
        {title: "Vacaciones - Wisin", url: "https://www.youtube.com/watch?v=ULoXlXJOZOo"}
])

Content(18, "Odisea" , "Ozuna" , "odisea.jpg" , "https://open.spotify.com/intl-es/album/4s05NbwGgw5SO42AdsN5Oo" , 
    [
        'La canción “Despacito” de Luis Fonsi y Daddy Yankee, que incorpora ritmos de reguetón, se convirtió en un fenómeno global en 2017, dominando las listas de éxitos en todo el mundo.' ,
        'En los Premios Billboard de la Música Latina 2017, Nicky Jam, una estrella de reguetón que se recuperó después de una década de silencio luchando contra la adicción a las drogas, fue el gran ganador, llevándose seis premios.'
    ], [
        {title: "La Rompe Corazones - Ozuna & Daddy Yankee", url: "https://www.youtube.com/watch?v=h-yUx0MfStA"},
        {title: "Despacito - Luis Fonsi", url: "https://www.youtube.com/watch?v=8wU7WB_ocSU"},
        {title: "Súbeme la Radio - Enrique Iglesias", url: "https://www.youtube.com/watch?v=d2o502wyLSE"},
        {title: "Felices los 4 - Maluma", url: "https://www.youtube.com/watch?v=t_jHrUE5IOk"},
        {title: "Mi Gente - J Balvin", url: "https://www.youtube.com/watch?v=niOX40R_zWQ"},
        {title: "Mayores - Becky G", url: "https://www.youtube.com/watch?v=GMFewiplIbw"},
        {title: "Qué Va - Ozuna", url: "https://www.youtube.com/watch?v=9J9FlVCUeLM"},
        {title: "Una Lady Como Tú - Manuel Turizo", url: "https://www.youtube.com/watch?v=VYtJAuoZxcc"},
        {title: "Perro Fiel - Shakira", url: "https://www.youtube.com/watch?v=SHq2qrFUlGY"},
        {title: "Cásate Conmigo - Silvestre Dangond & Nicky Jam", url: "https://www.youtube.com/watch?v=MnIg2BBQ26Q"}
])

Content(19, "X100PRE" , "Bad Bunny" , "siempre.jpg" , "https://open.spotify.com/intl-es/album/7CjJb2mikwAWA1V6kewFBF" , 
    [
        'En 2018, se celebró el Reggaeton Beach Festival en Barcelona, que reunió a grandes estrellas mundiales del movimiento latino.' ,
        'Karol G fue coronada como la Mejor Nueva Artista en los Latin GRAMMYs de 2018, lo que le dio a la artista de reguetón colombiana su primer premio.' ,
        'Hubo un aumento en las colaboraciones internacionales en el reguetón. Por ejemplo, DJ Snake presentó a Cardi B, Ozuna y Selena Gómez en el gran éxito “Taki Taki”, que debutó en el número 1 en la lista Hot Latin Songs de Billboard en 2018.'
    ], [
        {title: "El Baño - Bad Bunny", url: "https://www.youtube.com/watch?v=gu9_m0vm7fM"},
        {title: "Todo Comienza en la Disco - Daddy Yankee", url: "https://www.youtube.com/watch?v=nI1YOQxJIHs"},
        {title: "Dura - Daddy Yankee", url: "https://www.youtube.com/watch?v=sGIm0-dQd8M"},
        {title: "Me Niego - Reik", url: "https://www.youtube.com/watch?v=JyqD_zfXfi8"},
        {title: "X (Equis) - J Balvin", url: "https://www.youtube.com/watch?v=_I_D_8Z4sJE"},
        {title: "Única - Ozuna", url: "https://www.youtube.com/watch?v=Ck4xHocysLw"},
        {title: "Quiere Beber - Anuel AA", url: "https://www.youtube.com/watch?v=BTtBmo5EbEk"},
        {title: "Ponle - J Balvin", url: "https://www.youtube.com/watch?v=8eQLiMp_11k"},
        {title: "Calma - Farruko", url: "https://www.youtube.com/watch?v=AnkhkBGvXbA"},
        {title: "MIA - Bad Bunny", url: "https://www.youtube.com/watch?v=OSUxrSe5GbI"}
])

Content(20, "Oasis" , "J Balvin y Bad Bunny" , "oasis.jpg" , "https://open.spotify.com/intl-es/album/6ylFfzx32ICw4L1A7YWNLN" ,
    [
        'En septiembre de 2019, algunos de los artistas más destacados del reguetón llamaron la atención publicando en sus redes sociales la frase “Sin reggaetón no hay Latin Grammy”. Esto fue en respuesta a la falta de representación del reguetón en muchas de las categorías principales de los premios.' ,
        'En julio de 2019, el reguetón se convirtió en un vehículo para la resistencia en Puerto Rico. Los manifestantes usaron la música para unirse y expresar su descontento, lo que finalmente llevó a la renuncia del gobernador Ricky Rosselló.'
    ], [
        {title: "Vacilón - Don Omar", url: "https://www.youtube.com/watch?v=AwV-TKOeUOw"},
        {title: "Fantasías - Rauw Alejandro", url: "https://www.youtube.com/watch?v=8jwbnGrX7-c"},
        {title: "Que Tire Pa' 'Lante - Daddy Yankee", url: "https://www.youtube.com/watch?v=fAgvmh1jaCE"},
        {title: "Chica Bombastic - Wisin y Yandel", url: "https://www.youtube.com/watch?v=ZF0958S0sW8"},
        {title: "Secreto - Anuel AA", url: "https://www.youtube.com/watch?v=gFZfwWZV074"},
        {title: "Rebota - Guaynaa", url: "https://www.youtube.com/watch?v=mmKAn1MeB04"},
        {title: "Con Calma - Daddy Yankee", url: "https://www.youtube.com/watch?v=DiItGE3eAyQ"},
        {title: "Aullando - Romeo Santos", url: "https://www.youtube.com/watch?v=-n9krkSb-ug"},
        {title: "Verte Ir - Anuel AA", url: "https://www.youtube.com/watch?v=a7OER4xeBp0"},
        {title: "No Me Conoce - Jhay Cortez", url: "https://www.youtube.com/watch?v=Bv9TUVgu6d4"}
])

Content(21, "YHLQMDLG" , "Bad Bunny" , "badbunny.jpg" , "https://open.spotify.com/intl-es/album/5lJqux7orBlA1QzyiBGti1" , 
    [
        'El reguetón continuó su dominio en la música pop latina1. Artistas como Bad Bunny, María Becerra y Manuel Turizo estuvieron omnipresentes, desde bares, clases de gimnasia, fiestas hasta anuncios de televisión.' , 
        'La música Urbana (también conocida como “Latin urban”) dominó las listas internacionales de streaming1. Este género, que incluye reguetón, dembow, dancehall, hip hop latino y otros, ahora representa casi un cuarto de las listas a nivel global.' ,
        'Esta explosión de la música urbana ha provocado un aumento en el interés internacional en el español, el tercer idioma más hablado en el planeta con casi 600 millones de hablantes.'
    ], [
        {title: "Morado - J Balvin", url: "https://www.youtube.com/watch?v=d5ZVaWxkAaQ"},
        {title: "Ganas de Ti - Sech", url: "https://www.youtube.com/watch?v=WHvyae02uKo0"},
        {title: "Yo Perreo Sola - Bad Bunny", url: "https://www.youtube.com/watch?v=GDbRbuxL1tU"},
        {title: "Relación - Sech", url: "https://www.youtube.com/watch?v=c6D8v6DhKc4"},
        {title: "Jangueo - Tego Calderón", url: "https://www.youtube.com/watch?v=3BrttvaDRuo"},
        {title: "Sigue - Arcángel", url: "https://www.youtube.com/watch?v=lQV0VSbvHa0"},
        {title: "Caramelo - Ozuna", url: "https://www.youtube.com/watch?v=BFlG5sD540k"},
        {title: "Reggaetonera - Anuel AA", url: "https://www.youtube.com/watch?v=RMl7Fx-WNy4"},
        {title: "La Tóxica - Farruko", url: "https://www.youtube.com/watch?v=puugRJxgdt4"},
        {title: "Por Mi Reggae Muero - Yandel", url: "https://www.youtube.com/watch?v=cD77aKOOP5Q"}
])

Content(22, "KG0516" , "Karol G" , "karolg.jpg", "https://open.spotify.com/intl-es/album/4FftCsAcXXD1nFO9RFUNFO" , 
    [
        'Artistas como Rauw Alejandro y C. Tangana se negaron a limitarse a los parámetros de sus géneros esperados. Por ejemplo, el éxito de Rauw “Todo De Ti” comenzó con la cuenta regresiva de tambores acústicos, luego mezcló su sensibilidad urbana con toques de disco y new wave.' ,
        'A medida que el mundo comenzó a reconstruirse a partir de COVID-19 en 2021, las estrellas latinas utilizaron sus experiencias para inspirar arte que tuvo un impacto duradero.'
    ], [
        {title: "¿Qué Más Pues? - J Balvin, Maria Becerra", url: "https://www.youtube.com/watch?v=zisuhZqTeH4"},
        {title: "Yonaguni - Bad Bunny", url: "https://www.youtube.com/watch?v=doLMt10ytHY"},
        {title: "El Makinon - Karol G feat. Mariah Angeliq", url: "https://www.youtube.com/watch?v=gYqOUCW4nbU"},
        {title: "Pareja Del Año - Sebastian Yatra feat. Myke Towers", url: "https://www.youtube.com/watch?v=-hPU1uMHzEE"},
        {title: "Ram Pam Pam - Natti Natasha & Becky G", url: "https://www.youtube.com/watch?v=_wE3hDN06Qg"},
        {title: "Tata (Remix) - Eladio Carrión, J Balvin, Daddy Yankee, Bobby Shmurda", url: "https://www.youtube.com/watch?v=YExFaP_R6lU"},
        {title: "Sal y Perrea - Sech", url: "https://www.youtube.com/watch?v=dMemD2uugRw"},
        {title: "Muñeca - Villano Antillano & Ana Macho", url: "https://www.youtube.com/watch?v=lEVYOKHSGB4"},
        {title: "Gueto - Iza", url: "https://www.youtube.com/watch?v=GwcvcTVbji0"},
        {title: "Fumetego (Remix) - Feid, Mora, Eladio Carrión", url: "https://www.youtube.com/watch?v=omxZseUY6eU"}
])

Content(23, "Un Verano Sin Ti" , "Bad Bunny" , "verano.jpg" , "https://www.youtube.com/watch?v=Kf3ShDQBFY0" , 
    [
        'Bad Bunny acaparó muchos de los titulares sobre música urbana y música en general en el año. Su álbum “Un verano sin ti” estuvo 13 semanas en el primer puesto de la lista Billboard 200 y se convirtió en el primero totalmente en español en ocupar el primer puesto del ranking de fin de año de Billboard 2001. Además, fue el más nominado en los Latin Grammy con 10 menciones. En enero, meses antes de lanzar su álbum, Bad Bunny anunció las fechas de su World’s Hottest Tour, su primera gira de estadios, para la cual se agotaron las entradas casi inmediatamente1' ,
        
        'Daddy Yankee anunció su retiro tras 32 años en la música. Comparó su carrera con una maratón y dijo que “al fin ve la meta”, en alusión a su retiro. Como parte de su despedida, lanzó “Legendaddy”, su último disco y el primero en una década. También anunció una extensa gira llamada "La última vuelta world tour". En diciembre de 2022, después de completar su quinto concierto “La Meta” en Puerto Rico, Daddy Yankee anunció que finalizó su carrera artística para unirse al evangelio y vivir su vida para Cristo.'
    ], [
        {title: "Intercambio - Calacote, Akapellah", url: "https://www.youtube.com/watch?v=3FlmkmOgfwY"},
        {title: "Callejera - Santa Fe Klan, MC Davo", url: "https://www.youtube.com/watch?v=h3PlO-H93F0"},
        {title: "Jungle - Trueno, Randy, Bizarrap", url: "https://www.youtube.com/watch?v=DxTJd7bUwlo"},
        {title: "Suelta - Dímelo Flow, Rauw Alejandro, Farruko", url: "https://www.youtube.com/watch?v=n9tT0J6LX1Y"},
        {title: "Pinta - L-Gante, Bizarrap, Pablo Lescano", url: "https://www.youtube.com/watch?v=u1hkgB5ZLSs"},
        {title: "Adicta al Perreo - Farina", url: "https://www.youtube.com/watch?v=0I2huXieZhg"},
        {title: "Tití Me Preguntó - Bad Bunny", url: "https://www.youtube.com/watch?v=WIMWwK7zp3I"},
        {title: "La Bachata - Manuel Turizo", url: "https://www.youtube.com/watch?v=TiM_TFpT_DE"},
        {title: "Me Porto Bonito - Bad Bunny, Chencho Corleone", url: "https://www.youtube.com/watch?v=UzlkVcIJnlU"},
        {title: "MAMIII - Becky G, Karol G", url: "https://www.youtube.com/watch?v=flL8ZMqIWGA"}
])

COntent(24, "DATA" , "Tainy" , "data.jpg" , "https://www.youtube.com/playlist?list=PLvgNK3ZRRVF2BHc4l0QmuKFvFgMkijENr" , 
    [
        'Bad Bunny regresó a sus orígenes con “Nadie sabe lo que va a pasar mañana”, un álbum que generó mucho revuelo con la tiradera de sus canciones.' ,
        'Eladio Carrión fue nombrado por Bad Bunny como el nuevo rey del trap, y su álbum “3men2 KBRN” en donde une fuerzas con grandes hip-hoperos como 50 cent, Lil Wayne y Future fue muy popular.' ,
        'Tainy lanzó su LP de larga duración que obtuvo el reconocimiento universal, demostrando porqué es el productor del reggaetón.' ,
        'Karol G rompió varios récords con su gira "Mañana será bonito tour".'
    ], [
        {title: "LUNA - Feid", url: "https://www.youtube.com/watch?v=x2oUajHp8pg"},
        {title: "PERRO NEGRO - Bad Bunny", url: "https://www.youtube.com/watch?v=KmpPRmuiF8M"},
        {title: "LA FALDA - Myke Towers", url: "https://www.youtube.com/watch?v=pyZtr3_dN3E"},
        {title: "QLONA - KAROL G", url: "https://www.youtube.com/watch?v=VgEW61oIeZ8"},
        {title: "AMARGURA - KAROL G", url: "https://www.youtube.com/watch?v=l8drWUddFY8"},
        {title: "Según Quién - Maluma", url: "https://www.youtube.com/watch?v=69lO08ar-mI"},
        {title: "LALA - Myke Towers", url: "https://www.youtube.com/watch?v=BVdngsy95mY"},
        {title: "La Bebe - Remix - Yng Lvcas", url: "https://www.youtube.com/watch?v=3mchJ-EW9rM"},
        {title: "DILUVIO - Rauw Alejandro", url: "https://www.youtube.com/watch?v=Bp3Ytv-v918"},
        {title: "Quema - Ryan Castro", url: "https://www.youtube.com/watch?v=aTcpp8La4T0"}
])

Content(25, "SAYONARA" , "Álvaro Díaz" , "sayonara.jpg" , "https://www.youtube.com/playlist?list=PLEpjZ6a3i26eCFXO6nezEtAF3O6rIpQkp" ,
    [
        'En el 2024, España fue sede de varios festivales de reggaetón, incluyendo el Share Festival, I Love Reggaeton Madrid, Electropical Music Fest, Festival Mon Seasons, Casttech Festival, Boombastic Canarias, Cúpula Fest, Holika Festival, BigSound Festival, Sunsetland Festival, Boombastic PortAventura, Weekend Beach Festival, Tietar Baila, Puro Latino Fest Almería, Los Favoritos Festival, LAKE MUSIC WEEK, Zevra Festival, Puro Latino Fest Torremolinos, Calatafest, Boombastic Costa del Sol, I Love Reggaeton Marbella, Fida Festival, Hoky Music Santander, y Circuit Festival Barcelona.' ,
        'Se han incrementado las canciones que usan estaciones de trabajo de audio digital (DAWs). Estas plataformas de software, como eJay Dance, FL Studio, Cubase y Reason, han democratizado la producción musical, haciéndola accesible para cualquier persona con una computadora y una chispa creativa.' ,
    ], [
        {title: "Contigo (with Tiësto) - Karol G", url: "https://www.youtube.com/watch?v=NCmp7AV8O9s"},
        {title: "Brickell - Feid", url: "https://www.youtube.com/watch?v=2p6O7EmroEs"},
        {title: "Humo - Chencho Corleone", url: "https://www.youtube.com/watch?v=uozpWN6BNPg"},
        {title: "Empelotica - Lenny Tavárez", url: "https://www.youtube.com/watch?v=DTxAU0AJAsk"},
        {title: "Fecha - Feid", url: "https://www.youtube.com/watch?v=4F0cCKFac04"},
        {title: "Adivino - Myke Towers", url: "https://www.youtube.com/watch?v=TkliPwvJgo4"},
        {title: "Mercedes (feat. Oscar Maydon) - Becky G", url: "https://www.youtube.com/watch?v=bi8niVLlI48"},
        {title: "Tacos Gucci - Anuel AA", url: "https://www.youtube.com/watch?v=iiBdHTpbJ68"},
        {title: "El Corte Que Le Damos - Chocolate Blanco", url: "https://www.youtube.com/watch?v=u7SLZYegmrw"},
        {title: "Posdata - Paulo Londra", url: "https://www.youtube.com/watch?v=NuWQgh-RrSo"}
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