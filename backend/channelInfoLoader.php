<?php
    $api_url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCnnXNLGRxQbZGBYUCy3_tNQ&key=AIzaSyDC1jnl64CVOPIlv0tcpSWve3UrwPWLUg0';
    echo file_get_contents($api_url);    
?>