/* FADED TEXT*/
document.body.addEventListener("click", event => {
  if (event.target.classList.contains("read-more")) {
    event.preventDefault;
    event.target.previousElementSibling.classList.toggle("faded-txt");
  }
});

/* LANGUAGE */

const select = document.querySelector(".items");
const langTxt = document.querySelectorAll(".lang");

select.addEventListener("change", event => {
  langTxt.forEach(element => {
    if (element.classList.contains(`${event.target.value}`)) {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  });
});
