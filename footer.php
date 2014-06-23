<footer>
	<div class="row">
		<div class="footer-container">
			<div class="large-10 small-6 columns">
				<p>Copyright &copy; <?php echo date("Y");?></p>
			</div>
			<div class="large-2 small-6 columns">
				<img src="img/zeekee-slug-white-2011.png" alt="zeekee-slug-white-2014" />
			</div>
		</div>
	</div>
</footer>


<!-- SCROLL -->
<script>
	  $(document).ready(function(){
	  $('a[href*=#]').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	    && location.hostname == this.hostname) {
	      var $target = $(this.hash);
	      $target = $target.length && $target
	      || $('[name=' + this.hash.slice(1) +']');
	      if ($target.length) {
	        var targetOffset = $target.offset().top;
	        $('html,body')
	        .animate({scrollTop: targetOffset}, 1000);
	       return false;
	      }
	    }
	  });
	});
</script>
<!-- SCROLL END -->
  
<script src="bower_components/jquery/jquery.js"></script>
<script src="bower_components/foundation/js/foundation.min.js"></script>
<script src="js/diplo-slideshow.js"></script> <!-- BACKGROUND OVERLAY--backstretch -->
<script src="js/app.js"></script>
<script src="js/jquery-scrollto.js"></script>



</body>
</html>