import Choices from 'choices.js';

const $bookingInputs = document.querySelectorAll('.booking__select-input');
$bookingInputs.forEach($input => {
  const choices = new Choices($input, {
    searchEnabled: false,
    itemSelectText: '',
    placeholder: true,
    RenderSelectedChoices: 'always'
  });
});