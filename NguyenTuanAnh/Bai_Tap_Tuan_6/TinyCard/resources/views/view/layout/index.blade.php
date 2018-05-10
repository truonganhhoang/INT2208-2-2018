<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>TinyCard</title>
    <link rel="stylesheet" href="css/bootstrap/bootstrap.css">

    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://cdn.rawgit.com/nnattawat/flip/master/dist/jquery.flip.min.js"></script>
    <script src="js/bootstrap/bootstrap.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#card').flip();

            $("#card").click(function(event) {
                $("#btn-continue").toggleClass('d-none');
                $("#flip").toggleClass('d-none');
            });

            $("#btn-continue").click(function(event) {
                window.location.href = 'thehoc';
                return false;
            });
        });
    </script>
</head>
<body class="bg-light">

	@include('view.layout.menu')
	
	
	@yield('content')
</body>
</html>