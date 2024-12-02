var poems = document.querySelector(".poem-list");

var poem_list = [
  {
    title: "நினைவுகள்",
    content: `காற்றில் மிதக்கும் இலைகள் போல
மனதில் மிதக்கும் நினைவுகள்
சில நேரம் மகிழ்ச்சி
சில நேரம் வலி
ஆனால் எல்லாமே அனுபவங்கள்...`,
    language: "tamil",
    date: "2024"
  },
  {
    title: "Dreams",
    content: `In the depths of night when stars align,
Dreams take flight on wings divine.
Through clouds of doubt and fears unknown,
Hope lights the path that leads us home.`,
    language: "english", 
    date: "2024"
  },
  // Add more poems here
];

for (let i = 0; i < poem_list.length; i++) {
  let html = `
    <div class="poem">
      <div class="poem-header">
        <h3 class="title">${poem_list[i].title}</h3>
        <span class="date">${poem_list[i].date}</span>
      </div>
      <div class="poem-content ${poem_list[i].language}">
        ${poem_list[i].content.split('\n').join('<br>')}
      </div>
    </div>
  `;
  poems.insertAdjacentHTML('beforeend', html);
}