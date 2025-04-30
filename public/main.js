const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const thumbDown = document.getElementsByClassName("fa-thumbs-down")
const trash = document.getElementsByClassName("fa-trash-o");
const updateNotesBtn = document.getElementsByClassName("updateNotesBtn");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const exerciseItem = this.closest('.exerciseItem');
        const userNameVal = exerciseItem.querySelector('.userName').innerText;
        const phaseVal = exerciseItem.querySelector('.phase').innerText;
        const dayOfTheWeekVal = exerciseItem.querySelector('.dayOfTheWeek').innerText;
        const exerciseNameVal = exerciseItem.querySelector('.exerciseName').innerText;
        const setsVal = exerciseItem.querySelector('.sets').innerText;
        const repsVal = exerciseItem.querySelector('.reps').innerText;
        const notesVal = exerciseItem.querySelector('.notes').innerText;
        const thumbUpText = exerciseItem.querySelector('.thumbUp').innerText;
        const thumbUpVal = parseFloat(thumbUpText.replace('Total upvotes: ', '').trim());
        const exerciseId = exerciseItem.getAttribute('data-id'); //stores id in data attribute
        fetch('upVote', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            '_id': exerciseId, //id value part of request object getting sent server side
            'userName': userNameVal,
            'phase': phaseVal,
            'dayOfTheWeek': dayOfTheWeekVal,
            'exerciseName': exerciseNameVal,
            'sets': setsVal,
            'reps': repsVal,
            'notes': notesVal,
            'thumbUp': thumbUpVal
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const exerciseItem = this.closest('.exerciseItem');
    const userNameVal = exerciseItem.querySelector('.userName').innerText;
    const phaseVal = exerciseItem.querySelector('.phase').innerText;
    const dayOfTheWeekVal = exerciseItem.querySelector('.dayOfTheWeek').innerText;
    const exerciseNameVal = exerciseItem.querySelector('.exerciseName').innerText;
    const setsVal = exerciseItem.querySelector('.sets').innerText;
    const repsVal = exerciseItem.querySelector('.reps').innerText;
    const notesVal = exerciseItem.querySelector('.notes').innerText;
    const thumbUpText = exerciseItem.querySelector('.thumbUp').innerText;
    const thumbUpVal = parseFloat(thumbUpText.replace('Total upvotes: ', '').trim());
    const exerciseId = exerciseItem.getAttribute('data-id'); //stores id in data attribute
    fetch('downVote', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        '_id': exerciseId, //id value part of request object getting sent server side
        'userName': userNameVal,
        'phase': phaseVal,
        'dayOfTheWeek': dayOfTheWeekVal,
        'exerciseName': exerciseNameVal,
        'sets': setsVal,
        'reps': repsVal,
        'notes': notesVal,
        'thumbUp': thumbUpVal
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(updateNotesBtn).forEach(function(element) {
  element.addEventListener('click', function(){
    const exerciseItem = this.closest('.exerciseItem');
    // const courseId = courseItem.getAttribute('data-id') //stores id in data attribute
    const userNameText = exerciseItem.querySelector('.userName').innerText.replace('User: ', '');
    const userNameVal = userNameText.replace('User: ', '');
    // const notesVal = document.querySelector('.notes').innerText;
    const notesVal = document.querySelector('.notes').innerText;
    const newNotesVal = document.querySelector('.newNotesVal').value;
    console.log("this is the innerText", newNotesVal, "this is the original notes value", notesVal, "this is the element", document.querySelector('.newNotesVal'))
    
    fetch('newNotes', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        // '_id': courseId,
        'userName': userNameVal,
        'notes': notesVal,
        'newNotes': newNotesVal
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const exerciseItem = this.closest('.exerciseItem');
        const userNameVal = exerciseItem.querySelector('.userName').innerText;
        const phaseVal = exerciseItem.querySelector('.phase').innerText;
        const dayOfTheWeekVal = exerciseItem.querySelector('.dayOfTheWeek').innerText;
        const exerciseNameVal = exerciseItem.querySelector('.exerciseName').innerText;
        const setsVal = exerciseItem.querySelector('.sets').innerText;
        const repsVal = exerciseItem.querySelector('.reps').innerText;
        const notesVal = exerciseItem.querySelector('.notes').innerText;
        const thumbUpText = exerciseItem.querySelector('.thumbUp').innerText;
        const thumbUpVal = parseFloat(thumbUpText.replace('Total upvotes: ', '').trim());
        const exerciseId = exerciseItem.getAttribute('data-id'); //stores id in data attribute
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            '_id': exerciseId, //id value part of request object getting sent server side
            'userName': userNameVal,
            'phase': phaseVal,
            'dayOfTheWeek': dayOfTheWeekVal,
            'exerciseName': exerciseNameVal,
            'sets': setsVal,
            'reps': repsVal,
            'notes': notesVal,
            'thumbUp': thumbUpVal
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
