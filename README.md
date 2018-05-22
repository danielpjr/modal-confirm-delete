# Modal Confirm Delete
Displays a modal window to confirm the deletion.

## Usage

1. Include jQuery, Bootstrap, Magnific-Popup and ModalConfirmDelete:

	```html
    <link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.css">
    <link rel="stylesheet" href="vendor/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="vendor/animate/animate.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/bootstrap.min.js"></script>
    <script src="vendor/magnific-popup/jquery.magnific-popup.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="modal-confirm-delete.js" type="text/javascript"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").dpjModalDelete({
		route: "http://url-to-delete.com/{ID}"
	});
	```


# Dependencies
[jQuery](https://github.com/jquery/jquery)

[Bootstrap](https://github.com/twbs/bootstrap)

[Magnific-Popup](https://github.com/dimsemenov/Magnific-Popup)