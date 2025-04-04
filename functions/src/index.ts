/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
// import * as functions from "firebase-functions";
import {beforeUserSignedIn} from  "firebase-functions/v2/identity";


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const onsignin = beforeUserSignedIn((u)=>{
    console.log('before signin')
    return {

        "sessionClaims": {
            "https://hasura.io/jwt/claims": {
                "x-hasura-user-id": u.auth?.uid,
                "x-hasura-default-role": 'user',
                "x-hasura-allowed-roles": ['user'],
            }
        }
    }
})

// export const onsignin = functions
//     // .runWith({secrets: demo_env.concat(prod_env).concat(staging_env),})
//     .auth.user().beforeSignIn(async (u) => {
//
//             return {
//                 sessionClaims: {
//                     "https://hasura.io/jwt/claims": {
//                         "x-hasura-user-id": u.uid,
//                         "x-hasura-default-role": 'user',
//                         "x-hasura-allowed-roles": ['user'],
//                     }
//                 }
//             }
//
//         //     // switch (u.tenantId) {
//         //     //     case 'demo-3454m':
//         //     //         // case 'demo-client-wovev':
//         //     //         return getSdk(new GraphQLClient(process.env.DEV_HASURA_GRAPHQL_ENDPOINT, {
//         //     //             headers: {
//         //     //                 'x-hasura-admin-secret': process.env.DEV_HASURA_ADMIN_SECRET
//         //     //             }
//         //     //         }));
//         //     //
//         //     //     case 'release-nwoen':
//         //     //         // case 'release-client-w9cky':
//         //     //         return getSdk(new GraphQLClient(process.env.STAGING_HASURA_GRAPHQL_ENDPOINT, {
//         //     //             headers: {
//         //     //                 'x-hasura-admin-secret': process.env.STAGING_HASURA_ADMIN_SECRET
//         //     //             }
//         //     //         }));
//         //     //
//         //     //
//         //     //     case 'release-client-w9cky':
//         //     //
//         //     //
//         //     //     default:
//         //     //         return getSdk(new GraphQLClient(process.env.PROD_HASURA_GRAPHQL_ENDPOINT, {
//         //     //             headers: {
//         //     //                 'x-hasura-admin-secret': process.env.PROD_HASURA_ADMIN_SECRET
//         //     //             }
//         //     //         }));
//         //     // }
//         //
//         //     // return null
//         //
//         //
//         //
//         // })()
//         //
//         //
//         // const broker = await client.findBroker({where: {email: {_eq: u.email}, _not:{isDeactivated: {_eq: true}}}}).then(v => v.Broker[0]);
//         //
//         // if (broker) {
//         //
//         // }
//         //
//         //
//         // const clt = await client.FindClientAuth({
//         //     where: {
//         //         email: {_eq: u.email},
//         //         is_enabled: {_eq: true}
//         //     }
//         // }).then(c => c.client_auth_request);
//         //
//         //
//         // if (clt.length > 0) {
//         //     return {
//         //         sessionClaims: {
//         //             "https://hasura.io/jwt/claims": {
//         //                 "x-hasura-user-id": u.uid,
//         //                 "x-hasura-default-role": 'CLIENT',
//         //                 "x-hasura-allowed-roles": ['CLIENT'],
//         //             }
//         //         }
//         //     }
//         // }
//         //
//         //
//         // // throw new functions.auth.HttpsError('permission-denied', `Unauthorized email "${u.email}"`);
//         //
//         // // return null;
//
//     })

