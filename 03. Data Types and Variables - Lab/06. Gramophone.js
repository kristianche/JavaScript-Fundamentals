function solve(bandName, albumName, song){
    let songDuration = (albumName.length * bandName.length) * song.length / 2

    console.log(`The plate was rotated ${Math.ceil(songDuration / 2.5)} times.`)
}

solve('Black Sabbath', 'Paranoid', 'War Pigs')
solve('Rammstein', 'Sehnsucht', 'Engel')