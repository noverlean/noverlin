<?php
    $SENDGRID_API_KEY = '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';
    $NAME = $_POST["name"];
    $EMAIL = $_POST["email"];

    $random = mt_rand(1000, 9999);

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
        "subject": "Hi, ' . $NAME . '. Enter security code to create ticket panel...",
        "content": 
        [
            {
                "type": "text/plain", 
                "value": "Your security code: '.$random.'"
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
    $res = curl_exec($ch);
    curl_close($ch);
    
    if ($res == "")
    {
        echo $random;
    }
    else
    {
        echo $res;
    }    
?>