export default function Home() {
  return null;
}

export function getServerSideProps({ req }) {
  const redirects = {
    'github': 'https://github.com/maggie-j-liu',
    'website': "https://maggieliu.dev"
  }
  console.log(req.headers.host);
  return {
    redirect: {
      destination: redirects[req.headers.host],
      permanent: false
    }
  }
}