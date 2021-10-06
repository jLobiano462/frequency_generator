const togg = document.getElementById('toggle')
const sidebar = document.querySelector('.side-pop')
const inputVal = document.getElementById('input-data')
const popup = document.querySelector('.side-pop')
const submit = document.getElementById('submit')
const table = document.querySelector('.table-gen')
const raise = document.querySelector('#raise')

console.log('hello')


togg.addEventListener('click',()=>{
  sidebar.classList.toggle('show-nav')
})

popup.addEventListener('click',()=>{
  sidebar.classList.toggle('show-nav')
})



submit.addEventListener('click', ()=>{
  if (inputVal.value === ''){
    raise.textContent = 'Please input the data before clicking submit...'
    if (raise.classList.contains('show') === false){
      raise.classList.add('show')
    }

  }else{
  let string = ''
  string = inputVal.value
  generateFrequency(string)
  if (raise.classList.contains('show')=== true){
    raise.classList.remove('show')
  }

}

inputVal.value = ''



})




const generateFrequency = (s)=>{
  let counts = {}
  let dataset = []
  s = s.split(',')
  let all = areAllIntegers(s)
  console.log(all)



  if (all){
  s.forEach((item)=>{
    let data = parseInt(item)
    dataset.push(data)

  })

  dataset.sort(function(a, b) {
  return a - b;
  })

  dataset.forEach((item)=>{
    counts[item] = counts[item] ? counts[item] + 1: 1
  })

  console.log(counts)

  set = new Set(dataset)

  generateTable(counts,dataset,set)

  if (raise.classList.contains('show-second') === true){
    raise.classList.remove('show-second')
  }


}else{
  raise.textContent = 'Please make sure to enter valid integers as input...'
  if (raise.classList.contains('show-second') === false){
    raise.classList.add('show-second')
  }
}



}



const generateTable = (obj,arr,sets)=>{
  table.innerHTML = `
  <tr>
    <th> Value being measured</th>
    <th> Frequency </th>
    <th> Percent </th>
  </tr>

  `



  sets.forEach((item)=>{
    let percent = (obj[item]/arr.length)* 100
    percent = percent.toFixed(1)
    table.innerHTML +=
    `<tr>
    <td>${item}</td>
    <td>${obj[item]}</td>
    <td>${percent}</td>
    </tr>
    `

  })

}



const areAllIntegers = (arr)=>{
  let flag = 0
  let isTrue;
  arr.forEach((item)=>{
    if (isNaN(item)=== true || item === ''){
      flag ++
    }
  })

  isTrue = flag === 0 ? true:false
  return isTrue

}
