import { HoudiniClient } from '$houdini';
import dotenv from 'dotenv';

dotenv.config();

export default new HoudiniClient({
	url: process.env.PUBLIC_GRAPHQL_API,

	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	// fetchParams({ session }) {
	//     return {
	//         headers: {
	//             Authentication: `Bearer ${session.token}`,
	//         }
	//     }
	// }
});
