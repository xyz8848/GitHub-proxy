# GitHub Proxy
> GitHub proxy based on Cloudflare Workers

## Demo

[https://gh.dlproxy.eu.org/](https://gh.dlproxy.eu.org/)

## How to deploy
1. Go to [Cloudflare Workers](https://workers.cloudflare.com)
2. Click `Start building`
3. Register or log in to your account
4. Click `Create a Worker`
5. Copy [index.js](index.js) to the left code box，`Save and deploy`

## Correct input
- https://github.com/{username}/{repositories}/archive/{file}
- https://github.com/{username}/{repositories}/releases/download/{tag}/{file}
- https://github.com/{username}/{repositories}/blob/{branches}/{file}

## Notice
Cloudflare Workers only provide 100000 requests per day

## Thanks for...
[https://github.com/hunshcn/gh-proxy](https://github.com/hunshcn/gh-proxy)
