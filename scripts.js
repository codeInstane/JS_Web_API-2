const app = document.getElementById('root');

const head = document.createElement('div');
head.setAttribute('class','head');

const logo = document.createElement('img');
logo.src = 'img/logo.png';

const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(head);
head.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET','https://ghibliapi.herokuapp.com/films', true);
request.onload = function(){
    //begin to access JSON data here
    var count = 0;
    var data = JSON.parse(this.response)
    if(request.status >= 200 && request.status < 400){
        data.forEach(movie =>{
            count++;

            const card = document.createElement('div');
            card.setAttribute('class','card');

            const cardHeader = document.createElement('div');
            if(count%2===0){
                console.log('count:'+count);
                cardHeader.setAttribute('class','card_header1');
            }else{
                cardHeader.setAttribute('class','card_header2');
            }
            
            const h2 = document.createElement('h2');
            h2.textContent = movie.title;

            const director = document.createElement('small');
            director.textContent = `### ${movie.director} ###`;

            const cardBody =document.createElement('div');
            cardBody.setAttribute('class','card_body');

            const p = document.createElement('p');
            movie.description = movie.description.substring(0,300);
            p.textContent = `${movie.description}...`

            const circle = document.createElement('div');
            if(movie.rt_score>95){
                circle.setAttribute('class','circle1');
            }else{
                circle.setAttribute('class','circle2');
            }
            

            const score = document.createElement('h3');
            score.textContent = movie.rt_score;
            

            container.appendChild(card);
            card.appendChild(cardHeader);
            cardHeader.appendChild(h2);
            cardHeader.appendChild(director);
            card.appendChild(cardBody);
            cardBody.appendChild(p);
            card.appendChild(circle);
            circle.appendChild(score);
                        
        })
    }else{
        console.log('error')
    }
};
request.send();