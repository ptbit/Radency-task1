function renderStatTable(){
  let statTableContent = document.getElementById('stat_table_content')
  

  //create stat data
  let taskActive = 0
  let taskArchive = 0
  let randomActive = 0
  let randomArchive = 0
  let ideaActive = 0
  let ideaArchive = 0
  
  for (let i = 0; i < data.length; i++)
  {
    let el = data[i]
    if(el.category_id == 0 && el.archived == false && el.deleted == false) taskActive++
    if(el.category_id == 0 && el.archived == true && el.deleted == false) taskArchive++

    if(el.category_id == 1 && el.archived == false && el.deleted == false) randomActive++
    if(el.category_id == 1 && el.archived == true && el.deleted == false) randomArchive++

    if(el.category_id == 2 && el.archived == false && el.deleted == false) ideaActive++
    if(el.category_id == 2 && el.archived == true && el.deleted == false) ideaArchive++
  }
  console.log('stat:',taskActive,taskArchive,randomActive,randomArchive,ideaActive,ideaArchive)
  let allStat = taskActive + taskArchive + randomActive + randomArchive + ideaActive + ideaArchive
  console.log('allstat = ', allStat)
  //render stat data
  //render / derender first row
  if (allStat > 0) statTableContent.innerHTML = '<div id="stat_row" class=""></div>'
  if (allStat == 0 ) statTableContent.innerHTML = ''
  let statRow = document.getElementById('stat_row')

  if (taskActive > 0 || taskArchive > 0) {
    let categoryLogo = '<i class="fa-solid fa-thumbtack"></i>'
    let row = document.createElement('div')
    row.className = 'standart_row'
    row.innerHTML = `<div class="cat_logo">${categoryLogo}</div>
    <div class="note_category_stat_name">${categories[0].name}</div>
    <div class="note_category_active">${taskActive}</div>
    <div class="note_category_archived">${taskArchive}</div>
    `
    statRow.appendChild(row)
  }
  if (randomActive > 0 || randomArchive > 0) {
    let categoryLogo = '<i class="fa-solid fa-shuffle"></i>'
    let row = document.createElement('div')
    row.className = 'standart_row'
    row.innerHTML = `<div class="cat_logo">${categoryLogo}</div>
    <div class="note_category_stat_name">${categories[1].name}</div>
    <div class="note_category_active">${randomActive}</div>
    <div class="note_category_archived">${randomArchive}</div>
    `
    statRow.appendChild(row)
  }
  if (ideaActive > 0 || ideaArchive > 0) {
    let categoryLogo = '<i class="fa-regular fa-lightbulb"></i>'
    let row = document.createElement('div')
    row.className = 'standart_row'
    row.innerHTML = `<div class="cat_logo">${categoryLogo}</div>
    <div class="note_category_stat_name">${categories[2].name}</div>
    <div class="note_category_active">${ideaActive}</div>
    <div class="note_category_archived">${ideaArchive}</div>
    `
    statRow.appendChild(row)
  }
}

export default renderStatTable;