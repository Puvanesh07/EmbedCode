const generateCodeBtn = document.getElementById("generate-code-btn");
const embedCodeContainer = document.getElementById("embed-code-container");
const embedCode = document.getElementById("embed-code");
const copyBtn = document.getElementById("copy-btn");
const successMsg = document.getElementById("success-msg");
const iframeCode = `<iframe src="${window.location.href}"width="100%" height="500" frameBorder="0" scrolling="no"  webkitallowfullscreen
allow='camera; gyroscope; accelerometer; magnetometer; fullscreen;'></iframe>`;

// Set the initial value of the embed code textarea to include the iframe code with the current page URL
embedCode.value = iframeCode;

generateCodeBtn.addEventListener("click", () => {
  embedCodeContainer.style.display = "block";
});

copyBtn.addEventListener("click", () => {
  // Select the embed code text
  embedCode.select();
  embedCode.setSelectionRange(0, 99999);

  // Copy the embed code text
  document.execCommand("copy");

  // Show the success message for 2 seconds
  successMsg.classList.add("show");
  setTimeout(() => {
    successMsg.classList.remove("show");

    // Close the embed code container after copying
    embedCodeContainer.style.display = "none";
  }, 2000);
});

// Close the embed code container when clicking outside of it or on the close button
window.addEventListener("click", (event) => {
  if (
    event.target == embedCodeContainer ||
    event.target == document.getElementById("close-btn")
  ) {
    embedCodeContainer.style.display = "none";
  }
});
