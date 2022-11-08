import datepicker from 'js-datepicker';

window.addEventListener('load', () => {
  const $dateInputs = document.querySelectorAll('.input_date');
  $dateInputs.forEach(($input) => {
    const picker = datepicker($input, {
      customMonths: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
      ],
      customDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
      formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value
      }
    });
  });
});