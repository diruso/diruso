<template>
	<header id="header">
		<EDC>
			
		</EDC>
		<!-- 导航栏 -->
		<nav id="nav">
			<div class="nav-info">
				<!-- 站点标题 -->
				<div class="site">
					<div class="site-logo" v-if="$siteConfig.logo">
						<img :src="$siteConfig.logo" />
					</div>
					<saber-link class="site-title" rel="author" to="/">
						<!-- <h1>{{ siteTitle }}</h1> -->
					</saber-link>
				</div>

				<!-- 描述 -->
				<!-- <p class="description">{{ description }}</p> -->
			</div>

			<div class="nav-bar">
				<ul>
					<li v-for="(item, i) in $themeConfig.nav" :key="i">
						<saber-link class="page-link" :to="item.link">{{ item.text }}</saber-link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
import EDC from '../components/EDC';
import defaults from "../constants/defaults.yml";

export default {

	props: {
		siteTitle: {
			type: String,
			default: defaults.site.title
		},
		description: {
			type: String,
			default: defaults.site.description
		}
	},
	components: { EDC }
};
</script>

<style lang="scss" scoped>
@import "../styles/variable.scss";
@import "../styles/font.scss";

header#header {
  margin-bottom: 50px;
  padding-top: 21px;
}

nav#nav {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	// width: 732px;
	width: 960px;
	// margin: 0 auto 0 calc((100vw - 960px) / 2);
	margin: 0 auto;
	text-align: center;
}

.site {
	display: flex;
  justify-content: center;
	align-items: center;
	
}

.site-logo {
	float: left;
	margin-right: 12px;
	// display: block;
	img {
		display: inline-block;
		height: 48px;
	}
}

.site-title {
	text-decoration: none;
	letter-spacing: 0.05em;
	color: $black;

	&:hover,
	&:active {
		color: $highlight;
		text-decoration: underline;
  }
  
  h1 {
    margin: 0;
    font-size: 42px;
    font-weight: 900;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  }
}

.nav-bar ul {
	display: flex;
	padding: 0;
	list-style: none;
	li {
		margin: 0 5px;
		a {
			text-decoration: none;
			font-weight: 600;
		}
	}
}

@media (prefers-color-scheme: dark) {
  .site-title {
    text-decoration: none;
    text-shadow: none;
    color: $gray;
  }
}


</style>
