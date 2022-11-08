window.addEventListener('load', () => {
  const $reviews = document.querySelectorAll('.review');

  $reviews.forEach($review => {
    const $moreBtn = $review.querySelector('.review__more');
    const defaultHeight = $review.clientHeight;
    
    $moreBtn.addEventListener('click', () => {
      $review.classList.toggle('review_active');
      console.log($review);

      if ($review.classList.contains('review_active')) {
        $review.style.height = `${$review.scrollHeight}px`;
      } else {
        $review.style.height = `${defaultHeight}px`;
      }
    });
  });
});