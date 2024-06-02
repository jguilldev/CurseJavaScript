// Crear un manejador de playList
function managePlayList(playList, newSong) {
    playList.shift(); 
    playList.unshift(newSong); 
    return playList;
 }
 
 const initialPlayList = ['perdido', 'Raining blood', 'nana'];
 const newSongToAdd = 'Stairway to heaven'; // Corregido 'Starwai' a 'Starway'
 
 const updatedPlayList = managePlayList(initialPlayList, newSongToAdd);
 
 console.log(`The initial List is: ${initialPlayList}`); //initialplaylist se ve ya modificado
//  ya que  los metodos shift y unshift modifican a la lista original
 console.log(newSongToAdd);
 console.log(updatedPlayList);
 