function verifyPassword() {
  var password = document.getElementById("textPwd").value;
  var confirmPassword = document.getElementById("textConfirm").value;
  var result = password.localCompare(confirmPassword);
  var lblError = document.getElementById("lblError");
  lblError.innerHTML =
    result == 0
      ? "<font color='green'>Password Verified</font>"
      : "<font color='red'>Password Mismatch</font>";
}
function verifyPattren() {
  var passwrod = document.getElementById("textPwd").value;
  var regEx = /[A-Z]{4,10}/;
  var lblPwdErr = document.getElementById("lblPwdError");
  lblPwdErr.innerHTML = passwrod.match(regEx)
    ? "<font color='green'>valid</font>"
    : "<font color='red'>Invalid</font>";
}
