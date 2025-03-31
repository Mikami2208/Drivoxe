import '../scss/style.scss';

const arrow = document.querySelector('.reviews-arrow.arrow') as HTMLElement | null;
const backArrow = document.querySelector('.reviews-arrow.back-arrow') as HTMLElement | null;
const reviewCards = document.querySelectorAll('.reviews__card') as NodeListOf<HTMLElement>;

let index: number = 0;
const maxIndex = reviewCards.length - 1;

function updateReviews() {
    reviewCards.forEach((card, i) => {
        card.classList.toggle('dsp-none', i !== index);
    });

    arrow?.classList.toggle('is-select', index === maxIndex);
    backArrow?.classList.toggle('is-select', index === 0);
}

arrow?.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        updateReviews();
    }
});

backArrow?.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateReviews();
    }
});

updateReviews();
