const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const scale = document.querySelector('.scale');
const btn2 = document.querySelector('.btn2');

function myFunction () {
  const unable = document.getElementById('input1').disabled;
  document.getElementById('input2').disabled;
  console.log(unable)
}

btn2.onclick = function getOption () {
  const x = (input1.value).split(',');
  const weight1 = parseInt(x[0])
  const weight2 = parseInt(x[1])

  const n = (input2.value).split(',');
  console.log(n);

  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (weight1 === weight2) {
        scale.innerHTML = 'Balance';
      } else if (weight1 + parseInt(n[2]) === weight2 + parseInt(n[1])) {
        scale.innerHTML = 'Balance';
      } else {
        scale.innerHTML = 'Scale Imbalanced';
      }
    }
  }
}
