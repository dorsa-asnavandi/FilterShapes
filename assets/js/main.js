$(document).ready(function () {
  $(".click").click(function () {
    const $this = $(this);
    const shape = $this.data("shape");
    const color = $this.data("color");

    $(`.shapes [data-shape!='${shape}']`).parent(".shape-parent-down").hide();
    $(`.shapes [data-shape='${shape}']`).parent(".shape-parent-down").show();

    if (color === "red") {
      $(`.shapes [data-color!='${color}']`).parent(".shape-parent-down").hide();
      $(`.shapes [data-color='${color}']`).parent(".shape-parent-down").show();
    }

    if (shape === "all") {
      $(".shapes *").show();
    }
  });
});
