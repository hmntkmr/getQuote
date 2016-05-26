<?php


    $fullName = trim(strip_tags($_POST['fullName']));
    $email = trim(strip_tags($_POST['email']));
    $googlePlus = trim(strip_tags($_POST['gplus']));
    $websiteType = $_POST['wb-type'];
    $photo = $_POST['wb-photo'];
    $logo = $_POST['wb-logo'];
    $video = $_POST['wb-video'];
    $notes = $_POST['notes'];

    $subject = "Hello from Liquid Design";
    $recipient = "hemantkumar@me.com";
    $valid = false;



    if ( !empty($fullName) && !empty($email) && !empty($googlePlus) && !empty($websiteType) && !empty($photo) && !empty($logo) && !empty($video) && !empty($notes)) {

        if ( preg_match( "(multipart\alternative|content-type:|cc:|bcc:|boundary=)", $fullName ) ) {


            die( '<div class="error">Sorry but my email server does not like you.</div>' );
        }
        else if ( preg_match( "(multipart\alternative|content-type:|cc:|bcc:|boundary=)", $email ) )){
            
            die( '<div class="error">Sorry but my email server does not like you.</div>' );
        }
        
        else if ( preg_match( "(multipart\alternative|content-type:|cc:|bcc:|boundary=)", $googlePlus ) )){
            
            die( '<div class="error">Sorry but my email server does not like you.</div>' );
        }

        else {

            $valid = true;

            $headers = "From: " . strip_tags( $email ) . "\r\n";
            $headers .= "Reply-To: ". strip_tags( $email ) . "\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


            $msg = "
                        <table width=\"700\" border=\"1\" cellspacing=\"2\" cellpadding=\"0\">
                    
                                <tr><th colspan=\"2\"><img src=\"http://kuma0089.imm.edumedia.ca/mtm1526/hmntkmrfinal/img/Slider.jpg\"></th></tr>

                    
                    <tr>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">Name</th>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">$fname</th>
                    </tr>
                    <tr>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\" >Email</td>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">$mail</td>
                    </tr>
                    
                    <tr>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">Google+</td>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">$gplus</td>
                    </tr>
                    
                    <tr>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">Type</td>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">$wbtype</td>
                    </tr>
                    
                    <tr>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">Logo</td>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">$wblogo</td>
                    </tr>
                    
                    <tr>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">Video</td>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">$wbvideo</td>
                    </tr>
                    
                    <tr>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">Photos</td>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">$wbpic</td>
                    </tr>
                    
                    <tr>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">Notes</td>
                    <td style=\"font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;padding:15px 7px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;\">$notes</td>
                    </tr>
                    </table>";
        }
    }



    if($valid){

        mail($recipient, $subject, $msg, $headers);
        mail($email, $subject, $msg, $headers);
        echo "Thank You.";
    }

    else{

        echo"System error, try again later.";
    }
	
	
?>
