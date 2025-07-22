function hideAllFields() {
  document.getElementById("orderDetails").style.display = "none";
  document.getElementById("pickupAddress").style.display = "none";
  document.getElementById("yourAddress").style.display = "none";
  document.getElementById("deliveryAddress").style.display = "none";
}

function openOrderForm() {
  document.getElementById("formPopup").style.display = "block";
  document.getElementById("formTitle").innerText = "Place Your Order";
  document.getElementById("requestType").value = "Order";

  hideAllFields();
  document.getElementById("orderDetails").style.display = "block";
  document.getElementById("yourAddress").style.display = "block";

document.getElementById("orderDetails").required = true;
document.getElementById("yourAddress").required = true;
document.getElementById("pickupAddress").required = false;
document.getElementById("deliveryAddress").required = false;

}

function openPickupForm() {
  document.getElementById("formPopup").style.display = "block";
  document.getElementById("formTitle").innerText = "Schedule a Pickup";
  document.getElementById("requestType").value = "Pickup";

  hideAllFields();
  document.getElementById("orderDetails").placeholder = "Item";
  document.getElementById("orderDetails").style.display = "block";
  document.getElementById("pickupAddress").style.display = "block";
  document.getElementById("deliveryAddress").style.display = "block";

  document.getElementById("orderDetails").required = true;
document.getElementById("pickupAddress").required = true;
document.getElementById("deliveryAddress").required = true;
document.getElementById("yourAddress").required = false;

}

function openDeliveryForm() {
  document.getElementById("formPopup").style.display = "block";
  document.getElementById("formTitle").innerText = "Request a Delivery";
  document.getElementById("requestType").value = "Delivery";

  hideAllFields();
  document.getElementById("yourAddress").style.display = "block";
  document.getElementById("deliveryAddress").style.display = "block";

  document.getElementById("yourAddress").required = true;
document.getElementById("deliveryAddress").required = true;
document.getElementById("orderDetails").required = false;
document.getElementById("pickupAddress").required = false;

}

function closeForm() {
  document.getElementById("formPopup").style.display = "none";
}
document.getElementById("successForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  fetch("https://formspree.io/f/xkgzjojg", {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("formSuccess").style.display = "block";
      form.reset();
      setTimeout(() => {
        document.getElementById("formSuccess").style.display = "none";
        closeForm();
      }, 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  })
  .catch(error => {
    alert("Network error. Please check your connection.");
  });
});


