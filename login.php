<?php
session_start(); 

$servername = "localhost";
$db_username = "root";
$db_password = "";
$dbname = "regisztracio";

$conn = new mysqli($servername, $db_username, $db_password, $dbname);

if ($conn->connect_error) {
    die("Kapcsolódási hiba: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars(trim($_POST["username"]));
    $password = htmlspecialchars(trim($_POST["password"]));

    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();

        if (password_verify($password, $row["password"])) {
            $_SESSION["loggedin"] = true;
            $_SESSION["username"] = $row["username"];

            echo "<h2>Sikeres bejelentkezés!</h2>";
            echo "Üdv újra, " . htmlspecialchars($_SESSION["username"]) . "!";
        } else {
            echo "<h3>Hibás jelszó!</h3>";
        }
    } else {
        echo "<h3>Nem létezik ilyen felhasználó!</h3>";
    }

    $stmt->close();
}

$conn->close();
?>
