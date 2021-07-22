

let data;
let offset = 0;
const perPage = 11;

const myFunc = (offset,perPage) => {
  const mydata = document.querySelector('#tbody');
  mydata.innerHTML = data.slice(offset, offset+perPage).map((e,index) => {
    if(index%2){
      return ("<tr class='dark'><td><input class='checkbox' type='checkbox'></td><td>"+e.name_customer+"</td><td>"+e.cust_number+"</td><td>"+e.invoice_id+"</td><td>"+e.total_open_amount+"</td><td>"+e.due_in_date+"</td><td>"+e.clear_date+"</td><td>"+e.Delay_bucket+"</td></tr>")
    }
    else{
      return("<tr class='light'><td><input class='checkbox' type='checkbox'></td><td>"+e.name_customer+"</td><td>"+e.cust_number+"</td><td>"+e.invoice_id+"</td><td>"+e.total_open_amount+"</td><td>"+e.due_in_date+"</td><td>"+e.clear_date+"</td><td>"+e.Delay_bucket+"</td></tr>")
    }
  }).join('');
}

const working = async()=>{
  const creds = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  };
  try {
    const promise = await fetch("http://localhost:3000/data",creds);
    const result = await promise.json()
    console.log(result);
    data=result;
    myFunc(offset, perPage);
  }
  catch (err) {
    console.log(err);
  }
}

window.onload = () => {
    working();
};

const Previousbtn = (e) => {
  if(offset>0) {
    offset=offset-perPage;
    myFunc(offset, perPage);
  }
}

const Nextbtn =(e) => {
  if(offset<data.length - perPage){
    offset=offset+perPage;
    myFunc(offset, perPage);
  }
}















// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}






// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

let datas = [];
    const addData = (ev)=>{
        ev.preventDefault();  
        let data = {
          id: Date.now(),
          name_customer: document.getElementById('custname').value,
          cust_number: document.getElementById('custno').value,
          invoice_id: document.getElementById('invoiceno').value,
          total_open_amount: document.getElementById('invoiceamount').value,
          due_in_date: document.getElementById('duedate').value,
        }
        datas.push(data);
        document.forms[0].reset(); // to clear the form for the next entries
        //document.querySelector('form').reset();

        //for display purposes only
        console.warn('added' , {datas} );
        const newData = document.querySelector('#t_body');
        newData.innerHTML="<td><input class='checkbox' type='checkbox'></td><td>"+data.name_customer+"</td><td>"+data.cust_number+"</td><td>"+data.invoice_id+"</td><td>"+data.total_open_amount+"</td><td>"+data.due_in_date+"</td><td>"+data.clear_date+"</td><td> Prediction has to be done. </td>";
    }

    document.addEventListener('DOMContentLoaded', ()=>{
      document.getElementById('addbutton').addEventListener('click', addData);
  });