import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
	url: 'https://api-eu-west-2.hygraph.com/v2/clvi1wao5000001w69vx67znq/master',

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
