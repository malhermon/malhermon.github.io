
// Directory Javascript

const url = "https://malhermon.github.io/final/file.json";
fetch(url)
  .then((response) => response.json())
    .then((data) => {
        data.directory.forEach((directory, index) => {
            document.getElementsByClassName('business1' + (index + 1)).innerHTML = directory.name;
            document.getElementsByClassName('business2' + (index + 1)).innerHTML = directory.address;
            document.getElementsByClassName('business3' + (index + 1)).innerHTML = directory.member;
            document.getElementsByClassName('business4' + (index + 1)).innerHTML = directory.phone;
        });
});
