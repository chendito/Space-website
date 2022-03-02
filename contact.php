<?php
require 'includes/header.php';
?>
<div class="cont_luna">
    <img class="img__moon--lunita" src="src/img/image-moon.png" alt="lunita">    
</div>
<main>
    <form action="" class="form" id="formulario" spellcheck="false">
        <label>Name</label>
        <input type="text" id="name" autocomplete="off">
        <label>Email</label>
        <input type="email" id="email" autocomplete="off">
        <label>Message</label>
        <textarea class="textarea"></textarea>
        <input type="submit" value="Submit" id="submit">
    </form>
</main>
<?php
echo '<script src="src/js/check.js"></script>';
require 'includes/footer.php';