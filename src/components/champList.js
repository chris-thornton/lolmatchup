import React from 'react'; // eslint-disable-line no-unused-vars

const champListLineBreak = `Aatrox
Ahri
Akali
Alistar
Amumu
Anivia
Annie
Aphelios
Ashe
Aurelion Sol
Azir
Bard
Blitzcrank
Brand
Braum
Caitlyn
Camille
Cassiopeia
Cho'gath
Corki
Darius
Diana
Dr Mundo
Draven
Ekko
Elise
Evelynn
Ezreal
Fiddlesticks
Fiora
Fizz
Galio
Gangplank
Garen
Gnar
Gragas
Graves
Hecarim
Heimerdinger
Illaoi
Irelia
Ivern
Janna
Jarvan IV
Jax
Jayce
Jhin
Jinx
Kai'sa
Kalista
Karma
Karthus
Kassadin
Katarina
Kayle
Kayn
Kennen
Kha'zix
Kindred
Kled
Kog'Maw
Leblanc
Lee Sin
Leona
Lillia
Lissandra
Lucian
Lulu
Lux
Malphite
Malzahar
Maokai
Master Yi
Miss Fortune
Mordekaiser
Morgana
Nami
Nasus
Nautilus
Neeko
Nidalee
Nocturne
Nunu
Olaf
Orianna
Ornn
Pantheon
Poppy
Pyke
Qiyana
Quinn
Rakan
Rammus
Rek'Sai
Renekton
Rengar
Riven
Rumble
Ryze
Samira
Sejuani
Senna
Sett
Shaco
Shen
Shyvana
Singed
Sion
Sivir
Skarner
Sona
Soraka
Swain
Sylas
Syndra
Tahm Kench
Taliyah
Talon
Taric
Teemo
Thresh
Tristana
Trundle
Tryndamere
Twisted Fate
Twitch
Udyr
Urgot
Varus
Vayne
Veigar
Vel'koz
Vi
Viktor
Vladimir
Volibear
Warwick
Wukong
Xayah
Xerath
Xin Zhao
Yasuo
Yone
Yorick
Yuumi
Zac
Zed
Ziggs
Zilean
Zoe
Zyra`;

const champList = champListLineBreak.split('\n').map((champ, i) => {
  return {name: champ, value: i}
})

console.log(champList.length)

/*{console.log(champList.map(champ => {
    return champ.toLowerCase().replace("'","").replace(/\s/g, '');
  })
)
}*/

export default champList;