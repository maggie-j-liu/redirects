export default function Home() {
  return null;
}

export function getServerSideProps({ req }) {
  const redirects = {
    'github': 'https://github.com/maggie-j-liu',
    'gh': 'https://github.com/maggie-j-liu',
    'website': "https://maggieliu.dev"
  }
  console.log(req.headers.host);
  return {
    redirect: {
      destination: redirects[req.headers.host.split('.')[0]],
      permanent: false
    }
  }
}