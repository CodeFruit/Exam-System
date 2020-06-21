function signin() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
}

const button = document.querySelector("button");
button?.addEventListener("click", handleClick);

function handleClick(this: HTMLElement) {
    console.log("Clicked! test");
    this.removeEventListener("click", handleClick);
}