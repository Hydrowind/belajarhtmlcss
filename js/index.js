const TIMELINE_DATA = [
  {
    week: 1,
    title: "Responsive Website",
    description:
      "Pada minggu pertama, kalian akan mempelajari HTML, CSS, dan Bootstrap untuk membuat sebuah website yang responsive.",
  },
  {
    week: 2,
    title: "JavaScript & Version Control",
    description:
      "Pada minggu kedua, kalian akan mempelajari JavaScript & melakukan version control dengan bantuan Git dan GitHub.",
  },
  {
    week: 3,
    title: "Node.js & Express.js",
    description:
      "Selanjutnya, kalian akan membangun sebuah RESTful API dengan bantuan Node.js dan Express.js, dan juga menggunakan database MySQL.",
  },
  {
    week: 4,
    title: "Basic Vue.js",
    description:
      "Kalian akan mempelajari dasar-dasar dari Vue, memahami komponen-komponen Vue, dan membuat sebuah website dengan Vue.",
  },
  {
    week: 5,
    title: "Backend Lanjutan",
    description:
      "Kalian akan belajar menambahkan JWT, Redis dan upload file pada RESTful API yang sebelumnya telah kalian buat.",
  },
  {
    week: 6,
    title: "Vue.js Lanjutan",
    description:
      "Pada minggu keenam ini, kalian akan memperdalam Vue dengan mempelajari Localstorage, Vuex, Mixins, dan lain-lain.",
  },
  {
    week: 7,
    title: "Project Team",
    description:
      "Kalian akan dibagi ke dalam beberapa kelompok dan diberikan tugas untuk membuat sebuah aplikasi website dengan menggunakan SCRUM dan mengaplikasikan semua yang telah dipelajari sebelumnya.",
  },
  {
    week: 8,
    title: "Realtime",
    description:
      "Kalian akan membuat aplikasi website yang menerapkan realtime connection di dalamnya dengan menggunakan Firebase.",
  },
  {
    week: 9,
    title: "Final Project Team",
    description:
      "Kalian akan kembali dibagi ke dalam beberapa kelompok, diberi tantangan untuk membuat aplikasi baru dengan ide bisnis di dalamnya, dan juga dengan menerapkan semua yang telah dipelajari",
  },
];

function createTimelineDOM(week, title, description) {
  let timelineElement = document.createElement("div");
  timelineElement.className = "timeline";

  let div = document.createElement("div");
  let el;
  el = document.createElement("h3");
  el.innerHTML = week;
  div.appendChild(el);
  timelineElement.appendChild(div);

  div = document.createElement("div");
  el = document.createElement("h4");
  el.innerHTML = title;
  div.appendChild(el);

  el = document.createElement("p");
  el.innerHTML = description;
  div.appendChild(el);

  timelineElement.appendChild(div);
  return timelineElement;
}

function getName(param) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((result) => console.log(result));
}

getName();

let timelineEl = document.querySelector("#timeline-panel");
for (let data of TIMELINE_DATA) {
  let tl = createTimelineDOM(data.week, data.title, data.description);
  timelineEl.appendChild(tl);
}

function showAlert() {
  alert("Hello World");
}

document.querySelector("#daftarskrg1").addEventListener("click", showAlert);
