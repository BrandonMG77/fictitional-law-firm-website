let a = 1;





document.querySelector('.left').addEventListener('click', function () {

if (a == 1) {
    a = 3;
    document.querySelector('#sub-header').style.backgroundImage = "url('contract.jpg')";



} else if (a == 3) { a = 2

    document.querySelector('#sub-header').style.backgroundImage = "url('building.jpg')";



} else if (a == 2) {
    a = 1
    
    document.querySelector('#sub-header').style.backgroundImage = "url('lawyers.png')";

    
    
    
    }





})

document.querySelector('.right').addEventListener('click', function () {

    if (a == 1) {
        a = 2;
        document.querySelector('#sub-header').style.backgroundImage = "url('building.jpg')";
    
    
    
    } else if (a == 3) { a = 1
    
        document.querySelector('#sub-header').style.backgroundImage = "url('lawyers.png')";
    
    
    
    } else if (a == 2) {
        a = 3
        
        document.querySelector('#sub-header').style.backgroundImage = "url('contract.jpg')";
    
        
        
        
        }
    
    
    
    
    
    })