function togglePasswordVisibilityEYE(inputId, toggleIconId) {
    var input = document.getElementById(inputId);
    var toggleIcon = document.getElementById(toggleIconId);
    
      if (input.type === "password") {
        input.type = "text";
        toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
        
      } else {
        input.type = "password";
        toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
        // toggleIcon.classList.remove("fa-eye");
        // toggleIcon.classList.add("fa-eye-slash");

      }
    }