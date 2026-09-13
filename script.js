function toggleMenu() {
  const menu = document.getElementById("menuLateral");
  // Se estiver fechado, abre com largura de 250px. Se aberto, zera a largura.
  if (menu.style.width === "250px") {
    menu.style.width = "0";
  } else {
    menu.style.width = "250px";
  }
}