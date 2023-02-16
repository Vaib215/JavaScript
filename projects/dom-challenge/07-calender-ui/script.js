const calenderContainer = document.querySelector('#calender-container')

const events = [
  {
    startTime: "00:00",
    endTime: "01:30",
    color: "#f6be23",
    title: "#TeamDevkode",
  },
  {
    startTime: "4:30",
    endTime: "7:30",
    color: "#f6501e",
    title: "#TeamDevkode",
  },
  {
    startTime: "12:00",
    endTime: "13:30",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "9:00",
    endTime: "10:00",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "16:00",
    endTime: "19:00",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "20:30",
    endTime: "22:30",
    color: "#029be5",
    title: "#TeamDevkode",
  },
]

const populateEvents = () => {
  calenderContainer.innerHTML += events.map((event)=>{
    const startTime = +event.startTime.split(':')[0] + (+event.startTime.split(':')[1]/60) 
    const endTime = +event.endTime.split(':')[0] + (+event.endTime.split(':')[1]/60) 
    return `
    <div class="event" style="--bg-clr:${event.color};--time-width:${endTime-startTime};--top-time:${startTime};">
      <div class="title">#TeamDevKode</div>
      <div class="time-details"></div>
    </div>
    `
    // Your task is to add time according to AM/PM
  }).join('')
}

const populateTime = () => {
  for(let i=1;i<24;i++){
    const time = document.createElement('div')
    time.className = 'time'
    if(i<12){
      time.innerHTML = `${i}:00 AM`
    }
    else if(i==12){
      time.innerHTML = `12:00 PM`
    }
    else{
      time.innerHTML = `${i-12}:00 PM`
    }
    calenderContainer.append(time)
  }
}

populateEvents()
populateTime()