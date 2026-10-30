var e=`To use an existing Clerk app, run:
npx clerk@latest link
npx clerk@latest env pull

For production keys, run:
npx clerk@latest env pull --instance prod`,t=`Or copy keys from https://dashboard.clerk.com/~/api-keys into your .env file.`,n=`To create a new Clerk app, run:
npx clerk@latest init

'npx clerk@latest init' does not need a Clerk account and writes temporary dev keys.

${e}

${t}`,r=`${e}

${t}`;export{n,r as t};