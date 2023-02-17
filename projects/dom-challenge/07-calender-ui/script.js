const calenderContainer = document.querySelector('#calender-container')

const events = [
  {
    startTime: "00:00",
    endTime: "01:30",
    color: "#f6be23",
    title: "#TeamDevkode",
  },
  {
    startTime: "3:30",
    endTime: "7:30",
    color: "#f6501e",
    title: "#TeamDevkode",
  },
  {
    startTime: "4:30",
    endTime: "8:30",
    color: "#f6501e",
    title: "#TeamDevkode",
  },
  {
    startTime: "6:30",
    endTime: "9:00",
    color: "#f6501e",
    title: "Demo",
  },
  {
    startTime: "11:00",
    endTime: "13:30",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "12:00",
    endTime: "13:30",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "9:30",
    endTime: "10:30",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "16:00",
    endTime: "17:00",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "15:00",
    endTime: "17:00",
    color: "#029be5",
    title: "#TeamDevkode",
  },
  {
    startTime: "18:00",
    endTime: "19:00",
    color: "#f6501e",
    title: "#TeamDevkode",
  },
  {
    startTime: "20:30",
    endTime: "22:30",
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


const timeArr = []

const populateEvents = () => {
  calenderContainer.innerHTML += events.map((event)=>{
    const startTime = +event.startTime.split(':')[0] + (+event.startTime.split(':')[1]/60) 
    const endTime = +event.endTime.split(':')[0] + (+event.endTime.split(':')[1]/60)
    let dataWidth = 65
    let cnt = timeArr.filter(time=>time===startTime).length
    if(cnt>0){
      dataWidth /= cnt+1
    }
    for(let i=startTime;i<=endTime;i+=0.5){
      timeArr.push(i)
    }
    let [startHour,startMin] = event.startTime.split(':')
    if(startHour>12) startHour -= 12;
    let [endHour,endMin] = event.endTime.split(':')
    if(endHour>12) endHour -= 12;
    return `
    <div class="event" style="--bg-clr:${event.color};--time-width:${endTime-startTime};--top-time:${startTime};width:${dataWidth}%">
      <div class="title">#TeamDevKode</div>
      <div class="time-details">${(''+startHour).padStart(2,'0')}:${startMin}${event.startTime.split(':')[0]>=12? 'PM':'AM'} - ${(''+endHour).padStart(2,'0')}:${endMin}${event.endTime.split(':')[0]>=12? 'PM':'AM'}</div>
    </div>
    `
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