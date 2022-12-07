let elem = document
  .querySelector(".main___sidebar__accordion_top_mainlbl")
  .addEventListener("click", (ev) => {
    event.preventDefault();
    let item = document.querySelector(".main___sidebar__accordion_list");
    item.classList.toggle("opened");
    let image = document.querySelector(".main___sidebar__accordion_top_img");
    image.classList.toggle("append");
  });

const mainInput = document.querySelector(
  ".main___sidebar__accordion_top_lbl_checkbox"
);

const allCheckbox = document.querySelectorAll(
  ".main___sidebar__accordion_list_item_lbl_checkbox"
);
let listBoolean = [];
allCheckbox.forEach((item) =>
  item.addEventListener("change", () => {
    allCheckbox.forEach((i) => {
      listBoolean.push(i.checked);
    });
    if (listBoolean.includes(false)) {
      mainInput.checked = false;
    } else {
      mainInput.checked = true;
    }
    listBoolean = [];
  })
);

mainInput.addEventListener("change", () => {
  allCheckbox.forEach((it) => {
    if (mainInput.checked === true) {
      it.checked = true;
    }
  });
});

let ff = document
  .querySelector(".main___sidebar__absence_top")
  .addEventListener("click", (event) => {
    event.preventDefault();
    let z = document.querySelector(".main___sidebar__absence_list");
    z.classList.toggle("open");
    let v = document.querySelector(".main___sidebar__absensce_top_img");
    v.classList.toggle("append");
  });

document
  .querySelector(".header___button__menu_inp")
  .addEventListener("click", (el) => {
    el.stopPropagation();
    el.target.value = "";
  });

const form = document.forms["form"];

form.addEventListener("input", inputHandler);

function inputHandler({ target }) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}
function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg = RegExp(inputReg);
  console.log(inputValue, reg);
  if (reg.test(inputValue)) {
    el.style.color = "black";
  } else {
    el.style.color = "red";
  }
}

const clickInp = document.querySelectorAll("[data-inp]");
if (clickInp) {
  clickInp.forEach((inp) => {
    inp.addEventListener("click", (el) => {
      event.stopPropagation();
      el.target.value = "";
    });
  });
}

const counters = document.querySelectorAll("[data-counter]");

const price = {
  tshirt: 522,
  case: 354,
  pencils: 100,
};

if (counters) {
  counters.forEach((counter) => {
    counter.addEventListener("click", (e) => {
      const target = e.target;

      if (
        target.closest(
          ".main___sidebar__accordion_list_item_amount_count_plus"
        ) ||
        target.closest(
          ".main___sidebar__accordion_list_item_amount_count_minus"
        )
      ) {
        let value = parseInt(
          target
            .closest(".main___sidebar__accordion_list_item_amount_count")
            .querySelector("input").value
        );

        if (target.classList.contains("counter__button_plus")) {
          value++;
        } else {
          --value;
        }
        if (value <= 1) {
          value = 1;
          target
            .closest(".main___sidebar__accordion_list_item_amount_count")
            .querySelector(".counter__button_minus")
            .classList.remove("disabled");
        } else {
          target
            .closest(".main___sidebar__accordion_list_item_amount_count")
            .querySelector(".counter__button_minus")
            .classList.add("disabled");
        }

        target
          .closest(".main___sidebar__accordion_list_item_amount_count")
          .querySelector("input").value = value;

        if (target.closest(".cnt1")) {
          document.querySelector(
            ".main___sidebar__accordion_list_item_sum_1_1"
          ).value = value * price.tshirt + " " + "сом";
          document.querySelector(
            ".main___sidebar__accordion_list_item_sum_2_first"
          ).value = value * price.tshirt * 1.5 + " " + "сом";
        } else if (target.closest(".cnt2")) {
          document.getElementById("sum2").value =
            value * price.case + " " + "сом";
          document.querySelector(
            ".main___sidebar__accordion_list_item_sum_2_second"
          ).value = value * price.case * 2 + " " + "сом";
        } else if (target.closest(".cnt3")) {
          document.getElementById("sum3").value =
            value * price.pencils + " " + "сом";

          document.querySelector(
            ".main___sidebar__accordion_list_item_sum_2_third"
          ).value = value * price.pencils * 1.25 + " " + "сом";
        }

        getTotal();
        getTotalDiscount();
        getDiff();
      }
    });
  });
}

const getTotal = () => {
  let arr = document.querySelectorAll(
    ".main___sidebar__accordion_list_item_sum_1_1"
  );
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) {
      total += parseInt(arr[i].value);
    }
  }

  document.getElementById("total").value = total + " " + "сом";
};

const getTotalDiscount = () => {
  let arr = document.querySelectorAll("[data-discount]");
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) {
      total += parseInt(arr[i].value);
    }
  }

  document.getElementById("discount").value = total + " " + "сом";
};

const getDiff = () => {
  let total = parseInt(document.getElementById("total").value);
  let totalDiscount = parseInt(document.getElementById("discount").value);

  document.getElementById("diff").value = total - totalDiscount + " " + "сом";
};

document
  .querySelector(".main___sidebar__payment_top_2")
  .addEventListener("click", (elem) => {
    elem.preventDefault();
    target = elem.target;
    if (target.closest(".main___sidebar__payment_top")) {
      let item = document.querySelector(".window");
      item.classList.add("openWindow");
    }
  });

document
  .querySelector(".cardData___paymentsys")
  .addEventListener("click", (elem) => {
    elem.preventDefault();
    target = elem.target;
    if (target.closest(".window___center__name")) {
      let item = document.querySelector(".window");
      item.classList.remove("openWindow");
    }
  });
