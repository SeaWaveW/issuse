import { defineConfig, ConfigEnv, UserConfig } from 'vite'
import NodePath from 'path'
import VitejsPluginVue2 from '@vitejs/plugin-vue2'
import UnpluginAutoImportVite from 'unplugin-auto-import/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
import UnpluginVueComponentsVite from 'unplugin-vue-components/vite'
import { ComponentResolver } from 'unplugin-vue-components/types'

export default defineConfig((config: ConfigEnv): UserConfig => {
	return {
		resolve: {
			alias: {
				'#': NodePath.resolve(__dirname, 'config'),
				'@': NodePath.resolve(__dirname, 'src'),
			},
		},
		plugins: [
			VitejsPluginVue2(),
			UnpluginAutoImportVite({
				imports: ['vue', 'vue-router/composables'],
				resolvers: [
					ElementUiResolver(),
				],
			}),
			UnpluginVueComponentsVite({
				resolvers: [
					ElementUiResolver(),
				],
				directives: true,
			}),
		],
	}
})