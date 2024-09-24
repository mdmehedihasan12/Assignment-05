
const blogBtn = document.getElementById('');
const myBalance = document.getElementById('my-balance').innerText;
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const nAmount = document.getElementById('n-amount').innerText;
const nInput = document.getElementById('n-input-add-money').value;
const nDonateBtn = document.getElementById('n-donate-btn');
const fAmount = document.getElementById('f-amount').innerText;
const fInput = document.getElementById('f-input').value;
const fDonateBtn = document.getElementById('f-button');
const qAmount = document.getElementById('q-amount').innerText;
const qInput = document.getElementById('q-input').value;
const qDonateBtn = document.getElementById('q-button');


// noakhali donation section

document.getElementById('n-donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    const nInput = document.getElementById('n-input-add-money').value;
    const myBalance = document.getElementById('my-balance').innerText;
    const myBalanceNumber = parseFloat(myBalance);
    const nInputNumber = parseFloat(nInput);
    const nAmountNumber = parseFloat(nAmount);
    if(nInputNumber < myBalanceNumber || nInputNumber === 'number' ){
        const myNewBalance = myBalanceNumber - nInputNumber;
        const nAmountBalance = nAmountNumber + nInputNumber;

        document.getElementById('my-balance').innerText = myNewBalance;
        document.getElementById('n-amount').innerText = nAmountBalance;
    }
    else if(isNaN(nInputNumber)){
        alert('please provide a number')
        return;
    }
    else{
        alert('you have no money')
        return;
    } 
})
// feni donation section

document.getElementById('f-button').addEventListener('click', function(event){
    event.preventDefault();
    const fInput = document.getElementById('f-input').value;
    const myBalance = document.getElementById('my-balance').innerText;
    const myBalanceNumber = parseFloat(myBalance);
    const fInputNumber = parseFloat(fInput);
    const fAmountNumber = parseFloat(fAmount);

    if(fInputNumber < myBalanceNumber || fInputNumber === 'number' ){
        const myNewBalance = myBalanceNumber - fInputNumber;
        const fAmountBalance = fAmountNumber + fInputNumber;

        document.getElementById('my-balance').innerText = myNewBalance;
        document.getElementById('f-amount').innerText = fAmountBalance;
    }
    else if(isNaN(fInputNumber)){
        alert('please provide a number')
        return;
    }
    else{
        alert('you have no money')
        return;
    } 
})
document.getElementById('q-button').addEventListener('click', function(event){
    event.preventDefault();
    const qInput = document.getElementById('q-input').value;
    const myBalance = document.getElementById('my-balance').innerText;
    const myBalanceNumber = parseFloat(myBalance);
    const qInputNumber = parseFloat(qInput);
    const qAmountNumber = parseFloat(qAmount);

    if(qInputNumber < myBalanceNumber || qInputNumber === 'number' ){
        const myNewBalance = myBalanceNumber - qInputNumber;
        const qAmountBalance = qAmountNumber + qInputNumber;
       
        document.getElementById('my-balance').innerText = myNewBalance;
        document.getElementById('q-amount').innerText = qAmountBalance;
        this.onclick("'my_modal_5.showModal()")
        alert('your money added success')
    }
    else if(isNaN(qInputNumber)){
        alert('please provide a number')
        return;
    }
    else{
        alert('you have no money')
        return;
    } 
})


function showSectionById(id){
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-form').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}




document.getElementById('donation-btn').addEventListener('click', function(event){
    event.preventDefault();
    showSectionById('donation-form');
    document.getElementById('history-btn').classList.remove('bg-btnBg');
    document.getElementById('donation-btn').classList.add('bg-btnBg');

})

document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-form')
    document.getElementById('donation-btn').classList.remove('bg-btnBg');
    document.getElementById('history-btn').classList.add('bg-btnBg');
})
