import renderStatTable from './functions/renderStatTable.js'

function renderTable(){
  console.log('renderTable')
  let mainTable = document.getElementById("table")
  
  mainTable.innerHTML = tableTopRow
  
  for (let i = 0; i < data.length; i++)
  {
    let categoryName = ''
    let categoryLogo = ''

    if (data[i].category_id == 0) {
      categoryName = categories[0].name
      categoryLogo = '<i class="fa-solid fa-thumbtack"></i>'
    }
    if (data[i].category_id == 1) {
      categoryName = categories[1].name
      categoryLogo = '<i class="fa-solid fa-shuffle"></i>'
    }
    if (data[i].category_id == 2) {
      categoryName = categories[2].name
      categoryLogo = '<i class="fa-regular fa-lightbulb"></i>'
    }

    let itemRow = document.createElement('div')
    itemRow.className = data[i].deleted || data[i].archived ? 'standart_row nonactive' : 'standart_row active'
    itemRow.innerHTML = `
    <div class="cat_logo">${categoryLogo}</div>
    <div class="note_name">${data[i].name}</div>
    <div class="note_created">${data[i].created}</div>
    <div class="note_category_name">${categoryName}</div>
    <div class="note_content">${data[i].content}</div>
    <div class="note_dates">${data[i].dates}</div>
    <div id='edit ${data[i].id}' class="note_btn_edit"><i class="fa-solid fa-pencil"></i></div>
    <div id='arc ${data[i].id}' class="note_btn_archive"><i class="fa-solid fa-file-zipper"></i></div>
    <div id='dell ${data[i].id}' class="note_btn_delete"><i class="fa-solid fa-trash"></i></div>`

    mainTable.appendChild(itemRow)
  }
  addEventsinTable()
  renderStatTable()
}

function addEventsinTable(){
  // DELETE ALL
  dellAll = document.getElementById('dellAll')
  dellAll.addEventListener('click', ()=>{
    console.log('delete all notes')
    for (var i=0; i<data.length; i++) {
      data[i].deleted = true
    }
    renderTable()
  })
  // Archive All notes
  archAll = document.getElementById('archAll')
  archAll.addEventListener('click', ()=>{
    console.log('ARCH all notes')
    for (var i=0; i<data.length; i++) {
      data[i].archived = true
    }
    renderTable()
  })
  // DELETE EACH BTNs
  let deleteButtons = document.querySelectorAll('.note_btn_delete')
  deleteButtons.forEach((el)=>{
    let dellID = el.id.split(' ')[1]
    el.addEventListener('click',(el)=>{
      console.log('dell', dellID)
      data[dellID].deleted = true
      renderTable()
    })
  })
  //Archive btn`s
  let archButtons = document.querySelectorAll('.note_btn_archive')
  archButtons.forEach((el)=>{
    let editID = el.id.split(' ')[1]
    el.addEventListener('click',()=>{
      console.log('arch note #', editID)
      data[editID].archived = true
      renderTable()
    })
    
  })
  //Edit btn`s
  let editButtons = document.querySelectorAll('.note_btn_edit')
  editButtons.forEach((el)=>{
    let editID = el.id.split(' ')[1]
    el.addEventListener('click',()=>{
      console.log('edit note #', editID)
      //open modal
      let modal = document.querySelector('.modal')
      modal.style.display = 'block'
      //create EDIT note btn
      document.querySelector('.modal_buttons').innerHTML = '<button class="editNoteBTN" type="button">Edit Note</button>'
      
      //set input/select value like edit note
      let newNoteName = document.getElementById('new_note_name')
      let newNoteCategory = document.getElementById('new_note_category')
      let newNoteContent = document.getElementById('new_note_content')
      let newNoteDates = document.getElementById('new_note_dates')
      newNoteName.value = data[editID].name
      newNoteCategory.value = data[editID].category_id
      newNoteContent.value = data[editID].content
      newNoteDates.value = data[editID].dates
      //addEventListener click edit btn
      let editNoteBtn = document.querySelector('.editNoteBTN')
      editNoteBtn.addEventListener('click', ()=>{
        let editedNote = {
          id: editID,
          name: newNoteName.value,
          created: data[editID].created,
          category_id: newNoteCategory.value,
          content: newNoteContent.value,
          dates: newNoteDates.value,
          deleted: false,
          archived: false,
        }
        console.log('save edit note', editID)
        data[editID] = editedNote
        // console.log('after', data)
        // let modal = document.querySelector('.modal')
        modal.style.display = 'none'
        renderTable()
      })
    })
  })
 
}



function addEventsoutofTable (){
  //MODAL
  let modal = document.querySelector('.modal')
  // let modalOverlay = document.querySelector('.overlay')
  //   modalOverlay.addEventListener('click',()=>{
  //     modal.style.display = 'none'
  //     console.log('click overlay')
  //   })
  let closeModal = document.querySelector('.modal_close')
    closeModal.addEventListener('click',()=>{
      modal.style.display = 'none'
      console.log('click modal close')
    })
  let createNoteBtn = document.getElementById('add_note')
    createNoteBtn.addEventListener('click',()=>{
      modal.style.display = 'block'
      //create CREATE note btn
      document.querySelector('.modal-form').innerHTML = createNewNoteModaInnerHTML
      document.querySelector('.modal_buttons').innerHTML = '<button class="createNoteBTN" type="button">Create Note</button>'
      let createNoteBtnModal = document.querySelector('.createNoteBTN')
      let newNoteName = document.getElementById('new_note_name')
      let newNoteCategory = document.getElementById('new_note_category')
      let newNoteContent = document.getElementById('new_note_content')
      let newNoteDates = document.getElementById('new_note_dates')
      createNoteBtnModal.addEventListener('click',()=>{
        console.log('create new note')
        let newNote = {
          id: data.length, 
          name: newNoteName.value,
          created: new Date().toISOString().split('T')[0],
          category_id: newNoteCategory.value,
          content: newNoteContent.value,
          dates: newNoteDates.value,
          deleted: false,
          archived: false
        }
        // console.log(newNote)
        data.push(newNote)
        console.log(data)
        modal.style.display = 'none'
        renderTable()
      })
    })

    //open archive modal
    
    let openArchiveModal = document.getElementById('archive')
  
    openArchiveModal.addEventListener('click', renderArchive)
}




function renderArchive(){
  
  console.log('archive open')
  let modal2 = document.querySelector('.modal2')
  modal2.style.display = 'block'
  let modal2Close = document.querySelector('.modal_close2')
  modal2Close.addEventListener('click',()=>{
    modal2.style.display = 'none'
    console.log('click modal2 close')
    renderTable()
  })
  let archData = []
  for (let i=0; i < data.length; i++)
  {
    if (data[i].archived) archData.push(data[i])
  }
  console.log(archData)
  let archivePlace = document.querySelector('.modal2_content')
  archivePlace.innerHTML = ''
  for (let i=0; i < archData.length; i++) {
    let row = document.createElement('div')
    let categoryName = ''
    let categoryLogo = ''

    if (archData[i].category_id == 0) {
      categoryName = categories[0].name
      categoryLogo = '<i class="fa-solid fa-thumbtack"></i>'
    }
    if (archData[i].category_id == 1) {
      categoryName = categories[1].name
      categoryLogo = '<i class="fa-solid fa-shuffle"></i>'
    }
    if (archData[i].category_id == 2) {
      categoryName = categories[2].name
      categoryLogo = '<i class="fa-regular fa-lightbulb"></i>'
    }
    row.classList = 'arch_row'
    row.innerHTML = `
    <div class='arch_logo'>${categoryLogo}</div>
    <div>${archData[i].name}</div>
    <div>${archData[i].created}</div>
    <div>${categoryName}</div>
    <div>${archData[i].content}</div>
    <div class='arch_dates'>${archData[i].dates}</div>
    <div id="dell_arch ${archData[i].id}" class='dell_arch'> <i class="fa-solid fa-xmark"></i> </div>
    `
    archivePlace.appendChild(row)
  }
  let dellArchNote = document.querySelectorAll('.dell_arch')
  dellArchNote.forEach((item) => {
    let dellID = item.id.split(' ')[1]
    item.addEventListener('click', () =>{
      console.log('dell', dellID)
      data[dellID].archived = false
      renderArchive()
    })
  })
}


renderTable()
addEventsoutofTable()
