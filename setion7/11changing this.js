//changing this
function playVideo() {
  console.log(this);
}
playVideo.call({ name: "sriram" });
playVideo.call({ age: 26 });
playVideo.apply({ name: "srk" });
playVideo.bind({ name: "chaitanya" })();

//exercise
const video = {
  title: "1",
  tags: ["a", "b", "c"],
  showTags() {
    console.log(this.tags);
    this.tags.forEach((tagged) => {
      console.log(this.title, tagged);
    });
  },
};
video.showTags();
