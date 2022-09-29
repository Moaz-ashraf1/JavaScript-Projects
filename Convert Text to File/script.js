const textArea = document.querySelector('textarea');
fileNameInput = document.querySelector('.file-name input');
selectMenu = document.querySelector('.save-as select');
saveBtn = document.querySelector('.save-btn');


// change the btn text according to the selected option
selectMenu.addEventListener('change', () => {
  let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;

  saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]}`;
})
saveBtn.addEventListener('click', () => {
  const blob = new Blob([textArea.value], { type: selectMenu.value });
  console.log(blob);
  const fileUrl = URL.createObjectURL(blob); //The URL.createObjectURL() static method creates a string containing a URL representing the object given in the parameter.
  const link = document.createElement("a");
  link.download = fileNameInput.value;
  link.href = fileUrl;
  console.log(link);
  link.click(); // Event Simulation (محاكاه مش بعملها بايدي )
})