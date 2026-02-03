<script lang="ts">
</script>

<svelte:head>
	<title>Welcome to Our Platform</title>
	<meta name="description" content="Build amazing web experiences with SvelteKit" />
</svelte:head>

<!-- Header/Navigation -->
<header>
	<nav>
		<div class="logo">MyBrand</div>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/project-planner">Project Planner</a></li>
			<li><a href="#about">Maps</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
		<button class="cta-button">Get Started</button>
	</nav>
</header>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<h1>Build Amazing Web Experiences</h1>
		<p>Create fast, responsive web applications with SvelteKit</p>
		<div class="button-group">
			<button class="primary-button">Start Building</button>
			<button class="secondary-button">Learn More</button>
		</div>
	</div>
	<div class="hero-visual">
		<div class="gradient-circle"></div>
	</div>
</section>

<!-- Features Section -->
<section id="features" class="features">
	<h2>Why Choose Us?</h2>
	<div class="features-grid">
		<div class="feature-card">
			<div class="feature-icon">⚡</div>
			<h3>Lightning Fast</h3>
			<p>Optimized for performance with minimal overhead and instant load times.</p>
		</div>
		<div class="feature-card">
			<div class="feature-icon">🎨</div>
			<h3>Modern Design</h3>
			<p>Build beautiful, responsive interfaces with cutting-edge technologies.</p>
		</div>
		<div class="feature-card">
			<div class="feature-icon">🔒</div>
			<h3>Secure & Reliable</h3>
			<p>Enterprise-grade security with proven reliability and stability.</p>
		</div>
		<div class="feature-card">
			<div class="feature-icon">🚀</div>
			<h3>Easy Deployment</h3>
			<p>Deploy anywhere with one-click solutions and zero configuration.</p>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="about">
	<h2>About Our Platform</h2>
	<p>
		We're committed to providing developers with the best tools and frameworks to build incredible
		web applications. Our platform combines simplicity with power, allowing you to focus on what
		matters most—building great experiences for your users.
	</p>
</section>

<!-- Footer -->
<footer id="contact">
	<div class="footer-content">
		<div class="footer-section">
			<h4>Product</h4>
			<ul>
				<li><a href="#">Features</a></li>
				<li><a href="#">Pricing</a></li>
				<li><a href="#">Security</a></li>
			</ul>
		</div>
		<div class="footer-section">
			<h4>Company</h4>
			<ul>
				<li><a href="#">About</a></li>
				<li><a href="#">Blog</a></li>
				<li><a href="#">Careers</a></li>
			</ul>
		</div>
		<div class="footer-section">
			<h4>Contact</h4>
			<p>Email: hello@mybrand.com</p>
			<p>Phone: (555) 123-4567</p>
		</div>
	</div>
	<div class="footer-bottom">
		<p>&copy; 2026 MyBrand. All rights reserved.</p>
	</div>
</footer>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background: #ffffff;
		color: #333;
	}

	/* Header/Navigation */
	header {
		background: white;
		border-bottom: 1px solid #f0f0f0;
		position: sticky;
		top: 0;
		z-index: 100;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 2rem;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: bold;
		color: #0066ff;
	}

	nav ul {
		display: flex;
		gap: 2rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav a {
		text-decoration: none;
		color: #333;
		font-weight: 500;
		transition: color 0.3s ease;
	}

	nav a:hover {
		color: #0066ff;
	}

	.cta-button {
		background: #0066ff;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		cursor: pointer;
		font-weight: 600;
		transition: background 0.3s ease;
	}

	.cta-button:hover {
		background: #0052cc;
	}

	/* Hero Section */
	.hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem;
		align-items: center;
		gap: 4rem;
	}

	.hero-content h1 {
		font-size: 3.5rem;
		line-height: 1.2;
		margin: 0 0 1rem 0;
		color: #000;
	}

	.hero-content p {
		font-size: 1.25rem;
		color: #666;
		margin: 0 0 2rem 0;
		line-height: 1.6;
	}

	.button-group {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.primary-button,
	.secondary-button {
		padding: 1rem 2rem;
		border-radius: 4px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		border: none;
	}

	.primary-button {
		background: #0066ff;
		color: white;
	}

	.primary-button:hover {
		background: #0052cc;
		transform: translateY(-2px);
	}

	.secondary-button {
		background: transparent;
		color: #0066ff;
		border: 2px solid #0066ff;
	}

	.secondary-button:hover {
		background: #0066ff;
		color: white;
		transform: translateY(-2px);
	}

	.hero-visual {
		position: relative;
		height: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gradient-circle {
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border-radius: 50%;
		opacity: 0.8;
		animation: float 6s ease-in-out infinite;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	/* Features Section */
	.features {
		background: #f9f9f9;
		padding: 6rem 2rem;
	}

	.features h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 4rem;
		color: #000;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.feature-card {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		text-align: center;
	}

	.feature-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
	}

	.feature-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.feature-card h3 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
		color: #000;
	}

	.feature-card p {
		color: #666;
		line-height: 1.6;
		margin: 0;
	}

	/* About Section */
	.about {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem;
		text-align: center;
	}

	.about h2 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: #000;
	}

	.about p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #666;
		max-width: 600px;
		margin: 0 auto;
	}

	/* Footer */
	footer {
		background: #1a1a1a;
		color: white;
		padding: 4rem 2rem 2rem;
	}

	.footer-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto 2rem;
	}

	.footer-section h4 {
		margin-top: 0;
		margin-bottom: 1rem;
		color: #0066ff;
	}

	.footer-section ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-section a {
		color: #ccc;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.footer-section a:hover {
		color: #0066ff;
	}

	.footer-section li {
		margin-bottom: 0.5rem;
	}

	.footer-section p {
		margin: 0.5rem 0;
		color: #ccc;
	}

	.footer-bottom {
		border-top: 1px solid #333;
		max-width: 1200px;
		margin: 0 auto;
		padding-top: 2rem;
		text-align: center;
		color: #999;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		nav {
			flex-wrap: wrap;
			gap: 1rem;
		}

		nav ul {
			gap: 1rem;
			order: 3;
			flex-basis: 100%;
		}

		.hero {
			grid-template-columns: 1fr;
			padding: 4rem 2rem;
			gap: 2rem;
		}

		.hero-content h1 {
			font-size: 2.5rem;
		}

		.hero-visual {
			height: 300px;
		}

		.features {
			padding: 4rem 2rem;
		}

		.features h2 {
			font-size: 2rem;
		}

		.button-group {
			flex-direction: column;
		}

		.primary-button,
		.secondary-button {
			width: 100%;
		}
	}
</style>
