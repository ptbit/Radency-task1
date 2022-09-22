let data = [{
  id: 0,
  name: 'Books',
  created: '2022-02-24',
  category_id: 0,
  content: 'This is',
  dates: '3/5/2021, 5/5/2021',
  deleted: false,
  archived: false,
},
{
  id: 1,
  name: 'Shoping list',
  created: '2021-03-20',
  category_id: 1,
  content: 'Tomatos, milk, coffee',
  dates: '',
  deleted: false,
  archived: false,
},
{
  id: 2,
  name: 'The Teory of Evolution',
  created: '2022-04-10',
  category_id: 2,
  content: 'Monkeys, Humans, Cats',
  dates: '',
  deleted: false,
  archived: false,
},
{
  id: 3,
  name: 'Books archive',
  created: '2022-02-24',
  category_id: 0,
  content: 'This is',
  dates: '3/5/2021, 5/5/2021',
  deleted: false,
  archived: true,
},
]

let categories = [
  {
    id: 0,
    name: 'Task'
  },
  {
    id: 1,
    name: 'Random Thought'
  },
  {
    id: 2,
    name: 'Idea'
  }
]

let tableTopRow = `<div class="top_row">
<div class="top_row_logo"></div>
<div class="top_row_name">Name</div>
<div class="top_row_created">Created</div>
<div class="top_row_category">Category</div>
<div class="top_row_content">Content</div>
<div class="top_row_dates">Dates</div>
<div class="top_row_btn_edit"></div>
<div id='archAll' class="top_row_btn_arch"><i class="fa-regular fa-file-zipper"></i></div>
<div id='dellAll' class="top_row_btn_del"><i class="fa-solid fa-trash"></i></div>
</div>`

let createNewNoteModaInnerHTML = `<div class="option">
<span>Note name:</span>
<input id="new_note_name" class="input" type="text" placeholder="new note">
</div>
<div class="option">
<span>Category:</span>
<select id="new_note_category" name="select"> 
    <option value="0">Task</option>
    <option value="1">Random Thought</option>
    <option value="2">Idea</option>
</select>
</div>
<div class="option">
<span>Content:</span>
<input id="new_note_content" class="input" type="text" placeholder="Content">
</div>
<div class="option">
<span>Dates:</span>
<input id="new_note_dates" class="input" type="text" placeholder="Dates">
</div>`