export default function Home() {
  return null;
}

export function getServerSideProps({ req }) {
  const redirects = {
    'github': 'https://github.com/maggie-j-liu',
    'gh': 'https://github.com/maggie-j-liu',
    'website': "https://maggieliu.dev"
  }
  const subdomain = req.headers.host.split('.')[0];
  if (!redirects[subdomain]) {
    return {
      notFound: true
    }
  }
  return {
    redirect: {
      destination: redirects[subdomain],
      permanent: false
    }
  }
}