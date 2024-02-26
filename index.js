const config= {
    method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/international',
  headers: {
    'X-RapidAPI-Key': '24004e130amshb5e447b718ac58cp1d595bjsn9e98e8b912ee',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
}

const scheule=document.querySelector('button');
const div=document.querySelector('div')
let series="";
let check=false;

const getSchedule= async()=>{
    const ul=document.createElement('ul');
    check=true;
    try {
        const response= await axios.request(config)
        const data=response.data;
        series=data.seriesMapProto;
        series.map((seriesData)=>{
            div.append(ul);
            const DATE=seriesData.date;
            const seriesArr=seriesData.series;
            console.log(seriesArr)
            seriesArr.map((data)=>{
                const li=document.createElement('li');
                li.innerText=`${data.name} will be played in ${DATE}`
                ul.appendChild(li);
            })
        })
    } catch (error) {
        console.log(error)
    }
}
scheule.addEventListener('click' , ()=>{
    if(!check) getSchedule();
});
