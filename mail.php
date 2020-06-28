<?php

$msg = "Name : {$_GET['name']} \n Email : {$_GET['email']} \n Subject : {$_GET['subject']}";

$headers = 'From: <vineelsai5439@gmail.com>';
#    mail("vineelsai5439@gmail.com", "Contact Me", "$msg", $headers);
    ?>
<html>
    <head>
        <title>Contact</title>
        <style>
           .button {
                background-color: #4CAF50; /* Green */
                border: none;
                color: white;
                padding: 16px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                transition-duration: 0.4s;
                cursor: pointer;
            }

            .button3 {
                background-color: white; 
                color: black; 
                border: 2px solid #f44336;
            }

            .button3:hover {
                background-color: #f44336;
                color: white;
            }
        </style>
    </head>
    <body>
        <div style="width:100%;height:100%;">
            <div style="text-align: center;padding-top: 300px;">
                <p>Email Sent!</p>
                <button class="button button3" onclick="">Go Back</button>
            </div>
        </div>
    </body>
</html>