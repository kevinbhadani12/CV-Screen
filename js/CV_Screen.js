console.log("Project: CV Screener");

const people = [
  {
    name: "Kevin",
    age: 18,
    language: "Python",
    framwork: "Django",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    name: "Shyam",
    age: 19,
    language: "Python",
    framwork: "Flask",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "nihir",
    age: 20,
    language: "JavaScript",
    framwork: "Anguler js",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
  },
  {
    name: "Kvn",
    age: 19,
    language: "JavaScript",
    framwork: "React js",
    image: "https://randomuser.me/api/portraits/men/74.jpg",
  },
  {
    name: "Kevin Jadugar",
    age: 25,
    language: "Python",
    framwork: "Django, Flask",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Radhika",
    age: 22,
    language: "Fation Design",
    framwork: "All",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
  },
];

// console.log(people);
// CVIterator
function CVIterator(profiles) {
  nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

let candidates = CVIterator(people);

CV_Screen();
let next = document.getElementById("next");
next.addEventListener("click", CV_Screen);

function CV_Screen() {
  // console.log("click next button");
  let currentCandidate = candidates.next().value;

  if (currentCandidate != undefined) {
    let image = document.getElementById("image");
    image.innerHTML = `<img src="${currentCandidate.image} "  class="rounded mx-auto d-block my-4" alt="photo">`;
    let profile = document.getElementById("profile");
    profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item text-light text-center"  style="background-color: gray;"><b> Name:</b> ${currentCandidate.name}</li>
                            <li class="list-group-item"><b>Age:</b> ${currentCandidate.age}</li>
                            <li class="list-group-item"><b>Language:</b> ${currentCandidate.language}</li>
                            <li class="list-group-item"><b>Use in</b> ${currentCandidate.framwork}</li>
                        </ul>`;
  }
  else{
      alert("All profiles are finish. If you seen reapet then press ok button.");
      window.location.reload();
  }
}
