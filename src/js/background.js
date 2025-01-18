//     __                  __                                          __      _      
//    / /_   ____ _ _____ / /__ ____ _ _____ ____   __  __ ____   ____/ /     (_)_____
//   / __ \ / __ `// ___// //_// __ `// ___// __ \ / / / // __ \ / __  /     / // ___/
//  / /_/ // /_/ // /__ / ,<  / /_/ // /   / /_/ // /_/ // / / // /_/ /_    / /(__  ) 
// /_.___/ \__,_/ \___//_/|_| \__, //_/    \____/ \__,_//_/ /_/ \__,_/(_)__/ //____/  
//                           /____/                                     /___/         

const imageUrlInput = document.querySelector("#image_url");
const processingBg = document.querySelector(".processing_bg");
const background_body = document.querySelector("body");
const inputFile = document.getElementById("imageupload");

document.querySelector("#save-image").addEventListener("click", () => {
  const imageUrlValue = imageUrlInput.value.trim();
  if (!imageUrlValue) {
    processingBg.innerHTML =
      '<i class="las la-exclamation-triangle"></i> Please enter a valid URL.';
    return;
  }
  processingBg.innerHTML =
    '<i class="las la-check-circle"></i> Background image has been successfully applied, please reload the page to see this change in effect...';
  localStorage.setItem("image_url", imageUrlValue);
  localStorage.removeItem("imageupload");
  body.style.backgroundImage = `url(${imageUrlValue})`;
});

// Upload Image and Set as Background
inputFile.addEventListener("change", (event) => {
  const image = event.target.files[0];

  if (image.size / 1024 / 1024 >= 4) {
    processingBg.innerHTML =
      '<span style="color:var(--delete-warning-bg)"><i class="las la-exclamation-circle"></i>Error! The selected image exceeds 4MB. Please choose a smaller file.</span>';
    return;
  }

  processingBg.innerHTML =
    '<i class="las la-check-circle"></i> Image uploaded and set as background successfully. Please reload the page to see this change in effect...';
  localStorage.removeItem("image_url");

  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem("imageupload", reader.result);
    body.style.backgroundImage = `url(${reader.result})`;
  };
  reader.readAsDataURL(image);
});

// Set Background from LocalStorage
const savedImageUpload = localStorage.getItem("imageupload");
const savedImageUrl = localStorage.getItem("image_url");

if (savedImageUpload) {
  background_body.style.backgroundImage = `url(${savedImageUpload})`;
} else if (savedImageUrl) {
  background_body.style.backgroundImage = `url(${savedImageUrl})`;
}

// Delete Background
document.querySelector("#delete_custom_image").addEventListener("click", () => {
  if (!savedImageUpload && !savedImageUrl) {
    processingBg.innerHTML =
      '<i class="las la-exclamation-circle"></i> No custom background found to delete.';
    return;
  }

  if (confirm("Are you sure you want to remove the current background image?")) {
    localStorage.removeItem("image_url");
    localStorage.removeItem("imageupload");
    body.style.backgroundImage = "";
    imageUrlInput.style.width = "100%";
    document.querySelector("#copy-backgroundurl").style.display = "none";
    processingBg.innerHTML =
      '<i class="las la-check-circle"></i> Background image has been removed, please reload the page to see this change in effect...';
  }
});
