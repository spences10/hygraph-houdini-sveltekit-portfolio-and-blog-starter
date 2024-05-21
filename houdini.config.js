/// <references types="houdini-svelte">
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: process.env.PUBLIC_GRAPHQL_API,
	},
	plugins: {
		'houdini-svelte': {},
	},
};

export default config;
