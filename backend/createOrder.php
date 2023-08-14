<?php
    $SENDGRID_API_KEY = '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';
    $NAME = $_POST["name"];
    $EMAIL = $_POST["email"];
    $product = $_POST["product"];

    $data = 
    '{
        "personalizations": 
        [
            {
                "to": 
                [
                    {
                        "email": "' . $EMAIL . '"
                    }
                ]
            }
        ],
        "from": 
        {
            "email": "noverlin1352@gmail.com"
        },
        "subject": "Hi, ' . $NAME . '. ",
        "content": 
        [
            {
                "type": "text/plain", 
                "value": "You ordered our product now. Your ticket was confirmed. Wait, our manager will contact you.\n\nYou ticket: ' . $product . '"
            }
        ]
    }';	
    
    $ch = curl_init('https://api.sendgrid.com/v3/mail/send');
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json', "Authorization: Bearer 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"));
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HEADER, false);
    $res1 = curl_exec($ch);
    curl_close($ch);

    $data = 
    '{
        "personalizations": 
        [
            {
                "to": 
                [
                    {
                        "email": "noverlin1352@gmail.com"
                    }
                ]
            }
        ],
        "from": 
        {
            "email": "noverlin1352@gmail.com"
        },
        "subject": "New order ticket on one product from NOVERLIN site...",
        "content": 
        [
            {
                "type": "text/plain", 
                "value": "You recieve new ticket with product...\n\nCustomer email: ' . $EMAIL . '\nProduct: ' . $product . '"
            }
        ]
    }';	
    
    $ch = curl_init('https://api.sendgrid.com/v3/mail/send');
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json', "Authorization: Bearer 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"));
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HEADER, false);
    $res2 = curl_exec($ch);
    curl_close($ch);
    
    if ($res1 == "" && $res2 == "")
    {
        $conn = new mysqli("sql300.hostingem.ru", "gnioo_34384072", "135313531", "gnioo_34384072_news");

        if ($conn == false)
            echo "Error: failed connection to database.";

        $sql = 'INSERT INTO `tickets`(`id`, `name`, `email`, `product`) VALUES (DEFAULT, "'.$NAME.'", "'.$EMAIL.'", "'.$product.'")';

        if (mysqli_query($conn, $sql)) 
        {
            echo "200";
        } 
        else 
        {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }

        //echo "{";

        // while ($row = mysqli_fetch_array($request, MYSQLI_NUM)) {
        // echo json_encode($row);
        // echo "|";
        // }

        //echo "}";

        //echo json_encode(mysqli_fetch_assoc($request));

        mysqli_close($conn);
    }
    else
    {                
        echo $res1;
        echo $res2;
    }    
?>