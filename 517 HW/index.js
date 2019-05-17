
function mood() {

    var secondDiv = document.getElementById('div2');
    secondDiv.style.backgroundColor = "beige";

    var head = document.createElement('h1')
    head.innerHTML = '~Prayer~'
    head.style.textAlign = "center";
    head.style.fontSize = "80px";
    head.style.color = "purple";
    secondDiv.appendChild(head);

    var para = document.createElement('p')
    para.innerHTML = 'For today, Ka lets exercise PATIENCE.  In order to fight the good fight of the faith, you the need to follow the path of gentleness.  Even though theres unfavorable circumstances where its hard to do so, lets gradually increase our endurance.  Then, we will be able to understand the heart of God who patiently endured all the pain and suffering to save us. Also, we should always remember the love of God who is slow to anger and is leading us to the kingdom of Heaven with gentleness and patience.'
    para.style.color = "orange";
    para.style.fontSize = "30px";
    para.style.backgroundColor = "lightblue";
    secondDiv.appendChild(para);

    var imgtwo = document.createElement('img');
    imgtwo.src = 'q2.jpg';
    imgtwo.style.height = "35rem";
    imgtwo.style.width = "31rem";
    secondDiv.appendChild(imgtwo);

    var img = document.createElement('img');
    img.src = 'bible-quotes.jpg';
    img.style.height = "35rem";
    secondDiv.appendChild(img);

    var imgone = document.createElement('img');
    imgone.src = 'q1.jpg';
    imgone.style.height ="35rem";
    imgone.style.width = "28rem";
    secondDiv.appendChild(imgone);

    if(secondDiv.style.display == 'none') {
        secondDiv.style.display = 'block'; 
    } else if(secondDiv.style.display == 'block') {
        secondDiv.style.display = 'none';
    }

    document.getElementById('me').style.visibility='hidden';
};