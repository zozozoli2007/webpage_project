const checkAge = document.getElementById("register");

const birth = document.getElementById("date");
const birthYear = new Date(birth.value).getFullYear();
const year = new Date().getFullYear();
const age = year - birthYear

checkAge.addEventListener("click", () => {
    if ( age > 99 ) {
        
    }
})
