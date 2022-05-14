//my API key: 9YpaQtL2d1LnKbYx7bhz9siTDZ5xsoE2K5hooRHg
/* jQuery's $(), you can now now use Document.querySelectorAll()
 jQuery's $el.on(), you can now use EventTarget.addEventListener() */
//tratamenot usar class Date() para não receber valores do futuro do usuário


//check if the date is in the pass, not in the future

/* let dateToday =  new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
if(m < 10)
   m = '0' + m.toString();
else if(d < 10)
   d = '0' + d.toString();

let minDate = y + '-' + m + '-' + d
let maxDate = y + '-' + "0"+(parseFloat(0+m) + 1) + '-' + d
date_in.setAttribute("max",maxDate)

if (dateRequest > maxDate){
    console.log("Você não pode ter fotos do futuro, tente outra vez!")
} */

let botao = document.querySelector('#submitDate')
let caixaExibicao = document.querySelector('#requisitionContent')
const url = "https://api.nasa.gov/planetary/apod?api_key=9YpaQtL2d1LnKbYx7bhz9siTDZ5xsoE2K5hooRHg&date="


botao.addEventListener('click', function(event){
    event.preventDefault();
    let dateRequest = document.querySelector('#date').value
    

  
    try{
        $.ajax({url: url + dateRequest,
              type: 'GET',
              dataType: 'json',      
              success: function(result){
                  document.getElementById("title").textContent = result.title;
                  document.getElementById("date").textContent = result.date;
                  document.getElementById("pic").src = result.hdurl;
                  document.getElementById("explanation").textContent = result.explanation;
              }
              
          })    
    }  catch {
        caixaExibicao.innerHTML('<p>Essa requisição deu erro, tente novamente mais tarde.</p>')

    }
    
    caixaExibicao.style.display = 'block'; 
})

