var century19 = [ 23.2, 27.9, 29.5, 28 ];
var century19Years = [ 1970, 1997, 1982, 1999 ];
var century20 = [ 21.2, 27.4, 28.3, 29 ];
var century20Years = [ 2000, 2004, 2007, 2010 ];


var mainCanvas = document.getElementById( "mainCanvas" );

function statsForCentury19() {
        mainCanvas.innerHTML = "";    
    
        for( var index = 0; index < century19.length; index++ ) {
        var paragraph = document.createElement( "p" );
        var year = document.createElement( "span" );
            
        var paragraphText = document.createTextNode( century19[ index ] );
        var yearText = document.createTextNode( century19Years[ index ] );
        year.appendChild( yearText )
        mainCanvas.appendChild( year );
        year.style.position = "relative";
        year.style.bottom = -50 + "px";
        year.style.left = 65 + "px";


        paragraph.appendChild( paragraphText );
        mainCanvas.appendChild( paragraph );
        paragraph.style.paddingTop = century19[index] * 10 + "px";
    }
}

    
function statsForCentury20() {
    
        mainCanvas.innerHTML = "";  
        


        for( var index = 0; index < century20.length; index++ ) {    
        var paragraph = document.createElement( "p" );
        var year = document.createElement( "span" );

        var paragraphText = document.createTextNode( century20[ index ] );
        var yearText = document.createTextNode( century20Years[ index ] );
        year.appendChild( yearText )
        mainCanvas.appendChild( year );
        year.style.position = "relative";
        year.style.bottom = -50 + "px";
        year.style.left = 65 + "px";
            
        paragraph.appendChild( paragraphText );
        mainCanvas.appendChild( paragraph );
        paragraph.style.paddingTop = century20[index] * 10 + "px";
    }
}
    
statsForCentury19();

var century19Button = document.getElementById( "century19" );
var century20Button = document.getElementById( "century20" );

century19Button.onclick = function() {
    statsForCentury19();
}

century20Button.onclick = function() {
    statsForCentury20();
}

  
