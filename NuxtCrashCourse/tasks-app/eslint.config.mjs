// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: { max: 3 },
				multiline: { max: 1 },
			},
		],
		'@stylistic/no-extra-semicolon': 'error',
		'@stylistic/arrow-parens': ['error', 'as-needed'],
	},
});
