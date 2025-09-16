// // config/env/production/plugins.ts

// export default ({ env }) => ({
//   upload: {
//     config: {
//       provider: 'aws-s3',
//       providerOptions: {
//         accessKeyId: env('AWS_ACCESS_KEY_ID'),
//         secretAccessKey: env('AWS_ACCESS_SECRET'),
//         region: env('AWS_REGION'),
//         params: {
//           Bucket: env('AWS_BUCKET_NAME'),
//         },
//       },
//     },
//   },
// });

// config/env/production/plugins.ts

export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        s3Options: {
          region: env('AWS_REGION'),
          params: {
            ACL: 'public-read', // This is recommended for most media libraries
            Bucket: env('AWS_BUCKET_NAME'),
          },
        },
      },
    },
  },
});