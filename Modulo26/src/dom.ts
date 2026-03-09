const myElement = document.getElementById("myElement") as HTMLElement;

myElement.innerHTML = "Hello, TypeScript!";

myElement.addEventListener("click", handleClick);

function handleClick(event: MouseEvent) {
  console.log("Element clicked!");
}