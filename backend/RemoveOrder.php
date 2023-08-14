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

        $sql = 'DELETE FROM `tickets` WHERE `id` = ' . $_POST['id'];

        $request = mysqli_query($conn, $sql);

        if ($request)
        {
            echo "Success";
        }
        else
        {
            echo "Error";
        }

        mysqli_close($conn);
    }  
?>