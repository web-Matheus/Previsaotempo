
    function GetApi(){
      const value = document.getElementById('input').value;
      const url =`https://api.hgbrasil.com/weather?format=json-cors&key=54251203&city_name=${value}`;
    fetch(url).then((res)=>{
     return res.json();
   }).then((data)=>{
     console.log(data.results)
     const body = document.getElementById('body')
     const Name = document.getElementById('cityName').innerHTML=data.results.city
     const status = document.getElementById('status').innerHTML =data.results.description
     const graus = document.getElementById('graus').innerHTML =`${data.results.temp}°`
     const humidade = document.getElementById('humidade').innerHTML =`Humidade ${data.results.humidity}%`
     const ventos = document.getElementById('vento').innerHTML =`vento ${data.results.wind_speedy}`
     const nascerDoSol = document.getElementById('nascer').innerHTML =`Sunset ${data.results.sunrise}`
     const porDoSol = document.getElementById('por').innerHTML =`Sunrise ${data.results.sunset}`
     const statusImg = document.getElementById('img-status')
     if(data.results.description==="Tempo nublado"){
        statusImg.src="./imagens/nublado.jpg"
    }else  if(data.results.description==="parcialmente ensolarado"){
      statusImg.src="./imagens/ensolarado.png"
  }else  if(data.results.description==="Parcialmente nublado"){
    statusImg.src="./imagens/parci-ensolarado.jpg"
}else  if(data.results.description==="Chuviscos"){
  statusImg.src="./imagens/chuva.jpg"
}
  
    
   })}