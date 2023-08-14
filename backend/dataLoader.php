<?php
    $conn = new mysqli("sql300.hostingem.ru", "gnioo_34384072", "135313531", "gnioo_34384072_news");

    if ($conn == false)
        echo "Error: failed connection to database.";

    $sql = 'SELECT * FROM `news`';

    $request = mysqli_query($conn, $sql);

    //echo "{";

    while ($row = mysqli_fetch_array($request, MYSQLI_NUM)) {
       echo json_encode($row);
       echo "|";
    }

    //echo "}";

    //echo json_encode(mysqli_fetch_assoc($request));

    mysqli_close($conn);
?>