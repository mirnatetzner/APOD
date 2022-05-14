//tratamenot usar class Date() para não receber valores do futuro do usuário

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

