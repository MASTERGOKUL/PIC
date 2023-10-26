const buttons = document.querySelectorAll("button");
const mobileContainer = document.getElementById("small_nav_mobile_container");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
      mobileContainer.classList.add("small_active")
    
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
      mobileContainer.classList.add("animation_out")
      setTimeout(() => {
        mobileContainer.classList.remove("animation_out");
        mobileContainer.classList.remove("small_active");
      }, 300);
      
    }
  });
});
