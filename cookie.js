// we are creating cookie in 3 distints steps
//1 setting cookie
//2. getting cookie
//3. checking cookie which entails above 2;
//format for setting cookie #########document.cookie = 'username =Wasiu; expires = wed 21 dec 1980 05:34:00 GMT; path =/';
function setCookie(cname, cvalue, exday){
    d = new Date();
    d.setTime( d.getTime() + (exday * 24 * 60 * 60 * 1000));
    let expires = '; expires =' + d.toUTCString();
    document.cookie = cname + "=" + cvalue + expires + "; path=/";
}

function getCookie(cname){
    let name = cname + "=";
    let decodeCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodeCookie.split(";");
    for(let i = 0; i < cookieArray.length; i++){
        let eachCookie = cookieArray[i];
        while(eachCookie.charAt(0) ==" "){ // removing whitespace
            eachCookie = eachCookie.substring(1); // true then let purify our cookie from its ore
        }
        if(eachCookie.indexOf(name) == 0){ //is cookie pressent ?
        return  eachCookie.substring(name.length, eachCookie.length)
        }
    }
    return '';
}

function checkCookie(){
    let user = getCookie('username');
    if(user !=''){
        alert('Welcome again' + user);
    }else{
        user = prompt('Please enter your name:','');
        if(user !='' && user != null){
            setCookie('username',user,-30);
        }
    }
}