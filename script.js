document.addEventListener('DOMContentLoaded', function()   {

document.getElementById("bookNowBtn").addEventListener("click",function() {
  document.getElementById("popup").style.display = "block";
});
  document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });
  document.getElementById("pickupBtn").addEventListener("click", function() {
      alert("pickup selected!");
    document.getElementById("popup").style.display = "none";
  });
  document.getElementById("deliveryBtn").addEventListener("click", function() {
    alert("Delivery selected!");
    document.getElementById("popup").style.display ="none";
  });
});