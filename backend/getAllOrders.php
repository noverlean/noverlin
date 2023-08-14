<?php
    if ($_POST['code'] != "admin")
    {
        echo "Error: code isn't correct";
    }
    else
    {
        $conn = new mysqli("sql300.hostingem.ru", "gnioo_34384072", "135313531", "gnioo_34384072_news");

        if ($conn == false)
            echo "Error: failed connection to database.";

        $sql = 'SELECT * FROM `tickets`';

        $request = mysqli_query($conn, $sql);

        echo json_encode(mysqli_fetch_all($request, MYSQLI_ASSOC));

        mysqli_close($conn);
    }  
?>