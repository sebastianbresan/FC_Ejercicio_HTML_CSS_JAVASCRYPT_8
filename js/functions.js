function subirArchivo() {
  $("#imgPreview").click();
}
function borrarArchivo() {
	document.getElementById(`iframe`).src = "";
  }
jQuery(function () {
  $(".js-example-basic-multiple").select2();
});

jQuery(function () {
  $("#imgPreview").change(function () {
    var inputFile = this.files[0];
    var url = window.URL.createObjectURL(inputFile);
    document.getElementById(`iframe`).src = url;
  });
});

jQuery(function () {
  $("#imgPreview").change(function () {
    var inputFile = this.files[0];
    var url = window.URL.createObjectURL(inputFile);
    document.getElementById(`iframe`).src = url;
  });
});
