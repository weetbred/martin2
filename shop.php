<?php
	$cMetaDesc = '';
	$cMetaKW = '';
	$cPageTitle = 'Home';
	$cSEOTitle = '';
	$layout = 'home';
?>

<div class="wood-bg">

<?php
	include("header.php");
?>

<div class="shop-pg">
	<div class="row">
		<div class="large-12 columns">
			<div class="main-container"> <!-- MAIN CONTAINER FOR CONTENT -->
				<div class="row">
					<div class="large-10 columns right mod-pad">
						<div class="divider-bar">   <!-- TITLE BAR FOR SUBPAGES -->
							<h1>Shop</h1>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="large-2 columns hide-for-small"> <!-- SIDE BAR NAVIGATION -->
						<?php
							include("sidebar.php");
						?>
					</div> <!-- SIDE BAR NAVIGATION END -->
					
					<div class="large-10 columns">
						<div class="row">
							<div class="selection-wrap">
								<div class="large-4 columns">
								<a href="shop-list.php"><img class="about-img" src="img/about-img.jpg" />
									<h3>Shirts</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis lorem ut rhoncus tempor inceptos himenaeos. </p>
								</a>
								</div>
								<div class="large-4 columns">
								<a href="shop-list.php"><img class="about-img" src="img/about-img.jpg" />
									<h3>Hats and Visors</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis lorem ut rhoncus tempor inceptos himenaeos. </p>
								</a>
								</div>
								<div class="large-4 columns">
								<a href="shop-list.php"><img class="about-img" src="img/about-img.jpg" />
									<h3>Accessories</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis lorem ut rhoncus tempor inceptos himenaeos. </p>
								</a>
								</div>
							</div>
						</div>
					</div>
					<div class="large-2 columns show-for-small"> <!-- SIDE BAR NAVIGATION -->
						<?php
							include("sidebar.php");
						?>
					</div> <!-- SIDE BAR NAVIGATION END -->
				</div>
			</div> <!-- MAIN CONTAINER FOR CONTENT -->
		</div>
	</div> <!-- ROW END -->
</div>

<?php
	include("footer.php");
?>

</div> <!-- WOOD BACKGROUND END -->