//windchill 

function windchill(){

    var high = document.getElementById('temp').innerHTML;
    var windspeed = document.getElementById("windspeed").innerHTML;
    
    let f;
    let t = high;
    let s = windspeed;
    
    f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, .16)) + (0.4275 * t * Math.pow(s, .16));
        if(t <= 50 && s > 3){
            f = Math.round(f);
        }
        else{
            f = "N/A";
        }
    document.getElementById("windchill").innerHTML = f;
    }


    function windchill(){

        var temp = document.getElementById('temp').innerHTML;
        var windspeed = document.getElementById('windspeed').innerHTML;
        
        let wc;
        let t = temp;
        let s = windspeed;
        
        wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * temp * Math.pow(windspeed, .16));
            if(temp <= 50 && windspeed > 3){
              wc = Math.round(wc);
            }
            else{
              wc = "N/A";
            }
        document.getElementById("windchill").innerHTML = f;
        }