<script>
	import { onMount } from 'svelte';

	const carousel = [
		{
			title: 'Toma control de tu propia logística',
			description:
				'Con diferentes opciones de envío, tarifas transparentes, rastreo satelital y una plataforma sencilla de usar, comenzar a auto-gestionar tu logística con envios99 es fácil y seguro.​',
			image: '/assets/pic_slide02.webp'
		},
		{
			title: 'Soluciones únicas diseñadas a la medida',
			description:
				'Un servicio 100% personalizable que permite a nuestros clientes diseñar desde cero una solución logística que se adapte a sus necesidades sin importar de qué tan únicas sea tu industria.',
			image: '/assets/pic_slide03.webp'
		},
		{
			title: 'Fulfillment flexible e integral',
			description:
				'Nos conectamos a tu tienda, recolectamos, almacenamos, empacamos, entregamos y hasta cobramos contra entrega todas tus ventas de ecommerce.',
			image: '/assets/pic_slide04.webp'
		},
		{
			title: 'Cobra en efectivo contra entrega',
			description:
				'Crece tus ventas ofreciendo a tus clientes la posibilidad de pagar en efectivo sus compras al momento de entrega.',
			image: '/assets/pic_slide05.webp'
		},
		{
			title: 'La red de puntos de recolección y entrega más grande de México',
			description:
				'Nos aliamos con más de 2mil negocios locales a lo largo de México para ofrecer la red más robusta de puntos de recolección y entrega del país.',
			image: '/assets/pic_slide06.webp'
		},
		{
			title: 'Logística tan única como tu negocio',
			description:
				'Paquetería, almacenaje y hasta cobro contra entrega. Explora nuestro universo 99minutos, tu logística en un solo lugar.',
			image: '/assets/pic_slide01.webp'
		}
	];
	let currentIndex = 1;
	let carousel_active = carousel[0];

	function nextSlide() {
		if (currentIndex < carousel.length) {
			currentIndex++;
		} else {
			currentIndex = 1;
		}
		carousel_active = carousel[currentIndex - 1];
	}

	function changeCarousel(index) {
		console.log(index);
		carousel_active = carousel[index - 1];
		currentIndex = index;
	}

	onMount(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<body>
	<header>
		<nav>
			<img src="/assets/logo_99minutos.svg" alt="99minutos.com" class="logo">
			<ul class="menu">
				<li><a href="#">Servicios</a></li>
				<li><a href="#">Integraciones</a></li>
				<li><a href="#">Trabaja con nosotros</a></li>
				<li><a href="#">Tarifas</a></li>
				<li><a href="#">Centro de ayuda</a></li>
				<li><a href="#">Blog</a></li>
			</ul>
			<div class="actions">
				<button class="btn-outline">Rastrear envío</button>
				<button class="btn-outline">Ingresar</button>
				<button class="btn-primary">Crea tu cuenta</button>
			</div>
			<div id="three">
				<img src="/assets/treelines.svg" alt="Menú" />
			</div>
		</nav>
	</header>

	<section class="hero">
		<div class="hero-content">
			<div class="hero-image">
				<img
					src={carousel_active.image}
					alt="Personaje 1 99minutos"
					class="carousel-image active"
				/>
			</div>
			<div class="hero-text">
				<h1 id="hero-title">{carousel_active.title}</h1>
				<p id="hero-description">
					{carousel_active.description}
				</p>
			</div>
		</div>
		<div class="services">
			<button
				class="service-button"
				class:active={currentIndex == 1}
				data-index="0"
				on:click={() => {
					console.log('LOQUESEA');
					changeCarousel(1);
				}}><img src="/assets/envios99.svg" alt="envíos 99" /></button
			>
			<button
				class="service-button"
				class:active={currentIndex == 2}
				data-index="1"
				on:click={() => {
					changeCarousel(2);
				}}><img src="/assets/tailor99.svg" alt="tailor 99" /></button
			>
			<button
				class="service-button"
				class:active={currentIndex == 3}
				data-index="2"
				on:click={() => {
					changeCarousel(3);
				}}><img src="/assets/fulfill99.svg" alt="fulfill 99" /></button
			>
			<button
				class="service-button"
				class:active={currentIndex == 4}
				data-index="3"
				on:click={() => {
					changeCarousel(4);
				}}><img src="/assets/cash99.svg" alt="cash 99" /></button
			>
			<button
				class="service-button"
				class:active={currentIndex == 5}
				data-index="4"
				on:click={() => {
					changeCarousel(5);
				}}><img src="/assets/punto99.svg" alt="punto 99" /></button
			>
		</div>
		<section class="tech-experience">
			<div class="tech-content">
				<div class="tech-text">
					<h1>Accede a una <strong>nueva experiencia tecnológica</strong> en logística</h1>
					<p>
						Administra los datos de tus clientes y sus envíos; accede a reportes y métricas de tu
						negocio para tomar decisiones inteligentes.<br />
						Ten el control total de tus envíos y de tu operación mediante la automatización de gran parte
						del proceso logístico.
					</p>
				</div>
				<div class="tech-image">
					<img src="/assets/dashboard99.webp" alt="Nueva experiencia tecnológica en logística" />
				</div>
			</div>
		</section>
	</section>
</body>
