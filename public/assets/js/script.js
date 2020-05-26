
document.querySelector('#burger-input').value = '';


const burgers = document.querySelectorAll('.devour');

// attach event listener to each 'devour' button
burgers.forEach( burger => {
  burger.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('hey');
    const id = e.originalTarget.dataset.id;
    console.log(id);
    $.ajax({
      url: "/api/burgers/" + id,
      type: 'PUT'
    })
    .then( res => {
      location.reload();
    });
  });
});

// event listener for submit button
document.querySelector('#submit').addEventListener('click', function(e) {
  e.preventDefault();
  add();
});
document.querySelector('#burger-input').addEventListener('keypress', function(e) {
  if(e.keyCode === 13) add();
});

function add() {
  // get value of the input field
  let burger_name = document.querySelector('#burger-input').value;

  // format the input
  const burger_parts = burger_name.split(' ');
  burger_name = '';
  burger_parts.forEach( item => {
    burger_name += item.charAt(0).toUpperCase() + item.slice(1) + ' ';
  });

  burger_name = burger_name.trim();

  // post the data to the api endpoint
  $.post('/api/burgers', {
    name: burger_name
  })
  .then( res => {
    location.reload();

  });

}
