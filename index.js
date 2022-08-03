
const rateBtns = document.querySelectorAll('.rate-btn');
const submitBtn = document.getElementById('submit-btn');
const rate = document.getElementById('user-selected');
const thankYou = document.getElementById('thank-you');
const rateContainer = document.getElementById('rate-container');
let clickedRate;


function rateBtnClick() {
    for( let i = 0; i <= rateBtns.length; i++) {
        rateBtns[i].addEventListener('click', () => {

            for (let i = 0; i < rateBtns.length; i++) {
                rateBtns[i].classList.contains('btn-clicked');
                rateBtns[i].classList.remove('btn-clicked');
            }

            rateBtns[i].classList.add('btn-clicked');
            clickedRate = rateBtns[i].innerHTML;
        });
    }
}


submitBtn.addEventListener('click', () => {
    rate.innerHTML = `<p>You selected ${clickedRate} out of 5</p>`;
    thankYou.style.display = "block";
    rateContainer.style.display = "none";
})

rateBtnClick();