import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  if (!delay || delay <= 0) {
    iziToast.error({
      title: "Error",
      message: "Please enter a delay greater than 0ms.",
      position: "topRight",
    });
    return;
  }

  if (!state) {
    iziToast.error({
      title: "Error",
      message: "Please select a promise state.",
      position: "topRight",
    });
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      state === "fulfilled" ? resolve(delay) : reject(delay);
    }, delay);
  })
    .then((delay) => {
      iziToast.success({
        title: "✅ Success",
        message: `Fulfilled promise in ${delay}ms`,
        position: "topRight",
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: "❌ Error",
        message: `Rejected promise in ${delay}ms`,
        position: "topRight",
      });
    });

  form.reset();
});
