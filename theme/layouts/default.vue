<template>
	<Base :page="page">
		<div id="home">
			<slot name="default"></slot>

			<ul v-if="page.posts && page.posts.length > 0">
				<li
					v-for="post in page.posts"
					:key="post.attributes.permalink"
					class="post-item">
					<span class="post-meta">
						<span class="date">{{ formatDate(post.attributes.createdAt) }}</span>
						<span
							class="categories"
							v-for="category in post.attributes.categories"
							:key="category.toString()"
						>{{ category }}</span>
					</span>
					<saber-link class="post-link" :to="post.attributes.permalink">{{ post.attributes.title }}</saber-link>
				</liclass="post-item">
			</ul>

      <div class="pagination">
        <router-link class="prev" v-if="page.prevPost" :to="page.prevPost.permalink">
          <strong>{{ $siteConfig.pagination && $siteConfig.pagination.prevPost || '上一篇' }}</strong>
          <p>{{ page.prevPost.title }}</p>
        </router-link>
        <router-link class="next" v-if="page.nextPost" :to="page.nextPost.permalink">
          <strong>{{ $siteConfig.pagination && $siteConfig.pagination.nextPost || '下一篇' }}</strong>
          <p>{{ page.nextPost.title }}</p>
        </router-link>
      </div>
		</div>
	</Base>
</template>

<script>
import variables from "saber/variables";
import Base from "../components/Base.vue";

import formatDate from "../scripts/formatDate.js";

export default {
	props: ["page"],
	components: { Base },
	methods: {
		formatDate
	}
};
</script>

<style lang="scss" scoped>
@import '../styles/variable.scss';
@import '../styles/font.scss';

#home {
	width: 732px;
	// padding: 21px;
	// background: #FAFAFA;
}

#home ul {
	list-style: none;
	padding-left: 0;
	margin: 0;
}

.post-item {
	display: flex;
	flex-direction: column;
	margin-bottom: 12px;
}

.post-meta {
	margin-bottom: 12px;
	font-family: $aeon-font-latin-sans, $aeon-font-sans, sans-serif;
	font-size: 14px;
	font-weight: 300;
	font-style: italic;
	color: $dark-4;
	.date, .category {

	}
}

.post-link {
	position: relative;
	padding-left: 1em;
	font-size: 18px;
	font-weight: 600;
	&:before {
		content: "»";
		position: absolute;
		left: 0;
		line-height: 1em;
		color: $dark-4;
		// background: $black;
	}

	&:hover:before {
		color: $highlight;
	}
}

@media (prefers-color-scheme: dark) {
	#home {
		// background: black;
	}
}

</style>
