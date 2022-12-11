// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontsize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style +=`font-size: ${fontSize};`
    
    
    
 console.log(message,style);
}
function celebrateStyler(reason) {
    var fontstyle = "color: tomato; font-size: 50px";
    if (`reason == "birthday"`) {
    console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
        
    } else {
        console.log(message, style);
        
}
    
}
