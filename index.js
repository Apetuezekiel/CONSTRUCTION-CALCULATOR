let length = document.getElementById("length").value;
let breadth = document.getElementById("breadth").value;
let height = document.getElementById("height").value;
let volume = document.getElementById("volume");
let calc = document.getElementById("calc");
let result = document.getElementById("result");
let materials = document.getElementById("materials");
let formula124 = document.getElementById("formula124");
let formula134 = document.getElementById("formula134");
let formula136 = document.getElementById("formula136");
let resultC = document.querySelector(".resultC");

calc.addEventListener("click", () => {
  let length = document.getElementById("length").value;
  let breadth = document.getElementById("breadth").value;
  let height = document.getElementById("height").value;
  volume.value = length * breadth * height;
  resultC.style.opacity = "0";
});

materials.addEventListener("click", () => {
  resultC.style.opacity = "1";
  let V = volume.value;
  result.innerHTML = `
  <h3>Mixture Formula
<br/>
  <span class="FormulaSpan">(1-2-4)</span></h3>
  <div class="details">
  ${V}m<sup>3</sup> will require ${Math.ceil(1.44 * V)} tons of granite.
<br/>
${V}m<sup>3</sup> will require ${Math.ceil(0.72 * V)} tons of Sharp sand.
<br/>
${V}m<sup>3</sup> will require ${Math.ceil(5 * V)} bags of cement.
</div>
`;
});

formula124.addEventListener("click", () => {
  let V = volume.value;
  result.innerHTML = `
  <h3>Mixture Formula
<br/>
<span class="FormulaSpan">(1-2-4)</span></h3>
  <div class="details">
  ${V}m<sup>3</sup> will require ${Math.ceil(1.44 * V)} tons of granite.
<br/>
${V}m<sup>3</sup> will require ${Math.ceil(0.72 * V)} tons of Sharp sand.
<br/>
${V}m<sup>3</sup> will require ${Math.ceil(5 * V)} bags of cement.
</div>
`;
});

formula134.addEventListener("click", () => {
  let V = volume.value;
  result.innerHTML = `
  <h3>Mixture Formula
<br/>
<span class="FormulaSpan">(1-3-4)</span></h3>
<div class="details">
${V}m<sup>3</sup> will require ${Math.ceil(1.28 * V)} tons of granite.
<br/>
${V}m<sup>3</sup> will require ${Math.ceil(0.96 * V)} tons of Sharp sand.
<br/>
${V}m<sup>3</sup> will require ${Math.ceil(4 * V)} bags of cement.
</div>
`;
});

formula136.addEventListener("click", () => {
  let V = volume.value;
  result.innerHTML = `
  <h3>Mixture Formula
<br/>
<span class="FormulaSpan">(1-3-6)</span></h3>
<div class="details">
${V}m<sup>3</sup> will require ${Math.ceil(1.44 * V)} tons of granite.
<br/>
${V}m<sup>3</sup> will require ${Math.ceil(0.72 * V)} tons of Sharp sand.
<br/>
${V}m<sup>3</sup> will require ${Math.ceil(3 * V)} bags of cement.
</div>
`;
});
