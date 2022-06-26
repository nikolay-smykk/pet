function init() {
  const input = document.getElementById("upload");

  const fileReader = new FileReader();

  input.addEventListener("change", () => {
    fileReader.readAsDataURL(input.files[0]);
  });
}
init();
