function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log (string.toUpperCase())
}

function logWhisper(string) {
    console.log( string.toLowerCase() )
}

function sayHiToHeadphonedRoommate(string){
    let isResponse;
    /*
    switch (isResponse){
        
        case (string === string.toLowerCase()):
            isResponse =  'I can\'t hear you!';
            return isResponse;
            break;
        
        case (string === string.toUpperCase()):
            return  'YES INDEED!';
            break;
        
        case (string === 'Let\'s have dinner together!'):
            return 'I would love to!';
            break;

       

        

    }
     */
    
    if (string === string.toLowerCase()) {
        return 'I can\'t hear you!'; 
    } else if (string === string.toUpperCase()) {
        return  'YES INDEED!';
    } else if (string === 'Let\'s have dinner together!') {
        return 'I would love to!';
    }
    
}