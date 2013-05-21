sendToWindow
============

JQuery plugin aims to submit form data in a new topup window

Example
-------

    <form method="post" id="topup_form">
      <input type="text" name="some_data">
		<input type="submit" value="submit">
    </form>

...

	<script>
		$(function(){
			$("#topup_form").sendToWindow();
		});
	</script>

Options
-------
You can override ` window.open() ` method native options. 

Default options:

    $("#topup_form").sendToWindow({
    	scrollbars: 'no',
    	menubar: 'no',
    	height: 400,
    	width: 800,
    	resizable: 'yes',
    	toolbar: 'no',
    	status: 'yes'
    });
