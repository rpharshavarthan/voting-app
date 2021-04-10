//button.style.backgroundColor = 'rgba(0, 230, 64, 1)';
const candidates = [
    {
        id: 0,
        name: 'Santosh A',
        party: 'Republic Party',
        votes: 0
    },
    {
        id: 1,
        name: 'santosh B',
        party: 'Democratic Party',
        votes: 0
    }
];
let voted1Or2 = 0;
let candidate1_votes = 0;
let candidate2_votes = 0;
let card = document.querySelectorAll('.card');
card[0].addEventListener('click', candidateNo1);
card[1].addEventListener('click', candidateNo2);
function candidateNo1(){
    let button = document.querySelector('.btn-1');
    let voteCount = document.querySelector('.vote-count-1');
    if(voted1Or2 == 2){
        card[1].addEventListener('click', candidateNo2);
        card[1].style.pointerEvents = '';
        unVote(document.querySelector('.btn-2'), document.querySelector('.vote-count-2'), 1);
    }
    voted1Or2 = 1;
    card[0].style.pointerEvents = 'none';
    voted(button, voteCount, 1);
    removeEventListner(0);
}
function candidateNo2(){
    let button = document.querySelector('.btn-2');
    let voteCount = document.querySelector('.vote-count-2');
    if(voted1Or2 == 1){
        card[0].addEventListener('click', candidateNo1);
        card[0].style.pointerEvents = '';
        unVote(document.querySelector('.btn-1'), document.querySelector('.vote-count-1'), 0);
    }
    voted1Or2 = 2;
    card[1].style.pointerEvents = 'none';
    voted(button, voteCount, 2);
    removeEventListner(1);
}
function voted(button, voteCount, val){
    if(val == 1){
        candidate1_votes += 1;
        voteCount.innerHTML = candidate1_votes;
    }else if(val == 2){
        candidate2_votes += 1;
        voteCount.innerHTML = candidate2_votes;
    }
    button.innerHTML = 'Voted';
    button.style.backgroundColor = 'rgba(0, 128, 0, 1)';
}
function removeEventListner(val){
    if(val == 0){
        card[val].removeEventListener('click', candidateNo1);
    }else if(val == 1){
        card[val].removeEventListener('click', candidateNo2);
    }
}
function unVote(button, voteCount, val){
    button.innerHTML = 'Vote';
    if(val == 0){
        button.style.backgroundColor = '#fe4c13';
        candidate1_votes--;
        voteCount.innerHTML = candidate1_votes;
    }else if(val == 1){
        button.style.backgroundColor = '#3fb3e4';
        candidate2_votes--;
        voteCount.innerHTML = candidate2_votes;
    }
}