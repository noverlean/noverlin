<?php
    $urls = $_POST["urls"];
    
    echo "[";
    for ($i = 0; $i < count($urls) - 1; $i++) {
        echo file_get_contents('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=' . $urls[$i] . '&key=AIzaSyDC1jnl64CVOPIlv0tcpSWve3UrwPWLUg0');
        echo ",";
    }
    echo file_get_contents('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=' . $urls[count($urls) - 1] . '&key=AIzaSyDC1jnl64CVOPIlv0tcpSWve3UrwPWLUg0');
    echo "]";    
?>