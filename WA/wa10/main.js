const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 20 fahrenheit and snowing outside, so :insertx: called :insertw: and packed up the car with skiis. When they got to :inserty:, they stared in horror at the lift lines, then :insertz:. :insertw: was just happy :insertx: asked her to go skiing and did not mind that she carried her and :insertx:s  50 pound ski gear from the car.';
const insertX = ['Fred','Scooby','Shaggy'];
const insertW = ['Daphnie','Velma'];
const insertY = ['Eldo', 'Copper','A Bay'];
const insertZ = ['turned around and got back in the car','went to the chalet for apre-wait-and-ski-later'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const wItem = randomValueFromArray(insertW);
    const yItem = randomValueArray(insertY);
    const zItem = randomValueArray(insertZ);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':insertx:',wItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('bob',name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
    newStory = newStory.replaceAll('20 farhrenheit',temperature);
    newStory = newStory.replaceAll('50 pound',weight);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}
