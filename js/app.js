const blogBtn = document.getElementById("blog-btn");
const homeBtn = document.getElementById('home-btn');
const myBalance = document.getElementById("my-balance").innerText;
const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
const nAmount = document.getElementById("n-amount").innerText;
const nInput = document.getElementById("n-input-add-money").value;
const nDonateBtn = document.getElementById("n-donate-btn");
const fAmount = document.getElementById("f-amount").innerText;
const fInput = document.getElementById("f-input").value;
const fDonateBtn = document.getElementById("f-button");
const qAmount = document.getElementById("q-amount").innerText;
const qInput = document.getElementById("q-input").value;
const qDonateBtn = document.getElementById("q-button");

// noakhali donation section

document
  .getElementById("n-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const nInput = document.getElementById("n-input-add-money").value;
    const myBalance = document.getElementById("my-balance").innerText;
    const nAmount = document.getElementById("n-amount").innerText;
    const myBalanceNumber = parseFloat(myBalance);
    const nInputNumber = parseFloat(nInput);
    const nAmountNumber = parseFloat(nAmount);
    if (
      nInputNumber > myBalanceNumber ||
      typeof nInputNumber !== "number" ||
      nInputNumber < 1
    ) {
      return alert("invalid Donation Amount");

    } else if(isNaN(nInputNumber)){
      return alert('Please provide a Number')
    }
    
    else {
      const myNewBalance = myBalanceNumber - nInputNumber;
      const nAmountBalance = nAmountNumber + nInputNumber;
      document.getElementById("my-balance").innerText = myNewBalance;
      document.getElementById("n-amount").innerText = nAmountBalance;
      const div = document.createElement('div')
      div.className =  'border py-6 px-5 rounded-xl mt-4'
      div.innerHTML = `
        <h1>${nInputNumber} Tk is Donated for famine-2024 at Noakhali, Bangladesh</h1>
        <p>${new Date()}</p>
      `
      document.getElementById("history-form").appendChild(div);

      my_modal_1.showModal();
    }

  });
// feni donation section

document.getElementById("f-button").addEventListener("click", function (event) {
  event.preventDefault();
  const fInput = document.getElementById("f-input").value;
  const myBalance = document.getElementById("my-balance").innerText;
  const fAmount = document.getElementById("f-amount").innerText;
  const myBalanceNumber = parseFloat(myBalance);
  const fInputNumber = parseFloat(fInput);
  const fAmountNumber = parseFloat(fAmount);


  if (
    fInputNumber > myBalanceNumber ||
    typeof fInputNumber !== "number" ||
    fInputNumber < 1
  ) {
    return alert("invalid Donation Amount");

  }else if(isNaN(fInputNumber)){
    return alert('Please provide a Number')
  }
  
  else {
    const myNewBalance = myBalanceNumber - fInputNumber;
    const fAmountBalance = fAmountNumber + fInputNumber;
    document.getElementById("my-balance").innerText = myNewBalance;
    document.getElementById("f-amount").innerText = fAmountBalance;
    const div = document.createElement('div')
    div.className =  'border py-6 px-5 rounded-xl mt-4'
    div.innerHTML = `
      <h1>${fInputNumber} Tk is Donated for famine-2024 at Feni, Bangladesh</h1>
      <p>${new Date()}</p>
    `
    document.getElementById("history-form").appendChild(div);
    my_modal_1.showModal();
  }
  
});
document.getElementById("q-button").addEventListener("click", function (event) {
  event.preventDefault();
  const qInput = document.getElementById("q-input").value;
  const myBalance = document.getElementById("my-balance").innerText;
  const qAmount = document.getElementById("q-amount").innerText;
  const myBalanceNumber = parseFloat(myBalance);
  const qInputNumber = parseFloat(qInput);
  const qAmountNumber = parseFloat(qAmount);

  if (
    qInputNumber > myBalanceNumber ||
    typeof qInputNumber !== "number" ||
    qInputNumber < 1
  ) {
    return alert("invalid Donation Amount");
  } else if(isNaN(qInputNumber)){
    return alert('Please provide a Number')
  }
  
  else {
    const myNewBalance = myBalanceNumber - qInputNumber;
    const qAmountBalance = qAmountNumber + qInputNumber;

    document.getElementById("my-balance").innerText = myNewBalance;
    document.getElementById("q-amount").innerText = qAmountBalance;

    const div = document.createElement('div')
    div.className =  'border py-6 px-5 rounded-xl mt-4'
    div.innerHTML = `
      <h1>${qInputNumber} Tk is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
      <p>${new Date()}</p>
    `
    document.getElementById("history-form").appendChild(div);
    my_modal_1.showModal();
    
  }
});

function showSectionById(id) {
  document.getElementById("donation-form").classList.add("hidden");
  document.getElementById("history-form").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

document
  .getElementById("donation-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showSectionById("donation-form");
    document.getElementById("history-btn").classList.remove("bg-btnBg");
    document.getElementById("donation-btn").classList.add("bg-btnBg");
  });

document
  .getElementById("history-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showSectionById("history-form");
    document.getElementById("donation-btn").classList.remove("bg-btnBg");
    document.getElementById("history-btn").classList.add("bg-btnBg");
  });





 
// document.getElementById('home-btn').addEventListener('click', function (event) {
//   // event.preventDefault();
//  window.location.href = './index.html'
//   console.log("hi")
// })
document.getElementById('blog-btn').addEventListener('click', function (event) {
  // event.preventDefault();
 window.location.href = './home.html'
  console.log("hi")
})



document.getElementById('home-btn').addEventListener('click', function (event) {
  // event.preventDefault();
 window.location.href = './index.html'
  console.log("hi")
})


// function homePage(){
// //      window.location.href = './home.html'
// // }

