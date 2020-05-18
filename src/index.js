import app from './app';
// import Tenders from './tenders';
import TenderService from './Services/TenderService';

const verify = document.getElementById('verify');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const openTenderContent = document.getElementById('openTender');
const headerText = document.getElementById('header');
const cardTitle = document.querySelector('.card-title');
const date = document.getElementById('date');
const mylist = document.getElementById('mylist');
const department = document.getElementById('department');
const winner = document.getElementById('winner');
const tenderStatusTest = document.getElementById('tenderStatus');
const detectfrauld = document.getElementById('frauld-detector');

const startApp = async () => {
  const header = document.querySelector('[data-app-name]');
  if (!header) return;

  const programName = await app();
  header.textContent = programName;
};
function startLoaderEffect() {
  section1.style.display = 'none';
  section2.style.display = 'none';
  section3.classList = 'loader';
}
const stopLoaderEffect = () => {
  section3.classList = 'noloader';
};
const openTender = (tenderobj) => {
  const { id, ...rest } = tenderobj;
  startLoaderEffect();
  setTimeout(() => {
    if (id !== null) {
      stopLoaderEffect();
      tenderStatusTest.innerHTML = 'THIS TENDER IS VALID';
      winner.style.display = 'none';
      headerText.style.display = 'none';
      openTenderContent.style.display = 'inline';
      cardTitle.innerHTML = `Tender Number: ${rest.tenderNumber}`;
      date.innerHTML = new Date();
      const departmentData = `<ul><li>Name Of Institution: ${rest.nameOfInstitution}</li>
     <li>Offical Location: ${rest.officalLocation}</li><li>Contact Person: Name</li>
     <li>Phone Number: 000 000 000</li><li>Email Address: test@gmail.com</li></ul>`;

      const data = `<ul><li>Tender Status: <b>OPEN TENDER</b></li>
      <li>Tender Description: ${rest.tenderDescription}</li>
      <li>Tender Category: ${rest.category}</li><li>Date Published: ${rest.datePublished}</li>
      <li>Closing Date: ${rest.closingDate}</li></ul>`;
      mylist.innerHTML = data;
      department.innerHTML = departmentData;
    }
  }, 400);
};
const closedTender = (tenderobj) => {
  const { id, ...rest } = tenderobj;
  startLoaderEffect();
  setTimeout(() => {
    if (id !== null) {
      stopLoaderEffect();
      tenderStatusTest.innerHTML = 'THIS TENDER HAS BEEN AWARDED';
      headerText.style.display = 'none';
      openTenderContent.style.display = 'inline';
      cardTitle.innerHTML = `Tender Number: ${rest.tenderNumber}`;
      date.innerHTML = new Date();
      const winnerText = `<ul><li>Tender awarded to: ${rest.companyName}</li>
      <li>Tender Point Score: 87%</li>
      <li>Company RegistrationNo: ${rest.companyRegistrationNo}</li>
      <li>Registered Date: 4/10/2019</li><li>Directors: ${rest.directors}</li>
      <li>Phone Number: ${rest.cellNumber}</li>
      <li>Company Address: ${rest.companyAddress}</li>
      </ul>`;

      const departmentData = `<ul><li>Name Of Institution: ${rest.nameOfInstitution}</li>
      <li>Offical Location: ${rest.officalLocation}</li><li>Contact Person: Name</li>
      <li>Phone Number: 000 000 000</li>
      <li>Email Address: test@gmail.com</li></ul>`;

      const data = `<ul><li>Tender Status: <b>AWARDED TENDER</b></li>
      <li>Tender Description: ${rest.tenderDescription}</li>
      <li>Tender Category: ${rest.category}</li>
      <li>Date Published: ${rest.datePublished}</li>
      <li>Closing Date: ${rest.closingDate}</li></ul>`;

      mylist.innerHTML = data;
      department.innerHTML = departmentData;
      winner.innerHTML = winnerText;
    }
  }, 400);
};
function checkTenderStatus(tenderobj) {
  const { id, ...rest } = tenderobj;
  if (rest.tenderStatus === 'Valid') {
    openTender(tenderobj);
  }
  if (rest.tenderStatus === 'Awarded') {
    closedTender(tenderobj);
  }
  if (rest.tenderStatus === 'Pending') {
    openTender(tenderobj);
  }
}
const verifyTenderNumber = () => {
  startLoaderEffect();
  setTimeout(() => {
    section3.classList = 'noloader';
    section2.style.display = 'inline';
    section2.innerHTML += "<center class='textinput'><b>Enter Tender Reference Number</b> <br> <input type='text' id='textid' name='subdomain' required = 'required' /></center>";
    section3.classList = 'olu';
    const validateTender = document.createElement('button');
    validateTender.type = 'button';
    validateTender.innerText = 'Verify';
    validateTender.id = 'validateTender';
    validateTender.className = 'mybtn btn btn-primary';
    validateTender.onclick = (() => {
      const inputText = document.getElementById('textid').value;
      if ((inputText !== '') && !(inputText.length < 6)) {
        const inputValue = document.getElementById('textid').value;
        startLoaderEffect();
        validateTender.style.display = 'none';
        const EncodedText = inputValue.replace(/\//g, '%2F');
        TenderService.getTender(EncodedText).then((response) => {
          checkTenderStatus(response);
        });
      } else {
        // eslint-disable-next-line no-alert
        alert('Six Or More Characters Expected');
      }
    });
    document.body.appendChild(validateTender);
  }, 3000);
};

function listTenders() {
  startLoaderEffect();
  setTimeout(() => {
    document.querySelector('.hide').style.display = 'inline';
    section3.classList = 'noloader';
    section2.style.display = 'inline';
    headerText.style.display = 'none';
    TenderService.ListTender().then((res) => {
      const table = document.getElementById('tendertable');
      res.forEach((object) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${object.category}</td>`
                + `<td>${object.tenderDescription}</td>`
                + `<td>${object.tenderNumber}</td>`
                + `<td>${object.datePublished}</td>`
                + `<td>${object.closingDate}</td>`;
        table.appendChild(tr);
      });
    });
  }, 3000);
}
function detectFrauld() {
  TenderService.getmytender().then((res) => {
    console.log('My response is: ', res);
  });
}
const el = document.getElementById('viewtenders');
if (el) {
  el.addEventListener('click', listTenders, false);
}
if (verify) {
  verify.addEventListener('click', verifyTenderNumber, false);
}
if (detectfrauld) {
  detectfrauld.addEventListener('click', detectFrauld, false);
}

document.addEventListener('DOMContentLoaded', startApp);
