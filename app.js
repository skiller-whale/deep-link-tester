const scheme = document.querySelector("[name='scheme']");
const ip = document.querySelector("[name='ip']");
const path = document.querySelector("[name='path']");
const link = document.querySelector("#link");

const updateLink = () => {
  link.href = `${scheme.value}://${ip.value}/--/${path.value}`;
};

scheme.addEventListener("input", updateLink);
ip.addEventListener("input", updateLink);
path.addEventListener("input", updateLink);
