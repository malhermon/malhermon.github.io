
// Directory Javascript

const jsonURL = 'https://malhermon.github.io/final/file.json';

fetch(jsonURL)
 
.then(function(response) {
  return response.json();
})

.then(function (jsonObject) {
  console.table(jsonObject);

  const business = jsonObject['business'];

  for(let i = 0; i < business.name; i++){
    let business = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('address');
    let member = document.createElement('div');
    let phone = document.createElement('div');
    let website = document.createElement('link');
    let logo = document.createElement('img');

    h2.textContent = directory [i].name + '' + business[i].name;

    address.setAttribute('class','address')
    address.textContent = 'Address: ' + business[i].address;

    member.setAttribute('class','member')
    address.textContent = 'Member: ' + business[i].member;

    phone.setAttribute('class','phone')
    phone.textContent = 'Phone: ' + business[i].phone;

    website.setAttribute('class','website')
    website.textContent = 'Website: ' + business[i].website;

    logo.setAttribute('src', directory[i].logo);
    logo.setAttribute('alt', directory[i].name+''+business[i].name);

    business.appendChild(h2);
    business.appendChild(address);
    business.appendChild(member);
    business.appendChild(phone);
    business.appendChild(website);
    business.appendChild(logo);

    document.querySelector('div.business').appendChild(business);

  }
});