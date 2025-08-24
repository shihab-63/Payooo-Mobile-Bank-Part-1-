document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // Fixed Pin Number
    const pin = 1234;

    const selectBank = document.getElementById("select-bank").value;
    const bankAccontNumber = document.getElementById(
      "bank-account-number"
    ).value;
    const amountOfMoney = parseInt(
      document.getElementById("amount-to-money").value
    );
    const pinNumberAdd = parseInt(
      document.getElementById("pin-number-add").value
    );

    const availableBalance = document.getElementById("available-balance");
    const intAvailableBalance = parseInt(availableBalance.innerText);

    // Condition
    if (selectBank === "") {
      return alert("Please Select Bank");
    }

    if (bankAccontNumber.length < 11) {
      return alert("Please provite vaild account number");
    }
    if (pinNumberAdd !== pin) {
      return alert("Please provite vaild PIN");
    }

    // Sum
    const totalBalance = amountOfMoney + intAvailableBalance;
    availableBalance.innerText = totalBalance;
  });

// Toggleing 
document.getElementById('add-money-btn').addEventListener('click', function () {
    document.getElementById('cash-out-parant').style.display = 'none'
    document.getElementById('add-money-parant').style.display = 'block'

    const addMoneyButton = document.getElementById('add-money-btn')
    addMoneyButton.classList.add('bg-[#0875f25e]');
    const cashOutButton = document.getElementById('cash-out-btn')
    cashOutButton.classList.remove('bg-[#0875f25e]')

})

document.getElementById('cash-out-btn').addEventListener('click', function () {
    document.getElementById('add-money-parant').style.display = 'none'
    document.getElementById('cash-out-parant').style.display = 'block'

    const cashOutButton = document.getElementById('cash-out-btn')
    cashOutButton.classList.add('bg-[#0875f25e]')
    const addMoneyButton = document.getElementById('add-money-btn')
    addMoneyButton.classList.remove('bg-[#0875f25e]');
})


// WithDrow Section
document.getElementById('btn-withdrow-money').addEventListener('click',function (e) {
    e.preventDefault();
    const amount = document.getElementById('amount-number');
    const intAmount = parseInt(amount.value);

    const availableBalance = document.getElementById('available-balance');
    const intAvailableBalance = parseInt(availableBalance.innerText);
    
    // Sum 
    const totalBalance = Math.abs(intAmount - intAvailableBalance);
    
    availableBalance.innerText = totalBalance;
})