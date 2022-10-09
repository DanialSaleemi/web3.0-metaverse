/*////////////////////////////////////////////////////////
//------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--40. Functions---------------------------------------//
//------------make_album--Objects-----------------------//
//------------------------------------------------------//
//------------------------------------------------------//
////////////////////////////////////////////////////////*/

alert("Please view console for the output");
function make_album(artist_name, album_title, _tracks){

   const album = {
        artist: artist_name, title:album_title, num_tracks:_tracks 
    };

console.log('Artist name: ', album.artist, 'Album Title: ', album.title, 'No. of tracks: ', album.num_tracks);
}

make_album('JJ', 'Aitebar');
make_album('Atif', 'Aadat', 10);
make_album('Bill', 'Sunday', 3);

