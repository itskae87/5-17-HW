
function noodle() {
    var secondDiv = document.getElementById('div2');
    var para = document.createElement('p')
    para.innerHTML = 'Ramen so good! I eat them all day everyday; morning, lunch, dinner.  Shoo its my snacks too. LOL!'
    secondDiv.appendChild(para);
    if(secondDiv.style.display == 'none') {
        secondDiv.style.display = 'block'; 
    } else if(secondDiv.style.display == 'block') {
        secondDiv.style.display = 'none';
    }

    document.getElementById('me').style.visibility='hidden';
};