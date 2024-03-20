const scheme = document.querySelector("[name='scheme']");
const address = document.querySelector("[name='address']");
const path = document.querySelector("[name='path']");
const link = document.querySelector("#link");

const updateLink = () => {
  link.href = `${scheme.value}://${address.value}${path.value}`;
};

scheme.addEventListener("input", updateLink);
address.addEventListener("input", updateLink);
path.addEventListener("input", updateLink);

updateLink();
