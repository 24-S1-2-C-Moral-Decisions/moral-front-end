This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### run in docker

1. First, install [docker](https://docs.docker.com/get-docker/)
2. build and run docker container

```bash
# docker build -build-arg API_URL=http://localhost:8000 -t moral-front-end .
docker build -build-arg FRONTEND_PORT=3000 -t moral-front-end .
docker run -p 3000:3000 moral-front-end
```

### run in local

1. First, install [node.js](https://nodejs.org/en) and npm (npm will automatically installed with node.js).

​	Add node and npm to path.


2. Try the following command to see if you've installed node and npm correctly.

```bas
node --version
npm --v
```

3. Run the following command to install the dependencies:

```ba
npm install
```

4. Run server at development mode:

```bash
npm run dev             
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `page.tsx` or `layout.tsx` in app folder. The page auto-updates as you edit the file.



## Project Structure

`/app` : Routing folder, this is where you organize routes and degisn the layout for each route.

`/components`: Store reusable UI components that can be used throughout the application

`/lib`: Store reusable utility functions, custom hooks, and other non-component modules that supports the main application functionality.

`/public`: Store static assets such as images, fonts, and static files.

`/package.json`: Node.js configuration file.



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind](https://tailwindcss.com/docs/installation) - a utility-first CSS framework packed with classes

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) 