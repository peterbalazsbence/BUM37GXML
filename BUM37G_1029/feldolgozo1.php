<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<h2>Űrlap adatai:</h2>";

    $nev = trim($_POST["nev"]);
    $pin = trim($_POST["pin"]);
    $fav_fruit = $_POST["fav_fruit"] ?? "";
    $age = $_POST["age"] ?? "";
    $feet_size = $_POST["feet_size"] ?? "";
    $confidence = $_POST["confidence"] ?? "";

    $hibak = [];

    if (empty($nev)) {
        $hibak[] = "A név megadása kötelező!";
    }

    if (empty($pin)) {
        $hibak[] = "A PIN megadása kötelező!";
    } elseif (!is_numeric($pin)) {
        $hibak[] = "A PIN csak szám lehet!";
    }

    if (!empty($hibak)) {
        echo "<h3>Hibák:</h3><ul>";
        foreach ($hibak as $hiba) {
            echo "<li>$hiba</li>";
        }
        echo "</ul>";
    } else {
        echo "<table border='1' cellpadding='5'>";
        echo "<tr><th>Mező</th><th>Érték</th></tr>";
        echo "<tr><td>Név</td><td>$nev</td></tr>";
        echo "<tr><td>PIN</td><td>$pin</td></tr>";
        echo "<tr><td>Kedvenc gyümölcs</td><td>$fav_fruit</td></tr>";
        echo "<tr><td>Életkor</td><td>$age</td></tr>";
        echo "<tr><td>Lábméret</td><td>$feet_size</td></tr>";
        echo "<tr><td>Önbizalom</td><td>$confidence</td></tr>";
        echo "</table>";

        $sor = "$nev; $pin; $fav_fruit; $age; $feet_size; $confidence\n";
        file_put_contents("Neptunkod_adatok.txt", $sor, FILE_APPEND);

        echo "<p><strong>Az adatok elmentve a Neptunkod_adatok.txt fájlba.</strong></p>";
    }
} else {
    echo "<h2><strong>Űrlap nem lett beküldve!</strong></h2>";
}
?>
<a href="bum37g_urlap.html"><strong>Vissza az űrlapra</strong></a>
</body>
