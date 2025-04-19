var numselected = null; 
var tileselected = null; 

var errors = 0; 

var Board = [
    "957-13-84",
    "483-571-6",
    "-12-49537",
    "17-3-49-2",
    "5-497-36-",
    "3-95-87-1",
    "84579-613",
    "-91-36-75",
    "7-61854-9"
]

var solution = [
    "957613284",
    "483257196",
    "612849537",
    "178364952",
    "524971368",
    "369528741",
    "845792613",
    "291436875",
    "736185429"
]

window.onload = function(){
    setgame(); 
}

function setgame(){
    // digits 1-9
    for(let i=1; i<=9; i++){
        // <div id="1"></div>
        let number = document.createElement("div"); 
        number.id = i
        number.innerText = i; 
        number.addEventListener("click", selectNumber); 
        number.classList.add("number"); 
        document.getElementById("Digits").appendChild(number); 
    }

    // board 9x9 
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let tile = document.createElement("div"); 
            tile.id = r.toString() + "-" + c.toString(); 
            if(Board[r][c] != "-"){
                tile.innerText = Board[r][c];
                tile.classList.add("tile-start");  
            }
            if(r == 2 || r == 5){
                tile.classList.add("horizontal-line");
            }
            if(c == 2 || c == 5){
                tile.classList.add("vertical-line"); 
            }
            tile.addEventListener("click", selectTile); 
            tile.classList.add("tile"); 
            document.getElementById("Board").append(tile);
        }
    }
}

function selectNumber(){
    if(numselected != null){
        numselected.classList.remove("number-selected");
    }
    numselected = this; 
    numselected.classList.add("number-selected");
}

function selectTile(){
    if(numselected){
        if(this.innerText != ""){
            return; 
        }
        
        // "0-0" "0-1" ... "3-1"
        let coords = this.id.split("-"); 
        let r = parseInt(coords[0]); 
        let c = parseInt(coords[1]); 
        
        if(solution[r][c] == numselected.id){
            this.innerText = numselected.id; 
        }
        else{
            errors += 1; 
            document.getElementById("errors").innerText = errors; 
        }
    }
}