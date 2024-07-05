<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tooltip Example</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <style>
        .tooltip-inner.red-tooltip {
            background-color: red;
            color: white;
        }
        .tooltip-inner.light-green-tooltip {
            background-color: lightgreen;
            color: black;
        }
        .tooltip-inner.dark-green-tooltip {
            background-color: darkgreen;
            color: white;
        }
    </style>
</head>
<body>
    <input type="password" id="txtnewpassword" title="" data-toggle="tooltip" data-placement="top">
    <script>
        $(document).ready(function(){
            function showTooltip(message, colorClass) {
                var $tooltip = $("#txtnewpassword");
                $tooltip.attr('data-original-title', message).tooltip('hide').attr('data-original-title', message).tooltip('show');

                // Apply the color class to the tooltip inner
                setTimeout(function() {
                    $('.tooltip-inner').removeClass('red-tooltip light-green-tooltip dark-green-tooltip').addClass(colorClass);
                }, 100); // Use setTimeout to ensure the tooltip is rendered before applying the class
            }

            function evaluatePasswordStrength(password) {
                if (password.length < 6) {
                    return { message: 'Weak password....', colorClass: 'red-tooltip' };
                } else if (password.length < 10) {
                    return { message: 'Good password....', colorClass: 'light-green-tooltip' };
                } else {
                    return { message: 'Strong password....', colorClass: 'dark-green-tooltip' };
                }
            }

            $("#txtnewpassword").on('keyup', function() {
                var password = $(this).val();
                var strength = evaluatePasswordStrength(password);
                showTooltip(strength.message, strength.colorClass);
            });

            // Initialize the tooltip
            $('#txtnewpassword').tooltip();
        });
    </script>
</body>
</html>
