emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

document
.getElementById("tourForm")
.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const phone =
document.getElementById("phone").value;

const travellers =
parseInt(document.getElementById("travellers").value);

const packagePrice =
parseInt(document.getElementById("packageType").value);

const room =
document.getElementById("room").value;

const totalAmount =
travellers * packagePrice;

const options = {

key: "YOUR_RAZORPAY_KEY",

amount: totalAmount * 100,

currency: "INR",

name: "Dream Travels",

description: "Sikkim Tour Package",

handler: function(response){

emailjs.send(
"YOUR_EMAILJS_SERVICE_ID",
"YOUR_EMAILJS_TEMPLATE_ID",
{
name: name,
email: email,
phone: phone,
room: room,
travellers: travellers,
amount: totalAmount,
payment_id:
response.razorpay_payment_id
}
)
.then(function(){

alert(
"Payment Successful!\nConfirmation email sent to "
+ email
);

document
.getElementById("tourForm")
.reset();

})
.catch(function(error){

alert(
"Payment successful but email failed."
);

console.log(error);

});

}

};

const rzp =
new Razorpay(options);

rzp.open();

});